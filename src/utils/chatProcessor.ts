
import { OrderItem } from "@/types/chat";
import { parseOrderFromInput } from "./chatUtils";

interface ChatResponse {
  message: string;
  action?: "navigate" | "none";
  path?: string;
  closeChatbot?: boolean;
  suggestions?: string[];
  orderItems?: OrderItem[];
  completeOrder?: boolean;
}

export const processUserInput = (input: string): ChatResponse => {
  const text = input.toLowerCase();
  
  // Check if this input contains a food order
  const orderItems = parseOrderFromInput(input);
  if (orderItems) {
    const itemNames = orderItems.map(item => `${item.quantity}x ${item.name}`).join(", ");
    const completionPhrases = ['that\'s all', 'checkout', 'finish', 'complete order', 'done ordering', 'that will be all'];
    const completeOrder = completionPhrases.some(phrase => text.includes(phrase));
    
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

  // Handle navigation and other requests
  if (text.includes("order") || text.includes("buy") || text.includes("purchase") || text.includes("food")) {
    return {
      message: "I'd be happy to help you order! What would you like to eat today? You can say something like '2 portions of Nyama Choma and 1 Kenyan Chai' or ask to see our menu.",
      suggestions: ["Show menu", "Popular items", "What do you recommend?", "Vegetarian options"]
    };
  }

  // Navigation responses
  if (text.includes("menu") || text.includes("show menu")) {
    return {
      message: "Taking you to our complete menu page where you can browse all our delicious Kenyan specialties!",
      action: "navigate",
      path: "/menu",
      closeChatbot: false,
      suggestions: ["Order from menu", "Back to chat", "Recommendations"]
    };
  }

  // ... Add more navigation handlers similar to the original ChatBot.tsx

  // Default response
  return {
    message: "I'm not sure I understand. Would you like to order food, see our menu, find a location, or learn more about Tam Tam?",
    suggestions: ["Order food", "Show menu", "Find locations", "About Tam Tam"]
  };
};
