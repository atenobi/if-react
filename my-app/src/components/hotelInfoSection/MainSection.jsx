import React from 'react';
import PropTypes from 'prop-types';

// components
import HotelItemMaker from './HotelItemMaker';

// styles
import './index.css';

const MainSection = (props) => (
  <>
    <div className="container_block">
      <div className="container_title">
        <h2 className="title_text">
          {props.title}
          {' '}
        </h2>
      </div>
      <div className="container_content">
        <HotelItemMaker data={props.array} />
      </div>
    </div>
  </>
);

MainSection.propTypes = {
  title: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(Object).isRequired,
};

export default MainSection;
