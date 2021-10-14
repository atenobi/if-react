import data from './DataArray'

function Item() {

		return (
			<>
				<div className="content_item_container">
					<img src={data[0].imageUrl} className="content_image" alt="photo"/>
					<p className="content_name_text">{data[0].name}</p>
					<p className="content_location_text">{data[0].city}, {data[0].country}</p>
				</div>
				<div className="content_item_container">
					<img src={data[1].imageUrl} className="content_image" alt="photo"/>
					<p className="content_name_text">{data[1].name}</p>
					<p className="content_location_text">{data[1].city}, {data[1].country}</p>
				</div>
				<div className="content_item_container">
					<img src={data[2].imageUrl} className="content_image" alt="photo"/>
					<p className="content_name_text">{data[2].name}</p>
					<p className="content_location_text">{data[2].city}, {data[2].country}</p>
				</div>
				<div className="content_item_container">
					<img src={data[3].imageUrl} className="content_image" alt="photo"/>
					<p className="content_name_text">{data[3].name}</p>
					<p className="content_location_text">{data[3].city}, {data[3].country}</p>
				</div>
			</>
	)
}

export default Item;
