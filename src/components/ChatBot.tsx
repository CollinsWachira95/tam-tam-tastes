
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

interface MenuItem {
  id: number;
  name: string;
  price: number;
}

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

// Simulated menu data
const menuItems: MenuItem[] = [
  { id: 1, name: "Nyama Choma", price: 18.99 },
  { id: 2, name: "Ugali with Sukuma Wiki", price: 12.99 },
  { id: 3, name: "Pilau Rice", price: 14.99 },
  { id: 4, name: "Mandazi", price: 6.99 },
  { id: 5, name: "Kenyan Chai", price: 3.99 },
  { id: 6, name: "Samosa", price: 4.99 },
  { id: 7, name: "Chapati", price: 2.99 },
  { id: 8, name: "Mbuzi Fry", price: 19.99 },
  { id: 9, name: "Kenyan BBQ Ribs", price: 21.99 },
  { id: 10, name: "Coconut Rice", price: 9.99 }
];

const generateId = () => Math.random().toString(36).substr(2, 9);

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
      
      // Update order state if applicable
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
        
        // Follow up with order summary if this completes the order
        if (response.completeOrder) {
          setTimeout(() => {
            const orderSummary = generateOrderSummary();
            
            setMessages(prev => [...prev, {
              id: generateId(),
              text: orderSummary,
              sender: "bot",
              timestamp: new Date()
            }]);
            
            setSuggestions(["Checkout now", "Add more items", "Cancel order"]);
          }, 800);
        }
      }
      
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
      if (response.suggestions) {
        setSuggestions(response.suggestions);
      }
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
      
      // Handle checkout flow
      if (suggestion === "Checkout now" && currentOrder.length > 0) {
        // Store the current order in sessionStorage for the cart page
        sessionStorage.setItem('chatbotOrder', JSON.stringify(currentOrder));
        
        setTimeout(() => {
          navigate("/cart");
          setIsOpen(false);
          setOrderInProgress(false);
          setCurrentOrder([]);
        }, 1000);
        return;
      }
      
      // Handle cancel order
      if (suggestion === "Cancel order") {
        setOrderInProgress(false);
        setCurrentOrder([]);
        
        setTimeout(() => {
          const cancelMessage: Message = {
            id: generateId(),
            text: "I've canceled your order. How else can I help you today?",
            sender: "bot",
            timestamp: new Date(),
          };
          
          setMessages(prev => [...prev, cancelMessage]);
          setSuggestions([
            "Menu",
            "Order food",
            "Find locations",
            "About Tam Tam"
          ]);
        }, 800);
        return;
      }
      
      // Update suggestions based on context
      if (response.suggestions) {
        setSuggestions(response.suggestions);
      }
      
      // Handle navigation if needed
      if (response.action === "navigate" && response.path) {
        setTimeout(() => {
          navigate(response.path);
          if (response.closeChatbot) {
            setIsOpen(false);
          }
        }, 1000);
      }
    }, 800);
  };

  // Generate a summary of the current order
  const generateOrderSummary = () => {
    if (currentOrder.length === 0) return "Your order is empty.";
    
    let total = currentOrder.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    let summary = "Here's a summary of your order:\n\n";
    
    currentOrder.forEach(item => {
      summary += `${item.quantity}x ${item.name} - $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    
    summary += `\nTotal: $${total.toFixed(2)}\n\nWould you like to proceed to checkout?`;
    
    return summary;
  };

  // Parse user input for food orders
  const parseOrderFromInput = (input: string): OrderItem[] | null => {
    const orderItems: OrderItem[] = [];
    const lowerInput = input.toLowerCase();
    
    // Extract quantities and food items
    menuItems.forEach(menuItem => {
      const itemNameLower = menuItem.name.toLowerCase();
      if (lowerInput.includes(itemNameLower)) {
        // Try to find a quantity before the item name
        const regex = new RegExp(`(\\d+)\\s*(?:x|of|portion|portions|serving|servings)?\\s*${itemNameLower}`, 'i');
        const match = lowerInput.match(regex);
        
        const quantity = match ? parseInt(match[1]) : 1;
        
        orderItems.push({
          id: menuItem.id,
          name: menuItem.name,
          price: menuItem.price,
          quantity: quantity
        });
      }
    });
    
    return orderItems.length > 0 ? orderItems : null;
  };

  const processUserInput = (text: string): { 
    message: string; 
    action?: "navigate" | "none"; 
    path?: string;
    closeChatbot?: boolean;
    suggestions?: string[];
    orderItems?: OrderItem[];
    completeOrder?: boolean;
  } => {
    const input = text.toLowerCase();
    
    // Check if this input contains a food order
    const orderItems = parseOrderFromInput(input);
    let completeOrder = false;
    
    // Handle direct orders
    if (orderItems && orderItems.length > 0) {
      const itemNames = orderItems.map(item => `${item.quantity}x ${item.name}`).join(", ");
      
      // Check if the order seems complete
      const completionPhrases = ['that\'s all', 'checkout', 'finish', 'complete order', 'done ordering', 'that will be all'];
      completeOrder = completionPhrases.some(phrase => input.includes(phrase));
      
      if (completeOrder) {
        return {
          message: `I've added ${itemNames} to your order. Let's review everything!`,
          orderItems,
          completeOrder: true,
          suggestions: ["Checkout now", "Add more items", "Cancel order"]
        };
      } else {
        return {
          message: `I've added ${itemNames} to your order. Would you like anything else or are you ready to checkout?`,
          orderItems,
          suggestions: ["That's all", "Add more items", "Cancel order", "Show menu"]
        };
      }
    }
    
    // If the user wants to start ordering
    if (input.includes("order") || input.includes("buy") || input.includes("purchase") || input.includes("food")) {
      return {
        message: "I'd be happy to help you order! What would you like to eat today? You can say something like '2 portions of Nyama Choma and 1 Kenyan Chai' or ask to see our menu.",
        suggestions: ["Show menu", "Popular items", "What do you recommend?", "Vegetarian options"]
      };
    }
    
    // If the user wants to see the menu
    if (input.includes("menu") || input.includes("show menu") || input.includes("food list") || input.includes("what do you have") || input.includes("what do you serve")) {
      let menuText = "Here are some items from our menu:\n\n";
      menuItems.slice(0, 6).forEach(item => {
        menuText += `• ${item.name} - $${item.price.toFixed(2)}\n`;
      });
      menuText += "\nYou can order by typing something like '2 Nyama Choma and 1 Kenyan Chai' or ask me about any dish.";
      
      return {
        message: menuText,
        suggestions: ["Order Nyama Choma", "Order Ugali", "Order Pilau Rice", "See full menu"]
      };
    }
    
    // Check for suggestion to see full menu
    if (input.includes("see full menu") || input.includes("full menu")) {
      return {
        message: "I'll take you to our complete menu page where you can browse all our delicious Kenyan specialties!",
        action: "navigate",
        path: "/menu",
        closeChatbot: false,
        suggestions: ["Order from menu", "Back to chat", "Recommendations"]
      };
    }
    
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
    
    if (input.includes("cart") || input.includes("checkout") || input.includes("pay")) {
      return {
        message: "Taking you to your cart where you can review your order and checkout.",
        action: "navigate",
        path: "/cart",
        closeChatbot: true,
        suggestions: ["Add more items", "Checkout", "Delivery options", "Estimated time"]
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
        suggestions: ["Order food directly", "Show me the menu", "Find locations", "Tell me about Tam Tam"]
      };
    }
    
    if (input.includes("thank")) {
      return {
        message: "You're very welcome! Is there anything else I can help you with?",
        suggestions: ["Order food", "Menu", "Locations", "No thanks"]
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
      message: "I'm not sure I understand. Would you like to order food, see our menu, find a location, or learn more about Tam Tam?",
      suggestions: ["Order food", "Show menu", "Find locations", "About Tam Tam"]
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
                      <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                      <p className="text-xs opacity-70 text-right mt-1">
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Order summary if there's an order in progress */}
              {orderInProgress && currentOrder.length > 0 && (
                <div className="mb-4 p-3 bg-tamtam-orange-50 border border-tamtam-orange-200 rounded-lg">
                  <div className="font-medium text-tamtam-orange-700 mb-2 flex items-center">
                    <ShoppingBag size={16} className="mr-2" />
                    Current Order ({currentOrder.reduce((sum, item) => sum + item.quantity, 0)} items)
                  </div>
                  <div className="text-sm text-tamtam-gray-700">
                    {currentOrder.map((item, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span>{item.quantity}x {item.name}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="mt-2 pt-2 border-t border-tamtam-orange-200 font-medium flex justify-between">
                      <span>Total:</span>
                      <span>${currentOrder.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              )}
              
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
                  <p className="text-sm font-sweetsans whitespace-pre-wrap">{message.text}</p>
                  <p className="text-xs opacity-70 text-right mt-1">
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Order summary if there's an order in progress */}
          {orderInProgress && currentOrder.length > 0 && (
            <div className="mb-4 p-3 bg-tamtam-orange-50 border border-tamtam-orange-200 rounded-lg">
              <div className="font-medium text-tamtam-orange-700 mb-2 flex items-center">
                <ShoppingBag size={16} className="mr-2" />
                Current Order ({currentOrder.reduce((sum, item) => sum + item.quantity, 0)} items)
              </div>
              <div className="text-sm text-tamtam-gray-700">
                {currentOrder.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{item.quantity}x {item.name}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="mt-2 pt-2 border-t border-tamtam-orange-200 font-medium flex justify-between">
                  <span>Total:</span>
                  <span>${currentOrder.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}</span>
                </div>
              </div>
            </div>
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
