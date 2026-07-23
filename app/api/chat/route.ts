import { generatePortfolioReply, type ChatHistoryItem } from '@/lib/gemini';

const MAX_MESSAGE_LENGTH = 500;
const MAX_HISTORY_ITEMS = 6;
const MAX_HISTORY_CONTENT_LENGTH = 800;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 10;

type RateLimitRecord = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitRecord>();

function jsonResponse(body: { reply?: string; error?: string }, status: number) {
  return Response.json(body, { status });
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');

  return forwardedFor?.split(',')[0]?.trim() || realIp || 'unknown';
}

function checkRateLimit(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return true;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  current.count += 1;
  return true;
}

function sanitizeMessage(value: unknown) {
  if (typeof value !== 'string') {
    return null;
  }

  return value.replace(/\s+/g, ' ').trim();
}

function sanitizeHistory(value: unknown): ChatHistoryItem[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((item): item is ChatHistoryItem => {
      if (!item || typeof item !== 'object') {
        return false;
      }

      const candidate = item as Record<string, unknown>;
      return (
        (candidate.role === 'user' || candidate.role === 'assistant') &&
        typeof candidate.content === 'string'
      );
    })
    .slice(-MAX_HISTORY_ITEMS)
    .map((item) => ({
      role: item.role,
      content: item.content.replace(/\s+/g, ' ').trim().slice(0, MAX_HISTORY_CONTENT_LENGTH),
    }))
    .filter((item) => item.content.length > 0);
}

export async function POST(request: Request) {
  const contentType = request.headers.get('content-type') || '';

  if (!contentType.toLowerCase().includes('application/json')) {
    return jsonResponse({ error: 'Content-Type harus application/json.' }, 400);
  }

  if (!checkRateLimit(getClientIp(request))) {
    return jsonResponse(
      { error: 'Terlalu banyak permintaan. Silakan tunggu sebentar.' },
      429,
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: 'Format JSON tidak valid.' }, 400);
  }

  if (!body || typeof body !== 'object') {
    return jsonResponse({ error: 'Request tidak valid.' }, 400);
  }

  const payload = body as Record<string, unknown>;
  const message = sanitizeMessage(payload.message);

  if (!message) {
    return jsonResponse({ error: 'Pesan tidak boleh kosong.' }, 400);
  }

  if (message.length > MAX_MESSAGE_LENGTH) {
    return jsonResponse(
      { error: 'Pertanyaan terlalu panjang. Maksimal 500 karakter.' },
      400,
    );
  }

  try {
    const reply = await generatePortfolioReply(
      message,
      sanitizeHistory(payload.history),
    );

    return jsonResponse({ reply }, 200);
  } catch (error) {
    if (error instanceof Error && error.message === 'GEMINI_API_KEY_MISSING') {
      return jsonResponse(
        {
          error:
            'Layanan chatbot sedang tidak tersedia. Silakan coba kembali nanti.',
        },
        500,
      );
    }

    return jsonResponse(
      { error: 'Chatbot sedang mengalami kendala. Silakan coba kembali.' },
      500,
    );
  }
}

