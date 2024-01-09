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
            <h1 className=" font-anton text-[calc(50px+5vw)] mb-10 mt-20">[Select A Solution For You]</h1>
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
                        Embark on a journey of streamlined operations with tailored ERP solutions. Our team, well-versed in SAP and Oracle, 
                        architects systems aligning with your unique business vision, making goals a tangible reality.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Cloud Migration and Modernization</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
                        Navigate the shift to the cloud seamlessly. Ensure optimal performance and security by embracing 
                        scalable infrastructure, orchestrating cloud-native applications, and implementing DevOps methodologies.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Automation Solutions</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
                        Reimagine operational efficiency with our automation services. Employ cutting-edge technologies such as 
                        robotic process automation (RPA) to streamline tasks, enhance workflows, and boost productivity.
						</p>
					</div>) : subCategory === 2 ? (
					<div>
						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Big Data Analytics and Machine Learning with MLOps</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
                        Harness the power of data-driven decision-making. Our analytics solutions, coupled with MLOps practices, 
                        transform raw information into actionable insights, enabling predictive analytics and automated model deployment.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">DevOps Services</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
                        Attain operational excellence with DevOps methodologies. Through continuous integration, delivery, and deployment, 
                        we ensure your systems remain agile and robust, facilitating faster development cycles.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Cybersecurity Solutions</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
                        Fortify your digital dreams with our cybersecurity measures. Employ advanced threat detection, vulnerability assessments, 
                        and security audits to safeguard data and ensure the uninterrupted progress of your digital transformation.
						</p>
					</div>) : (
					<div>
						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Business Process Optimization</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
                        Redefine efficiency together. Our optimization services leverage methodologies such as Six Sigma and Lean, 
                        eliminating bottlenecks and transforming workflows into seamless, powerful processes.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">IT Infrastructure Management</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
                        Your IT infrastructure as a stronghold. We manage and optimize using infrastructure-as-code (IaC) principles, 
                        ensuring your systems are resilient and ready for the future.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Advanced Data Analytics and Business Intelligence</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
                        Unlock deeper insights with advanced analytics and BI solutions. Implement machine learning algorithms, data lakes, 
                        and real-time analytics to empower informed decision-making and strategic planning.
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
                        Craft dreams into user-friendly reality with native and cross-platform mobile app development. Utilize React Native, Flutter, 
                        and Swift to create engaging experiences that resonate with your target audience.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">E-commerce Platform Development and Integration</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
                        Empower small businesses in the online realm. Design platforms utilizing Magento, Shopify, and WooCommerce, 
                        reflecting uniqueness and driving success through seamless integrations.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Progressive Web App (PWA) Development</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
                        Stay ahead with PWA development. Implement service workers, web manifest files, and push notifications to create 
                        fast, engaging, and responsive web applications, setting your startup apart.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Social Media Marketing</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
                        Join the conversation and establish a robust online presence. Employ data-driven strategies, audience segmentation, 
                        and engagement analytics to build bridges and connect your brand with the world.
						</p>
					</div>) : subCategory === 2 ? (
					<div>
						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">User Experience (UX) and User Interface (UI) Design</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
                        Inspire engagement and conversions with cutting-edge designs. Utilize microinteractions, A/B testing, 
                        and responsive design principles to create interfaces that captivate, merging functionality with aesthetics.
						</p>

						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">Voice and Chatbot Integration</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
                        Be where your customers are with advanced conversational interfaces. Integrate voice and chatbot solutions using natural language processing (NLP) 
                        and machine learning, providing innovative ways to interact with your brand.
						</p>
					</div>) : (
					<div>
						<h3 className=" font-montserrat text-[calc(15px+2vw)] mx-10 my-20">AI-Powered Insights and Automation</h3>
						<p className=" font-montserrat text-[calc(15px+1vw)] mx-10">
                        Elevate your startup with AI. Leverage machine learning models, natural language understanding (NLU), and 
                        robotic process automation (RPA) to provide intelligent insights and automation, optimizing processes and decision-making.
						</p>
					</div>)}
				</div>
			)}
		</div>
	);
};

export default KnowServices;
