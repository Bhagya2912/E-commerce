import React, { useContext, useState, useEffect } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  const [isOpen, setIsOpen] = useState(false);
  const [sortOption, setSortOption] = useState("Sort by");

  const handleSort = (option) => {
    setSortOption(option);
    setIsOpen(false);
  };

  const sortOptions = ["Price: Low to High", "Price: High to Low", "Newest Arrivals", "A-Z"];

  let filteredProducts = all_product.filter(
    (item) =>
      item.category === props.category &&
      item.name?.toLowerCase() !== "today's offer" &&
      ![37, 38, 39, 40].includes(item.id)
  );

  if (props.category === 'kid') {
    filteredProducts = filteredProducts.slice(0, 36);
  }

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "Price: Low to High") {
      return a.new_price - b.new_price;
    } else if (sortOption === "Price: High to Low") {
      return b.new_price - a.new_price;
    } else if (sortOption === "A-Z") {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  // 🎞️ Carousel Logic
  const images = [
    props.banner,
    'https://img.freepik.com/premium-psd/fashion-sale-social-media-banner-facebook-cover-template_671392-80.jpg',
    'https://img.freepik.com/premium-vector/social-media-banner-social-media-template_607096-59.jpg?w=1380',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='shop-category'>
      {/* 🖼️ Banner Slider */}
      <div className="shopcategory-banner">
        {images.map((img, index) => (
          <img
            key={index}
            className={`carousel-image ${index === currentSlide ? 'active' : ''}`}
            src={img}
            alt={`Slide ${index + 1}`}
          />
        ))}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Sort & Index UI */}
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing {sortedProducts.length}</span> products
        </p>

        <div className="shopcategory-sort-container">
          <div className="shopcategory-sort" onClick={() => setIsOpen(!isOpen)}>
            {sortOption}
            <img src={dropdown_icon} alt="dropdown" />
          </div>
          {isOpen && (
            <div className="shopcategory-sort-dropdown">
              {sortOptions.map((option, index) => (
                <div
                  key={index}
                  className="shopcategory-sort-option"
                  onClick={() => handleSort(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Products List */}
      <div className="shopcategory-products">
        {sortedProducts.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>

      {/* Load More Button */}
      <div
        className="shopcategory-loadmore"
        onClick={() => window.open('https://youtu.be/fma9T6pHg4Q')}
      >
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
