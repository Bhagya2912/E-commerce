import React, { createContext, useState, useEffect } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

// Create initial cart structure
const getDefaultCart = () => {
  const savedCart = localStorage.getItem("cartItems");
  if (savedCart) return JSON.parse(savedCart);

  let cart = {};
  for (let index = 0; index < all_product.length; index++) {
    const productId = all_product[index].id;
    cart[productId] = { quantity: 0, size: null };
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Persist cartItems to localStorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // Persist wishlist to localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

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

  const removeFromCartCompletely = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: { quantity: 0, size: null },
    }));
  };

  const toggleWishlistItem = (itemId) => {
    setWishlist((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const removeFromWishlist = (itemId) => {
    setWishlist((prev) => prev.filter((id) => id !== itemId));
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      const product = all_product.find((p) => p.id === Number(itemId));
      if (product && cartItems[itemId].quantity > 0) {
        total += product.new_price * cartItems[itemId].quantity;
      }
    }
    return total;
  };

  const getTotalCartItems = () => {
    let total = 0;
    for (const itemId in cartItems) {
      total += cartItems[itemId].quantity;
    }
    return total;
  };

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    removeFromCartCompletely,
    wishlistItems: wishlist,
    toggleWishlistItem,
    removeFromWishlist,
    getTotalCartAmount,
    getTotalCartItems,
    setCartItems, // In case you want to clear the cart or reset
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

