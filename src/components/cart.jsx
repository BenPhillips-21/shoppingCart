import React, { useState } from 'react';

const Cart = ({ cart, setCart }) => {
    let subTotal = 0
    for (let i = 0; i < cart.length; i++) {
        let price = cart[i].price * cart[i].quantity
        subTotal += price
    }

    const handleRemove = (id) => {
        const updatedCart = cart.filter(c => c.id !== id);
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
                    <tr key={c.id}>
                      <td><img src={c.image} alt={c.name} /></td>
                      <td>${c.price}</td>
                      <td>{c.quantity}</td>
                      <td>${total}</td>
                      <td><button onClick={() => handleRemove(c.id)}>Remove Item</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <h1 style={{ margin: '5rem' }}>Your cart is empty</h1>
          )}
          <h4>Total: ${subTotal}</h4>
          <button onClick={() => handleCheckout()}>Checkout</button>
        </div>
      </>
    );       
}

export default Cart