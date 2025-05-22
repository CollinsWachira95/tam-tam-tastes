import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

interface CheckoutFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  paymentMethod: "card" | "mpesa";
}

export default function CheckoutForm() {
  const [formData, setFormData] = useState<CheckoutFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    location: "",
    paymentMethod: "card",
  });

  const [loading, setLoading] = useState(false);
  const { cartItems, clearCart, getTotalPrice } = useCart();
  const navigate = useNavigate();

  const user = null; // Replace with your user state/context if applicable

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation example
    if (
      !formData.firstName.trim() ||
      !formData.lastName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.location.trim()
    ) {
      alert("Please fill in all the fields");
      setLoading(false);
      return;
    }

    // M-Pesa payment flow
    if (formData.paymentMethod === "mpesa") {
      const mpesaPaymentForm = {
        mpesa_number: formData.phone.trim(),
        name: user?.firstName || formData.firstName.trim(),
        amount: getTotalPrice() + 250, // Assuming 250 is delivery fee
      };

      // Kenyan phone number validation regex
      const kenyanPhoneNumberRegex =
        /^(07\d{8}|01\d{8}|2547\d{8}|2541\d{8}|\+2547\d{8}|\+2541\d{8})$/;

      if (!kenyanPhoneNumberRegex.test(mpesaPaymentForm.mpesa_number)) {
        setLoading(false);
        return alert("Invalid phone number");
      }

      try {
        const response = await axios.post(
          "https://mpesa-backend-2.vercel.app/api/stkpush",
          mpesaPaymentForm
        );

        const checkoutRequestId = response.data.data.CheckoutRequestID;
        console.log("CheckoutRequestID:", checkoutRequestId);
        alert("STK push sent successfully");

        toast.success("Order placed successfully!");
        clearCart();
        navigate("/order-success");

        setLoading(false);
        return; // stop further execution
      } catch (error: any) {
        setLoading(false);
        alert("Error: " + (error.message || "Something went wrong"));
        return;
      }
    }

    // For other payment methods (e.g. card), you can add logic here
    // Placeholder success flow:
    toast.success("Order placed successfully!");
    clearCart();
    navigate("/order-success");
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="location"
        placeholder="Delivery Location"
        value={formData.location}
        onChange={handleChange}
        required
      />

      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="card"
          checked={formData.paymentMethod === "card"}
          onChange={handleChange}
        />
        Card
      </label>
      <label>
        <input
          type="radio"
          name="paymentMethod"
          value="mpesa"
          checked={formData.paymentMethod === "mpesa"}
          onChange={handleChange}
        />
        M-Pesa
      </label>

      <button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Place Order"}
      </button>
    </form>
  );
}
