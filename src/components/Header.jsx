import React, {
	useLayoutEffect,
	useRef,
	useState,
	useEffect,
	useMemo,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scroll from "..//assets/images/scroll.png";
import { useGSAP } from "@gsap/react";


import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

function Header() {
	const headerRef = useRef(null);
	const logoRef = useRef(null);
	const logoDotRef = useRef(null);
	const particalRef = useRef(null);
	const menuRef = useRef(null);
	const scrollRef = useRef(null);
	const scrollArrowRef = useRef(null);

	const [init, setInit] = useState(false);
	const [menuIsOpen, setMenuIsOpen] = useState(false);


	const { contextSafe } = useGSAP({scope: menuRef}); // we can pass in a config object as the 1st parameter to make scoping simple


	gsap.registerPlugin(ScrollTrigger);

	useLayoutEffect(() => {
		const header = headerRef.current;
		const logo = logoRef.current;
		const logoDot = logoDotRef.current;
		const partical = particalRef.current;
		let ctx = gsap.context(() => {
			gsap.from(header, {
				scrollTrigger: {
					trigger: ".hero",
					start: "top bottom",
					end: "top center",
					scrub: 2,
					// markers: true,
				},
				height: "100vh",
				duration: 1,
			});
			gsap.from(logo, {
				scrollTrigger: {
					trigger: ".hero",
					start: "top bottom",
					end: "top center",
					scrub: 2,
					// markers: true,
				},
				fontSize: "300px",
				duration: 1,
			});

			gsap.from(logoDotRef.current, {
				scrollTrigger: {
					trigger: ".hero",
					start: "top bottom",
					end: "top center",
					scrub: 2,
					// markers: true,
				},
				fontSize: "600px",
				duration: 1,
			});

			gsap.from(particalRef.current, {
				scrollTrigger: {
					trigger: ".hero",
					start: "top bottom",
					end: "top top",
					scrub: true,
					// markers: true,
				},
				opacity: 1,
				duration: 1,
			});

			// gsap.from(menuRef.current, {
			// 	scrollTrigger: {
			// 		trigger: ".hero",
			// 		start: "top bottom",
			// 		end: "top top",
			// 		scrub: true,
			// 		// markers: true,
			// 	},
			// 	opacity: 0,
			// 	duration: 1,
			// });

			gsap.from(scrollRef.current, {
					scrollTrigger: {
						trigger: ".hero",
						start: "top bottom",
						end: "top top",
						scrub: true,
						// markers: true,
					},
					opacity: 1,
					duration: 1,
				});


				 gsap.from(scrollArrowRef.current, {
						scrollTrigger: {
							trigger: ".hero",
							start: "top bottom",
							end: "top top",
							scrub: true,
							// markers: true,
						},
						opacity: 1,
						duration: 1,
					});
		});

		return () => ctx.revert();
	}, []);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			//await loadAll(engine);
			//await loadFull(engine);
			await loadSlim(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = (container) => {
		console.log(container);
	};

	const options = useMemo(
		() => ({
			background: {
				color: {
					value: "#FFFDF5",
				},
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "repulse",
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: "#111111",
				},
				links: {
					color: "#111111",
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					direction: "none",
					enable: true,
					outModes: {
						default: "bounce",
					},
					random: false,
					speed: 6,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 80,
				},
				opacity: {
					value: 1,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 1, max: 5 },
				},
			},
			detectRetina: true,
		}),
		[]
	);


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
			<div id="home" ref={particalRef} className="opacity-0">
				<Particles
					id="tsparticles"
					particlesLoaded={particlesLoaded}
					options={options}
				/>
			</div>
			<div
				ref={headerRef}
				className="header flex justify-center items-center w-screen h-20  sticky top-0 z-10 backdrop-blur-sm bg-secondary bg-opacity-50"
			>
				<h1
					ref={logoRef}
					className="logo font-anton text-[70px]  tracking-tighter absolute "
				>
					KNOW
					<span
						ref={logoDotRef}
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
				
				<div ref={scrollRef} className=" absolute bottom-24 opacity-0">
					<img
						src={Scroll}
						alt=""
						className=" h-36 motion-safe:animate-spin   "
					/>
				</div>
				<div ref={scrollArrowRef} className="absolute bottom-32 opacity-0">
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
			<div ref={menuRef} className=" float-end z-50 fixed top-0 right-0 mx-10">
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
			<div  className={ `fixed top-0 h-screen w-screen z-40 backdrop-blur-6xl ${menuIsOpen ? "block" : "hidden"}`}>
					<ul className=" flex justify-center flex-col my-20 ">
						<li className=" font-montserrat text-9xl px-7 py-5  ">
							<a href="/#home" onClick={()=>{setMenuIsOpen(false); menuClickReset()}}>Home</a>
						</li>
						<li className=" font-montserrat text-9xl px-7 py-5  ">
							<a href="/#vision" onClick={()=>{setMenuIsOpen(false); menuClickReset()}}>Know vision</a>
						</li>
						<li className=" font-montserrat text-9xl px-7 py-5 ">
							<a href="/knowus" onClick={()=>{setMenuIsOpen(false); menuClickReset()}}>Know us</a>
						</li>
						<li className=" font-montserrat text-9xl px-7 py-5 ">
							<a href="/#services" onClick={()=>{setMenuIsOpen(false); menuClickReset()}}>Know services</a>
						</li>
						<li className=" font-montserrat text-9xl px-7 py-5 ">
							<a href="/#whyus" onClick={()=>{setMenuIsOpen(false); menuClickReset()}}>Why Know</a>
						</li>
					</ul>
				</div>
		</>
	);
}

export default Header;
