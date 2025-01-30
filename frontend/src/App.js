import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/products/")
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));

        axios.get("http://localhost:8000/cart/")
            .then(response => setCart(response.data))
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>E-Commerce App</h1>
            <ProductList products={products} setCart={setCart} />
            <Cart cart={cart} setCart={setCart} />
        </div>
    );
}

export default App;
