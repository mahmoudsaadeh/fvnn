
import React from "react";

import './footer.styles.scss';
import footer_logo from '../../assets/footer_logo.png';
//import logo_trans from '../../assets/logo_transparent.png';


import { BsTwitter } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import { FaInstagram } from 'react-icons/fa'
import { Link } from "react-router-dom";


const Footer = () => {


    return (
        <div className='footer-main-container'>
            <div className='footer-container'>
                <div className='footer-col-1'>
                    <img src={footer_logo} className='footer-logo' title='Logo' alt='logo' />
                    <h3 className='footer-logo-text'>
                        Thoughtful marketing for raising healthy eating awareness.
                    </h3>
                </div>
                <div className='footer-col-2'>
                    <h3 className='subscription-text'>
                        Subscribe for our &#8220;healthy eating&#8221; weekly newsletter
                    </h3>
                    <input type='email' className='subscription-input' placeholder='Your Email' />
                    <input type='button' className='subscription-button' value='Subscribe' />
                </div>
                <div className='footer-col-3'>
                    <h3 className='social-media-text'>Follow Us</h3>
                    <div className='social-media-icons'>
                        <Link className='link' to=''>
                            <FaInstagram className='footer-icon' size={25} />
                        </Link>
                        <Link className='link' to=''>
                            <ImFacebook className='footer-icon' size={25} />
                        </Link>
                        <Link className='link' to=''>
                            <BsTwitter className='footer-icon' size={25} />
                        </Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className='footer-container-2'>
                <h4 className='copyright'>
                    &copy; 2021 FVNN. Healthy Eating E-Commerce in Beirut, Lebanon. All Rights Reserved
                </h4>
                <p className='terms-n-privacy'>
                    <Link className='footer-link link' to=''>
                        Privacy Policy
                    </Link>
                    <Link className='footer-link link' to=''>
                        Terms &#38; Conditions
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Footer;