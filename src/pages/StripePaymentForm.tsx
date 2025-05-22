import {useEffect, useState} from 'react'
import {useStripe, useElements} from "@stripe/react-stripe-js";
import {PaymentElement} from "@stripe/react-stripe-js";
import {toast} from "sonner";
import {useCartStore} from "@/stores/cartStore.ts";
import {Button} from "@/components/ui/button.tsx";

const StripePaymentForm = () => {
    const stripe = useStripe();
    const { clearCart } = useCartStore();
    const elements = useElements();
    const [message, setMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        setIsProcessing(true);

        const {error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url:`${window.location.origin}/order-success`,
            }
        })
        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }
        setIsProcessing(false);
            toast.success("Order placed successfully!");
            clearCart();

    }
    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement/>
                <Button
                    disabled={isProcessing}
                    type="submit"
                    className="w-full bg-kenya-blue hover:bg-kenya-blue-dark font-medium"
                >
                <span>
                    {isProcessing ? 'Processing...' : 'Pay Now'}
                </span>
            </Button>

            {message && <div>{message}</div>}
        </form>
    )
}
export default StripePaymentForm
