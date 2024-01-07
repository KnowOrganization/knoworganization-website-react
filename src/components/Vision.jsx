import React, { useRef, useLayoutEffect, useEffect } from "react";
import img1 from "../assets/images/image (3).png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Vision() {
	const visionRef = useRef(null);

	return (
		<div id="vision" className=" flex justify-center items-start flex-col">
			<h2 className="font-anton text-7xl mx-10">
				<span className="">Know</span>
				<span className="font-montserrat text-[9rem] leading-tighter">
					.
				</span>{" "}
				Vision
			</h2>
			<h1 className=" font-anton text-9xl leading-snug mx-10">
				Beyond limits, beyond expectations: Unleashing infinite
				possibilities together.
			</h1>
			<h2 className="text-2xl mt-64 mx-[10vw]">
				Our vision is to be the driving force behind a world where infinite
				possibilities become our playground. We see technology as a bridge,
				not a barrier, connecting audacious dreams with achievable
				realities. We are the architects of groundbreaking solutions, the
				navigators of uncharted territories, and the champions of boundless
				ambition.
			</h2>
			<div className="flex mx-10 my-20 border-primary border-4 ">
				<h2 className="text-2xl py-10 px-2 border-primary border-4">
					<span className="text-4xl">
						We are the architects of innovation,
					</span>
					crafting bespoke solutions that defy boundaries and push the
					frontiers of what's possible. We don't simply offer tools, we
					build bridges, guiding your wildest dreams from imagination to
					tangible impact.
				</h2>
				<h2 className="text-2xl py-10 px-2 border-primary border-4">
					<span className="text-4xl">
						We are the navigators of uncharted territories,
					</span>
					venturing into the unknown with fearless curiosity. We embrace
					the winds of change, pivoting and adapting to ensure your journey
					to success is smooth and exhilarating.
				</h2>
				<h2 className="text-2xl py-10 px-2 border-primary border-4">
					<span className="text-4xl">
						We are the champions of boundless ambition,
					</span>
					believing in your vision even when it seems impossible. We are
					your unwavering collaborators, your allies in pushing the
					boundaries of what's achievable.
				</h2>
			</div>

			<h1 className=" font-anton text-9xl leading-snug mx-10">
				Know. Organization isn't just a company, it's a movement.
			</h1>
			<h2 className=" font-anton text-5xl text-left mx-10">
				A movement fueled by the audacity of dreams and the power of
				technology to make them real.
			</h2>
		</div>
	);
}

export default Vision;
