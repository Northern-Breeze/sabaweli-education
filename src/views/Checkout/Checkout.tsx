import React from 'react';
import ReactDOM from 'react-dom';
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: any) => {
      const cartElements = elements?.getElement(CardElement)
    if (cartElements && stripe) {
        event.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card: cartElements,
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

const stripePromise = loadStripe('pk_test_51ISOQsADCkog3oCXLeCvQPTszBKL15kWCUsvh7gsmtUMucrLoWfeLpCzW7QaQvWXUeSCal78oGv1fZpEoAVUfh7600MuTGLXvd');

const Checkout = () => (
  <Elements stripe={stripePromise}>
    <CheckoutForm />
  </Elements>
);

export default Checkout;