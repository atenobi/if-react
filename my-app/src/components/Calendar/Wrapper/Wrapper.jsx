import React from 'react';
import PropTypes, { arrayOf, number, string } from 'prop-types';

// constants
import date from '../../../constants/date';

const Wrapper = ({
  active, days, week, curDay, curMonth,
  monthText, yearSetter, curYear, dateSetter, monthSetter,
}) => {
  const january = 0;
  const december = 11;

  const monthMinusPlus = () => {
    if (curMonth !== january && curMonth > date.currentMonth && curYear > date.currentYear) {
      monthSetter(curMonth - 1);
    } else if (curYear > date.currentYear) {
      monthSetter(december);
      yearSetter(curYear - 1);
    } else {
      monthSetter(date.currentMonth);
      yearSetter(date.currentYear);
    }
  };

  const monthButtonPlus = () => {
    if (curMonth !== december) {
      monthSetter(curMonth + 1);
    } else {
      monthSetter(january);
      yearSetter(curYear + 1);
    }
  };

  return (
    <div
      className={active ? 'calendar_wrapper visible_element' : 'hidden_element'}
    >
      <div
        className="row"
      >
        <button
          type="submit"
          className="text_lg calendar_wrapper_button"
          onClick={monthMinusPlus}
        >
          {'<'}
        </button>

        <div className="calendar_wrapper__head text_lg">
          {monthText}
          {' '}
          {curYear}
        </div>
        <button
          type="submit"
          className="text_lg calendar_wrapper_button"
          onClick={monthButtonPlus}
        >
          {'>'}
        </button>
      </div>
      <table>
        <thead className="text_md">
          <tr>
            {week.map((el) => (
              <td
                className="calendar_wrapper_head_item"
                key={el}
              >
                {el.slice(0, 2)}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className="calendar_wrapper__body text_md">
          {days.map((weekArr) => (
            <tr
              key={weekArr}
            >
              {weekArr.map((dayNum) => (
                <td
                  key={dayNum}
                >
                  <button
                    key={dayNum}
                    type="submit"
                    className={(dayNum === curDay
                      && curMonth === date.currentMonth
                      && curYear === date.currentYear) ? 'calendar_wrapper_cur_item'
                      : (dayNum < curDay
                        && curMonth === date.currentMonth
                        && curYear === date.currentYear) ? 'calendar_wrapper_past_item'
                        : (dayNum === null) ? 'hidden_element'
                          : 'calendar_wrapper_body_item'}
                    onClick={() => dateSetter(`${dayNum} ${monthText} ${curYear}`)}
                  >
                    {dayNum}
                  </button>
                </td>
              ))}
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};

Wrapper.propTypes = {
  active: PropTypes.bool.isRequired,
  days: PropTypes.arrayOf(arrayOf(number)).isRequired,
  week: PropTypes.arrayOf(string).isRequired,
  curMonth: PropTypes.number.isRequired,
  monthText: PropTypes.string.isRequired,
  curDay: PropTypes.number.isRequired,
  curYear: PropTypes.number.isRequired,
  yearSetter: PropTypes.func.isRequired,
  dateSetter: PropTypes.func.isRequired,
  monthSetter: PropTypes.func.isRequired,
};

export default Wrapper;
