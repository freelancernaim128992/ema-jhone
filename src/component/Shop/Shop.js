import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
const Shop = () => {
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) => {
        const newCart = [...cart,product]
        setCart(newCart);
    }
    const first10 = fakeData.slice(0,10)
    const [products,setProducts] = useState(first10);
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(items => <Products 
                        products={items} 
                        handleAddProduct={handleAddProduct}
                        ></Products>)
                }
            </div>
           <div className="cart-container">
                <Cart cart={cart}></Cart>
           </div>
        </div>
    );
};
export default Shop;