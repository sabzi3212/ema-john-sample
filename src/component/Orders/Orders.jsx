import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCartShopping, faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'

const Orders = () => {

    const SavedCart = useLoaderData();
    const [cart, setCart] = useState(SavedCart);
    const handleRemoveFromCart = (id) =>{
        console.log(id);
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
           <div className='review-container'>
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
                }
           </div>
           <div className='cart-container'>
            <Cart cart = {cart} handleClearCart ={handleClearCart}>
                <Link to="/checkout">
                <button className='btn-proceed'>Proceed To Checkout<FontAwesomeIcon className='delete-icon' icon={faArrowRight}/></button></Link>
            </Cart>
           </div>
        </div>
    );
};

export default Orders;