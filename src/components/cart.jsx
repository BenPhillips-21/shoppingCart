import React, { useState } from 'react';

const Cart = ({ cart, setCart }) => {
    let subTotal = 0
    for (let i = 0; i < cart.length; i++) {
        let price = cart[i].price * cart[i].quantity
        subTotal += price
    }

    const handleRemove = (name) => {
        const updatedCart = cart.filter(c => c.name !== name);
        setCart(updatedCart);
      };

    return (
        <>
            <div className="grid-container">
                {cart && cart.map(c => {
                let total = c.price * c.quantity;
                return (
                    <div key={c.name}>
                        <img src={c.image} alt={c.name} />
                        <p>Quantity: {c.quantity}</p>
                        <p>Price: {c.price}</p>
                        <p>Total: {total}</p>
                        <button onClick={() => handleRemove(c.name)}>Remove Item</button>
                    </div>
                );
            })}
            </div>
            <h4>{subTotal}</h4>
            {/* checkOut button */}
        </>
    )
}

export default Cart