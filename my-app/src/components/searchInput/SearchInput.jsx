import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ onChangeFunc, text }) => (
  <>
    <input
      className="form_input top_section__form_input--destination text_lg"
      placeholder={text}
      onChange={onChangeFunc}
    />
  </>
);

SearchInput.proTypes = {
  text: PropTypes.string.isRequired,
  onChangeFunc: PropTypes.func.isRequired,
};

export default SearchInput;
