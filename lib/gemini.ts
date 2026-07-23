import { GoogleGenAI } from '@google/genai';
import { buildSystemInstruction } from '@/lib/chatbot-prompt';

export type ChatHistoryItem = {
  role: 'user' | 'assistant';
  content: string;
};

const MODEL_NAME = 'gemini-flash-lite-latest';

function toContents(message: string, history: ChatHistoryItem[]) {
  return [
    ...history.map((item) => ({
      role: item.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: item.content }],
    })),
    {
      role: 'user',
      parts: [{ text: message }],
    },
  ];
}

export async function generatePortfolioReply(
  message: string,
  history: ChatHistoryItem[] = [],
) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error('GEMINI_API_KEY_MISSING');
  }

  const ai = new GoogleGenAI({ apiKey });
  const systemInstruction = buildSystemInstruction();
  const contents = toContents(message, history);

  const response = await ai.models.generateContent({
    model: MODEL_NAME,
    contents,
    config: {
      systemInstruction,
      temperature: 0.2,
      maxOutputTokens: 500,
    },
  });

  const text = response.text?.trim();

  if (!text) {
    throw new Error('GEMINI_EMPTY_RESPONSE');
  }

  return text;
}
