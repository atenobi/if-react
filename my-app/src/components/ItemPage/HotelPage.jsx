import React from 'react';
import PropTypes, { string } from 'prop-types';
import {
  Routes, Route, Link,
} from 'react-router-dom';

// styles
import './index.css';

const HotelPage = ({ element }) => (
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
    <Link to="/" className="text_lg text_no_decor back_link">Back</Link>
    <Routes>
      <Route exact path="/" />
    </Routes>
  </div>
);

HotelPage.propTypes = {
  element: PropTypes.objectOf(string).isRequired,
};

export default HotelPage;
