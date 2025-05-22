
import { useState } from 'react';
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";
import { toast } from "sonner";
import { useCartStore } from "@/stores/cartStore";
import { Button } from "@/components/ui/button";

const StripePaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const { clearCart } = useCartStore();
    const [message, setMessage] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        setIsProcessing(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/order-success`,
            },
            redirect: 'if_required'
        });

        if (error) {
            if (error.type === "card_error" || error.type === "validation_error") {
                setMessage(error.message || "An unexpected error occurred.");
            } else {
                setMessage("An unexpected error occurred.");
            }
            setIsProcessing(false);
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {
            toast.success("Payment successful! Your order is confirmed.");
            clearCart();
            window.location.href = '/order-success';
        } else {
            setMessage("Something went wrong with your payment. Please try again.");
            setIsProcessing(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement className="mb-6" />
            <Button
                disabled={isProcessing || !stripe || !elements}
                type="submit"
                className="w-full bg-kenya-blue hover:bg-kenya-blue-dark font-medium"
            >
                <span>
                    {isProcessing ? 'Processing...' : 'Pay Now'}
                </span>
            </Button>

            {message && <div className="mt-4 text-red-500 text-sm">{message}</div>}
        </form>
    );
};

export default StripePaymentForm;
