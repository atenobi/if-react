import React from 'react';
import PropTypes from 'prop-types';

const SearchButton = ({ text, onClickFunc }) => (
  <button
    className="top_section__form_input--button form_input text_lg"
    type="submit"
    onClick={onClickFunc}
  >
    {text}
  </button>
);

SearchButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClickFunc: PropTypes.func.isRequired,
};

export default SearchButton;
