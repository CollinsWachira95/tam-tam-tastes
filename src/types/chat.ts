
export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export interface MenuItem {
  id: number;
  name: string;
  price: number;
}

export interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
