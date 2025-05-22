import { useCartStore } from "@/stores/cartStore";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { SignInButton, useUser } from "@clerk/clerk-react";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalItems, getTotalPrice } = useCartStore();
  const { isSignedIn } = useUser();

  if (items.length === 0) {
    
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/products">
              <Button className="bg-kenya-blue hover:bg-kenya-blue-dark">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <div key={item.product.id} className="p-6 flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-24 h-24 flex-shrink-0">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <Link to={`/product/${item.product.id}`}>
                          <h3 className="text-lg font-medium text-gray-900 hover:text-kenya-blue-dark">
                            {item.product.name}
                          </h3>
                        </Link>
                        <p className="font-medium text-gray-900">{item.product.price}</p>
                      </div>
                      <p className="text-gray-500 mt-1 mb-4">{item.product.category}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border rounded-md">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.product.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-6">
              <Link to="/products">
                <Button variant="outline" className="text-kenya-blue-dark border-kenya-blue-dark hover:bg-kenya-blue-dark/10">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 h-fit lg:sticky lg:top-20">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Items ({getTotalItems()})</span>
                <span className="font-medium">KSh {getTotalPrice().toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">KSh 250</span>
              </div>
              <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>KSh {(getTotalPrice() + 250).toLocaleString()}</span>
              </div>

              {/* SIGN-IN CHECK & BUTTON */}
              {isSignedIn ? (
                <Link to="/checkout">
                  <Button className="w-full bg-kenya-blue hover:bg-kenya-blue-dark font-medium">
                    Proceed to Checkout
                  </Button>
                </Link>
              ) : (
                <Link to="/checkout">
                  <Button className="w-full bg-kenya-blue hover:bg-kenya-blue-dark font-medium">
                    Proceed to Checkout
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
