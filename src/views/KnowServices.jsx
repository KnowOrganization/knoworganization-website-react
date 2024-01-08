import React, { useState } from "react";
import img1 from "../assets/images/image (26).png";
import img2 from "../assets/images/image (27).png";
import HeaderOthers from "../components/HeaderOthers";

const KnowServices = () => {
	const [category, setCategory] = useState("enterprise");
    const [subCategory, setSubCategory] = useState(1);
	return (
		<div id="knaowservices" className="flex justify-center items-center flex-col bg-secondary">
            <HeaderOthers />
            <h1 className=" font-anton text-[calc(50px+5vw)] mb-10 mt-20">[Select Solution for you]</h1>
			<div className="grid grid-cols-2  justify-center items-start text-center my-20 w-screen">
                
				<div onClick={()=>{setCategory('enterprise')}} className={` flex justify-center items-center link font-anton text-[calc(15px+2vw)] px-10 py-10 ${category === "enterprise" ? "bg-primary text-secondary" : " bg-secondary text-primary"}`}>
					Enterprise Solutions: Turning Vision into Reality 

				</div>
				<div onClick={()=>{setCategory('startup')}} className={` flex justify-center items-center link font-anton text-[calc(15px+2vw)] px-10 py-10 ${category === "startup" ? "bg-primary text-secondary" : " bg-secondary text-primary"}`}>
                    Start-Up Ignition: Where Dreams Take Flight 

				</div>
			</div>
			{/* enterprice */}

			{category === "enterprise" ? (
				<div>
					<div className="grid grid-cols-3 justify-center items-center text-center h-20v w-screen">
						<h2 onClick={()=>{setSubCategory(1)}} className={`link font-anton text-[calc(15px+1vw)] h-36 py-5 px-5 ${subCategory === 1 ? " bg-primary text-secondary" : null}`}>Digital Transformation Foundation</h2>
						<h2 onClick={()=>{setSubCategory(2)}} className={`link font-anton text-[calc(15px+1vw)] h-36 py-5 px-5 ${subCategory === 2 ? " bg-primary text-secondary" : null}`}> Intelligent Insights and Security</h2>
						<h2 onClick={()=>{setSubCategory(3)}} className={`link font-anton text-[calc(15px+1vw)] h-36 py-5 px-5 ${subCategory === 3 ? " bg-primary text-secondary" : null}`}>Optimizing Processes</h2>
					</div> 
                    {subCategory === 1 ? ( 
                        
					<div>
						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">ERP Implementation and Customization</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
							Embark on a journey of streamlined operations. Tailoring
							solutions to your unique vision, we make your business
							goals a reality.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Cloud Migration and Modernization</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
							Boldly transition your infrastructure to the cloud. Ensure
							optimal performance and security, embracing the future of
							business technology.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Automation Solutions</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
							Reimagine efficiency with our automation services.
							Streamline repetitive tasks, enhance workflows, and boost
							productivity through cutting-edge automation technologies.
						</p>
					</div>) : subCategory === 2 ? (
					<div>
						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Big Data Analytics and Machine Learning with MLOps</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
							Uncover the power of data to drive decision-making. Our
							analytics solutions, coupled with MLOps, turn information
							into actionable insights.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">DevOps Services</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
							Achieve operational excellence with our standalone DevOps
							services. We streamline development, ensuring continuous
							integration and delivery to keep your systems agile and
							robust.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Cybersecurity Solutions</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
							Confidence in the digital age. Our cybersecurity measures
							protect your dreams, safeguarding data, and ensuring
							uninterrupted progress.
						</p>
					</div>) : (
					<div>
						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Business Process Optimization</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
							Redefine efficiency together. Our optimization services
							eliminate bottlenecks, transforming workflows into
							seamless, powerful processes.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">IT Infrastructure Management</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
							Your IT infrastructure as a stronghold. We manage,
							optimize, and ensure your systems are ready for whatever
							the future holds.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Advanced Data Analytics and Business Intelligence</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
							Leverage advanced analytics to gain deeper insights into
							your business. Our BI solutions empower informed
							decision-making and strategic planning.
						</p>
					</div>)}
				</div>
			) : (
				<div>
					<div className="grid grid-cols-3 justify-center items-center text-center h-20v w-screen ">
						<h2 onClick={()=>{setSubCategory(1)}} className={`link font-anton text-[calc(15px+1vw)] h-36 py-5 px-5 ${subCategory === 1 ? " bg-primary text-secondary" : null}`}>Establishing Online Presence</h2>
						<h2 onClick={()=>{setSubCategory(2)}} className={`link font-anton text-[calc(15px+1vw)] h-36 py-5 px-5 ${subCategory === 2 ? " bg-primary text-secondary" : null}`}>Enhancing User Engagement</h2>
						<h2 onClick={()=>{setSubCategory(3)}} className={`link font-anton text-[calc(15px+1vw)] h-36 py-5 px-5 ${subCategory === 3 ? " bg-primary text-secondary" : null}`}>Leveraging Intelligent Technologies</h2>
					</div>
                    {subCategory === 1 ? (
					<div>
						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Mobile App Development</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
							Crafting dreams into user-friendly reality. Our mobile apps
							help startups soar, reaching new heights in customer
							engagement.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">E-commerce Platform Development and Integration</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
							Empowering small businesses to conquer the online realm. We
							design platforms that reflect your uniqueness and drive
							success.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Progressive Web App (PWA) Development</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
							Stay ahead with the latest in web technology. Our PWA
							development services create fast, engaging, and responsive
							web applications, setting your startup apart.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Social Media Marketing</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
							Join the conversation. Our social media strategies build
							bridges, connecting your brand with the world and
							establishing a robust online presence.
						</p>
					</div>) : subCategory === 2 ? (
					<div>
						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">User Experience (UX) and User Interface (UI) Design</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
							Inspire engagement and conversions with our designs. We
							create interfaces that captivate, merging functionality
							with aesthetics.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Voice and Chatbot Integration</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
							Be where your customers are. We integrate voice and chatbot
							solutions, enhancing customer engagement and providing
							innovative ways to interact with your brand.
						</p>
					</div>) : (
					<div>
						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">AI-Powered Insights and Automation</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
							Elevate your startup with AI. Our services provide
							intelligent insights and automation, leveraging artificial
							intelligence to optimize your processes and
							decision-making.
						</p>
					</div>)}
				</div>
			)}
		</div>
	);
};

export default KnowServices;
