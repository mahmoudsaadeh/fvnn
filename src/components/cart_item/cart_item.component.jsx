
import React from "react";

import './cart_item.styles.scss';

import { IoBagRemoveSharp } from 'react-icons/io5';
import { MdOutlineFavoriteBorder } from 'react-icons/md';

const CartItem = ({ imageUrl, title, price, quantity, total }) => {


    return (
        <div className='cart-item'>
            <div className='item-image-div x'>
                <img className='item-image' src='https://images.unsplash.com/photo-1463123081488-789f998ac9c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80' alt='Cart Item Image' title='Cart Item Image' />
            </div>
            <div className='item-title x'>Bananas</div>
            <div className='item-price x'>&#36;5</div>
            <div className='item-add-remove x'>
                <button className='item-remove b'>
                    &#8722;
                </button>
                <button className='item-count b'>
                    2
                </button>
                <button className='item-add b'>
                    &#43;
                </button>
            </div>
            <div className='item-total x'>&#36;11</div>
            <div className='item-icons x'>
                <IoBagRemoveSharp 
                    className='remove-from-cart-icon' 
                    title='Remove from Cart' 
                    size={31} />
                <MdOutlineFavoriteBorder
                    className='add-to-fav-icon'
                    title='Add to Favorites'
                    size={31}/>
            </div>
        </div>
    );
};

/*
<button className='add-to-fav-btn'>
                    Add to Favorites
                </button>
*/

export default CartItem;