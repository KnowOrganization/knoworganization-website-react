import React from "react";
import { Link } from "react-router-dom";

function KnowConnect() {
	return (
		<div className=" flex justify-center items-center flex-col min-h-screen ">
			<Link to={"knowconnect"}>
				<h1 className=" font-anton text-[calc(30px+5vw)] mx-10">
					Ready to embark on a transformative journey? Partner with Know.
					Organization, and let's rewrite the future, together. &rarr;	
				</h1>
			</Link>
		</div>
	);
}

export default KnowConnect;
