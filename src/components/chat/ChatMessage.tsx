
import React from "react";
import { Bot } from "lucide-react";
import { Message } from "@/types/chat";
import { formatTime } from "@/utils/chatUtils";

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  return (
    <div
      className={`flex ${
        message.sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {message.sender === "bot" && (
        <div className="w-8 h-8 bg-tamtam-orange-100 rounded-full flex items-center justify-center mr-2">
          <Bot size={18} className="text-tamtam-orange-600" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-lg p-3 ${
          message.sender === "user"
            ? "bg-tamtam-orange-600 text-white"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        <p className="text-sm font-sweetsans whitespace-pre-wrap">{message.text}</p>
        <p className="text-xs opacity-70 text-right mt-1">
          {formatTime(message.timestamp)}
        </p>
      </div>
    </div>
  );
};

export default ChatMessage;
