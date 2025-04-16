import React, { useContext } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Item = ({ id, image, name, new_price, old_price }) => {
  const { addToCart, wishlistItems = [], toggleWishlistItem } = useContext(ShopContext);

  const isWishlisted = wishlistItems.includes(id);

  return (
    <div className='item'>
      <div className="item-image-wrapper">
        <Link to={`/product/${id}`}>
          <img onClick={() => window.scrollTo(0, 0)} src={image} alt={name} className="item-image" />
        </Link>
        <div 
          className="wishlist-icon"
          onClick={() => toggleWishlistItem(id)}
        >
          {isWishlisted ? <FaHeart color="red" /> : <FaRegHeart />}
        </div>
      </div>

      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">₹ {new_price}</div>
        <div className="item-price-old">₹ {old_price}</div>
      </div>

      <button className="add-to-cart-btn" onClick={() => addToCart(id)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Item;
