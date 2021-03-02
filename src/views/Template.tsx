/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Logo from '../assets/logo.png';

import './Template.scss';


export default function Template(props: { children: any; }) {
    const { children } = props;
    return (
       <div>
            <nav className="navbar sleepy-warpper" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <img src={Logo} className="logo" alt="Sleepybears" />
                    </div>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                    <a className="navbar-item">
                        How it works?
                    </a>

                    <a className="navbar-item">
                       Pricing
                    </a>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                        More
                        </a>

                        <div className="navbar-dropdown">
                        <a className="navbar-item">
                            About
                        </a>
                        <a className="navbar-item">
                            Jobs
                        </a>
                        <a className="navbar-item">
                            Contact
                        </a>
                        <hr className="navbar-divider" />
                        <a className="navbar-item">
                            Report an issue
                        </a>
                        </div>
                    </div>
                    </div>

                    <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                        <button className="button">
                            Sign In                           
                        </button>
                        <button className="button seconday">
                            Sign Up
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                </nav>
                {children}
       </div>
    )
}
