
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, X } from 'lucide-react';
import { DrawerContent, DrawerHeader, DrawerTitle, DrawerClose, Drawer } from '@/components/ui/drawer';
import { Message, OrderItem } from '@/types/chat';
import { generateId } from '@/utils/chatUtils';
import { processUserInput } from '@/utils/chatProcessor';
import ChatInput from './chat/ChatInput';
import ChatMessages from './chat/ChatMessages';
import ChatSuggestions from './chat/ChatSuggestions';
import ChatHeader from './chat/ChatHeader';
import OrderSummary from './chat/OrderSummary';

const ChatBot = () => {
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

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 bg-tamtam-orange-600 hover:bg-tamtam-orange-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center"
        aria-label="Chat with us"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
      
      {/* Mobile: Drawer for small screens */}
      <div className="md:hidden">
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
                onSuggestionClick={handleSuggestionClick} 
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
      </div>
      
      {/* Desktop: Fixed chat window */}
      <div
        className={`fixed bottom-24 right-6 z-50 hidden md:block bg-white rounded-lg shadow-xl transition-all duration-300 w-96 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{ height: "500px" }}
      >
        <ChatHeader onClose={() => setIsOpen(false)} />
        
        <div className="flex flex-col h-[calc(100%-130px)] p-4">
          <ChatMessages messages={messages} messagesEndRef={messagesEndRef} />
          
          {orderInProgress && currentOrder.length > 0 && (
            <OrderSummary orderItems={currentOrder} />
          )}
          
          <ChatSuggestions 
            suggestions={suggestions} 
            onSuggestionClick={handleSuggestionClick} 
          />
          
          <ChatInput 
            input={input}
            setInput={setInput}
            handleSend={handleSend}
            inputRef={inputRef}
          />
        </div>
      </div>
    </>
  );
};

export default ChatBot;
