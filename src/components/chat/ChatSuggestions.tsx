
import React from 'react';
import { ChatSuggestionsProps } from '@/types/chatTypes';

const ChatSuggestions: React.FC<ChatSuggestionsProps> = ({ suggestions, onSuggestionClick }) => {
  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {suggestions.map((suggestion) => (
        <button
          key={suggestion}
          onClick={() => onSuggestionClick(suggestion)}
          className="bg-gray-100 hover:bg-gray-200 text-tamtam-gray-700 text-sm py-1 px-3 rounded-full transition-colors font-sweetsans"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
};

export default ChatSuggestions;
