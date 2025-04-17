import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';
import { FaHeart } from 'react-icons/fa'; 

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const { wishlistItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
       <Link to="/"> <img src={logo} alt="" /></Link>
        <p>SHOPPER</p>
      </div>
      
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none', color:'black', fontWeight:'bold',fontSize:'1rem'}} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none',color:'black', fontWeight:'bold',fontSize:'1rem' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none',color:'black', fontWeight:'bold',fontSize:'1rem' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none', color:'black', fontWeight:'bold',fontSize:'1rem' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        

        {/* ✅ Wishlist Icon */}
        <Link to='/wishlist' className="nav-wishlist-icon">
        
        <i class="fa-regular fa-heart" style={{
      color: 'black',
      display: 'inline-block',
      width: '50px',        // Increase width
      height: '50px',       // Increase height
      fontSize: '40px',     // Make the heart icon itself bigger
      lineHeight: '50px',   // Center it vertically inside the height
      textAlign: 'center',  // Center it horizontally
    }}></i>
        </Link>
        <div className="nav-cart-count">{wishlistItems.length}</div>
        <div><Link to='/cart'><img src={cart_icon} alt="" /></Link></div>

        
        <div className="nav-cart-count">{getTotalCartItems()}</div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=""  style={{
    background: 'linear-gradient(180deg,  pink, #FFD580)',
    padding: '8px',
    
  }}/>
        <Link to='/login'><button>Login</button></Link>
      </div>
    </div>
  );
};

export default Navbar;