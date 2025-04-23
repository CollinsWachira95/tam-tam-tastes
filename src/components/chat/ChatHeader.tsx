
import React from 'react';
import { Bot, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ChatHeaderProps } from '@/types/chatTypes';

const ChatHeader: React.FC<ChatHeaderProps> = ({ onClose }) => {
  return (
    <div className="bg-gradient-to-r from-tamtam-orange-600 to-tamtam-orange-700 text-white p-4 rounded-t-lg flex justify-between items-center">
      <div className="flex items-center">
        <Bot className="mr-2" />
        <h3 className="font-sweetsans font-medium">Tam Tam Assistant</h3>
      </div>
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onClose} 
        className="text-white hover:bg-tamtam-orange-800"
      >
        <X size={20} />
      </Button>
    </div>
  );
};

export default ChatHeader;
