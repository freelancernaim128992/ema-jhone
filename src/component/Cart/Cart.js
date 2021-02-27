import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total , product) => total + product.price , 0 )
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (shipping + total + Number(tax)).toFixed(2)
    const formateNumber = (num) => {
        const number = num.toFixed(2);
        return Number(number);
    }
    return (
        <div>
            <div className="total-money-header">
                <h2>Order Summary</h2>
                <p>Items ordered: {cart.length}</p>
            </div>
            <div className="total-money-info">
                <p>Items: ${formateNumber(total)}</p>
                <p>Shipping & Handing: ${shipping}</p>
                <p>Total before tax: ${shipping + total}</p>
                <p>Estimated Tax: ${tax}</p>
                <h3>Order Total: ${grandTotal}</h3>
            </div>
            <div className="btn">
                <button>Review Your Order</button>
            </div>
        </div>
    );
};

export default Cart;