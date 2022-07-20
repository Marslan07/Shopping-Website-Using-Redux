import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const updateItem =useSelector((state)=> state.cart );
    return (
        <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            margin:'1rem',
        }}
    >
            <span className="logo">REDUX STORE</span>
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                <Link className='navLink' to="/cart">
                <span className="cartCount">Cart items: {updateItem.length}</span>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;