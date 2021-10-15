import React from 'react';

function Item(props) {
	return (
			<>
				<div className="content_item_container">
					<img src={props.imageUrl} className="content_image" alt="photo"/>
					<p className="content_name_text">{props.name}</p>
					<p className="content_location_text">{props.city}, {props.country}</p>
				</div>
			</>
	)
}

export default Item;
