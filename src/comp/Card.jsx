import React from "react";
import star from "../img/star.png";

export default function Card(props) {
	const { img, title, desc, stats, loc, price, openSpots } = props.item;

	let badgeTxt = "";

	if (openSpots === 0) {
		badgeTxt = "SOLD OUT";
	} else if (loc == "Online") {
		badgeTxt = "ONLINE";
	}

	return (
		<div className="card">
			{badgeTxt !== "" && <div className="card-badge">{badgeTxt}</div>}
			<img src={"./public/img/" + img} />
			<div className="card-stats">
				<img src={star} className="card-stats-star" />
				<span className="black">{stats.rating} </span>
				<span className="grey">({stats.ratingCount}) •</span>
				<span className="grey">{loc}</span>
			</div>
			<p className="card-info-title">{title}</p>
			<p className="card-info-price">
				<b>From {price}$</b> / person
			</p>
		</div>
	);
}
