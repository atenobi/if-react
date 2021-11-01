import React, { useState } from 'react';
import PropTypes from 'prop-types';

// components
import SearchInput from './search_input/SearchInput';
import SearchButton from './search_button/SearchButton';

// constants
import hotelArray from '../../constants/hotelArray';

// styles
import './index.css';

const UserSearchForm = ({ setHotels }) => {
  const [userStr, setUserStr] = useState('');

  return (
    <>
      <div className="container">
        <div className="top_section__form">
          <SearchInput text="New York" setUserStr={setUserStr} />
          <SearchButton text="Search" array={hotelArray} userString={userStr} setHotels={setHotels} />
        </div>
      </div>
    </>
  );
};

UserSearchForm.proTypes = {
  setHotels: PropTypes.func.isRequired,
};

export default UserSearchForm;
