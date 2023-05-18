import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import productsData from './productsData';
import Product from '/Product';
import Contact from '/Contact';
import NewArrivals from '/NewArrivals';
import Cart from '/Cart';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/new-arrivals">New Arrivals</Link>
            </li>
            <li>
              <Link to="/cart">Cart ({cartItems.length})</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <h2>Featured Products</h2>
            <div className="product-list">
              {productsData.map((product) => (
                <Product
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/new-arrivals">
            <NewArrivals />
          </Route>
          <Route path="/cart">
            <Cart cartItems={cartItems} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;