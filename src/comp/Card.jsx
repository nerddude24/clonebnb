import React from "react";
import franzj from "../img/franzj.jpeg";
import star from "../img/star.png";

export default function Card() {
	return (
		<div className="card">
			<img src={franzj} />
			<div className="card-stats">
				<img src={star} className="card-stats-star" />
				<span className="black">5.0 </span>
				<span className="grey">(6) •</span>
				<span className="grey">USA</span>
			</div>
			<div className="card-info">
				<p>Life lessons with FranzJ</p>
				<p>
					<b>From 136$</b> / person
				</p>
			</div>
		</div>
	);
}
