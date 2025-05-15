
import React from 'react';
import { Message, OrderItem } from '@/types/chat';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatSuggestions from './ChatSuggestions';
import ChatInput from './ChatInput';
import OrderSummary from './OrderSummary';

interface ChatWindowProps {
  isOpen: boolean;
  messages: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement>;
  orderInProgress: boolean;
  currentOrder: OrderItem[];
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
  input: string;
  setInput: (input: string) => void;
  handleSend: () => void;
  inputRef: React.RefObject<HTMLInputElement>;
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  isOpen,
  messages,
  messagesEndRef,
  orderInProgress,
  currentOrder,
  suggestions,
  onSuggestionClick,
  input,
  setInput,
  handleSend,
  inputRef,
  onClose
}) => {
  return (
    <div
      className={`fixed bottom-24 right-6 z-50 hidden md:block bg-white rounded-lg shadow-xl transition-all duration-300 w-96 ${
        isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
      }`}
      style={{ height: "500px" }}
    >
      <ChatHeader onClose={onClose} />
      
      <div className="flex flex-col h-[calc(100%-130px)] p-4">
        <ChatMessages messages={messages} messagesEndRef={messagesEndRef} />
        
        {orderInProgress && currentOrder.length > 0 && (
          <OrderSummary orderItems={currentOrder} />
        )}
        
        <ChatSuggestions 
          suggestions={suggestions} 
          onSuggestionClick={onSuggestionClick} 
        />
        
        <ChatInput 
          input={input}
          setInput={setInput}
          handleSend={handleSend}
          inputRef={inputRef}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
