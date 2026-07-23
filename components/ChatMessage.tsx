import { Bot, User } from 'lucide-react';

export type PortfolioChatMessage = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

type ChatMessageProps = {
  message: PortfolioChatMessage;
};

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  const Icon = isUser ? User : Bot;

  return (
    <div className={`flex gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <span className='mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--primary)]'>
          <Icon size={15} aria-hidden='true' />
        </span>
      )}

      <div
        className={`max-w-[82%] rounded-xl px-3.5 py-2.5 text-sm leading-6 ${
          isUser
            ? 'bg-[var(--primary-strong)] text-[#07110c]'
            : 'border border-[var(--border)] bg-[var(--surface-elevated)] text-[var(--text-primary)]'
        }`}
      >
        {message.content}
      </div>

      {isUser && (
        <span className='mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[rgba(52,211,153,0.16)] text-[var(--primary)]'>
          <Icon size={15} aria-hidden='true' />
        </span>
      )}
    </div>
  );
}

