import React, { useState } from 'react';
import PropTypes from 'prop-types';

// components
import SearchInput from '../../components/SearchInput/SearchInput';
import SearchButton from '../../components/SearchButton/SearchButton';

// constants
import hotelArray from '../../constants/hotelArray';

// functions helpers
import textFormatter from '../../utils/textFormatter';

// styles
import './index.css';

const UserSearchForm = ({ setHotels }) => {
  const [userStr, setUserStr] = useState('');

  const handleChange = (e) => setUserStr(e.target.value);

  const handleClick = () => {
    const searchedHotels = [];

    hotelArray.forEach((el) => {
      if (textFormatter(el.city).includes(textFormatter(userStr))
        || textFormatter(el.name).includes(textFormatter(userStr))
        || textFormatter(el.country).includes(textFormatter(userStr))) {
        searchedHotels.push(el);
      }
    });
    setHotels(searchedHotels);
  };

  return (
    <>
      <div className="container">
        <div className="top_section__form">
          <SearchInput text="New York" onChangeFunc={handleChange} />
          <SearchButton text="Search" onClickFunc={handleClick} />
        </div>
      </div>
    </>
  );
};

UserSearchForm.proTypes = {
  setHotels: PropTypes.func.isRequired,
};

export default UserSearchForm;
