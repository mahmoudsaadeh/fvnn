
import React from "react";
import { Link } from "react-router-dom";
// import logo from '../../assets/logo.png';
import logo2 from '../../assets/facebook_cover_photo_1.png';
import { MdFavorite } from 'react-icons/md';
import { AiFillShopping } from 'react-icons/ai';

import './header.styles.scss';

const Header = () => {



    return (
        <div className='header'>
            <Link className='logo-container header-link' to=''>
                <img src={logo2} className='logo' title='Logo' alt='logo' />
            </Link>
            <div className='header-options'>
                <Link className='option header-link' to='/'>
                    Home
                </Link>
                <Link className='option header-link' to='/shop'>
                    Shop
                </Link>
                <Link className='option header-link' to='/contactUs'>
                    Contact Us
                </Link>
                <Link className='option header-link' to='/signInPage'>
                    Sign In
                </Link>
            </div>
            <div className='header-icons'>
                <Link className='header-link icon-link fav' to='/favorites'>
                    <MdFavorite size={27} />
                </Link>
                <Link className='header-link icon-link' to='/cart'>
                    <AiFillShopping size={28} />
                </Link>
            </div>
        </div>
    );
};

export default Header;

