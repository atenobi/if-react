import React from 'react';
import PropTypes from 'prop-types';

// assets
import SvgSprite from '../../assets/svgSprite';

const ImageLink = ({ id, link, cssClass }) => (
  <a href={link}>
    <SvgSprite id={id} cssClass={cssClass} />
  </a>
);

ImageLink.propTypes = {
  id: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  cssClass: PropTypes.string.isRequired,
};

export default ImageLink;
