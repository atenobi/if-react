import React from 'react';
import PropTypes from 'prop-types';

const PersonsCountItem = ({
  text, counterValue, setterFunc, decreaseValue, increaseValue, min, max,
}) => (
  <>
    <div className="count_item">
      <p className="text_md counter_item_text">{text}</p>
      <div className="count_button_container">
        <button
          onClick={(e) => decreaseValue(setterFunc, counterValue, min, text)}
          className={(min === counterValue) ? 'minus button_default_style' : 'button_changed_style'}
        >
          -
        </button>
        <span className="counter_item_text">{counterValue}</span>
        <button
          onClick={(e) => increaseValue(setterFunc, counterValue, max, text)}
          className={(max === counterValue) ? 'plus button_default_style' : 'button_changed_style'}
        >
          +
        </button>
      </div>
    </div>
  </>
);

PersonsCountItem.propTypes = {
  text: PropTypes.string.isRequired,
  counterValue: PropTypes.number.isRequired,
  setterFunc: PropTypes.func.isRequired,
  decreaseValue: PropTypes.func.isRequired,
  increaseValue: PropTypes.func.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default PersonsCountItem;
