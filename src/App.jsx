import "./App.css";
import Hero from "./comp/Hero";
import Nav from "./comp/Nav";
import Card from "./comp/Card";
import CardData from "./CardData";

export default function App() {
	const cards = CardData.map((card) => {
		return <Card key={card.id} item={card} />;
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
