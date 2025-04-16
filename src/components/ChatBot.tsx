
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Bot, 
  Send, 
  X, 
  ShoppingBag, 
  Navigation, 
  Info, 
  Map, 
  CookingPot,
  Utensils,
  MessageSquare,
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "@/components/ui/drawer";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const generateId = () => Math.random().toString(36).substr(2, 9);

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: generateId(),
      text: "Hello! I'm Tammy, your Tam Tam assistant. I can help you navigate our website or place an order. What would you like to do today?",
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
    
    // Add user message
    const userMessage: Message = {
      id: generateId(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    
    // Process the message and generate a response
    setTimeout(() => {
      const response = processUserInput(input);
      const botMessage: Message = {
        id: generateId(),
        text: response.message,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      
      // Handle navigation if needed
      if (response.action === "navigate" && response.path) {
        setTimeout(() => {
          navigate(response.path);
          if (response.closeChatbot) {
            setIsOpen(false);
          }
        }, 1000);
      }
      
      // Update suggestions based on context
      setSuggestions(response.suggestions || suggestions);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
    
    // Add user message
    const userMessage: Message = {
      id: generateId(),
      text: suggestion,
      sender: "user",
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    
    // Process the suggestion
    setTimeout(() => {
      const response = processUserInput(suggestion);
      const botMessage: Message = {
        id: generateId(),
        text: response.message,
        sender: "bot",
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
      
      // Handle navigation if needed
      if (response.action === "navigate" && response.path) {
        setTimeout(() => {
          navigate(response.path);
          if (response.closeChatbot) {
            setIsOpen(false);
          }
        }, 1000);
      }
      
      // Update suggestions based on context
      setSuggestions(response.suggestions || suggestions);
    }, 800);
  };

  const processUserInput = (text: string): { 
    message: string; 
    action?: "navigate" | "none"; 
    path?: string;
    closeChatbot?: boolean;
    suggestions?: string[];
  } => {
    const input = text.toLowerCase();
    
    // Check for navigation requests
    if (input.includes("home") || input.includes("main page")) {
      return {
        message: "Taking you to our home page!",
        action: "navigate",
        path: "/",
        closeChatbot: true,
        suggestions: ["Menu", "Order food", "Find locations", "About Tam Tam"]
      };
    }
    
    if (input.includes("menu") || input.includes("food") || input.includes("dishes") || input.includes("what do you serve")) {
      return {
        message: "I'll show you our delicious menu. You can browse all our Kenyan specialties there!",
        action: "navigate",
        path: "/menu",
        closeChatbot: true,
        suggestions: ["Recommended dishes", "Order food", "Dietary options", "Most popular item"]
      };
    }
    
    if (input.includes("butchery") || input.includes("meat")) {
      return {
        message: "Let me take you to our butchery section where you can find our premium meat selections.",
        action: "navigate",
        path: "/butchery",
        closeChatbot: true,
        suggestions: ["Meat prices", "Premium cuts", "Order meat", "Meat preparation"]
      };
    }
    
    if (input.includes("about") || input.includes("history") || input.includes("story") || input.includes("who are you")) {
      return {
        message: "I'd be happy to show you more about Tam Tam's story and our passion for Kenyan cuisine!",
        action: "navigate",
        path: "/about",
        closeChatbot: true,
        suggestions: ["Our team", "Restaurant history", "Menu", "Locations"]
      };
    }
    
    if (input.includes("cater") || input.includes("event") || input.includes("party") || input.includes("wedding")) {
      return {
        message: "Great! I'll show you our catering services for your special events.",
        action: "navigate",
        path: "/catering",
        closeChatbot: true,
        suggestions: ["Catering menu", "Event booking", "Pricing", "Contact us"]
      };
    }
    
    if (input.includes("location") || input.includes("where") || input.includes("address") || input.includes("find you")) {
      return {
        message: "Let me show you all our restaurant locations across Kenya.",
        action: "navigate",
        path: "/locations",
        closeChatbot: true,
        suggestions: ["Nearest location", "Opening hours", "Directions", "Contact us"]
      };
    }
    
    if (input.includes("cart") || input.includes("checkout") || input.includes("pay") || input.includes("order status")) {
      return {
        message: "Taking you to your cart where you can review your order and checkout.",
        action: "navigate",
        path: "/cart",
        closeChatbot: true,
        suggestions: ["Add more items", "Checkout", "Delivery options", "Estimated time"]
      };
    }
    
    if (input.includes("order") || input.includes("buy") || input.includes("purchase")) {
      return {
        message: "I'd be happy to help you place an order! You can browse our menu and select items to add to your cart.",
        action: "navigate",
        path: "/menu",
        closeChatbot: false,
        suggestions: ["Show specials", "Most popular items", "Vegetarian options", "See my cart"]
      };
    }
    
    if (input.includes("privacy") || input.includes("policy") || input.includes("terms")) {
      return {
        message: "Let me show you our privacy policy.",
        action: "navigate",
        path: "/privacy",
        closeChatbot: true,
        suggestions: ["About Tam Tam", "Contact us", "Data collection", "Cookies"]
      };
    }
    
    // Handle greetings
    if (input.includes("hi") || input.includes("hello") || input.includes("hey")) {
      return {
        message: "Hello there! How can I assist you today with Tam Tam's authentic Kenyan cuisine?",
        suggestions: ["Show me the menu", "Order food", "Find locations", "Tell me about Tam Tam"]
      };
    }
    
    if (input.includes("thank")) {
      return {
        message: "You're very welcome! Is there anything else I can help you with?",
        suggestions: ["Menu", "Order food", "Locations", "No thanks"]
      };
    }
    
    if (input.includes("bye") || input.includes("goodbye") || input.includes("no thanks")) {
      return {
        message: "Thank you for chatting! Feel free to ask if you need any more help. Enjoy your Tam Tam experience!",
        suggestions: ["Menu", "Order food", "Locations", "About"]
      };
    }
    
    // Default response if we don't understand
    return {
      message: "I'm not sure I understand. Would you like to see our menu, find a location, or learn more about Tam Tam?",
      suggestions: ["Menu", "Locations", "About Tam Tam", "Order online"]
    };
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat toggle button - fixed at bottom right */}
      <button
        onClick={toggleChat}
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
              {/* Chat messages */}
              <div className="flex-grow overflow-y-auto mb-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.sender === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.sender === "user"
                          ? "bg-tamtam-orange-600 text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 text-right mt-1">
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Suggestions */}
              {suggestions.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {suggestions.map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="bg-gray-100 hover:bg-gray-200 text-tamtam-gray-700 text-sm py-1 px-3 rounded-full transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
              
              {/* Chat input */}
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
          <Button variant="ghost" size="sm" onClick={toggleChat} className="text-white hover:bg-tamtam-orange-800">
            <X size={20} />
          </Button>
        </div>
        
        {/* Chat body */}
        <div className="flex flex-col h-[calc(100%-130px)] p-4">
          {/* Chat messages */}
          <div className="flex-grow overflow-y-auto mb-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
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
                  <p className="text-sm font-sweetsans">{message.text}</p>
                  <p className="text-xs opacity-70 text-right mt-1">
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
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
