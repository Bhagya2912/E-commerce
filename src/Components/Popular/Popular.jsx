import React, { useEffect, useState } from 'react';
import './Popular.css';
import data_product from '../Assets/data';
import Item from '../Item/Item';

const Popular = () => {
  const [startScroll, setStartScroll] = useState(false);

  useEffect(() => {
    const delayScroll = setTimeout(() => {
      setStartScroll(true);
    }, 3000); // Start scrolling after 3 seconds
    return () => clearTimeout(delayScroll);
  }, []);

  return (
    <div className='popular'>
      <h1>Popular in Women</h1>
      <hr />
      <div className={`popular-item-wrapper ${startScroll ? 'active' : 'inactive'}`}>
        <div className="popular-item-scroll">
          {[...data_product, ...data_product].map((item, i) => (
            <Item
              key={`${item.id}-${i}`}
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

export default Popular;

