
import React from 'react';
import { ChatMessagesProps } from '@/types/chatTypes';
import ChatMessage from './ChatMessage';

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, messagesEndRef }) => {
  return (
    <div className="flex-grow overflow-y-auto mb-4 space-y-4 px-1">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
