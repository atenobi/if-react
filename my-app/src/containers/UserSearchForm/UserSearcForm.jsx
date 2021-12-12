import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// components
import SearchInput from '../../components/SearchInput/SearchInput';
import Calendar from '../../components/Calendar/Calendar';
import Persons from '../../components/Persons/Persons';
import SearchButton from '../../components/SearchButton/SearchButton';

// constants
import baseURL from '../../constants/baseURL';

// functions helpers
import saveParamsToUrl from '../../utils/saveParamsToUrl';
import { fetchHotels } from '../../store/asyncActions/fetchHotels';

// styles
import './index.css';
import { clearHotelsAction } from '../../store/hotelsReducer';

const UserSearchForm = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.hotels.hotels);
  const [apiHotels, setApiHotels] = useState([]);
  const [userStr, setUserStr] = useState('');
  const [cal1, setCal1] = useState(false);
  const [cal2, setCal2] = useState(false);
  const [personsCounter, setPersonsCounter] = useState(false);

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
        setCal2(false);
      }
    }
  };

  const visibilityStatusPersonCounter = () => {
    if (!personsCounter) {
      setPersonsCounter(true);
    } else {
      setPersonsCounter(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setApiHotels(saveParamsToUrl('search', userStr, `${baseURL}hotels?`));
  };

  useEffect(() => {
    if (hotels.length > 0) {
      dispatch(clearHotelsAction());
      dispatch(fetchHotels(apiHotels));
    } else {
      dispatch(fetchHotels(apiHotels));
    }
  }, [apiHotels]);

  return (
    <>
      <div className="top_section_form__container">
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
              <Persons
                counter={personsCounter}
                showCounter={visibilityStatusPersonCounter}
              />
            </div>
          </div>

          <div className="top_section__form--input_container">
            <SearchButton text="Search" onClickFunc={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSearchForm;
