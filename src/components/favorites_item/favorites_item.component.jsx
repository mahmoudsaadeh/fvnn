
import React from "react";

import './favorites_item.styles.scss';

import { IoBagAddSharp } from 'react-icons/io5';
import { MdOutlineFavorite } from 'react-icons/md';

const FavoritesItem = () => {



    return (
        <div className='favorites-item'>
            <div className='favorites-item-image-div fv'>
                <img className='favorites-item-image' src='https://images.unsplash.com/photo-1463123081488-789f998ac9c4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80' alt='Cart Item Image' title='Cart Item Image' />
            </div>
            <div className='favorites-item-title fv'>Bananas</div>
            <div className='favorites-item-price fv'>&#36;5</div>

            <div className='favorites-item-icons fv'>
                <IoBagAddSharp 
                    className='add-to-cart-icon' 
                    title='Add to Cart' 
                    size={31} />
                <MdOutlineFavorite
                    className='remove-from-fav-icon'
                    title='Remove from Favorites'
                    size={31}/>
            </div>
        </div>
    );
};

export default FavoritesItem;