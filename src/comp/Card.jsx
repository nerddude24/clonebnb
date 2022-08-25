import React from "react";
import star from "../img/star.png";

export default function Card({ img, rating, ratingCount, loc, title, price, desc, openSpots }) {
	return (
		<div className="card">
			<img src={"./public/img/" + img} />
			<div className="card-stats">
				<img src={star} className="card-stats-star" />
				<span className="black">{rating} </span>
				<span className="grey">({ratingCount}) •</span>
				<span className="grey">{loc}</span>
			</div>
			<p className="card-info-title">{title}</p>
			<p className="card-info-price">
				<b>From {price}$</b> / person
			</p>
		</div>
	);
}
