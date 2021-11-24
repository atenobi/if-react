import React from 'react';
import PropTypes, { string } from 'prop-types';
import {
  Routes, Route, Link,
} from 'react-router-dom';

// components
import HotelPage from '../ItemPage/HotelPage';
// import NotFoundPage from '../ItemPage/NotFoundPage';

// constants
// import baseURL from '../../constants/baseURL';

// styles
import './index.css';

const HotelItemMaker = ({ data, id }) => {
  return (
    <>
      <Link to="/" />
      <Link
        className="text_no_decor"
        to={`hotels/${id}`}
      >
        <div
          className="content_item_container"
        >
          <img
            src={data.imageUrl}
            className="content_image"
            alt={data.name}
          />
          <p
            className="content_name_text"
          >
            {data.name}
          </p>
          <p
            className="content_location_text"
          >
            {data.city}
            ,
            {' '}
            {data.country}
          </p>
        </div>
      </Link>
      <Routes>
        <Route exact path="/" />
        <Route exact path={`hotels/${id}`} element={<HotelPage element={data} />} />
        {/* <Route exact path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </>
  );
};

HotelItemMaker.propTypes = {
  data: PropTypes.objectOf(string).isRequired,
  id: PropTypes.string.isRequired,
};

export default HotelItemMaker;
