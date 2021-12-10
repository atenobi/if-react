import React from 'react';
import PropTypes from 'prop-types';

const TextLink = ({ text, cssClass }) => (
  <p className={cssClass}>{text}</p>
);

TextLink.propTypes = {
  text: PropTypes.string.isRequired,
  cssClass: PropTypes.string.isRequired,
};

export default TextLink;
