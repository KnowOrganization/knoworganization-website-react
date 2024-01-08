import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import LoadingHome from "../components/LoadingHome";
import Services from "../components/Services";
import Whyus from "../components/Whyus";
import Vision from "../components/Vision";
import Knowus from "../components/Knowus";
import KnowConnect from "../components/KnowConnect";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { lerp } from "three/src/math/MathUtils";

function Home() {
	const lenis = useLenis(({ scroll }) => {
		// called every scroll
	});

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
		<ReactLenis root options={{
			"lerp": 0.1,
			"orientation": "vertical",
			"smoothTouch": true,
		}}>
			<div>
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
		</ReactLenis>
	);
}

export default Home;
