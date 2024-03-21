import { CartItem } from '../CartItem/index';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { StarIcon } from '@heroicons/react/24/solid';
import './Cart.css';

function RestaurantInfo() {
  return (
    <div className='restaurant-info'>
      <h4>Jamwaharat Esham Restaurant</h4>
      <span className='rating'>
        <StarIcon className='w-4' />
        <p>4.9</p>
      </span>
    </div>
  );
}

function RestaurantLocation() {
  return (
    <div className='restaurant-location'>
      <p>Wafi Mall, First Floor, Horus, Phase 5, Dubai</p>
      <div className='map-icon'>
        <MapPinIcon className='w-5 text-white' />
      </div>
    </div>
  );
}

export function Cart({ cartItems, setCartItems }) {
  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += parseFloat(item.price); 
    });
    return totalPrice.toFixed(2); 
  };

  return (
    <div className='cart-container box'>
      <div className='w-full h-[179px] overflow-hidden'>
        <img
          src='/restaurant-hall.jpg'
          alt=''
          className='img-restaurant'
        />
      </div>
      <div className='bg-white rounded-xl'>
        <RestaurantInfo />
        <RestaurantLocation />
        <div className='button-container'>
          <button className='my-button'>
            Arabic Restaurant
          </button>
        </div>
        <div className='cart-items-container'>
          <hr />
          {cartItems.map((item) => (
            <div key={item.id}>
              <CartItem
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrls}
                id={item.id}
                setCartItems={setCartItems}
                cartItems={cartItems}
              />
              <hr className='w-11/12 ml-4' />
            </div>
          ))}
          <hr />
          <div className='total-price-container'>
            <p>Total Price</p>
            <h3>AED {calculateTotalPrice()}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
