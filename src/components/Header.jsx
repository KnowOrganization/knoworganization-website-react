import React, {
	useLayoutEffect,
	useRef,
	useState,
	useEffect,
	useMemo,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

function Header() {
	const headerRef = useRef(null);
	const logoRef = useRef(null);
	const logoDotRef = useRef(null);
	const particalRef = useRef(null);
	const menuRef = useRef(null);

	const [init, setInit] = useState(false);

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

			gsap.from(menuRef.current, {
				scrollTrigger: {
					trigger: ".hero",
					start: "top bottom",
					end: "top top",
					scrub: true,
					// markers: true,
				},
				opacity: 0,
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
					value: "#ffffff",
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
					value: 0.5,
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

	return (
		<>
			<div ref={particalRef} className="opacity-0">
				<Particles
					id="tsparticles"
					particlesLoaded={particlesLoaded}
					options={options}
				/>
			</div>
			<div
				ref={headerRef}
				className="header flex justify-center items-center w-screen h-20  sticky top-0 z-10 backdrop-blur-sm"
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

				<div ref={menuRef} className=" absolute right-32">
					<ul className=" flex ">
						<li className=" font-montserrat text-xl px-7 mix-blend-difference ">
							<a href="">Home</a>
						</li>
						<li className=" font-montserrat text-xl px-7 mix-blend-difference ">
							<a href="">Know vision</a>
						</li>
						<li className=" font-montserrat text-xl px-7 mix-blend-difference ">
							<a href="">Know us</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default Header;
