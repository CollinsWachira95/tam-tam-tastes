
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
    const completionPhrases = ['checkout', 'finish', 'complete order', 'done ordering', 'thats all', "that's all"];
    const completeOrder = completionPhrases.some(phrase => text.includes(phrase));
    
    if (completeOrder) {
      return {
        message: `Perfect! I've added ${itemNames} to your order. Taking you to checkout now!`,
        orderItems,
        completeOrder: true,
        action: "navigate",
        path: "/checkout",
        closeChatbot: true
      };
    } else {
      return {
        message: `I've added ${itemNames} to your order. Would you like anything else? You can say "checkout" when you're ready to complete your order.`,
        orderItems,
        suggestions: ["Checkout", "Add more items", "Show menu", "Cancel order"]
      };
    }
  }

  // Handle menu and order requests
  if (text.includes("menu") || text.includes("show menu")) {
    return {
      message: "Here's our menu! Take a look at all our delicious Kenyan specialties.",
      action: "navigate",
      path: "/menu",
      suggestions: ["Order from menu", "Popular dishes", "Vegetarian options", "Back to chat"]
    };
  }

  if (text.includes("order") || text.includes("food") || text.includes("eat")) {
    return {
      message: "I'll help you order! Just tell me what you'd like. For example, you can say '2 Nyama Choma and 1 Kenyan Chai' or ask to see our menu.",
      suggestions: ["Show menu", "Popular items", "Today's specials", "Vegetarian options"]
    };
  }

  // Default response
  return {
    message: "Hello! I can help you order food or answer questions about Tam Tam. What would you like to do?",
    suggestions: ["Order food", "Show menu", "View locations", "About Tam Tam"]
  };
};
