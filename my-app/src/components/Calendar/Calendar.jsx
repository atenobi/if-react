import React, { useState } from 'react';
import PropTypes from 'prop-types';

// components
import Wrapper from './Wrapper/Wrapper';
import wrapperBody from './Wrapper/wrapperBody';

// constants
import date from '../../constants/date';

// styles
import './index.css';

const Calendar = ({ id, activeWrapper, showWrapper }) => {
  const [dateInput, setDateInput] = useState(date.currentFullDate());
  const [month, setMonth] = useState(date.currentMonth);
  const [year, setYear] = useState(date.currentYear);
  const arrayDay = [[], [], [], [], [], []];

  wrapperBody(month, year, arrayDay);

  return (
    <>
      <div className="calendar_input">
        <input
          id={id}
          type="text"
          placeholder={dateInput}
          className="form_input"
          onClick={(e) => showWrapper(e)}
        />
        {activeWrapper
          && (
          <div>
            <Wrapper
              days={arrayDay}
              week={date.weekArray}
              curMonth={month}
              monthText={date.monthArray[month]}
              curDay={date.currentDay}
              curYear={year}
              yearSetter={setYear}
              dateSetter={setDateInput}
              monthSetter={setMonth}
            />
          </div>
          )}
      </div>
    </>
  );
};

Calendar.propTypes = {
  id: PropTypes.string.isRequired,
  activeWrapper: PropTypes.bool.isRequired,
  showWrapper: PropTypes.func.isRequired,
};

export default Calendar;
