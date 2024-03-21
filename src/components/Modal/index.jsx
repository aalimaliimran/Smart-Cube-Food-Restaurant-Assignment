import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid';
import './Modal.css';



const ModalCarousel = ({ images }) => {
  return (
    <Carousel
      showArrows={true}
      renderArrowNext={(clickHandler) => (
        <button className="carousel-arrow next" onClick={clickHandler}>
          <ChevronRightIcon className="icon" />
        </button>
      )}
      renderArrowPrev={(clickHandler) => (
        <button className="carousel-arrow prev" onClick={clickHandler}>
          <ChevronLeftIcon className="icon" />
        </button>
      )}
    >
      {Array.isArray(images) ? (
        images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="" className="image" />
          </div>
        ))
      ) : (
        <div>
          <img src={images} alt="" className="image" />
        </div>
      )}
    </Carousel>
  );
};


const Modal = ({ setOpenId, selectedItem}) => {
  return (
    <div className="modal-container">
      <div className="carousel-container">
        <ModalCarousel images={selectedItem.imageUrls} />
        <div className="modal-button">
          <div className="heart-button">
            <HeartIcon className="icon" />
          </div>
          <div
            className="close-button"
            onClick={() => {
              setOpenId(null);
            }}
          >
            <XMarkIcon className="icon" />
          </div>
        </div>
      </div>
      <div className="product-details">
        <div className="flex justify-between">
          <h3 className="title">{selectedItem.name}</h3>
          <span className="rating">
            <p className="rating-value">4.9</p>
            <StarIcon className="icon" />
          </span>
        </div>
        <div>
          <h4 className="price">AED {selectedItem.price}</h4>
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        </p>
        <button className="add-button">Add meal</button>
      </div>
    </div>
  );
};

export default Modal;
