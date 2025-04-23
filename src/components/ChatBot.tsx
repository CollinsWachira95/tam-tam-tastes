import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Send, X, MessageSquare, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "@/components/ui/drawer";
import { Message, OrderItem } from "@/types/chat";
import { generateId, formatTime } from "@/utils/chatUtils";
import { processUserInput } from "@/utils/chatProcessor";
import ChatMessage from "./chat/ChatMessage";
import OrderSummary from "./chat/OrderSummary";

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
      const response = processUserInput(input);
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
          
          response.orderItems.forEach(item => {
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
    }, 800);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    handleSend();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
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
            <DrawerHeader className="border-b">
              <DrawerTitle className="flex items-center text-tamtam-orange-600 font-sweetsans">
                <Bot className="mr-2" /> Tam Tam Assistant
              </DrawerTitle>
              <DrawerClose />
            </DrawerHeader>
            
            <div className="flex flex-col h-full p-4">
              <div className="flex-grow overflow-y-auto mb-4 space-y-4">
                {messages.map((message) => (
                  <ChatMessage key={message.id} message={message} />
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              {orderInProgress && currentOrder.length > 0 && (
                <OrderSummary orderItems={currentOrder} />
              )}
              
              {suggestions.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="bg-gray-100 hover:bg-gray-200 text-tamtam-gray-700 text-sm py-1 px-3 rounded-full transition-colors font-sweetsans"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
              
              <div className="flex items-center bg-white border rounded-full overflow-hidden">
                <input
                  type="text"
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
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
        {/* Chat header */}
        <div className="bg-gradient-to-r from-tamtam-orange-600 to-tamtam-orange-700 text-white p-4 rounded-t-lg flex justify-between items-center">
          <div className="flex items-center">
            <Bot className="mr-2" />
            <h3 className="font-sweetsans font-medium">Tam Tam Assistant</h3>
          </div>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-white hover:bg-tamtam-orange-800">
            <X size={20} />
          </Button>
        </div>
        
        {/* Chat body */}
        <div className="flex flex-col h-[calc(100%-130px)] p-4">
          {/* Chat messages */}
          <div className="flex-grow overflow-y-auto mb-4 space-y-4">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Order summary if there's an order in progress */}
          {orderInProgress && currentOrder.length > 0 && (
            <OrderSummary orderItems={currentOrder} />
          )}
          
          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="mb-4 flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="bg-gray-100 hover:bg-gray-200 text-tamtam-gray-700 text-sm py-1 px-3 rounded-full transition-colors font-sweetsans"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>
        
        {/* Chat input */}
        <div className="p-4 border-t">
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
        </div>
      </div>
    </>
  );
};

export default ChatBot;
