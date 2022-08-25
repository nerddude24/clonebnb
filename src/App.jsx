import "./App.css";
import Hero from "./comp/Hero";
import Nav from "./comp/Nav";
import Card from "./comp/Card";

export default function App() {
	return (
		<div className="App">
			<Nav></Nav>
			<main>
				{/* <Hero></Hero> */}
				<Card
					img="franzj.jpeg"
					rating="0.0"
					ratingCount={9512}
					loc="USA"
					title="Life lessons with FranzJ!"
					price={165895.99}
				></Card>
			</main>
		</div>
	);
}
