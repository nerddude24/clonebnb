import "./App.css";
import Hero from "./comp/Hero";
import Nav from "./comp/Nav";
import Card from "./comp/Card";
import CardData from "./CardData";

export default function App() {
	const cards = CardData.map((card) => {
		return (
			<Card
				img={card.img}
				rating={card.stats.rating}
				ratingCount={card.stats.ratingCount}
				loc={card.loc}
				title={card.title}
				price={card.price}
				desc={card.desc}
        openSpots={card.openSpots}
			/>
		);
	});
	return (
		<div className="App">
			<Nav></Nav>
			<main>
				<Hero />
				<div className="cards">{cards}</div>
			</main>
		</div>
	);
}
