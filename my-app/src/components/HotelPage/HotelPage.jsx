import React from 'react';
import PropTypes, { string } from 'prop-types';
import { useNavigate } from 'react-router-dom';

// styles
import './index.css';

const HotelPage = ({ element }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="item_wrapper_page container_block">
      <h1 className="hotel_name_title">{element.name}</h1>
      <img
        src={element.imageUrl}
        className="hotel_content_image"
        alt={element.name}
      />
      <p
        className="hotel_location_text"
      >
        City:
        {' '}
        {element.city}
      </p>
      <p
        className="hotel_location_text"
      >
        Country:
        {' '}
        {element.country}
      </p>
      <p
        className="hotel_location_text"
      >
        Contact-id:
        {' '}
        {element.id}
      </p>
      <button onClick={goBack} type="submit" className="text_lg text_no_decor back_button">Back</button>
    </div>
  );
};

HotelPage.propTypes = {
  element: PropTypes.objectOf(string).isRequired,
};

export default HotelPage;
