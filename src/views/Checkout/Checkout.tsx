import * as React from "react";

import PaymentSuccess from './Steps/PaymentSuccess';
import "./Checkout.scss";
import PaymentMethods from "./PaymentMethod";


export default function Checkout(): JSX.Element {
  
  if (new URLSearchParams(location.search).get('payment-status') === 'success') {
    return <PaymentSuccess />
  }

  return (
    <PaymentMethods />
  );
}
