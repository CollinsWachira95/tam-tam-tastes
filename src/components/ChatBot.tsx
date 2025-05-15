
import React from 'react';
import { useChatbot } from '@/hooks/useChatbot';
import ChatToggleButton from './chat/ChatToggleButton';
import ChatDrawer from './chat/ChatDrawer';
import ChatWindow from './chat/ChatWindow';

const ChatBot = () => {
  const {
    isOpen,
    setIsOpen,
    input,
    setInput,
    messages,
    suggestions,
    orderInProgress,
    currentOrder,
    messagesEndRef,
    inputRef,
    handleSend,
    handleSuggestionClick
  } = useChatbot();

  return (
    <>
      <ChatToggleButton 
        isOpen={isOpen} 
        onClick={() => setIsOpen(!isOpen)} 
      />
      
      {/* Mobile: Drawer for small screens */}
      <div className="md:hidden">
        <ChatDrawer
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          messages={messages}
          messagesEndRef={messagesEndRef}
          orderInProgress={orderInProgress}
          currentOrder={currentOrder}
          suggestions={suggestions}
          onSuggestionClick={handleSuggestionClick}
          input={input}
          setInput={setInput}
          handleSend={handleSend}
          inputRef={inputRef}
        />
      </div>
      
      {/* Desktop: Fixed chat window */}
      <ChatWindow
        isOpen={isOpen}
        messages={messages}
        messagesEndRef={messagesEndRef}
        orderInProgress={orderInProgress}
        currentOrder={currentOrder}
        suggestions={suggestions}
        onSuggestionClick={handleSuggestionClick}
        input={input}
        setInput={setInput}
        handleSend={handleSend}
        inputRef={inputRef}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default ChatBot;
