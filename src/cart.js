import React from 'react';

function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <button className="checkout-button" disabled={cartItems.length === 0}>
            Checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default Cart;