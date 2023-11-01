import React, { useState } from 'react';
import Store from './components/Store';
import './App.css';
import Cart from './components/Cart';

function App() {

  const [cartItems, setCartItems] = useState();

  return (
    <div className="Container">
      <Store />
      <Cart />
    </div>
  );
}

export default App;
