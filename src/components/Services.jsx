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

			{/* 
			
			text-9/8xl = calc(50px+5vw)  old = calc(50px+7vw)
			text-6/7xl = calc(15px+2vw)
			text-4/5xl = calc(15px+1vw)
			text-3/2xl = calc(10px+1vw)
			text-2xl = calc(7px+1vw)
			40 = calc(50px+6vw)
			20 = calc(50px+5vw)
			10 = calc(30px+5vw)
			
			*/}
			<div id="services" className=" service  min-h-screen">
				<h1 className=" font-anton text-[calc(50px+5vw)] mt-[50vh] mr-10 ml-10 text-right ">
					A Glimpse of Our Expertise
				</h1>
				<h2 className=" font-montserrat text-[calc(15px+1vw)] py-32 mr-10 ml-10 text-right">
					Know. Organization isn't just a tech company, we're your
					launchpad to infinite possibilities. We craft bespoke solutions
					that empower your vision, fuel your business growth, and
					transform the way you operate. But where do we begin?
				</h2>
				<h1 className=" font-anton text-[calc(50px+5vw)] mt-[calc(50px+5vw)] mr-10 ml-[calc(30px+5vw)] text-right ">
					For Enterprises
				</h1>
				<Marquee spacing="0">
					<h2 className=" font-montserrat text-[calc(10px+1vw)] my-10 p-7 px-[calc(50px+6vw)]  text-white bg-primary w-screen">
						<span className="text-[calc(15px+2vw)]">Digital Transformation:</span>
						ERP, Cloud Migration, Data Analytics, and Cybersecurity.
					</h2>{" "}
				</Marquee>

				<Marquee spacing="0" reverse={true}>
					<h2 className="  font-montserrat text-[calc(10px+1vw)] my-10 p-7 px-[calc(50px+6vw)]  text-white bg-primary ">
						<span className="text-[calc(15px+2vw)]">Insights & Efficiency:</span> Big
						Data, Machine Learning, MLOps, DevOps, Cybersecurity.
					</h2>
				</Marquee>
				<Marquee spacing="0">
					<h2 className="  font-montserrat text-[calc(10px+1vw)] my-10 p-7 px-[calc(50px+6vw)]  text-white bg-primary ">
						<span className="text-[calc(15px+2vw)]">Streamlined Operations:</span>{" "}
						Business Optimization, IT Infrastructure Management, Business
						Intelligence.
					</h2>
				</Marquee>

				<h1 className=" font-anton text-[calc(50px+5vw)] mt-[calc(50px+5vw)] mr-10 ml-[calc(30px+5vw)] text-right ">
					For Startups{" "}
				</h1>
				<Marquee spacing="0" reverse={true}>
					<h2 className="  font-montserrat text-[calc(10px+1vw)] my-10 p-7 px-[calc(50px+6vw)]  text-white bg-primary ">
						<span className="text-[calc(15px+2vw)]">Digital Experiences:</span>App
						Development, E-commerce Integration, PWA.
					</h2>
				</Marquee>
				<Marquee spacing="0">
					<h2 className="  font-montserrat text-[calc(10px+1vw)] my-10 p-7 px-[calc(50px+6vw)]  text-white bg-primary ">
						<span className="text-[calc(15px+2vw)]">Engagement:</span>UI/UX Design,
						Voice/Chatbot Integration, Social Media Marketing.
					</h2>
				</Marquee>
				<Marquee spacing="0" reverse={true}>
					<h2 className="  font-montserrat text-[calc(10px+1vw)] my-10 p-7 px-[calc(50px+6vw)]  text-white bg-primary ">
						<span className="text-[calc(15px+2vw)]">Intelligent Growth:</span>{" "}
						AI-powered Insights, Automation for Startup Advancement.
					</h2>
				</Marquee>

				<h3 className=" font-montserrat text-[calc(15px+1vw)] my-20 mx-10">
					This is just a taste of the boundless possibilities we offer
				</h3>
				<Link to={"/knaowservices"} className=" font-montserrat text-[calc(10px+1vw)] p-3 rounded-full border-2 max-w-[500px] mx-10 border-primary  py-3 hover:bg-primary hover:text-white transition-all ease-in duration-300 opacity-300 ">
					Know More About Services.
				</Link>
			</div>
		</>
	);
}

export default Services;
