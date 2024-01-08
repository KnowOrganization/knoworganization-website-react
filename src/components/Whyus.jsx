import React, { useEffect, useState, useRef, useLayoutEffect } from "react";
import img1 from "../assets/images/image (10).png";
import img2 from "../assets/images/image (11).png";
import img3 from "../assets/images/image (12).png";
import img4 from "../assets/images/image (13).png";
import img5 from "../assets/images/image (14).png";
import img6 from "../assets/images/image (15).png";
import img7 from "../assets/images/image (16).png";
import img8 from "../assets/images/image (17).png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Whyus() {
	const homeBgRef = useRef(null);

	gsap.registerPlugin(ScrollTrigger);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.from(homeBgRef.current, {
				scrollTrigger: {
					trigger: ".whyusclass",
					start: "5% 70%",
					end: "5% top",
					scrub: 1,
					markers: true,
				},
				backgroundColor: "#FFFDF5",
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<div
			ref={homeBgRef}
            id="whyus"
			className=" whyusclass bg-primary  flex justify-center items-center  flex-col mt-96 text-secondary"
		>
			<h1 className=" font-anton text-9xl px-10 py-3 text-secondary leading-tight">
				Choosing the right partner can feel like searching for a diamond in
				a gravel pit.
			</h1>
			<h1 className=" font-anton text-5xl px-10 py-3 text-secondary">
				But fear not, visionary innovators, for Know. Organization isn't
				just another pebble
			</h1>

			<h2 className=" font-montserrat text-5xl mx-10 my-10 text-secondary">
				Here's why partnering with us unlocks infinite possibilities for
				your journey:
			</h2>
			<div className=" flex items-center">
				<img src={img1} alt="" className=" h-[50vw]" />
				<h2 className=" font-montserrat text-2xl mx-10 my-10 text-secondary">
					<span className="text-5xl">
						We Translate Dreams into Reality:{" "}
					</span>
					Your audacious vision, our tech alchemy. We don't just understand
					your dreams, we bring them to life through bespoke solutions
					powered by cutting-edge technologies.
				</h2>
			</div>
			<div className=" flex items-center">
				<h2 className=" font-montserrat text-2xl mx-10 my-10 text-secondary">
					<span className="text-5xl">From Concept to Launchpad: </span>
					From Blueprint to Breakthrough with Know. Organization.
				</h2>
				<img src={img6} alt="" className=" h-[30vw]" />
			</div>
			<div className=" flex items-center">
				<img src={img2} alt="" className=" h-[50vw]" />
				<h2 className=" font-montserrat text-2xl mx-10 my-10 text-secondary">
					<span className="text-5xl">Agility is Our Middle Name: </span>
					Forget rigid, predictable paths. We embrace the dynamic dance of
					agile methodologies, adapting to your every move and ensuring
					your project lands on its feet, every time.
				</h2>
			</div>
			<div className=" flex items-center">
				<h2 className=" font-montserrat text-2xl mx-10 my-10 text-secondary">
					<span className="text-5xl">
						We Don't Cut Corners, We Cut Costs:{" "}
					</span>
					Quality & Security Woven into Everything We Do.
				</h2>
				<img src={img7} alt="" className=" h-[30vw]" />
			</div>
			<div className=" flex items-center">
				<img src={img3} alt="" className=" h-[50vw]" />
				<h2 className=" font-montserrat text-2xl mx-10 my-10 text-secondary">
					<span className="text-5xl">
						Client-Centricity, Not Just a Buzzword:{" "}
					</span>
					You're not just a client, you're our co-pilot. We immerse
					ourselves in your vision, listening intently to your needs and
					navigating challenges hand-in-hand.
				</h2>
			</div>
			<div className=" flex items-center">
				<h2 className=" font-montserrat text-2xl mx-10 my-10 text-secondary">
					<span className="text-5xl">
						Smart Investment, Infinite Returns:{" "}
					</span>
					Invest in Secure, Scalable Solutions that Scale Your Success.
				</h2>
				<img src={img8} alt="" className=" h-[30vw]" />
			</div>
			<div className=" flex items-center">
				<img src={img4} alt="" className=" h-[50vw]" />
				<h2 className=" font-montserrat text-2xl mx-10 my-10 text-secondary">
					<span className="text-5xl">Collaboration, Our Superpower: </span>
					We're not a siloed bunch of tech wizards. We foster a vibrant
					ecosystem of minds - developers, designers, strategists - where
					ideas collide and spark revolutionary solutions.
				</h2>
			</div>
			<div className=" flex items-center">
				<h2 className=" font-montserrat text-2xl mx-10 my-10 text-secondary">
					<span className="text-5xl">
						Beyond Deliverables, We Deliver Impact:{" "}
					</span>
					It's not just about ticking boxes. We strive for solutions with
					lasting legacies, ones that not only meet your goals but also
					leave a positive ripple effect on the world around us.
				</h2>
				<img src={img5} alt="" className=" h-[50vw]" />
			</div>
			<h1 className=" font-anton text-7xl px-10 py-3 text-secondary leading-normal">
				We don't just deliver projects, we deliver infinite possibilities.
			</h1>
		</div>
	);
}

export default Whyus;
