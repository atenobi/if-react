import React from 'react';
import PropTypes, { string } from 'prop-types';
import { Link } from 'react-router-dom';

// components
import HotelPage from '../HotelPage/HotelPage';
import MyRoutes from '../../MyRoutes/MyRoutes';

// styles
import './index.css';

const HotelItemMaker = ({ data, id }) => (
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
    {MyRoutes(`hotels/${id}`, <HotelPage element={data} />)}
  </>
);

HotelItemMaker.propTypes = {
  data: PropTypes.objectOf(string).isRequired,
  id: PropTypes.string.isRequired,
};

export default HotelItemMaker;
