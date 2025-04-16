import React, { useContext, useEffect, useState } from 'react';
import './CSS/Checkout.css';
import phonepay_img from '../Components/Assets/phonepay.png';
import Gpay_img from '../Components/Assets/Gpay.png';
import { QRCodeCanvas } from 'qrcode.react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShopContext } from "../Context/ShopContext";

const CheckoutPage = ({ totalAmount }) => {
  const { cartItems, all_product, getTotalCartAmount, addToCart, removeFromCart, removeFromCartCompletely } = useContext(ShopContext);
  const location = useLocation();
  const buyNow = location.state?.buyNow;
  const buyNowProduct = location.state?.product;
  const buyNowSize = location.state?.selectedSize;
  const [step, setStep] = useState(2); // Starts at Delivery Address
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [qrVisible, setQrVisible] = useState(false);
  const [showUPI, setShowUPI] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [showCODPopup, setShowCODPopup] = useState(false); // ✅ This line fixes your error
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: 'Bhagyashri Gaware',
      phone: '8080904372',
      address: 'Room no 306 Sushila complex patil nagar, Bavadhan, Pune - 411021',
    },
    {
      id: 2,
      name: 'Bhagyashri Gaware',
      phone: '8080904372',
      address: 'Bandoba heights, Patil Nagar, Bavdhan Khurd, Pune - 411021',
    },
  ]);

  const [addressError, setAddressError] = useState('');


  const upiID = 'yourupi@bank';
  const name = 'MyShop';
  const navigate = useNavigate();
  const deliveryCharge = 50;
  const subtotal = getTotalCartAmount();
  const totalWithDelivery = subtotal + deliveryCharge;

  const getUPILink = () => {
    if (!totalAmount) return '';
    return `upi://pay?pa=${upiID}&pn=${name}&am=${totalAmount}&cu=INR`;
  };

  const [newAddress, setNewAddress] = useState({
    name: '',
    phone: '',
    pincode: '',
    locality: '',
    fullAddress: '',
    city: '',
    state: '',
    landmark: '',
    altPhone: '',
    type: '',
  });

  useEffect(() => {
    const storedAddresses = localStorage.getItem('addresses');
    if (storedAddresses) {
      setAddresses(JSON.parse(storedAddresses));
    }
  
    const storedSelectedAddress = localStorage.getItem('selectedAddress');
    if (storedSelectedAddress) {
      setSelectedAddress(parseInt(storedSelectedAddress));
    }
  }, []);
  

  const handleSaveAddress = () => {
    const isValid =
      newAddress.name.trim() &&
      newAddress.phone.trim() &&
      newAddress.pincode.trim() &&
      newAddress.locality.trim() &&
      newAddress.fullAddress.trim() &&
      newAddress.city.trim() &&
      newAddress.state.trim();
  
    if (!isValid) {
      setAddressError('Please fill all required address fields');
      return;
    }
  
    const updatedAddress = {
      ...newAddress,
      id: Date.now(),
      address: `${newAddress.fullAddress}, ${newAddress.locality}, ${newAddress.city} - ${newAddress.pincode}, ${newAddress.state}`,
    };
  
    const updatedAddresses = [...addresses, updatedAddress];
  
    setAddresses(updatedAddresses);
    setSelectedAddress(updatedAddress.id);
    setShowAddressForm(false);
    setNewAddress({
      name: '',
      phone: '',
      pincode: '',
      locality: '',
      fullAddress: '',
      city: '',
      state: '',
      landmark: '',
      altPhone: '',
      type: 'Home'
    });
  
    // ✅ Store in localStorage
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
    localStorage.setItem('selectedAddress', updatedAddress.id.toString());
  
    setAddressError('');
    setStep(3); // ✅ Go to order summary
  };
  


  return (
    <div className="checkout-container">
      <div className="step-section">
        {/* Step 1: LOGIN (Assumed completed) */}
        <div className={`step ${step >= 1 ? 'active' : ''}`}>
          1. LOGIN ✓
          <button className="change-btn" onClick={() => navigate('/login')}>Change</button>
        </div>

        {/* Step 2: Delivery Address */}
        <div className={`step ${step >= 2 ? 'active' : ''}`}>
          2. DELIVERY ADDRESS
          <button className="change-btn" onClick={() => setStep(2)}>Change</button>
        </div>

        {step === 2 && (
          <div className="section">
            <h2>Select Delivery Address</h2>
            {addresses.map((item) => (
              <div
                key={item.id}
                className={`address-box ${selectedAddress === item.id ? 'selected' : ''}`}
                onClick={() => setSelectedAddress(item.id)}
              >
                <h4>{item.name} - {item.phone}</h4>
                <p>{item.address}</p>
                <button
                  className="change-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowAddressForm(true);
                  }}
                >
                  Edit
                </button>
              
              </div>
            ))}

<button
  className="btn1"
  onClick={() => {
    if (!selectedAddress) {
      setAddressError('Please select a delivery address');
    } else {
      setAddressError('');
      localStorage.setItem('selectedAddress', selectedAddress.toString());
      setStep(3); // ✅ Go to order summary
    }
  }}
>
  Save and deliver here
</button>


{addressError && (
  <p style={{ color: 'green', marginTop: '10px' }}>{addressError}</p>
)}


            {!showAddressForm && (
              <button className="step" onClick={() => setShowAddressForm(true)}>
                + Add New Address
              </button>
            )}
          
          
            {showAddressForm && (
              <div className="new-address-form">
                <h3>ADD A NEW ADDRESS</h3>
                <button className="location-btn" onClick={() => window.open('https://www.google.com/maps')}>📍 Use my current location</button>
                <div className="form-grid">
                  <input placeholder="Name" value={newAddress.name} onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })} />
                  <input placeholder="10-digit mobile number" value={newAddress.phone} onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })} />
                  <input placeholder="Pincode" value={newAddress.pincode} onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })} />
                  <input placeholder="Locality" value={newAddress.locality} onChange={(e) => setNewAddress({ ...newAddress, locality: e.target.value })} />
                  <textarea placeholder="Address (Area and Street)" rows={3} value={newAddress.fullAddress} onChange={(e) => setNewAddress({ ...newAddress, fullAddress: e.target.value })} />
                  <input placeholder="City/District/Town" value={newAddress.city} onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })} />
                  <select value={newAddress.state} onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })}>
                    <option>--Select State--</option>
                    <option>Maharashtra</option>
                    <option>Delhi</option>
                    <option>Gujarat</option>
                  </select>
                  <input placeholder="Landmark (Optional)" value={newAddress.landmark} onChange={(e) => setNewAddress({ ...newAddress, landmark: e.target.value })} />
                  <input placeholder="Alternate Phone (Optional)" value={newAddress.altPhone} onChange={(e) => setNewAddress({ ...newAddress, altPhone: e.target.value })} />
                </div>
                <div>
                  <p>Address Type</p>
                  <div className="radio-group">
                    <label>
                      <input type="radio" name="type" value="Home" checked={newAddress.type === 'Home'} onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })} />
                      <span>Home</span>
                    </label>
                    <label>
                      <input type="radio" name="type" value="Work" checked={newAddress.type === 'Work'} onChange={(e) => setNewAddress({ ...newAddress, type: e.target.value })} />
                      <span>Work</span>
                    </label>
                  </div>
                </div>
                <button className="btn1" onClick={handleSaveAddress}>Save and continue</button>

                <button className="cancel-btn" onClick={() => setShowAddressForm(false)}>CANCEL</button>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Order Summary */}
        <div className={`step ${step >= 3 ? 'active' : ''}`}>
          3. ORDER SUMMARY
          <button className="change-btn" onClick={() => setStep(2)}>Change</button>
        </div>

        {step >= 3 && (
          <>
            {buyNow && buyNowProduct ? (
              <div className="order-item">
                <img src={buyNowProduct.image} alt={buyNowProduct.name} />
                <div>
                  <p><strong>{buyNowProduct.name}</strong></p>
                  <p>Quantity: 1</p>
                  {buyNowSize && <p>Size: {buyNowSize}</p>}
                  <p>Price: ₹{buyNowProduct.new_price}</p>
                  <p>Subtotal: ₹{buyNowProduct.new_price}</p>
                </div>
              </div>
            ) : (
              all_product
                .filter(product => cartItems[product.id]?.quantity > 0)
                .map(product => (
                  <div key={product.id} className="order-item">
                    <img src={product.image} alt={product.name} />
                    <div>
                      <p><strong>{product.name}</strong></p>
                      <div className="cartitems-quantity-controller">
                        <p>Quantity:</p>
                        <button onClick={() => removeFromCart(product.id)}>-</button>
                        <span>{cartItems[product.id].quantity}</span>
                        <button onClick={() => addToCart(product.id, cartItems[product.id].size)}>+</button>
                      </div>

                      <div className="remove-btn" style={{color:'orange'}}>
                        <button onClick={() => removeFromCartCompletely(product.id)}>Remove</button>
                      </div>

                      <p>Price: ₹{product.new_price}</p>
                      <p>Subtotal: ₹{product.new_price * cartItems[product.id].quantity}</p>
                    </div>
                  </div>
                ))
            )}

            <hr />
            <div style={{ fontSize: '16px' }}>
              <p>Subtotal: ₹{subtotal}</p>
              <p>Delivery Charge: ₹{deliveryCharge}</p>
              <p>Total: ₹{totalWithDelivery}</p>
            </div>
            <button className="btn1" onClick={() => setStep(4)}>payment</button>
          </>
        )}


