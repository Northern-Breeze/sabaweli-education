import * as React from "react";
import { useHistory } from 'react-router-dom';
import Animation from "../../../components/Animation";
import PaySuccess from "../../../assets/annimation/payment-success.json";

import './Steps.scss';
import Button from "../../../components/Button";

export default function PaymentSuccess(): JSX.Element {
    const history = useHistory();
  return (
    <div className="payment-results">
      <Animation fileObject={PaySuccess} />
      <Button className="secondary" onClick={() => {
          history.push('/profile')
      }}>
        Go To Dashboard
      </Button>
    </div>
  );
}
