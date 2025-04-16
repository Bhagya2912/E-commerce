import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

// Create initial cart structure
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    const productId = all_product[index].id;
    cart[productId] = { quantity: 0, size: null };
  }
  return cart;
};


const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [wishlist, setWishlist] = useState([]);

  const addToCart = (itemId, size = null) => {
    setCartItems((prev) => {
      const existingItem = prev[itemId] || { quantity: 0, size: null };
      return {
        ...prev,
        [itemId]: {
          quantity: existingItem.quantity + 1,
          size: size || existingItem.size,
        },
      };
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const existingItem = prev[itemId];
      const newQuantity = existingItem.quantity - 1;
      return {
        ...prev,
        [itemId]: {
          ...existingItem,
          quantity: newQuantity > 0 ? newQuantity : 0,
        },
      };
    });
  };

  const removeFromWishlist = (itemId) => {
    setWishlist((prevWishlist) => prevWishlist.filter((id) => id !== itemId));
  };

  const toggleWishlistItem = (itemId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(itemId)
        ? prevWishlist.filter((id) => id !== itemId)
        : [...prevWishlist, itemId]
    );
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      const item = all_product.find(product => product.id === Number(itemId));
      if (item && cartItems[itemId].quantity > 0) {
        totalAmount += item.new_price * cartItems[itemId].quantity;
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId].quantity > 0) {
        totalItem += cartItems[itemId].quantity;
      }
    }
    return totalItem;
  };

  const removeFromCartCompletely = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: { quantity: 0, size: null },
    }));
  };

  const contextValue = {
   all_product,
  cartItems,
  addToCart,
  removeFromCart,
  removeFromCartCompletely,
  wishlistItems: wishlist,
  toggleWishlistItem,
  removeFromWishlist, // ✅ ADD THIS LINE
  getTotalCartAmount,
  getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
