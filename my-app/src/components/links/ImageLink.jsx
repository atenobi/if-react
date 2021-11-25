import React from 'react';
import PropTypes from 'prop-types';

// assets
import SvgSprite from '../../assets/svgSprite';

const ImageLink = ({ id, cssClass }) => (
  <SvgSprite
    id={id}
    cssClass={cssClass}
  />
);

ImageLink.propTypes = {
  id: PropTypes.string.isRequired,
  cssClass: PropTypes.string.isRequired,
};

export default ImageLink;
