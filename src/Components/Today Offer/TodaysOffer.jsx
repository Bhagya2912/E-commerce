import React, { useEffect, useState } from 'react';
import './TodaysOffer.css';
import all_product from '../Assets/all_product';
import Item from '../Item/Item';

const CountdownTimer = ({ targetDate, onEnd }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = null;
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (!newTimeLeft) {
        clearInterval(timer);
        onEnd();
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [onEnd]);

  if (!timeLeft) {
    return <span className="countdown-timer">🚫 Offer ended</span>;
  }

  return (
    <span className="countdown-timer">
      ⏳ Offer ends in: {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </span>
  );
};

const Todaysoffer = () => {
  const offerItems = all_product.filter(item => item.id >= 37 && item.id <= 40);

  const [isOfferActive, setIsOfferActive] = useState(true);
  const [startScroll, setStartScroll] = useState(false);

  const offerEndDate = new Date();
  offerEndDate.setHours(offerEndDate.getHours() + 24);

  const handleOfferEnd = () => {
    setIsOfferActive(false);
  };

  useEffect(() => {
    const scrollDelay = setTimeout(() => {
      setStartScroll(true);
    }, 3000); // Delay scroll start by 3 seconds
    return () => clearTimeout(scrollDelay);
  }, []);

  return (
    <div className="todayoffer">
      <h1 className="offer-heading">
         Today’s Offers
        <CountdownTimer targetDate={offerEndDate} onEnd={handleOfferEnd} />
      </h1>

      <div className={`marquee-container ${isOfferActive && startScroll ? 'active' : 'inactive'}`}>
        <div className="marquee-content">
          {[...offerItems, ...offerItems].map((item, index) => (
            <Item
              key={`${item.id}-${index}`}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todaysoffer;
