import React, { useContext } from "react";
import { PRODUCTS } from "../../products.js/Products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import '../cart/cart.css';
import { useNavigate } from "react-router-dom";

export const Cart = () => {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
    return (
        <div className="cart">
            <div>
                <h1>Your Shopping Cart</h1>
            </div>
            <div className="cart-items">
                {PRODUCTS.map((product) => {
                    if (cartItems[product.id] !== 0) {
                        return <CartItem data={product}/>
                    }
                })}
            </div>
            {totalAmount > 0 ?
            <div className="check-out">
                <p>Total: ${totalAmount}</p>
                <button className="cont-shopping" onClick={() => navigate("/e-commerce")}>Continue Shopping</button>
                <button className="checkout">Checkout</button>
            </div>
            : 
            <div className="empty-cart">
                <img src={require('../../assets/cart-empty.jpg')} alt="Your cart is empty!"/>
                <p>Your Cart is Empty</p>
            </div>
            }
        </div>
    );
}