import React from "react";
import { Link } from "react-router-dom";

function Knowus() {
	return (
		<div className=" flex justify-center items-center flex-col h-screen ">
			<Link to={"/knowus/#"} preventScrollReset={false} >
				<h1 className=" font-anton text-9xl flex ">
					Know Us
                    <svg xmlns="http://www.w3.org/2000/svg" height="150" viewBox="0 -960 960 960" width="150"><path d="M400-280v-400l200 200-200 200Z"/></svg>				</h1>
			</Link>
		</div>
	);
}

export default Knowus;
