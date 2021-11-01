import React from 'react';
import PropTypes from 'prop-types';

const SearchInput = ({ setUserStr, text }) => (
  <>
    <input
      className="form_input top_section__form_input--destination text_lg"
      placeholder={text}
      onChange={(e) => setUserStr(e.target.value)}
    />
  </>
);

SearchInput.proTypes = {
  text: PropTypes.string.isRequired,
  setUserStr: PropTypes.func.isRequired,
};

export default SearchInput;
