import * as React from "react";
import { useHistory } from 'react-router-dom';
import Animation from "../../../components/Animation";
import PaySuccess from "../../../assets/annimation/payment-success.json";

import './Steps.scss';

export default function PaymentSuccess(): JSX.Element {
    const history = useHistory();
    React.useEffect(() => {
      setTimeout(() => {
        history.push('/profile');
      }, 3000)
    },[])
  return (
    <div className="payment-results">
      <Animation fileObject={PaySuccess} />
    </div>
  );
}
