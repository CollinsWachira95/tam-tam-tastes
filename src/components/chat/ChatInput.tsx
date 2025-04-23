
import React from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatInputProps } from '@/types/chatTypes';

const ChatInput: React.FC<ChatInputProps> = ({ input, setInput, handleSend, inputRef }) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex items-center bg-white border rounded-full overflow-hidden">
      <input
        type="text"
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Type your message..."
        className="flex-grow p-3 outline-none font-sweetsans"
      />
      <Button
        onClick={handleSend}
        variant="ghost"
        className="m-1"
        disabled={input.trim() === ""}
      >
        <Send size={20} />
      </Button>
    </div>
  );
};

export default ChatInput;
