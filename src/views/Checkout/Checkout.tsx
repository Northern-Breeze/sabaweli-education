import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { notification } from "antd";
import { useLocation } from "react-router-dom";
import "./Checkout.scss";

const CARD_ELEMENT_OPTIONS = {
  hidePostalCode: true,
  style: {
    base: {
      iconColor: "rgb(240, 57, 122)",
      color: "#000",
      fontSize: "16px",
      fontFamily: '"Open Sans", sans-serif',
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "#CFD7DF",
      },
      margin: "5px",
    },
    invalid: {
      color: "#e5424d",
      ":focus": {
        color: "#303238",
      },
    },
  },
};

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    const cartElements = elements?.getElement(CardElement);
    if (cartElements && stripe) {
      event.preventDefault();
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cartElements,
        billing_details: { name: "Jenny Rosen" },
      });
      if (error) {
        notification.open({
          message: "Error",
          description: error.message,
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
      } else {
        notification.open({
          message: "Success",
          description: "Payment processed successfully, waiting on server",
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
        console.log(paymentMethod);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={CARD_ELEMENT_OPTIONS} />
      <button type="submit" disabled={!stripe} className="button">
        Pay
      </button>
    </form>
  );
};

const stripePromise = loadStripe(
  "pk_test_51ISOQsADCkog3oCXLeCvQPTszBKL15kWCUsvh7gsmtUMucrLoWfeLpCzW7QaQvWXUeSCal78oGv1fZpEoAVUfh7600MuTGLXvd"
);

console.log(process.env.REACT_APP_STRIPE_DEV_KEY);

export default function Checkout(): JSX.Element {
  const [price, setPrice] = React.useState(0);
  const [title, setTitle] = React.useState("");

  const location = useLocation();

  React.useEffect(() => {
    const { state }: any = location;
    setPrice(state?.price);
    setTitle(state?.package);
  }, [location]);

  return (
    <div className="checkout-container">
      <div className="form-checkout">
        <div className="product-info">
          <div>
            <h3 className="product-title">{title} - 10MB</h3>
          </div>
          <div>
            <h4 className="product-price">{`$ ${price}`}</h4>
          </div>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}
