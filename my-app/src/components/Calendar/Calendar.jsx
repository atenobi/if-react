import React, { useState } from 'react';

// components
import Wrapper from './Wrapper/Wrapper';
import wrapperBody from './Wrapper/wrapperBody';

// constants
import date from '../../constants/date';

// styles
import './index.css';

const Calendar = () => {
  const [activeWrapper, setActiveWrapper] = useState(false);
  const [dateInput, setDateInput] = useState(date.currentFullDate());
  const [month, setMonth] = useState(date.currentMonth);
  const [year, setYear] = useState(date.currentYear);
  const arrayDay = [[], [], [], [], [], []];

  wrapperBody(month, year, arrayDay);

  const handleClick = () => ((activeWrapper) ? setActiveWrapper(false) : setActiveWrapper(true));

  return (
    <>
      <div className="calendar_input">
        <input
          type="text"
          placeholder={dateInput}
          className="form_input"
          onClick={handleClick}
        />
        <div>
          <Wrapper
            active={activeWrapper}
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
      </div>
    </>
  );
};

export default Calendar;
