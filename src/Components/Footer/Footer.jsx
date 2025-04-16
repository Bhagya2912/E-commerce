import React, { useState } from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from "react-router-dom";
import { BsArrowUpCircle } from "react-icons/bs";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [clicked, setClicked] = useState(false);
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt=""/>
        <p>SHOPPER</p>
      </div>
        <ul className="footer-links">
           <li>
           <h3>Shopper</h3>
           <p >Premium Australian skincare inspired by the ocean. 
            </p>
            <div className="footer-social-icon">
            <div className="footer-icons-container">
              <Link to="https://www.instagram.com" className="icons">
              <img src={instagram_icon} alt=""/>
              </Link>
            </div>
            <div className="footer-icons-container">
              <Link to="https://www.pinster.com" className="icons">
                <img src={pintester_icon} alt=""/>
              </Link>
            </div>
            <div className="footer-icons-container">
                <Link to="https://www.whatsapp.com" className="icons">
                <img src={whatsapp_icon} alt=""/>
                </Link>
            </div>
        </div>
           </li>
            <li><h4>Shop</h4>
            <Link to="/mens"><p style={{ color: 'black' }}>Men</p></Link>
            <Link to="/womens"><p style={{ color: 'black' }}>Women</p></Link>
            <Link to="/kids"><p style={{ color: 'black' }}>Kids</p></Link>
            </li>
            <li><h4>Services</h4>
            <p>Home Delivery</p>
            <p>24/7 Available</p>
            </li>
            <li><h4>About</h4>
            <p>Our Products</p>
            <p>Quality</p>
            <p>Shoppers Stories</p>
            </li>
            <li><div>
        <h4>Contact Us</h4>
        <p>Email: support@shopper.com</p>
        <p>Phone: +91 8080904372</p>
        <p>Address: 123 Main Street, Mumbai, NY 10001</p>
      </div></li>
        </ul>
        

        

        <div className="footer-copyright">
            <hr/>
            <p>© {currentYear} Shopper All Rights Reserve</p>
        </div>
    </div>
  )
}

export default Footer