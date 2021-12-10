
import React, { useEffect } from "react";

import './all_items_overview.styles.scss';

import CategoryItem from "../../components/category_item/category_item.component";

// A page that shows ALL the items of a specific category
const AllItemsOverview = ({ title, items }) => {

    useEffect(() => {
        // console.log(title);
        // console.log(items);
    });

    return (
        <div className='all-items-overview'>
            <h1 className='all-items-overview-title'>{title}</h1>
            <div className='all-items-overview-items'>
                {
                    items.map(({ id, imageUrl, item_name, price }) => (
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


export default AllItemsOverview;