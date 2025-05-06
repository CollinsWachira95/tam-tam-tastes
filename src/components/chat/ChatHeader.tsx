
import React from 'react';
import { Bot, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatHeaderProps } from '@/types/chatTypes';

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose }) => {
  return (
    <div className="bg-gradient-to-r from-tamtam-orange-500 to-tamtam-orange-600 text-white p-5 rounded-t-lg flex justify-between items-center">
      <div className="flex items-center">
        <div className="bg-white/20 p-2 rounded-full mr-3">
          <Bot className="text-white" size={22} />
        </div>
        <h3 className="font-sweetsans font-semibold text-lg">Tam Tam Assistant</h3>
      </div>
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onClose} 
        className="text-white hover:bg-tamtam-orange-700/50 rounded-full h-8 w-8 p-0"
      >
        <X size={18} />
      </Button>
    </div>
  );
};

export default ChatHeader;
