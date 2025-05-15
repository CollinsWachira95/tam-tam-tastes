
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Message, OrderItem } from '@/types/chat';
import { generateId } from '@/utils/chatUtils';
import { processUserInput } from '@/utils/chatProcessor';

export const useChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: generateId(),
      text: "Hello! I'm Tammy, your Tam Tam assistant. I can help you navigate our website or place an order directly. What would you like to do today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [suggestions, setSuggestions] = useState<string[]>([
    "Menu",
    "Order food",
    "Find locations",
    "About Tam Tam",
    "Catering services",
    "Butchery products"
  ]);
  
  const [orderInProgress, setOrderInProgress] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<OrderItem[]>([]);
  
  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  const handleSend = () => {
    if (input.trim() === "") return;
    
    const userMessage: Message = {
      id: generateId(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    setTimeout(() => {
      try {
        const response = processUserInput(input, currentOrder);
        
        const botMessage: Message = {
          id: generateId(),
          text: response.message,
          sender: "bot",
          timestamp: new Date(),
        };
        
        setMessages(prev => [...prev, botMessage]);
        
        if (response.orderItems && response.orderItems.length > 0) {
          setCurrentOrder(prev => {
            const newOrder = [...prev];
            
            response.orderItems?.forEach(item => {
              const existingItemIndex = newOrder.findIndex(orderItem => orderItem.id === item.id);
              
              if (existingItemIndex >= 0) {
                newOrder[existingItemIndex].quantity += item.quantity;
              } else {
                newOrder.push(item);
              }
            });
            
            return newOrder;
          });
          
          setOrderInProgress(true);
        }
        
        if (response.action === "navigate" && response.path) {
          setTimeout(() => {
            navigate(response.path);
            if (response.closeChatbot) {
              setIsOpen(false);
            }
          }, 1000);
        }
        
        if (response.suggestions) {
          setSuggestions(response.suggestions);
        }
      } catch (error) {
        console.error("Error processing input:", error);
        const errorMessage: Message = {
          id: generateId(),
          text: "I'm sorry, I encountered an error processing your request. Can you please try again?",
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, errorMessage]);
      }
    }, 800);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    setTimeout(() => handleSend(), 100);
  };

  return {
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
  };
};
