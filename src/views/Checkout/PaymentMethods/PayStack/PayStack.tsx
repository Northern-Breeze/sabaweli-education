import * as React from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Notification from 'antd/es/notification';

import { config as configs } from "../../../../config/configs";
import Server from "../../../../service/server";

type Props = {
  email: string;
  loading: boolean;
};

interface LocationState {
  state: {
    from: {
      pathname: string;
    };
    title: string;
    price: number;
    package: string;
    name: string;
  };
}

export default function PayStack(props: Props): JSX.Element {
  const { loading } = props;
  const [price, setPrice] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const [name, setName] = React.useState("");
  const mounted = React.useRef<boolean>(true);

  const location = useLocation();
  const navigate = useNavigate();


  React.useEffect(() => {
    const { state } = location as LocationState;

    if (mounted.current) {
      setPrice(state?.price);
      setTitle(state?.package);
      setName(state?.name);
    }
    return () => {
      mounted.current = false;
    };
  }, [location]);

  console.log(configs.PAY_STACK_PUBLIC);
  
  const initializePayment = async () => {
    try {
        const response = await axios.post('https://api.paystack.co/transaction/initialize', {
            email: 'example@email.com',
            amount: 'price',
            name: title
        }, {
            headers: {
                Authorization: `Bearer ${configs.PAY_STACK_PUBLIC}`
            }
        });
        if (!response.data.status) {
            Notification.error({
                message: 'Failed to initialize'
            })
        } else {
            window.open(`${response.data.data.reference}`);
            // const verify = await Server.verifyPayStackPayment(response.data.data.reference);
            // if (!verify.data.success) {
            //     Notification.error({
            //         message: verify.data.success
            //     })
            // } else {
            //     Notification.error({
            //         message: verify.data.success
            //     })
            //     navigate('/profile');
            // }
        }
    } catch (error) {
        console.log(error);
        Notification.error({
            message: 'Something went wrong, please try again later'
        })
    }
  };

  return (
    <div className='stripe-container'>
      <div className='form-checkout'>
        <div className='product-info'>
          <div>
            <h3 className='product-title'>
              {title} - {name}
            </h3>
          </div>
          <button
            type='submit'
            className='button primary'
            disabled={loading}
            onClick={() => initializePayment()}
          >
            $ {price} Pay Now
          </button>
        </div>
      </div>
    </div>
  );
}
