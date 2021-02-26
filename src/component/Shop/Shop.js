import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Products from '../Products/Products';
const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [products,setProducts] = useState(first10);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(items => <Products products={items}></Products>)
                }
            </div>
           <div className="cart-container">
                <h3>This is cart area</h3>
           </div>
        </div>
    );
};
export default Shop;