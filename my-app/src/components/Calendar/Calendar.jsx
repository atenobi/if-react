import React, { useState } from 'react';

// components
import Wrapper from './Wrapper/Wrapper';
import wrapperBody from './Wrapper/wrapperBody';

// constants
import Date from '../../constants/date';

// styles
import './index.css';

const Calendar = () => {
  const [active, setActive] = useState(false);
  const [dateInput, setDateInput] = useState(Date.currentFullDate());
  const [month, setMonth] = useState(Date.currentMonth);
  const [year, setYear] = useState(Date.currentYear);

  const handleClick = () => ((active === false) ? setActive(true) : setActive(false));

  return (
    <>
      <div className="calendar_input">
        <input
          type="text"
          placeholder={dateInput}
          className="form_input"
          onClick={handleClick}
        />
        <Wrapper
          active={active}
          days={wrapperBody(month, year)}
          week={Date.weekArray}
          curMonth={month}
          monthText={Date.monthArray[month]}
          curYear={year}
          yearSetter={setYear}
          dateSetter={setDateInput}
          monthSetter={setMonth}
        />
      </div>
    </>
  );
};

export default Calendar;
