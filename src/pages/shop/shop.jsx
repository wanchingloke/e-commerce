import React from "react";
import {PRODUCTS} from '../../products.js/Products';
import {Product} from "./product.jsx";
import "../shop/shop.css";

export const Shop = () => {
    return (
        <div className="shop">
            <div >
                <h1 className="shop-title">Welcome to</h1>
                <h1 className="shop-name">Hooked on Yarn</h1>
            </div>
            <div className="products">
                {PRODUCTS.map((product) => (
                    <Product data={product}/>
                ))}
            </div>
        </div>
    )
}