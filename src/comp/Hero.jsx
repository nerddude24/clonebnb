import React from "react";
import heroimg from "../img/hero.jpg";

export default function Hero() {
	return (
		<div className="hero">
			<img src={heroimg} />
			<div className="hero-p">
				<h1>Online Experiences</h1>
				<p>Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
			</div>
		</div>
	);
}
