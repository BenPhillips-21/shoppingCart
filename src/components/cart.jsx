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

    const handleCheckout = () => {
        alert('Checkout successful!')
    }

    return (
      <>
        <div className="bigBox">
            <h3>Your Cart</h3>
          {cart && cart.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(c => {
                  let total = c.price * c.quantity;
                  return (
                    <tr key={c.name}>
                      <td><img src={c.image} alt={c.name} /></td>
                      <td>${c.price}</td>
                      <td>{c.quantity}</td>
                      <td>${total}</td>
                      <td><button onClick={() => handleRemove(c.name)}>Remove Item</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p>Your cart is empty</p>
          )}
          <h4>Total: ${subTotal}</h4>
          <button onClick={() => handleCheckout()}>Checkout</button>
        </div>
      </>
    );       
}

export default Cart