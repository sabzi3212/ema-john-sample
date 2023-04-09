import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight, faCartShopping, faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart();
        const savedCart = [];


        //step 1 get id

        for (const id in storedCart) {
            //step 2 get the product by using id
            // console.log(id);
            const addedProduct = products.find(product => product.id === id)
            
            //step 3 get quantity of product
            const quantity = storedCart[id];
            // console.log(quantity);
            if (addedProduct) {
                addedProduct.quantity = quantity;

                // step 4 add the added product to the saved cart
                savedCart.push(addedProduct);    
                
            }
            // console.log(addedProduct);

        }
        //step 5 set cart 
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id} product={product} handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handleClearCart ={handleClearCart}>
                    <Link to="/orderReview"><button className='btn-proceed'>Review Order<FontAwesomeIcon className='delete-icon' icon={faArrowCircleRight}/></button></Link>
                </Cart>
            </div>
        </div>

    );
};

export default Shop;