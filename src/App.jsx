import React from "react";
import TopNav from "./components/TopNav";
import Featured from "./components/Featured";
import Delivery from "./components/Delivery";
import TopPicks from "./components/TopPicks";
import Meal from "./components/Meal";
import Categories from "./components/Categories";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

export default function App() {
	return (
		<>
			<TopNav />
			<Featured />
			<Delivery />
			<TopPicks />
			<Meal />
			<Categories />
			<NewsLetter />
			<Footer />	
		</>
	);
}
