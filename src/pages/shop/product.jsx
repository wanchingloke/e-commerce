import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
    const {id, productName, price,productImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext);
    const cartItemAmount = cartItems[id];
    return (
        <div className="product">
            <div className="product-group">
                <img src={productImage} />
                <p>{productName} - ${price}</p>
                <button className="addToCartButton" onClick={() => addToCart(id)}> 
                Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</> }
                </button>
            </div>
        </div>
    );
};

