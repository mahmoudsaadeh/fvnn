
import React from "react";

import './cart.styles.scss';

import CartItem from "../../components/cart_item/cart_item.component";


const CartPage = () => {


    return (
        <div className='cart'>
            <div className='cart-header'>
                <h2 className='product-h h'>Product</h2>
                <h2 className='price-h h'>Price</h2>
                <h2 className='quantity-h h'>Quantity</h2>
                <h2 className='total-h h'>Total</h2>
            </div>
            <hr className='horizontal-line' />
            <CartItem />
            <CartItem />
        </div>
    );
};

export default CartPage;