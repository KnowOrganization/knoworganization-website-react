import React from "react";
import HeaderOthers from "../components/HeaderOthers";
import Typeform from "../components/TypeForm";

const KnowConnect = () => {
	const CopyEmail = async () => {
		let text = document.getElementById("email").innerHTML;
		try {
			await navigator.clipboard.writeText(text);
			console.log("Content copied to clipboard");
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
		document.getElementById("copyText").style.opacity = "1";

		const timer = setTimeout(() => {
			document.getElementById("copyText").style.opacity = "0";
		}, 2000);

		return () => {
			clearTimeout(timer);
		};
	};

	return (
		<div id="knowconnect" className="flex justify-center items-start flex-col bg-secondary">
			<HeaderOthers />
			<h1 className=" font-anton text-[calc(50px+5vw)] my-10 mx-10">Know. Connect</h1>
			<h1 className=" font-anton text-[calc(15px+2vw)] my-10 mx-10">Contact Info</h1>
			<h2
				id="email"
				className=" link font-montserrat text-[calc(15px+2vw)] my-10 mx-10 w-screen text-center"
				onClick={() => {
					CopyEmail();
				}}
			>
				business@knoworganization.com
				<br />
				<span id="copyText" className=" text-3xl text-red-500 opacity-0">
					Copied...!
				</span>
			</h2>
			<h1 className=" font-anton text-[calc(15px+2vw)] my-10 mx-10">Map</h1>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6940.407362172538!2d73.89656588113041!3d18.47075408011255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDI4JzEyLjIiTiA3M8KwNTMnNTkuNSJF!5e0!3m2!1sen!2sin!4v1704673939006!5m2!1sen!2sin"
				width="100%"
				height="700"
				style={{ border: 0 }}
				allowfullscreen=""
				loading="lazy"
				referrerpolicy="no-referrer-when-downgrade"
			></iframe>
			<h1 className=" font-anton text-[calc(15px+2vw)] my-10 mx-10">
				Interact, Connect.
			</h1>
			<Typeform />
		</div>
	);
};

export default KnowConnect;
