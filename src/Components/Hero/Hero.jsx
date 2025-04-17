import React, { useState, useEffect } from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import hero_image from '../Assets/hero_image.png';
import hero_image2 from '../Assets/hero_image2.png';
import hero_image3 from '../Assets/hero_image3.png';
import hero_image4 from '../Assets/hero_image4.png';


const slides = [
  {
    // title: 'NEW ARRIVALS ONLY',
    text1: 'new',
    text2: 'Collections',
    text3: 'for everyone',
    image: hero_image,
  },
  {
    title: 'Womens Offers Live',
    text1: 'hot',
    text2: 'Trendy Picks',
    text3: 'on Sale',
    image: hero_image2,
  },
  {
    title: 'Mens Offers are Live',
    text1: 'exclusive',
    text2: 'Fresh Looks',
    text3: 'Only for You',
    image: hero_image3,
  },
  {
    title: 'Kids Offers are Live',
    text1: 'exclusive',
    text2: 'Fresh Looks',
    text3: 'Only for You',
    image: hero_image4,
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(goNext, 5000); // Auto slide every 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="hero-slider" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((item, i) => (
          <div className="hero-slide" key={i}>
            <div className="hero-left">
              <h2>{item.title}</h2>
              <div>
                <div className="hero-hand-icon">
                  <p>{item.text1}</p>
                  <img src={hand_icon} alt="icon" />
                </div>
                <p>{item.text2}</p>
                <p>{item.text3}</p>
              </div>
            </div>
            <div className="hero-right">
              <img src={item.image} alt="slide"/>
            </div>
          </div>
        ))}
      </div>

      <button className="hero-arrow left" onClick={goPrev}><i class="fa-solid fa-less-than"></i></button>
      <button className="hero-arrow right" onClick={goNext}><i class="fa-solid fa-greater-than"></i></button>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Hero;

