import React from 'react';

function Product({ product, addToCart }) {
  const { id, name, price, image } = product;

  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>${price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;