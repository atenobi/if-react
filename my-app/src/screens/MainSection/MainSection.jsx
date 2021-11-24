import React from 'react';
import PropTypes from 'prop-types';

// components
import HotelItemMaker from '../../components/HotelItemMaker/HotelItemMaker';

// styles
import './index.css';

const MainSection = ({ title, array }) => (
  <>
    <div className="container_block">
      <div className="container_title">
        <h2 className="title_text">
          {title}
          {' '}
        </h2>
      </div>
      <div className="container_content">
        {array.map((el) => (<HotelItemMaker data={el} id={el.id} key={el.id} />))}
      </div>
    </div>
  </>
);

MainSection.propTypes = {
  title: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(Object).isRequired,
};

export default MainSection;
