import React from 'react';
import { FoodListItem } from '../FoodListItem/index';
import './FoodList.css';

export function FoodList({ category, cartItems, setCartItems }) {
    const itemNamesMap = {
        'Cold Appetizers': [
            { 
            name: 'Hummus plate', 
            imageUrls: [
                '/items/1.jpg',
                '/items/2.jpg',
                '/items/3.jpg'
            ],
            price: '40' },
            { name: 'Falafel', 
            imageUrls: [
                '/items/4.jpg',
                '/items/5.jpg',
                '/items/6.jpg'
            ]
            , price: '35' },
            { 
                name: 'Stuffed mushrooms', 
                imageUrls: [
                    '/items/7.jpg',
                    '/items/8.jpg',
                    '/items/9.jpg'
                ],
                price: '18' },
          
        ],

        'Hot Appetizers': [
            { 
            name: 'Spring rolls', 
            imageUrls: [
                '/items/2.jpg',
                '/items/3.jpg',
                '/items/4.jpg'
            ],
            price: '25' },
            { 
            name: 'Buffalo wings',   
            imageUrls: [
                '/items/5.jpg',
                '/items/6.jpg',
                '/items/7.jpg'
            ],
             price: '20' },
         
          
        ],

        'Soup': [
            { 
            name: 'Tomato soup', 
            imageUrls: [
                '/items/3.jpg',
                '/items/4.jpg',
                '/items/5.jpg'
            ],
             price: '15' },
            { 
            name: 'Chicken noodle soup', 
            imageUrls: [
                '/items/6.jpg',
                '/items/7.jpg',
                '/items/8.jpg'
            ],
             price: '12' },
            { 
            name: 'Miso soup', 
            imageUrls: [
                '/items/9.jpg',
                '/items/10.jpg',
                '/items/1.jpg'
            ],
             price: '10' },
          
        ],

        'Sandwiches': [
            { 
            name: 'Club sandwich', 
            imageUrls: [
                '/items/4.jpg',
                '/items/5.jpg',
                '/items/6.jpg'
            ],
             price: '8' },
            { 
                name: 'BLT sandwich',   
                imageUrls: [
                '/items/7.jpg',
                '/items/8.jpg',
                '/items/9.jpg'
            ],
            price: '6' },
            { 
            name: 'Grilled cheese sandwich',   
            imageUrls: [
                '/items/10.jpg',
                '/items/1.jpg',
                '/items/2.jpg'
            ], 
            price: '5' },
          
        ],

        
        'Shawarma': [
            { 
            name: 'Chicken shawarma', 
            imageUrls: [
                '/items/5.jpg',
                '/items/6.jpg',
                '/items/7.jpg'
            ],
             price: '28' },
            { 
                name: 'Beef shawarma',   
                imageUrls: [
                '/items/8.jpg',
                '/items/9.jpg',
                '/items/10.jpg'
            ],
             price: '2' },
            { 
            name: 'Falafel shawarma', 
            imageUrls: [
                '/items/1.jpg',
                '/items/2.jpg',
                '/items/3.jpg'
            ],
             price: '3' },
          
        ],

        'Plates On Oven': [
            { 
            name: 'Roast chicken', 
            imageUrls: [
                '/items/6.jpg',
                '/items/7.jpg',
                '/items/8.jpg'
            ],
             price: '45' },
            { name: 'Baked salmon', 
            imageUrls: [
                '/items/9.jpg',
                '/items/10.jpg',
                '/items/1.jpg'
            ],
             price: '50' },
            { 
            name: 'Stuffed peppers', 
            imageUrls: [
                '/items/2.jpg',
                '/items/3.jpg',
                '/items/4.jpg'
            ],
             price: '42' },
          
        ],
        'Grilled': [
            { 
            name: 'Grilled steak', 
            imageUrls: [
                '/items/7.jpg',
                '/items/8.jpg',
                '/items/9.jpg'
            ],
             price: '48' },
            { 
            name: 'Grilled vegetables', 
            imageUrls: [
                '/items/10.jpg',
                '/items/2.jpg',
                '/items/3.jpg'
            ],
            price: '32' },
            { 
            name: 'Grilled fish', 
            imageUrls: [
                '/items/4.jpg',
                '/items/5.jpg',
                '/items/6.jpg'
            ],
             price: '34' },
          
        ],
        'Seafood': [
            { 
            name: 'Shrimp scampi', 
            imageUrls: [
                '/items/8.jpg',
                '/items/9.jpg',
                '/items/10.jpg'
            ],
             price: '16' },
            { 
            name: 'Lobster bisque',
            imageUrls: [
                '/items/1.jpg',
                '/items/2.jpg',
                '/items/3.jpg'
            ],
             price: '19' },
            { 
            name: 'Sushi platter', 
            imageUrls: [
                '/items/4.jpg',
                '/items/5.jpg',
                '/items/6.jpg'
            ],
             price: '22' },
          
        ],
       
       
    };

    function checkSelected(itemId) {
        return cartItems.some(item => item.id === itemId);
    }

    // Check if the category exists in itemNamesMap before accessing its value
    const items = itemNamesMap[category] || [];

    return (
        <div>
            <div className='flex items-end justify-between'>
                <div className='flex'>
                    <h4 className='food-list-title'>{category}</h4>
                    <div className='food-list-badge'>
                        <p className='text-white'>{items.length}</p>
                    </div>
                </div>
                <p className='food-list-select-label'>Select</p>
            </div>
            <div className='mt-[9px]'>
                {items.map((item, index) => (
                    <div className='food-list-item-container' key={index}>
                        <FoodListItem
                            id={`${category}_${index + 1}`}
                            cartItems={cartItems}
                            setCartItems={setCartItems}
                            name={item.name}
                            imageUrls={item.imageUrls}
                            price={item.price}
                            selected={checkSelected(`${category}_${index + 1}`)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
