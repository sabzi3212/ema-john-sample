import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCoffee } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const{img, name, price, seller, ratings} = props.product;
    const handleAddToCart= props.handleAddToCart;
    
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className='product-info'>
            <h2>{name}</h2>
            <p> Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Ratings {ratings}</p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(props.product)}>Add to Cart
            <FontAwesomeIcon icon={faCartShopping}/></button>
        </div>

    );
};

export default Product;