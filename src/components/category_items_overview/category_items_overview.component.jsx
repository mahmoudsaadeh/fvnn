
import React from "react";
import CategoryItem from "../category_item/category_item.component";

import './category_items_overview.styles.scss';

// A component that shows only 3 or 4 items from every category
const CategoryItemsOverview = ({ title, items }) => {

    // .filter((item, index) => index < 4)
    // .filter((item, index) => item.item_name === 'grapes')
    /*
    <CategoryItem 
                    className='overview-item' 
                    key={item.id}
                    item_name={} 
                    price={} 
                    imageUrl={} />
    */

                    /*
                    items.map((item) => {
                    console.log(item)
                })
                    */

    /*
    items.map(({id, imageUrl, item_name, price}) => {
                    <CategoryItem 
                        className='overview-item' 
                        key={id}
                        item_name={item_name} 
                        price={price} 
                        imageUrl={imageUrl} />
                })
    */

    return (
        <div className='items-overview'>
            <h1 className='overview-title'>{title}</h1>
            <div className='overview-items'>
            {
                items
                .filter((item, index) => index < 4)
                .map(({id, imageUrl, item_name, price}) => (
                    <CategoryItem 
                        key={id}
                        item_name={item_name} 
                        price={price} 
                        imageUrl={imageUrl} />
                ))
            }
            </div>
        </div>
    );
};

export default CategoryItemsOverview;