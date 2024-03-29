import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import './navbar.css';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/cart">
                    <ShoppingCart className="shopping-cart" size = {40}/> 
                </Link>
                <Link to="/e-commerce"><p className="shop-text">Shop</p></Link>

            </div>
        </div>
    );
}