import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';
import './CSS/Wishlist.css'; // Optional: for custom styles

const Wishlist = () => {
  const { all_product, wishlistItems, toggleWishlistItem, addToCart, removeFromWishlist } = useContext(ShopContext);
  const [activeTab, setActiveTab] = useState('All');
  const [sizeMap, setSizeMap] = useState({}); // Track selected sizes per product

  const normalize = (str) => (str || '').trim().toLowerCase();

  const filterByCategory = (category) => {
    const selectedCategory = normalize(category);
    return all_product.filter((product) => {
      const isInWishlist = wishlistItems.includes(product.id);
      const productCategory = normalize(product.category);
      return isInWishlist && (selectedCategory === 'all' || productCategory === selectedCategory);
    });
  };

  const handleSizeChange = (productId, size) => {
    setSizeMap((prev) => ({ ...prev, [productId]: size }));
  };

  const handleAddToCart = (product) => {
    const selectedSize = sizeMap[product.id] || 'M'; // Default to M
    addToCart(product.id, selectedSize);
    removeFromWishlist(product.id); // Optional: remove from wishlist
  };

  const categories = ['All', 'Men', 'Women', 'Kid'];

  return (
    <div className="wishlist-page">
      <h2>My Wishlist</h2>

      <div className="wishlist-tabs">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={activeTab === category ? 'active' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="wishlist-products">
        {filterByCategory(activeTab).length > 0 ? (
          filterByCategory(activeTab).map((product) => (
            <div className="wishlist-product-card" key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>
              <div className="wishlist-product-info">
                <h4>{product.name}</h4>
                <p>₹{product.new_price}</p>

                <div className="wishlist-size-select">
                  <label>Select Size:</label>
                  <select
                    value={sizeMap[product.id] || ''}
                    onChange={(e) => handleSizeChange(product.id, e.target.value)}
                  >
                    <option value="">-- Select --</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>

                <button onClick={() => toggleWishlistItem(product.id)}>
                  Remove from Wishlist
                </button>

                <button className="Add-cart" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products in {activeTab} wishlist.</p>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
