import React from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';
import './CartItem.css'; 

export function CartItem({ name, price, id, imageUrl, setCartItems, cartItems }) {
    function handleRemoveItem() {
        const temp_arr = cartItems.filter((item) => item.id !== id);
        setCartItems(temp_arr);
    }
    return (
        <div className='cart-item-container'>
            <div className='flex'>
                <div className='cart-item-image'>
                    <img
                         src={imageUrl[0]}
                        alt='food'
                    />
                </div>
                <div className='cart-item-details'>
                    <div className='cart-item-text'>
                        <h3 className='cart-item-name'>{name}</h3>
                        <h4 className='cart-item-price'>AED {price}</h4>
                    </div>
                    <div onClick={handleRemoveItem}>
                        <TrashIcon className='w-6 cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    );
}
