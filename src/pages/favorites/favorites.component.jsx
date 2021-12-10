
import React from "react";

import './favorites.styles.scss';

import FavoritesItem from "../../components/favorites_item/favorites_item.component";


const FavoritesPage = () => {

    

    return (
        <div className='favorites'>
            <div className='favorites-header'>
                <h2 className='product-f f'>Product</h2>
                <h2 className='price-f f'>Price</h2>
            </div>
            <hr className='hr-line' />
            <FavoritesItem />
            <FavoritesItem />
            <FavoritesItem />
        </div>
    );
};

export default FavoritesPage;