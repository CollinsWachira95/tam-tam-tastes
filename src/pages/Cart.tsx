
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: string;
  quantity: number;
  imagePath?: string;
  priceValue: number;
}

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Nyama Choma Platter",
      description: "Grilled meat marinated in traditional Kenyan spices",
      price: "$18.99",
      priceValue: 18.99,
      quantity: 2,
      imagePath: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
    },
    {
      id: 5,
      name: "Mbuzi (Goat Meat)",
      description: "Premium goat meat, a staple in Kenyan celebrations",
      price: "$14.99",
      priceValue: 14.99,
      quantity: 1,
      imagePath: "https://images.unsplash.com/photo-1666190053936-28af4c9f0273?ixlib=rb-4.0.3&auto=format&fit=crop&w=1392&q=80"
    }
  ]);
  
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.priceValue * item.quantity), 0);
  const tax = subtotal * 0.0825; // Example tax rate 8.25%
  const delivery = 4.99;
  const total = subtotal + tax + delivery;

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + change);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    setIsCheckoutModalOpen(true);
  };

  const completeOrder = () => {
    // Generate a random order number
    const randomOrderNumber = `TT${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
    setOrderNumber(randomOrderNumber);
    setOrderCompleted(true);
    // In a real app, here you would submit the order to a backend
  };

  const handleContinueShopping = () => {
    setIsCheckoutModalOpen(false);
    setOrderCompleted(false);
    navigate("/menu");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-8">Your Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="divide-y divide-gray-100">
                    {cartItems.map((item) => (
                      <div key={item.id} className="p-4 md:p-6 flex gap-4">
                        {item.imagePath && (
                          <div className="w-20 h-20 md:w-24 md:h-24 rounded-md overflow-hidden flex-shrink-0">
                            <img 
                              src={item.imagePath} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        
                        <div className="flex-grow">
                          <div className="flex justify-between">
                            <h3 className="font-playfair font-bold text-lg">{item.name}</h3>
                            <span className="font-medium text-tamtam-orange-600">{item.price}</span>
                          </div>
                          
                          <p className="text-sm text-tamtam-gray-600 mt-1 mb-3">{item.description}</p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center border border-gray-200 rounded-md">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="px-2 py-1 text-tamtam-gray-600 hover:bg-gray-100"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="px-3 py-1 border-x border-gray-200 min-w-8 text-center">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="px-2 py-1 text-tamtam-gray-600 hover:bg-gray-100"
                                aria-label="Increase quantity"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-tamtam-gray-500 hover:text-red-500 transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Order summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="font-playfair font-bold text-xl mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-tamtam-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-tamtam-gray-600">Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-tamtam-gray-600">Delivery</span>
                      <span>${delivery.toFixed(2)}</span>
                    </div>
                    <div className="h-px bg-gray-100 my-3"></div>
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span className="text-lg text-tamtam-orange-600">${total.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button
                    className="w-full bg-tamtam-orange-600 hover:bg-tamtam-orange-700 text-white font-medium rounded-lg py-6"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => navigate("/menu")}
                    >
                      Continue Shopping
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="mb-4 text-tamtam-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h2 className="text-xl font-playfair font-bold mb-2">Your cart is empty</h2>
              <p className="text-tamtam-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
              <Button
                className="bg-tamtam-orange-600 hover:bg-tamtam-orange-700 text-white"
                onClick={() => navigate("/menu")}
              >
                Browse Menu
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      
      {/* Checkout Modal */}
      <Dialog open={isCheckoutModalOpen} onOpenChange={setIsCheckoutModalOpen}>
        <DialogContent className="sm:max-w-md">
          {!orderCompleted ? (
            <>
              <DialogHeader>
                <DialogTitle className="font-playfair text-2xl">Complete Your Order</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium mb-1">Delivery Address</label>
                  <input
                    type="text"
                    id="address"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Street address"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Your phone"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="payment" className="block text-sm font-medium mb-1">Payment Method</label>
                  <select
                    id="payment"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="card">Credit Card</option>
                    <option value="cash">Cash on Delivery</option>
                    <option value="mpesa">M-Pesa</option>
                  </select>
                </div>
              </div>
              
              <DialogFooter>
                <Button
                  variant="outline"
                  onClick={() => setIsCheckoutModalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="bg-tamtam-orange-600 hover:bg-tamtam-orange-700 text-white"
                  onClick={completeOrder}
                >
                  Place Order
                </Button>
              </DialogFooter>
            </>
          ) : (
            <>
              <DialogHeader>
                <DialogTitle className="font-playfair text-2xl text-center">Order Confirmed!</DialogTitle>
              </DialogHeader>
              
              <div className="text-center py-6">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Thank you for your order!</h3>
                <p className="text-tamtam-gray-600 mb-4">
                  Your order number is: <span className="font-bold">{orderNumber}</span>
                </p>
                <p className="text-sm text-tamtam-gray-500 mb-6">
                  We'll send a confirmation to your email with all the details.
                </p>
              </div>
              
              <DialogFooter>
                <Button
                  className="w-full bg-tamtam-orange-600 hover:bg-tamtam-orange-700 text-white"
                  onClick={handleContinueShopping}
                >
                  Continue Shopping
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Cart;
