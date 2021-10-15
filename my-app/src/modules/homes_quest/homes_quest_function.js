import React from 'react';
import Item from './homes_item'
import data from './data_array'

function Homes_quest_function() {
		return (
			<div className="container_block">
				<div className="container_title">
					<h2 className="title_text">Homes guests loves </h2>
				</div>
				<div className="container_content">
					{Item(data[0])}
					{Item(data[1])}
					{Item(data[2])}
					{Item(data[3])}
				</div>
			</div>
		)
}

export default Homes_quest_function;
