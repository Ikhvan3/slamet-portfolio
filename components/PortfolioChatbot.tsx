'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, Send, Trash2, X, RotateCcw } from 'lucide-react';
import ChatMessage, { type PortfolioChatMessage } from '@/components/ChatMessage';
import ChatSuggestions from '@/components/ChatSuggestions';
import { chatbotOpeningMessage, chatbotSuggestions } from '@/data/chatbot';

const MAX_MESSAGE_LENGTH = 500;
const CLIENT_COOLDOWN_MS = 1200;

function createMessage(role: PortfolioChatMessage['role'], content: string) {
  return {
    id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2)}`,
    role,
    content,
  };
}

export default function PortfolioChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<PortfolioChatMessage[]>(() => [
    createMessage('assistant', chatbotOpeningMessage),
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [lastFailedMessage, setLastFailedMessage] = useState('');
  const [lastSentAt, setLastSentAt] = useState(0);

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const hasConversationStarted = messages.length > 1;
  const trimmedInput = input.trim();
  const isSendDisabled =
    isLoading || trimmedInput.length === 0 || trimmedInput.length > MAX_MESSAGE_LENGTH;

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, isLoading, error]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  async function sendMessage(
    messageText: string,
    options: { appendUser?: boolean; bypassCooldown?: boolean } = {},
  ) {
    const shouldAppendUser = options.appendUser ?? true;
    const message = messageText.replace(/\s+/g, ' ').trim();

    if (!message) {
      setError('Pesan tidak boleh kosong.');
      return;
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      setError('Pertanyaan terlalu panjang. Maksimal 500 karakter.');
      return;
    }

    const now = Date.now();
    if (!options.bypassCooldown && now - lastSentAt < CLIENT_COOLDOWN_MS) {
      setError('Silakan tunggu sebentar sebelum mengirim lagi.');
      return;
    }

    setLastSentAt(now);
    setError('');
    setLastFailedMessage('');
    setInput('');
    setIsLoading(true);

    const userMessage = createMessage('user', message);
    const baseHistoryMessages =
      !shouldAppendUser &&
      messages.at(-1)?.role === 'user' &&
      messages.at(-1)?.content === message
        ? messages.slice(0, -1)
        : messages;
    const requestHistory = baseHistoryMessages
      .filter((historyMessage) => historyMessage.content !== chatbotOpeningMessage)
      .slice(-6)
      .map(({ role, content }) => ({ role, content }));

    if (shouldAppendUser) {
      setMessages((currentMessages) => [...currentMessages, userMessage]);
    }

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
          history: requestHistory,
        }),
      });

      const data = (await response.json()) as { reply?: string; error?: string };

      if (!response.ok || !data.reply) {
        throw new Error(data.error || 'Chatbot sedang mengalami kendala.');
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        createMessage('assistant', data.reply || ''),
      ]);
    } catch (requestError) {
      setLastFailedMessage(message);
      setError(
        requestError instanceof Error
          ? requestError.message
          : 'Koneksi gagal. Silakan coba kembali.',
      );
    } finally {
      setIsLoading(false);
    }
  }

  function clearConversation() {
    setMessages([createMessage('assistant', chatbotOpeningMessage)]);
    setInput('');
    setError('');
    setLastFailedMessage('');
  }

  return (
    <div className='fixed bottom-4 right-4 z-[55] sm:bottom-6 sm:right-6'>
      {isOpen && (
        <section
          role='dialog'
          aria-label='Asisten Portfolio'
          className='mb-3 flex h-[min(620px,calc(100vh-6.5rem))] w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl shadow-black/35 sm:w-[400px]'
        >
          <header className='flex items-center justify-between border-b border-[var(--border)] bg-[var(--surface-elevated)] px-4 py-3'>
            <div>
              <h2 className='text-sm font-semibold text-[var(--text-primary)]'>
                Asisten Portfolio
              </h2>
              <p className='mt-0.5 text-xs text-[var(--primary)]'>
                Siap membantu
              </p>
            </div>

            <div className='flex items-center gap-2'>
              <button
                type='button'
                aria-label='Hapus percakapan'
                onClick={clearConversation}
                className='inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] transition hover:border-[var(--secondary)] hover:text-[var(--secondary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]'
              >
                <Trash2 size={17} />
              </button>
              <button
                type='button'
                aria-label='Tutup chatbot'
                onClick={() => setIsOpen(false)}
                className='inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-secondary)] transition hover:border-[var(--primary)] hover:text-[var(--primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]'
              >
                <X size={18} />
              </button>
            </div>
          </header>

          <div
            ref={scrollRef}
            className='min-h-0 flex-1 space-y-4 overflow-y-auto px-4 py-4'
            aria-live='polite'
          >
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}

            {!hasConversationStarted && (
              <ChatSuggestions
                suggestions={chatbotSuggestions}
                disabled={isLoading}
                onSelect={sendMessage}
              />
            )}

            {isLoading && (
              <div className='rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] px-3.5 py-2.5 text-sm text-[var(--text-secondary)]'>
                Sedang menyiapkan jawaban...
              </div>
            )}

            {error && (
              <div
                role='alert'
                className='rounded-xl border border-[rgba(251,191,36,0.45)] bg-[rgba(251,191,36,0.08)] px-3.5 py-2.5 text-sm text-[var(--text-primary)]'
              >
                <p>{error}</p>
                {lastFailedMessage && !isLoading && (
                  <button
                    type='button'
                    onClick={() =>
                      sendMessage(lastFailedMessage, {
                        appendUser: false,
                        bypassCooldown: true,
                      })
                    }
                    className='mt-2 inline-flex items-center gap-2 rounded-lg text-xs font-semibold text-[var(--secondary)] transition hover:text-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)]'
                  >
                    <RotateCcw size={14} />
                    Coba lagi
                  </button>
                )}
              </div>
            )}
          </div>

          <form
            className='border-t border-[var(--border)] bg-[var(--surface-elevated)] p-3'
            onSubmit={(event) => {
              event.preventDefault();
              if (!isSendDisabled) {
                sendMessage(input);
              }
            }}
          >
            <label htmlFor='portfolio-chat-input' className='sr-only'>
              Tulis pertanyaan untuk asisten portfolio
            </label>
            <div className='flex items-end gap-2'>
              <textarea
                id='portfolio-chat-input'
                ref={inputRef}
                rows={1}
                maxLength={MAX_MESSAGE_LENGTH}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' && !event.shiftKey) {
                    event.preventDefault();
                    if (!isSendDisabled) {
                      sendMessage(input);
                    }
                  }
                }}
                placeholder='Tanya tentang portfolio...'
                className='max-h-28 min-h-11 flex-1 resize-none rounded-xl border border-[var(--border)] bg-[var(--background)] px-3 py-2.5 text-sm leading-5 text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--primary)] focus:ring-2 focus:ring-[rgba(52,211,153,0.2)]'
              />
              <button
                type='submit'
                disabled={isSendDisabled}
                aria-label='Kirim pesan'
                className='inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-strong)] text-[#07110c] transition hover:bg-[var(--primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-50'
              >
                <Send size={18} />
              </button>
            </div>
            <p className='mt-2 text-right text-[11px] text-[var(--text-muted)]'>
              {input.length}/{MAX_MESSAGE_LENGTH}
            </p>
          </form>
        </section>
      )}

      <button
        type='button'
        aria-label={isOpen ? 'Tutup chatbot portfolio' : 'Buka chatbot portfolio'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
        className='ml-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--primary-strong)] text-[#07110c] shadow-xl shadow-black/30 transition hover:bg-[var(--primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--secondary)]'
      >
        {isOpen ? <X size={23} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
