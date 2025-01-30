import React from "react";
import axios from "axios";

function ProductList({ products, setCart }) {
    const addToCart = async (productId) => {
        const response = await axios.post("http://localhost:8000/cart/", { product: productId, quantity: 1 });
        setCart(prev => [...prev, response.data]);
    };

    return (
        <div>
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        {product.name} - ${product.price}
                        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
