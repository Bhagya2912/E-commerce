import React, { useContext, useState } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
import phonepay_img from '../Assets/phonepay.png';
import Gpay_img from '../Assets/Gpay.png';
import { QRCodeCanvas } from 'qrcode.react';
import CheckoutPage from '../../Pages/Checkout';


const CartItems = () => {
  const {
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  } = useContext(ShopContext);

  const [promoInput, setPromoInput] = useState('');
  const [message, setMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const deliveryfee = 50;
  const totalAmount = getTotalCartAmount() + deliveryfee;

  const [showPaymentOptions, setShowPaymentOptions] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [showQRModal, setShowQRModal] = useState(false);
  const [showUPIOption, setShowUPIOption] = useState(false);

  const upiID = 'yourupi@bank'; // Replace with your real UPI ID
  const name = 'MyShop';

  const getUPILink = () => {
    return `upi://pay?pa=${upiID}&pn=${name}&am=${totalAmount}&cu=INR`;
  };

  const [checkoutStarted, setCheckoutStarted] = useState(false); // ADD

  if (checkoutStarted) {
    return (
      <CheckoutPage
        totalAmount={totalAmount}
        cartItems={cartItems}
        all_product={all_product}
      />
    );
  }

  

  const handlePromoSubmit = () => {
    if (promoInput.trim().toLowerCase() === 'discount10') {
      setMessage('Promo code applied successfully! 🎉');
    } else {
      setMessage('Invalid promo code. ❌');
    }
    setShowPopup(true);

    // Hide the popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="cartitems">
      {/* Cart Table */}
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Size</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {all_product.map((e) => {
        if (cartItems[e.id]?.quantity > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>{cartItems[e.id]?.size || 'N/A'}</p>
                <p>&#x20B9; {e.new_price}</p>
                <div className="cartitems-quantity-controller">
                  <button className="cart-quan-btn" onClick={() => removeFromCart(e.id)}>-</button>
                  <span>{cartItems[e.id]?.quantity || 0}</span>
                  <button className="cart-quan-btn" onClick={() => addToCart(e.id)}>+</button>
                </div>
                <p>&#x20B9; {e.new_price * (cartItems[e.id]?.quantity || 0)}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => removeFromCart(e.id)}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      {/* Cart Total Section */}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()} &#x20B9;</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Delivery Fees</p>
              <p>{deliveryfee} &#x20B9;</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <p>{totalAmount} &#x20B9;</p>
            </div>
          </div>
          <button onClick={() => setCheckoutStarted(true)}>Place Order</button>
        </div>

        {/* Promo Code */}
        <div className="cartitems-promocode">
      <p>If you have a promo code, enter it here</p>
      <div className="cartitems-promobox">
        <input
          type="text"
          placeholder="promo code"
          value={promoInput}
          onChange={(e) => setPromoInput(e.target.value)}
        />
        <button onClick={handlePromoSubmit}>Submit</button>
      </div>

      {/* Popup message */}
      {showPopup && (
        <div className="promo-popup">
          {message}
        </div>
      )}
    </div>
      </div>

      {/* Payment Modal */}
      {showPaymentOptions && (
        <div className="payment-modal">
          <div className="payment-box">
            <div className="payment-header">
              <h1>Select your payment method</h1>
              <button
                className="close-btn"
                onClick={() => {
                  setShowPaymentOptions(false);
                  setSelectedPaymentMethod(null);
                  setShowQRModal(false);
                  setShowUPIOption(false);
                }}
              >
                X
              </button>
            </div>

            {/* Payment Options */}
            <div className="payment-methods">
              <div className="payment-option">
                <img src={phonepay_img} alt="PhonePe" />
                <button onClick={() => setSelectedPaymentMethod('PhonePe')}>PhonePe</button>
              </div>
              <div className="payment-option">
                <img src={Gpay_img} alt="Google Pay" />
                <button onClick={() => setSelectedPaymentMethod('Google Pay')}>Google Pay</button>
              </div>
              <div className="payment-option">
                <button onClick={() => {
                  setSelectedPaymentMethod('COD');
                  setShowQRModal(false);
                  setShowUPIOption(false);
                }}>Cash on Delivery</button>
              </div>
            </div>

            {/* Show QR or UPI only if NOT COD */}
            {selectedPaymentMethod && selectedPaymentMethod !== 'COD' && (
              <div className="payment-methods">
                <h2>Choose Payment Option</h2>
                <div className="payment-option">
                  <button onClick={() => {
                    setShowQRModal(true);
                    setShowUPIOption(false);
                  }}>Scan QR</button>
                  <button onClick={() => {
                    setShowUPIOption(true);
                    setShowQRModal(false);
                  }}>Use UPI ID</button>
                </div>
              </div>
            )}

            {/* COD message only */}
            {selectedPaymentMethod === 'COD' && (
              <div className="qr-container">
                <h3>Your order is confirmed!</h3>
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Amount to Pay: ₹{totalAmount}</p>
              </div>
            )}

            {/* Show QR */}
            {showQRModal && selectedPaymentMethod !== 'COD' && (
              <div className="qr-container">
                <h4>Scan with {selectedPaymentMethod}</h4>
                <QRCodeCanvas value={getUPILink()} size={200} />
                <p>Amount to Pay: ₹{totalAmount}</p>
              </div>
            )}

            {/* Show UPI ID */}
            {showUPIOption && selectedPaymentMethod !== 'COD' && (
              <div className="qr-container">
                <h3>Pay using UPI ID</h3>
                <p style={{ fontWeight: 'bold', fontSize: '18px' }}>{upiID}</p>
                <p>Pay ₹{totalAmount} using this UPI ID in {selectedPaymentMethod}</p>
              </div>
            )}

          <button className='btn1'>Pay</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItems;
