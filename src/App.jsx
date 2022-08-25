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
				<Card></Card>
			</main>
		</div>
	);
}
