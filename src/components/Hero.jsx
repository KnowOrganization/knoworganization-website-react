import React, {useRef, useLayoutEffect} from "react";
import ModelCanvas from "./Model";


function Hero() {
   

	return (
		<div className=" hero flex justify-end w-screen h-[150vh] flex-col">
			<h1 className="logo font-anton text-[calc(50px+4vw)] tracking-tighter  text-primary px-[calc(5px+5vw)] ">
				KNOW
				<span className=" font-montserrat text-[calc(100px+10vw)] leading-3">.</span>
				<span className=" font-montserrat tracking-normal text-[calc(50px+4vw)]">
					Infinite Possibilities
				</span>
			</h1>
			<h2 className=" font-montserrat text-[calc(20px+2vw)] px-[calc(5px+5vw)] ">
				Empowering Large Corporations and Startups to Thrive
			</h2>
			<button className=" font-montserrat text-[calc(10px+1vw)] rounded-full border-2 max-w-[500px] mx-20 border-primary my-20 py-3 px-2 hover:bg-primary hover:text-white transition-all ease-in duration-300 opacity-300 ">
				Let's Talk About Your Vision.
			</button>
            <div className=" absolute top-[80vh] right-[100px]  h-[500px]">

            <ModelCanvas model="./strip.gltf" />
            </div>
		</div>
	);
}

export default Hero;
