
import React from "react";
import { ShoppingBag } from "lucide-react";
import { OrderItem } from "@/types/chat";

interface OrderSummaryProps {
  orderItems: OrderItem[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ orderItems }) => {
  const total = orderItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="mb-4 p-3 bg-tamtam-orange-50 border border-tamtam-orange-200 rounded-lg">
      <div className="font-medium text-tamtam-orange-700 mb-2 flex items-center">
        <ShoppingBag size={16} className="mr-2" />
        Current Order ({orderItems.reduce((sum, item) => sum + item.quantity, 0)} items)
      </div>
      <div className="text-sm text-tamtam-gray-700">
        {orderItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <span>{item.quantity}x {item.name}</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="mt-2 pt-2 border-t border-tamtam-orange-200 font-medium flex justify-between">
          <span>Total:</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
