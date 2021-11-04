import React from 'react';
import PropTypes from 'prop-types';

const HotelItemMaker = ({ data }) => (
  <>
    {data.map((el) => (
      <div key={el.id} className="content_item_container">
        <img src={el.imageUrl} className="content_image" alt={el.name} />
        <p className="content_name_text">{el.name}</p>
        <p className="content_location_text">
          {el.city}
          ,
          {' '}
          {el.country}
        </p>
      </div>
    ))}
  </>
);

HotelItemMaker.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HotelItemMaker;
