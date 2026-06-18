import Navbar from "./Navbar";
import Hero from "./Hero";
import CardGrid from "./CardGrid";
import Footer from "./Footer";

const Home = () => {
	return (
		<div className="d-flex flex-column min-vh-100">
			<Navbar />
			<div className="flex-grow-1">
				<Hero />
				<CardGrid />
			</div>
			<Footer />
		</div>
	);
};

export default Home;