import React from 'react';

const Products = (props) => {
    return (
        <div>
            <h1>{props.products.name}</h1>
        </div>
    );
};

export default Products;