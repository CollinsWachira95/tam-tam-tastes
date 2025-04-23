
import { Message, OrderItem } from './chat';

export interface ChatBotProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export interface ChatInputProps {
  input: string;
  setInput: (input: string) => void;
  handleSend: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
}

export interface ChatMessagesProps {
  messages: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

export interface ChatSuggestionsProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

export interface ChatHeaderProps {
  onClose: () => void;
}
