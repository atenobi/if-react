import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// components
import SearchInput from '../../components/SearchInput/SearchInput';
import SearchButton from '../../components/SearchButton/SearchButton';

// constants
import baseURL from '../../constants/baseURL';

// functions helpers
import saveParamsToUrl from '../../utils/saveParamsToUrl';

// styles
import './index.css';

// eslint-disable-next-line react/prop-types
const UserSearchForm = ({ setHotels }) => {
  const hotelsApi = `${baseURL}hotels?`;
  const [userStr, setUserStr] = useState('');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [apiHotels, setApiHotels] = useState([]);

  const handleChange = (e) => setUserStr(e.target.value);

  useEffect(() => {
    fetch(apiHotels)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setHotels(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
    if (error) {
      console.log(error.message);
    }
    if (!isLoaded) {
      console.log('Loading...');
    }
  }, [apiHotels]);

  const handleClick = (e) => {
    e.preventDefault();
    setApiHotels(saveParamsToUrl('search', userStr, hotelsApi));
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
