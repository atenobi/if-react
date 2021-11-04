import React from 'react';
import PropTypes from 'prop-types';

const TextLink = ({ text, link, cssClass }) => (
  <a className={cssClass} href={link}>{text}</a>
);

TextLink.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  cssClass: PropTypes.string.isRequired,
};

export default TextLink;
