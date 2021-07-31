import * as React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../Form/CardForm";
import { useLocation } from "react-router-dom";

import './Stripe.scss';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_DEV_KEY || "");

interface LocationState {
    from: {
      pathname: string;
    };
    title: string;
    price: number;
    package: string;
    name: string;
  }

export default function Stripe(): JSX.Element {
  const [price, setPrice] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const [name, setName] = React.useState("");
  const location = useLocation<LocationState>();
  React.useEffect(() => {
    const { state } = location;
    setPrice(state?.price);
    setTitle(state?.package);
    setName(state?.name);
  }, [location]);
  return (
    <div className="stripe-container">
      <div className="form-checkout">
        <div className="product-info">
          <div>
            <h3 className="product-title">
              {title} - {name}
            </h3>
          </div>
          <div>
            <h4 className="product-price">{`$ ${price}`}</h4>
          </div>
        </div>
        <Elements stripe={stripePromise}>
          <CheckoutForm title={title} amount={price} />
        </Elements>
      </div>
    </div>
  );
}
