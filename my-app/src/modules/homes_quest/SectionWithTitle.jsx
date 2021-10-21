import React from 'react';
import PropTypes from 'prop-types';

import CardMakerFunc from './CardMakerFunc';

import hotelArray from './hotelArray';

const SectionWithTitle = (props) => {
  const dataPart = hotelArray.slice(0, 4);

  return (
    <>
      <div className="container_block">
        <div className="container_title">
          <h2 className="title_text">
            {props.title}
            {' '}
          </h2>
        </div>
        <div className="container_content">
          <CardMakerFunc data={dataPart} />
        </div>
      </div>
    </>
  );
};

SectionWithTitle.propTypes = {
  title: PropTypes.string,
};

export default SectionWithTitle;
