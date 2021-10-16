import React from 'react';

function CardMaker(props) {
	let hotelCards = props.map((el) =>
			<div className="content_item_container">
				<img src={el.imageUrl} className="content_image" alt="photo"/>
				<p className="content_name_text">{el.name}</p>
				<p className="content_location_text">{el.city}, {el.country}</p>
			</div>
		)

	return (
			<>
				{hotelCards}
			</>
		)
}

export default CardMaker;
