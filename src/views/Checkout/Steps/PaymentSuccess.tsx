import * as React from "react";
import { useNavigate } from 'react-router-dom';
import Animation from "../../../components/Animation";
import PaySuccess from "../../../assets/annimation/payment-success.json";

import './Steps.scss';

export default function PaymentSuccess(): JSX.Element {
    const navigate = useNavigate();
    React.useEffect(() => {
      setTimeout(() => {
        navigate('/profile');
      }, 3000)
    },[])
  return (
    <div className="payment-results">
      <Animation fileObject={PaySuccess} />
    </div>
  );
}
