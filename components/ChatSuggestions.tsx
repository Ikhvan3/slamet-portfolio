type ChatSuggestionsProps = {
  suggestions: string[];
  disabled: boolean;
  onSelect: (suggestion: string) => void;
};

export default function ChatSuggestions({
  suggestions,
  disabled,
  onSelect,
}: ChatSuggestionsProps) {
  return (
    <div className='grid gap-2' aria-label='Pertanyaan yang disarankan'>
      {suggestions.map((suggestion) => (
        <button
          key={suggestion}
          type='button'
          disabled={disabled}
          onClick={() => onSelect(suggestion)}
          className='rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-left text-xs leading-5 text-[var(--text-secondary)] transition hover:border-[var(--primary)] hover:text-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] disabled:cursor-not-allowed disabled:opacity-60'
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}

