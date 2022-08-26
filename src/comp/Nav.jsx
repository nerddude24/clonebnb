import React from "react";
import icon from "../img/airbnbico.png";
export default function Nav() {
	return (
		<nav>
			<a href="https://www.airbnb.com" target="_blank">
				<img src={icon} alt="airbnb" />
			</a>
		</nav>
	);
}
