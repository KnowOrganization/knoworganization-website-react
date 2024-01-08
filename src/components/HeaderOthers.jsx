import React, { useEffect, useMemo, useState } from "react";
import Scroll from "../assets/images/scroll.png";
import { gsap } from "gsap";
import { HashLink } from "react-router-hash-link";


function HeaderOthers() {

    const [menuIsOpen, setMenuIsOpen] = useState(false);

    	const handleMenu = () => {
		setMenuIsOpen(!menuIsOpen);
		menuClickReset()
	};

	const menuClickReset = () => {
		gsap.to(".span1", {
			y: menuIsOpen ? 0 : -13,
			opacity: menuIsOpen ? 1 : 0,
			duration: 0.5,
		});
		gsap.to(".span3", {
			y: menuIsOpen ? 0 : 13,
			opacity: menuIsOpen ? 1 : 0,
			duration: 0.5,
		});
	}

	return (
		<>
			
			<div
				className="header flex justify-center items-center w-screen h-20  sticky top-0 z-10 backdrop-blur-sm bg-secondary bg-opacity-50"
			>
				<h1
					className="logo font-anton text-[70px]  tracking-tighter absolute "
				>
					KNOW
					<span
						className=" font-montserrat text-[130px] leading-3"
					>
						.
					</span>
				</h1>

				{/* <div ref={menuRef} className="absolute right-10 z-50">
					<div
						id="toggleMenu"
						className="grid place-content-center w-20 h-20 mx-auto"
					>
						<span className="w-10 bg-primary h-1 rounded-full relative top-4"></span>
						<span className="w-10 bg-primary h-1 rounded-full"></span>
						<span className="w-10 bg-primary h-1 rounded-full relative -top-4"></span>
					</div>
				</div> */}

				<div className=" absolute bottom-24 opacity-0">
					<img
						src={Scroll}
						alt=""
						className=" h-36 motion-safe:animate-spin   "
					/>
				</div>
				<div className="absolute bottom-32 opacity-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						height="70"
						viewBox="0 -960 960 960"
						width="70"
					>
						<path d="M480-360 280-560h400L480-360Z" />
					</svg>
				</div>
			</div>
			<div
				className=" float-end z-50 fixed top-0 right-0 mx-10"
			>
				<button
					id="toggleMenu"
					onClick={handleMenu}
					className="grid place-content-center w-20 h-20 mx-auto"
				>
					<span className=" span1 w-10 bg-primary h-1 rounded-full relative top-4"></span>
					<span className=" span2 w-10 bg-primary h-1 rounded-full"></span>
					<span className=" span3 w-10 bg-primary h-1 rounded-full relative -top-4"></span>
				</button>
			</div>
			<div
				className={`fixed top-0 h-screen w-screen z-40 backdrop-blur-6xl ${
					menuIsOpen ? "block" : "hidden"
				}`}
			>
				<ul className=" flex justify-center flex-col my-20 ">
					<li className=" font-montserrat text-8xl px-7 py-5  ">
						<HashLink
							smooth
							to="/#home"
							onClick={() => {
								setMenuIsOpen(false);
								menuClickReset();
							}}
						>
							Home
						</HashLink>
					</li>
					<li className=" font-montserrat text-8xl px-7 py-5 ">
						<HashLink
							smooth
							to="/#whyus"
							onClick={() => {
								setMenuIsOpen(false);
								menuClickReset();
							}}
						>
							Why Know
						</HashLink>
					</li>
					<li className=" font-montserrat text-8xl px-7 py-5  ">
						<HashLink
							smooth
							to="/#vision"
							onClick={() => {
								setMenuIsOpen(false);
								menuClickReset();
							}}
						>
							Know vision
						</HashLink>
					</li>
					<li className=" font-montserrat text-8xl px-7 py-5 ">
						<HashLink
							smooth
							to="/knowus/#knowus"
							onClick={() => {
								setMenuIsOpen(false);
								menuClickReset();
							}}
						>
							Know us
						</HashLink>
					</li>
					<li className=" font-montserrat text-8xl px-7 py-5 ">
						<HashLink
							smooth
							to="/knaowservices/#knaowservices"
							onClick={() => {
								setMenuIsOpen(false);
								menuClickReset();
							}}
						>
							Know services
						</HashLink>
					</li>

					<li className=" font-montserrat text-8xl px-7 py-5 ">
						<HashLink
							smooth
							to="/knowconnect/#knowconnect"
							onClick={() => {
								setMenuIsOpen(false);
								menuClickReset();
							}}
						>
							Know Connect
						</HashLink>
					</li>
				</ul>
			</div>
		</>
	);
}

export default HeaderOthers;