<div className={`step ${step >= 3 ? 'active' : ''}`}>
          3.Payment
        </div>

{step === 4 && (
  <div className="payment-method-section">
    <h3>Select Payment Method</h3>

    {/* PhonePe */}
    <div>
      <button
        className={`payment-btn ${selectedPayment === 'phonepay' ? 'selected' : ''}`}
        onClick={() => {
          setSelectedPayment('phonepay');
          setQrVisible(false);
        }}
      >
        <img src={phonepay_img} alt="PhonePay" />
        PhonePe
      </button>

      {selectedPayment === 'phonepay' && (
        <div className="upi-section">
          <button onClick={() => setQrVisible(!qrVisible)}>Generate QR Code</button>
          {qrVisible && (
            <>
              <QRCodeCanvas value={getUPILink()} />
              <p>UPI ID: <strong>yourupi@bank</strong></p>
              <p className="amount-display">Amount to Pay: <strong>₹{totalWithDelivery}</strong></p>
            </>
          )}
        </div>
      )}
    </div>

    {/* Google Pay */}
    <div>
      <button
        className={`payment-btn ${selectedPayment === 'gpay' ? 'selected' : ''}`}
        onClick={() => {
          setSelectedPayment('gpay');
          setQrVisible(false);
        }}
      >
        <img src={Gpay_img} alt="Google Pay" />
        Google Pay
      </button>

      {selectedPayment === 'gpay' && (
        <div className="upi-section">
          <button onClick={() => setQrVisible(!qrVisible)}>Generate QR Code</button>
          {qrVisible && (
            <>
              <QRCodeCanvas value={getUPILink()} />
              <p>UPI ID: <strong>yourupi@bank</strong></p>
              <p className="amount-display">Amount to Pay: <strong>₹{totalWithDelivery}</strong></p>
            </>
          )}
        </div>
      )}
    </div>

    <div>
  <button
    style={{ color: 'black' }}
    className={`payment-btn ${selectedPayment === 'cod' ? 'selected' : ''}`}
    onClick={() => {
      setSelectedPayment('cod');
      setQrVisible(false);
      setShowCODPopup(true); // Show popup on click
    }}
  >
    💵 Cash on Delivery
  </button>

</div>
{showCODPopup && (
  <div className="cod-popup-overlay">
    <div className="cod-popup">
    {selectedPayment === 'cod' && (
  <div className="cod-popup">
    <h4>Delivery Address you selected</h4>
    <p>
        {addresses.find((addr) => addr.id === selectedAddress)?.name} -{' '}
        {addresses.find((addr) => addr.id === selectedAddress)?.phone}
      </p>
      <p>{addresses.find((addr) => addr.id === selectedAddress)?.address}</p>

    </div>
)}
      <p><strong>Total Amount:</strong> ₹{totalWithDelivery}</p>
      <p>🛵 Your order will be delivered soon. Please keep the exact amount ready.</p>
      <button onClick={() => setShowCODPopup(false)} className="close-popup">Close</button>
    </div>
  </div>
)}

    

  </div>
)}


        
      </div>
    </div>
  );
};

export default CheckoutPage;

