import React from "react";
import axios from "axios";

function Cart({ cart, setCart }) {
    const removeFromCart = async (cartId) => {
        await axios.delete(`http://localhost:8000/cart/${cartId}/`);
        setCart(cart.filter(item => item.id !== cartId));
    };

    return (
        <div>
            <h2>Cart</h2>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        Product ID: {item.product}, Quantity: {item.quantity}
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Cart;
