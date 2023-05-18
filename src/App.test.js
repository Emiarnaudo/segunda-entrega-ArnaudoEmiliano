import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
<Route exact path="/">
  <h2>Featured Products</h2>
  <div className="product-list">
    {productsData.map((product) => (
      <Product key={product.id} product={product} addToCart={addToCart} />
    ))}
  </div>
</Route>