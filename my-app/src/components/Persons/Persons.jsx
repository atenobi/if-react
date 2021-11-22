import React, { useState } from 'react';
import PropTypes from 'prop-types';

// components
import PersonsCountItem from './PersonsCountItem/PersonsCountItem';
import ChildrenAgeSelect from './ChildrenAgeSelect/ChildernAgeSelect';

// constants
import personsValues from '../../../../../time/src/constants/personsValues';

// styles
import './index.css';

const Persons = ({ counter, showCounter }) => {
  const [adults, setAdults] = useState(personsValues.adults.default);
  const [children, setChildren] = useState(personsValues.children.default);
  const [rooms, setRooms] = useState(personsValues.rooms.default);
  const [childAge, setChildAge] = useState([]);
  const [childCounter, setChildCounter] = useState([]);

  const test = () => setChildCounter((childCounter) => childCounter.slice(0, (childCounter.length - 1)));

  const decreaseValue = (func, value, min, text) => {
    if (text === 'Children' && childCounter.length > 0 && value > min ) {
      func(value -= 1);
      test();
    } else  if (value > min) {
      func(value -= 1);
    }
  };

  const increaseValue = (func, value, max, text) => {
    if (text === 'Children' && childCounter.length < 11 && value < max) {
      setChildCounter((childCounter) => [...childCounter, children]);
      func(value += 1);
      // console.log('test+');
    } else if (value < max) {
      func(value += 1);
    }
  };

  return (
    <>
      <div className="top_section__form--input_container">
        <span
          onClick={showCounter}
          className="form_persons_text text_sm"
        >
          <span>{adults}</span>
          {' '}
          Adults
          {' '}
          -
          <span>{children}</span>
          {' '}
          Children
          {' '}
          -
          <span>{rooms}</span>
          {' '}
          Rooms
        </span>
        {counter && (
        <div className="persons_count">
          <PersonsCountItem
            text="Adults"
            setterFunc={setAdults}
            counterValue={adults}
            increaseValue={increaseValue}
            decreaseValue={decreaseValue}
            min={personsValues.adults.min}
            max={personsValues.adults.max}
          />
          <PersonsCountItem
            text="Children"
            setterFunc={setChildren}
            counterValue={children}
            increaseValue={increaseValue}
            decreaseValue={decreaseValue}
            min={personsValues.children.min}
            max={personsValues.children.max}
          />
          <PersonsCountItem
            text="Rooms"
            setterFunc={setRooms}
            counterValue={rooms}
            increaseValue={increaseValue}
            decreaseValue={decreaseValue}
            min={personsValues.rooms.min}
            max={personsValues.rooms.max}
          />
        </div>
        )}
        {((children !== 0) && counter) && (
          <div className="child_age">
            <p className="child_age_text">What is the age of the child you’re travelling with?</p>
            <div className="child_age_selects">
              {childCounter.map((el, index) => (
                  <ChildrenAgeSelect
                    key={index}
                    childAge={childAge}
                    setChildAge={setChildAge}
                  />
                ))
              }
            </div>
          </div>
        )}
      </div>
    </>
  );
};

Persons.propTypes = {
  counter: PropTypes.bool.isRequired,
  showCounter: PropTypes.func.isRequired,
};

export default Persons;
