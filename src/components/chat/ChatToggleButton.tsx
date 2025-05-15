
import React from 'react';
import { MessageSquare, X } from 'lucide-react';

interface ChatToggleButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const ChatToggleButton: React.FC<ChatToggleButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-24 right-6 z-50 bg-tamtam-orange-600 hover:bg-tamtam-orange-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
      aria-label="Chat with us"
    >
      {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
    </button>
  );
};

export default ChatToggleButton;
