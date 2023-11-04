import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const Payment = () => {
  const stripePromise = loadStripe(
    "pk_test_51O1C3WIXrs8l40b4FeFgjHmMpDjLoVo4IzgphFZhkZJCR6pjRKXdUf78VzXPpTPVEfEwSG7VoAKGxN4Z6pKmOvMl000km5hTLd"
  );
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
      
    </div>
  );
};

export default Payment;
