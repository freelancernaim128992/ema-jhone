import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    const {img,name,seller,price,stock} = props.products
    return (
        <div className="products-container">
            <div className="product-image">
                <img src={img} alt=""/>
            </div>
            <div className="product-info">
                <h2>{name}</h2>
                <p>By: {seller}</p>
                <h3>$ {price}</h3>
                <p>Only {stock} left in a stock - order soon</p>
                <button 
                onClick={() => props.handleAddProduct(props.products)} 
                className="button"
                ><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Products;