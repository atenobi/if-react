import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// components
import SearchInput from '../../components/SearchInput/SearchInput';
import Persons from '../../components/Persons/Persons';
import SearchButton from '../../components/SearchButton/SearchButton';

// constants
import baseURL from '../../constants/baseURL';

// functions helpers
import saveParamsToUrl from '../../utils/saveParamsToUrl';

// styles
import './index.css';
import Calendar from '../../components/Calendar/Calendar';

const UserSearchForm = ({ setHotels }) => {
  const hotelsApi = `${baseURL}hotels?`;
  const [userStr, setUserStr] = useState('');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [apiHotels, setApiHotels] = useState([]);

  const [cal1, setCal1] = useState(false);
  const [cal2, setCal2] = useState(false);

  const handleChange = (e) => setUserStr(e.target.value);

  const visibilityStatus = (e) => {
    if (e.target.id === 'cal1') {
      if (!cal1) {
        setCal1(true);
        setCal2(false);
      } else {
        setCal1(false);
      }
    }
    if (e.target.id === 'cal2') {
      if (!cal2) {
        setCal2(true);
        setCal1(false);
      } else {
        setCal2(true);
      }
    }
  };

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
          <div className="top_section__form--input_container">
            <SearchInput text="New York" onChangeFunc={handleChange} />
          </div>
          <div className="top_section__form--input_container">
            <div
              className="form_calendar__container row"
            >
              <Calendar
                id="cal1"
                activeWrapper={cal1}
                showWrapper={visibilityStatus}
              />
              <Calendar
                id="cal2"
                activeWrapper={cal2}
                showWrapper={visibilityStatus}
              />
            </div>
          </div>

          <div className="top_section__form--input_container">
            <div className="form_persons_container">
              <Persons />
            </div>
          </div>

          <div className="top_section__form--input_container">
            <SearchButton text="Search" onClickFunc={handleClick} />
          </div>
        </div>
      </div>
    </>
  );
};

UserSearchForm.proTypes = {
  setHotels: PropTypes.func.isRequired,
};

export default UserSearchForm;
