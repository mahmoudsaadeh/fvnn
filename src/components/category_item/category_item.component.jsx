
import React from "react";

import './category_item.styles.scss';

import { MdFavorite } from 'react-icons/md';
import { AiFillShopping } from 'react-icons/ai';
import { BsInfoLg } from 'react-icons/bs';

// import logo from '../../assets/footer_logo.png';


const CategoryItem = ({ item_name, price, imageUrl }) => {

    /*
        <div className='item-image' style={{
                backgroundImage: `url(${'https://media.istockphoto.com/photos/peeled-banana-on-white-background-photo-with-clipping-path-picture-id1154935375?k=20&m=1154935375&s=612x612&w=0&h=TALq0lrR1PI5XuGxqjUnss-tJBIUHuys1lCDbzSrPKU='})`
            }} />
    */

    return (
        <div className='category-item'>
            <div className='image-icons-div'>
                <img className='item-image' src={imageUrl} alt='item' />
                <div className='item-icons'>
                    <MdFavorite className='item-icon' title='Add to Favorites' size={21} />
                    <AiFillShopping className='item-icon' title='Add to Cart' size={21} />
                    <BsInfoLg className='item-icon' title='More Info' size={21} />
                </div>
            </div>
            <div className='item-description'>
                <h3 className='item-title'>{item_name}</h3>
                <h4 className='item-price'>&#36;{price}</h4>
            </div>
        </div>
    );
};

export default CategoryItem;