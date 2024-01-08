import React from "react";
import Marquee from "@seberm/react-marquee";
import { Link } from "react-router-dom";

function Services() {
	return (
		<>
			{/* <Marquee spacing="10">
				<h2 className="  font-montserrat text-2xl my-10 p-7 px-40  text-white bg-primary w-screen">
					<span className="text-6xl">Digital Transformation:</span>ERP,
					Cloud Migration, Data Analytics, and Cybersecurity.
				</h2>{" "}
			</Marquee> */}
			<div id="services" className=" service  min-h-screen">
				<h1 className=" font-anton text-9xl mt-[70vh] mr-20 ml-52 text-right ">
					A Glimpse of Our Expertise
				</h1>
				<h2 className=" font-montserrat text-2xl py-32 mr-20 ml-52 text-right">
					Know. Organization isn't just a tech company, we're your
					launchpad to infinite possibilities. We craft bespoke solutions
					that empower your vision, fuel your business growth, and
					transform the way you operate. But where do we begin?
				</h2>
				<h1 className=" font-anton text-9xl mt-20 mr-20 ml-52 text-right ">
					For Enterprises
				</h1>
				<Marquee spacing="0">
					<h2 className=" font-montserrat text-3xl my-10 p-7 px-40  text-white bg-primary w-screen">
						<span className="text-6xl">Digital Transformation:</span>
						ERP, Cloud Migration, Data Analytics, and Cybersecurity.
					</h2>{" "}
				</Marquee>

				<Marquee spacing="0" reverse={true}>
					<h2 className="  font-montserrat text-3xl my-10 p-7 px-40  text-white bg-primary ">
						<span className="text-6xl">Insights & Efficiency:</span> Big
						Data, Machine Learning, MLOps, DevOps, Cybersecurity.
					</h2>
				</Marquee>
				<Marquee spacing="0">
					<h2 className="  font-montserrat text-3xl my-10 p-7 px-40  text-white bg-primary ">
						<span className="text-6xl">Streamlined Operations:</span>{" "}
						Business Optimization, IT Infrastructure Management, Business
						Intelligence.
					</h2>
				</Marquee>

				<h1 className=" font-anton text-9xl mt-20 mr-20 ml-52 text-right ">
					For Startups{" "}
				</h1>
				<Marquee spacing="0" reverse={true}>
					<h2 className="  font-montserrat text-3xl my-10 p-7 px-40  text-white bg-primary ">
						<span className="text-6xl">Digital Experiences:</span>App
						Development, E-commerce Integration, PWA.
					</h2>
				</Marquee>
				<Marquee spacing="0">
					<h2 className="  font-montserrat text-3xl my-10 p-7 px-40  text-white bg-primary ">
						<span className="text-6xl">Engagement:</span>UI/UX Design,
						Voice/Chatbot Integration, Social Media Marketing.
					</h2>
				</Marquee>
				<Marquee spacing="0" reverse={true}>
					<h2 className="  font-montserrat text-3xl my-10 p-7 px-40  text-white bg-primary ">
						<span className="text-6xl">Intelligent Growth:</span>{" "}
						AI-powered Insights, Automation for Startup Advancement.
					</h2>
				</Marquee>

				<h3 className=" font-montserrat text-4xl my-20 mx-20">
					This is just a taste of the boundless possibilities we offer
				</h3>
				<Link to={"/knaowservices"} className=" font-montserrat text-2xl rounded-full border-2 w-[400px] mx-20 border-primary  py-3 hover:bg-primary hover:text-white transition-all ease-in duration-300 opacity-300 ">
					Know More About Services.
				</Link>
			</div>
		</>
	);
}

export default Services;
