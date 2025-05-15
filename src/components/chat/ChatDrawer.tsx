
import React from 'react';
import { DrawerContent, DrawerHeader, DrawerTitle, DrawerClose, Drawer } from '@/components/ui/drawer';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatSuggestions from './ChatSuggestions';
import ChatInput from './ChatInput';
import OrderSummary from './OrderSummary';
import { Message, OrderItem } from '@/types/chat';

interface ChatDrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
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
}

const ChatDrawer: React.FC<ChatDrawerProps> = ({
  isOpen,
  setIsOpen,
  messages,
  messagesEndRef,
  orderInProgress,
  currentOrder,
  suggestions,
  onSuggestionClick,
  input,
  setInput,
  handleSend,
  inputRef
}) => {
  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="h-[85vh]">
        <DrawerHeader className="p-0">
          <DrawerTitle className="block">
            <ChatHeader onClose={() => setIsOpen(false)} />
          </DrawerTitle>
          <DrawerClose />
        </DrawerHeader>
        
        <div className="flex flex-col h-full p-4">
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
      </DrawerContent>
    </Drawer>
  );
};

export default ChatDrawer;
