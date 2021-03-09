/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Logo from '../assets/logo.png';
import { Link, useHistory } from 'react-router-dom';
import './Template.scss';


export default function Template(props: { children: any; }) {
    const { children } = props;
    const [isActive, setActive] = React.useState(false);
    const history = useHistory()
    return (
       <div>
            <nav className="navbar sleepy-warpper" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <img src={Logo} className="logo" alt="Sleepybears" />
                    </div>

                    <a role="button" 
                        className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}  
                        aria-label="menu" 
                        aria-expanded="false" 
                        data-target="navbarBasicExample"
                        onClick={(e) => {
                            setActive(!isActive);
                        }}
                        >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
                    <div className="navbar-start">
                    <Link to="/features" className="navbar-item">
                        Features
                    </Link>

                    <Link to="/pricing" className="navbar-item">
                       Pricing
                    </Link>

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
                        <button 
                            className="button"
                            onClick={() => {
                                history.push('/login')
                            }}
                            >
                            Sign In                           
                        </button>
                        <button 
                            className="button seconday"
                            onClick={() => {
                                history.push('/register')
                            }}
                            >
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