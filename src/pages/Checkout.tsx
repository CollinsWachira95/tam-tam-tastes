
import { useState } from "react";
import { useCartStore } from "@/stores/cartStore";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripePaymentForm from "@/pages/StripePaymentForm";

// Initialize Stripe with your publishable key
// In production, this would be your live key
const stripePromise = loadStripe("pk_test_51NzlkVCyUnvJqTrzRQNngnl8OkpbGlKJ0EBXd0wSXbElqE1eQebje4obvO9SLT8mOXXGWMbsVz3ZnPEyZp0KuNZB008jDdlbyP");

const Checkout = () => {
  const { items, getTotalPrice } = useCartStore();
  const [isLoading, setIsLoading] = useState(false);
  const [clientSecret, setClientSecret] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInitiateCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (items.length === 0) return;
    
    setIsLoading(true);
    
    try {
      // Fetch payment intent from your backend (this would be a real API endpoint in production)
      // In a real implementation, you would send the cart items and customer details to create the payment intent
      const response = await fetch("https://api.example.com/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          items, 
          customer: formData,
          amount: getTotalPrice() + 250 // Total price plus shipping
        }),
      });
      
      const data = await response.json();
      
      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
      }
    } catch (error) {
      console.error("Error creating payment intent:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          {items.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <h2 className="text-xl font-medium mb-4">Your cart is empty</h2>
              <p className="text-gray-500 mb-6">Add some items to your cart before checking out.</p>
              <Link to="/products">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Order Summary */}
              <div className="md:col-span-1 bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.product.id} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <img 
                          src={item.product.image} 
                          alt={item.product.name} 
                          className="w-12 h-12 object-cover rounded mr-3" 
                        />
                        <div>
                          <p className="font-medium">{item.product.name}</p>
                          <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-medium">{item.product.price}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-4 space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>KSh {getTotalPrice().toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>KSh 250</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-2 mt-2">
                    <span>Total</span>
                    <span>KSh {(getTotalPrice() + 250).toLocaleString()}</span>
                  </div>
                </div>
              </div>
              
              {/* Customer Information & Payment */}
              <div className="md:col-span-2">
                {!clientSecret ? (
                  <div className="bg-white p-6 rounded-lg shadow mb-6">
                    <h2 className="text-xl font-bold mb-4">Customer Information</h2>
                    <Form onSubmit={handleInitiateCheckout}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input 
                            id="firstName"
                            name="firstName" 
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input 
                            id="lastName"
                            name="lastName" 
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input 
                            id="email"
                            name="email" 
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone</Label>
                          <Input 
                            id="phone"
                            name="phone" 
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      
                      <h3 className="font-bold mb-4">Shipping Address</h3>
                      <div className="space-y-4 mb-6">
                        <div>
                          <Label htmlFor="address">Address</Label>
                          <Input 
                            id="address"
                            name="address" 
                            value={formData.address}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="city">City</Label>
                            <Input 
                              id="city"
                              name="city" 
                              value={formData.city}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="postalCode">Postal Code</Label>
                            <Input 
                              id="postalCode"
                              name="postalCode" 
                              value={formData.postalCode}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-kenya-blue hover:bg-kenya-blue-dark"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <>
                            <Spinner size="xs" className="mr-2" /> Processing...
                          </>
                        ) : (
                          "Proceed to Payment"
                        )}
                      </Button>
                    </Form>
                  </div>
                ) : (
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-bold mb-4">Payment</h2>
                    <Elements stripe={stripePromise} options={{ clientSecret }}>
                      <StripePaymentForm />
                    </Elements>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
