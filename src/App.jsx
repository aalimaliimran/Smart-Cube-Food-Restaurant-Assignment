import { useState } from 'react';
import { Cart } from './components/Cart/';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { MealList } from './components/MealList';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className='app-container'>
      <div className='header-section'>
        <Header />
      </div>
      <div className='meal-list-section'>
        <MealList cartItems={cartItems} setCartItems={setCartItems} />
        <div className='cart-section'>
          <Cart cartItems={cartItems} setCartItems={setCartItems} />
        </div>
      </div>
      <div className='footer-section'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
