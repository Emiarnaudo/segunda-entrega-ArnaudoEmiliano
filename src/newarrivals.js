import React from 'react';
import productsData from './productsData';
import Product from './Product';
import './NewArrivals.css';

function NewArrivals() {
  const newArrivals = productsData.slice(0, 3); // Mostrar solo los primeros 3 productos como nuevos ingresos

  return (
    <div className="new-arrivals">
      <h2>New Arrivals</h2>
      <div className="product-list">
        {newArrivals.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default NewArrivals;