import React, {useEffect, useState} from 'react';
import PropTypes, {number, string} from 'prop-types';


const ChildrenAgeSelect = ({ childAge, setChildAge }) => {
	const age = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

	const handlerSelect = (el) => {
		setChildAge(previous => [...previous, el]);
	};

	return (
		<select
			name="childAge"
			id="childAge"
			className="child_age_option_item"
			value={childAge[childAge.length]}
			onChange={(e) => handlerSelect(e.target.value)}
		>
			{age.map((el) => (
				<option
					key={el}
					value={el}
					onSelect={() => handlerSelect(el)}
				>
					{el} years old
				</option>
				)
			)}
		</select>
	)
};

ChildrenAgeSelect.propTypes = {
	setChildAge: PropTypes.func.isRequired,
	childAge: PropTypes.arrayOf(string).isRequired,
};

export default ChildrenAgeSelect;
