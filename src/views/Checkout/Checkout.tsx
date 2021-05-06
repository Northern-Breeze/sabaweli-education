import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./Form/CardForm";
import { useLocation } from "react-router-dom";
import Loading from '../../components/Loading';
import "./Checkout.scss";

interface LocationState {
  from: {
    pathname: string;
  };
  title: string;
  price: number;
  package: string;
  name: string;
}

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_DEV_KEY || "");

export default function Checkout(): JSX.Element {
  
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

  if (!price || !title) {
    return <Loading />
  }

  return (
    <div className="checkout-container">
      <div className="form-checkout">
        <div className="product-info">
          <div>
            <h3 className="product-title">{title} - {name}</h3>
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
