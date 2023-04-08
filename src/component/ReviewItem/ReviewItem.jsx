import React from 'react';
import './ReviewItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({product, handleRemoveFromCart}) => {
    return (
        <div className='review-item'>
            <img src={product.img} />
            <div className='review-details'>
            <h2 className='review-title'>{product.name}</h2>
            <p>Price: <span className='color'>${product.price}</span></p>
            <p>Shipping Charge: ${product.shipping}</p>
            </div>
            <button onClick={()=> handleRemoveFromCart(product.id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrash}/></button>

        </div>
    );
};

export default ReviewItem;