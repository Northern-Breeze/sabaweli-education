import * as React from 'react'
import { useHistory } from 'react-router-dom';

import Template from '../../Template';

import './Pricing.scss';


export default function Pricing() {
    const history = useHistory();
    return (
        <Template>
            <div className="pricing-container">
                <div className="columns">
                    <div className="cards">
                        <div className="price-header">
                            <span>BASIC</span>
                        </div>
                        <div className="price-price">$ 2</div>
                        <div className="price-body">
                            Great if you just want to get your feet wet and start using our services
                        </div>
                        <div className="price-footer">
                            GET 20 MB
                        </div>
                        <div className="price-buy">
                            <button 
                                className="button"
                                onClick={() => {
                                    history.push({
                                        pathname: '/checkout',
                                        state: { package: 'basic', price: 2.00 }
                                    })
                                }}
                                >
                                GET STARTED
                            </button>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="price-header">
                                <span>Radical</span>
                            </div>
                            <div className="price-price">$ 14</div>
                            <div className="price-body">
                                Great if you just want to get your feet wet and start using our services
                            </div>
                            <div className="price-footer">
                                GET 30 MB
                            </div>
                            <div className="price-buy">
                                <button className="button">
                                    GET STARTED
                                </button>
                            </div>
                    </div>
                    <div className="cards">
                        <div className="price-header">
                                <span>Pro</span>
                            </div>
                            <div className="price-price">$ 30</div>
                            <div className="price-body">
                                Great if you just want to get your feet wet and start using our services
                            </div>
                            <div className="price-footer">
                                GET 80 MB
                            </div>
                            <div className="price-buy">
                                <button className="button">
                                    GET STARTED
                                </button>
                            </div>
                    </div>
                </div>
            </div>
        </Template>
    )
}
