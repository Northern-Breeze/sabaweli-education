import * as React from 'react'
import { PayPalButton } from "react-paypal-button-v2";
import { useLocation } from 'react-router-dom';
import Notification from 'antd/es/notification';

import Server from '../../../../service/server';
import { config } from '../../../../config/configs';
interface LocationState {
    from: {
      pathname: string;
    };
    title: string;
    price: number;
    package: string;
    name: string;
  }


export default function Paypal(): JSX.Element {
    const [price, setPrice] = React.useState(0);
    const [title, setTitle] = React.useState("");
    const [name, setName] = React.useState("");
    const mounted = React.useRef<boolean>(true);
  
    const location = useLocation<LocationState>();

    React.useEffect(() => {
        const { state } = location;
        if(mounted.current){
            setPrice(state?.price);
            setTitle(state?.package);
            setName(state?.name);
        }
        return () => {
            mounted.current = false;
        }
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
          <PayPalButton
                amount={price}
                onSuccess={(data: { orderID: string }) => {
                    return Server.paypalCheck({ orderID: data.orderID }).then(response => {
                        if(response.data.success){
                            Notification.open({
                                type: 'success',
                                message: response.data.message
                            })                             
                        } else {
                            Notification.open({
                                type: 'error',
                                message: response.data.message
                            })                            
                        }
                    }).catch(error => {
                        console.log(error);
                        Notification.open({
                            type: 'error',
                            message: 'Could not process payment, try again later'
                        })
                    })
                }}
            onError={(error: string) => {
                console.log(error);
                Notification.open({
                    type: 'error',
                    message: 'Paypal payment gateway failed please try another'
                })
            }}
            options={{
                clientId: config['PAYPAL_CLIENT_ID']
            }}
            />
        </div>
      </div>
    )
}
