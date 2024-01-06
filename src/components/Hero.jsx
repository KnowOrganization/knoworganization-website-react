import React, {useRef, useLayoutEffect} from "react";
import ModelCanvas from "./Model";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Hero() {
    const modelRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
		let ctx = gsap.context(() => {

            gsap.from(modelRef.current, {
                scrollTrigger: {
                    trigger: ".hero",
                    start: "top center",
                    end: "top top",
                    scrub: 1,
                    markers: true,
                },
                right: '70',
                top: '80vh',
            });
		});

		return () => ctx.revert();
	}, []);

	return (
		<div className=" hero flex justify-end w-screen h-[150vh] flex-col">
			<h1 className="logo font-anton text-[200px] tracking-tighter  text-primary px-20 ">
				KNOW
				<span className=" font-montserrat text-[400px] leading-3">.</span>
				<span className=" font-montserrat tracking-normal text-[150px]">
					Infinite Possibilities
				</span>
			</h1>
			<h2 className=" font-montserrat text-[50px] px-20">
				Empowering Large Corporations and Startups to Thrive
			</h2>
			<button className=" font-montserrat text-2xl rounded-full border-2 w-[400px] mx-20 border-primary my-20 py-3 hover:bg-primary hover:text-white transition-all ease-in duration-300 opacity-300 ">
				Let's Talk About Your Vision.
			</button>
            <div ref={modelRef} className=" absolute top-[150vh] right-[80vw]  h-96">

            <ModelCanvas model="./strip.gltf" />
            </div>
		</div>
	);
}

export default Hero;
