import React from 'react';
import CardMaker from './HomesQuestCard'
import HotelArray from './HotelArray'

function HomesQuestPageOutput() {
		return (
			<div className="container_block">
				<div className="container_title">
					<h2 className="title_text">Homes guests loves </h2>
				</div>
				<div className="container_content">
					{CardMaker(HotelArray.slice(0,4))}
				</div>
			</div>
		)
}

export default HomesQuestPageOutput;
