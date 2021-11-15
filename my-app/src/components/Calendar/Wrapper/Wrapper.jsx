import React from 'react';
import PropTypes, { arrayOf, number, string } from 'prop-types';

const Wrapper = ({
  active, days, week, curMonth, monthText, yearSetter, curYear, dateSetter, monthSetter,
}) => {
  const january = 0;
  const december = 11;

  const monthMinusPlus = () => {
    if (curMonth !== january) {
      monthSetter(curMonth - 1);
    } else {
      monthSetter(december);
      yearSetter(curYear - 1);
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
    <div className={active ? 'calendar_wrapper visible_element' : 'hidden_element'}>
      <div className="row">
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
        <thead className="text_lg">
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

          {/* in work */}
          {days.map((el) => (
            <tr
              key={el}
            >
              {el.map((elem) => (
                <td
                  key={elem}
                >
                  <button
                    type="submit"
                    className="calendar_wrapper_body_item"
                    onClick={() => dateSetter(`${elem} ${monthText} ${curYear}`)}
                  >
                    {elem}
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
  days: PropTypes.arrayOf(arrayOf(number)).isRequired, // in work
  week: PropTypes.arrayOf(string).isRequired,
  curMonth: PropTypes.number.isRequired,
  monthText: PropTypes.string.isRequired,
  curYear: PropTypes.number.isRequired,
  yearSetter: PropTypes.func.isRequired,
  dateSetter: PropTypes.func.isRequired,
  monthSetter: PropTypes.func.isRequired,
};

export default Wrapper;
