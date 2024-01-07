import React, { useEffect, useMemo } from "react";

function HeaderOthers() {
	return (
		<>
			<div className="header flex justify-center items-center w-screen h-20  sticky top-0 z-10 backdrop-blur-lg bg-secondary bg-opacity-50">
				<h1 className="logo font-anton text-[70px]  tracking-tighter absolute ">
					KNOW
					<span className=" font-montserrat text-[130px] leading-3">
						.
					</span>
				</h1>

				<div className=" absolute right-32">
					<ul className=" flex ">
						<li className=" font-montserrat text-xl px-7  ">
							<a href="/#home">Home</a>
						</li>
						<li className=" font-montserrat text-xl px-7  ">
							<a href="/#vision">Know vision</a>
						</li>
						<li className=" font-montserrat text-xl px-7 ">
							<a href="/knowus">Know us</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default HeaderOthers;
