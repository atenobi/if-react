import React from 'react';
import PropTypes from 'prop-types';

// functions helpers
import textFormatter from '../../../helpers_function/textFormatter';

const SearchButton = ({
  text, array, setHotels, userString,
}) => (
  <button
    className="top_section__form_input--button form_input text_lg"
    type="submit"
    onClick={() => {
      const searchedHotels = [];

      array.forEach((el) => {
        if (textFormatter(el.city).includes(textFormatter(userString))
          || textFormatter(el.name).includes(textFormatter(userString))
          || textFormatter(el.country).includes(textFormatter(userString))) {
          searchedHotels.push(el);
        }
      });
      console.log(searchedHotels);
      console.log(setHotels(searchedHotels));

      setHotels(searchedHotels);
    }}
  >
    {text}
  </button>
);

SearchButton.propTypes = {
  text: PropTypes.string.isRequired,
  array: PropTypes.arrayOf(Object).isRequired,
  userString: PropTypes.string.isRequired,
  setHotels: PropTypes.func.isRequired,
};

export default SearchButton;
