
import { MenuItem, OrderItem } from "@/types/chat";

// Menu data
export const menuItems: MenuItem[] = [
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

export const generateId = () => Math.random().toString(36).substr(2, 9);

export const formatTime = (date: Date) => {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
};

export const parseOrderFromInput = (input: string): OrderItem[] | null => {
  const orderItems: OrderItem[] = [];
  const lowerInput = input.toLowerCase();
  
  menuItems.forEach(menuItem => {
    const itemNameLower = menuItem.name.toLowerCase();
    if (lowerInput.includes(itemNameLower)) {
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
