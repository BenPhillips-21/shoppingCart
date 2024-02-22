import { useParams } from "react-router"
import { trousers } from './data';
import React, { useState } from 'react';

const Product = ({ product, cart, setCart }) => {
    const [quantity, setQuantity] = useState(0);
    console.log("Cart in product:", cart)

    const handleSubmit = (event) => {
        event.preventDefault();
        let leProduct = cart.find(c => product.id === c.id)
        if (leProduct !== undefined) {
            let leProductCopy = leProduct
            leProduct.quantity += quantity
            const updatedCart = cart.map(item => {
                if (item === leProductCopy) {
                return leProduct; 
                }
                return item;
            });
            setCart(updatedCart)
            setQuantity(0)
        } else {
            const updatedProduct = { ...product, quantity: quantity }; 
            setQuantity(0)
            setCart([...cart, updatedProduct]);
        }
      };

    const changeQuantity = (event) => {
        let num = parseInt(event.target.value);
        setQuantity(num);
    };

    return (
        <>
            <div className="product-container">
                <div className="product-image-container">
                    <img style={{ border: '3px solid black', width: '60%' }} src={product.image} alt={product.name} />
                </div>
                <div className="product-info-container">
                    <h1 style={{ marginTop: '5rem' }}>{product.name}</h1>
                    <h3>${product.price}</h3>
                    <p>{product.description}</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="number"
                            value={quantity}
                            onChange={changeQuantity}
                            min="0"
                        />
                        <button type="submit">Add to Cart</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Product;
