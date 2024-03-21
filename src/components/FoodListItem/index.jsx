import { useState } from 'react';
import Modal from '../Modal/index';
import { StarIcon } from '@heroicons/react/24/solid';
import { EyeIcon, CheckIcon } from '@heroicons/react/24/outline';
import './FoodListItem.css'; 

export function FoodListItem({ id, cartItems, setCartItems, name, imageUrls, price, selected }) {
    const [openId, setOpenId] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);

    function handleOpenModal() {
        setSelectedItem({ id, name, imageUrls, price }); // Pass imageUrls instead of imageUrl
        setOpenId(id);
    }

    function handleInsertItem() {
        if (!cartItems.some(item => item.id === id)) {
            setCartItems(prev => [...prev, { id, name, price, imageUrls }]); // Pass imageUrls instead of imageUrl
        }
    }

    // Render the first image if imageUrls is an array
    const renderImage = Array.isArray(imageUrls) ? imageUrls[0] : imageUrls;

    return (
        <div className={`food-list-item-inner-container ${selected ? 'selected' : ''}`}>
            <div className='food-list-image-container'>
                <img
                    src={imageUrls[0]} // Render the first image
                    alt='food'
                    className='food-list-image'
                />
                <button className='food-list-add-button'>Add</button>
            </div>
            <div className='food-list-details-container'>
                <h3 className='food-list-title'>{name}</h3>
                <div className='flex gap-x-4 items-center justify-between relative w-full'>
                <h4 className='food-list-price'>AED {price}</h4>
                    <span className='food-list-rating'>
                        <p className='font-openSans font-semibold text-sm leading-4'>4.9</p>
                        <StarIcon className='w-4' />
                    </span>
                    <p className='food-list-description'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat
                        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                        sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className='food-list-action-icons'>
                        <EyeIcon className='w-7 stroke-1 cursor-pointer' onClick={handleOpenModal} />
                        {id === openId && <Modal setOpenId={setOpenId} selectedItem={selectedItem} />}
                        <div
                            className={`min-w-6 cursor-pointer w-6 h-6 rounded-full mt-[1.5px] flex items-center justify-center ${selected ? 'bg-colorPrimary border border-colorPrimary' : 'border border-colorDark'}`}
                            onClick={handleInsertItem}
                        >
                            <CheckIcon className='w-4 stroke-2 text-white' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
