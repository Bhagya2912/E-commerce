import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';

import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Shop from './Pages/Shop';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import Wishlist from './Pages/Wishlist';
import Checkout from './Pages/Checkout';
import ScrollToTop from './Components/ScrollToTop';



function App() {
  // State to handle the visibility of the back-to-top button
  const [showButton, setShowButton] = useState(false);

  // Track scroll position to show or hide the button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true); // Show the button if the scroll position is greater than 300px
      } else {
        setShowButton(false); // Hide the button when back to the top
      }
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      {/* Conditionally render the "Back to Top" button */}
      {showButton && (
        <a 
          href="#top" 
          className="back-top-btn" 
          id="backToTop" 
          aria-label="Back to top" 
          onClick={scrollToTop}
        >
          <i className="fa-solid fa-chevron-up"></i>
        </a>
      )}
    </div>
  );
}

export default App;

