import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Services() {
	const services1Ref = useRef(null);
	const services2Ref = useRef(null);
	const services3Ref = useRef(null);

	gsap.registerPlugin(ScrollTrigger);

	useLayoutEffect(() => {
		let ctx = gsap.context(() => {
			gsap.from(services1Ref.current, {
				scrollTrigger: {
					trigger: ".service1",
					start: "-200% 70%",
					end: "-200% top",
					scrub: 1,
					// markers: true,
				},
				x: 300,
				duration: 1,
			});
			gsap.from(services2Ref.current, {
				scrollTrigger: {
					trigger: ".service2",
					start: "-200% 70%",
					end: "-200% top",
					scrub: 1,
					// markers: true,
				},
				x: -300,
				duration: 1,
			});
			gsap.from(services3Ref.current, {
				scrollTrigger: {
					trigger: ".service3",
					start: "-200% 70%",
					end: "-200% top",
					scrub: 1,
					// markers: true,
				},
				x: 300,
				duration: 1,
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<div
			id="services"
			className=" service flex justify-center items-end flex-col min-h-screen"
		>
			<h1 className=" font-anton text-9xl mt-[70vh] mr-20 ml-52 text-right ">
				A Glimpse of Our Expertise
			</h1>
			<h2 className=" font-montserrat text-2xl py-32 mr-20 ml-52 text-right">
				Know. Organization isn't just a tech company, we're your launchpad
				to infinite possibilities. We craft bespoke solutions that empower
				your vision, fuel your business growth, and transform the way you
				operate. But where do we begin?
			</h2>
			<h1 className=" font-anton text-9xl mt-20 mr-20 ml-52 text-right ">
				For Enterprises
			</h1>
			<h2
				ref={services1Ref}
				className=" service1 font-montserrat text-2xl my-20 p-7 px-40 rotate-12 text-white bg-primary rounded-full"
			>
				<span className="text-5xl">Digital Transformation:</span>ERP, Cloud
				Migration, Data Analytics, and Cybersecurity.
			</h2>
			<h2
				ref={services2Ref}
				className=" service2 font-montserrat text-2xl my-20 p-7 px-40 -rotate-6 text-white bg-primary rounded-full"
			>
				<span className="text-5xl">Insights & Efficiency:</span> Big Data,
				Machine Learning, MLOps, DevOps, Cybersecurity.
			</h2>
			<h2
				ref={services3Ref}
				className=" service3 font-montserrat text-2xl my-20 p-7 px-40 rotate-6 text-white bg-primary rounded-full"
			>
				<span className="text-5xl">Streamlined Operations:</span> Business
				Optimization, IT Infrastructure Management, Business Intelligence.
			</h2>
			<h1 className=" font-anton text-9xl mt-20 mr-20 ml-52 text-right ">
				For Startups{" "}
			</h1>
			<h2
				ref={services1Ref}
				className=" service1 font-montserrat text-2xl my-20 p-7 px-40 -rotate-6 text-white bg-primary rounded-full"
			>
				<span className="text-5xl">Digital Experiences:</span>App
				Development, E-commerce Integration, PWA.
			</h2>
			<h2
				ref={services2Ref}
				className=" service2 font-montserrat text-2xl my-20 p-7 px-40 rotate-12 text-white bg-primary rounded-full"
			>
				<span className="text-5xl">Engagement:</span>UI/UX Design,
				Voice/Chatbot Integration, Social Media Marketing.
			</h2>
			<h2
				ref={services3Ref}
				className=" service3 font-montserrat text-2xl my-20 p-7 px-40 -rotate-6 text-white bg-primary rounded-full"
			>
				<span className="text-5xl">Intelligent Growth:</span> AI-powered
				Insights, Automation for Startup Advancement.
			</h2>
			<h3 className=" font-montserrat text-4xl pt-20 mx-20">
				This is just a taste of the boundless possibilities we offer
			</h3>
			<button className=" font-montserrat text-2xl rounded-full border-2 w-[400px] mx-20 border-primary my-20 py-3 hover:bg-primary hover:text-white transition-all ease-in duration-300 opacity-300 ">
				Know More About Services.
			</button>
		</div>
	);
}

export default Services;
