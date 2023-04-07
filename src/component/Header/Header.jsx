import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header'>

            <img src={logo} alt="" />
            <div className='nav'>
                <Link to="/">Shop</Link>
                <Link to="/orderReview">Order Review</Link>
                <Link to="/manageInventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
            </div>

        </nav>
    );
};

export default Header;