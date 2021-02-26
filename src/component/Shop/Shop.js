import React, { useState } from 'react';
import './Shop.css';
import fakeData from '../../fakeData';
const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [products,setProducts] = useState(first10);
    return (
        <div>
           <ul>
               {
                    products.map(items => <li>{items.name}</li>)
                }
           </ul>
        </div>
    );
};
export default Shop;