import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LoadingHome from "../components/LoadingHome";
import Services from "../components/Services";
import Whyus from "../components/Whyus";
import Vision from "../components/Vision";
import Knowus from "../components/Knowus";
import KnowConnect from "../components/KnowConnect";




function Home() {




	window.onbeforeunload = function () {
		window.scrollTo(0, 0);
	};
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1700);
		return () => clearTimeout(timer);
	}, [loading]);

	return (
		
			<div >
				{loading ? (
					<>
						<LoadingHome />
					</>
				) : (
					<>
						<Header />
						<Hero />
						<Services />
						<Whyus />
						<Vision />
						<Knowus />
						<KnowConnect />
					</>
				)}
			</div>
	);
}

export default Home;
