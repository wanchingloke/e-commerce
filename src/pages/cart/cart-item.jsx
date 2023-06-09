import React, { useContext } from "react";
import '../cart/cart.css';
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
    const {id, productName, price,productImage, productDesc, productSize} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
    
    return (<div className="cart-item">
        <img src={productImage} className="cart-image"/>
        <div>
            <p id="product-name">{productName} - ${price}</p>
            <p id="product-desc">{productDesc}</p>
            <p id="product-size">{productSize}</p>
            <div className="count-handler">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>)
}