import React, { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

const rainbowMaterial = new THREE.MeshStandardMaterial({
	metalness: 1, // Set metalness to 1 for a metallic appearance
	roughness: 0, // Adjust the roughness as needed
	emissive: 0x000000, // Black emissive color
	side: THREE.DoubleSide, // Render both sides of the geometry
});

const ModelCanvas = (props) => {
	const group = useRef();
	const [scrollPosition, setScrollPosition] = useState(0);

	// Update the scroll position when the user scrolls
	const handleScroll = () => {
		const scrollY = window.scrollY || window.pageYOffset;
		setScrollPosition(scrollY);
	};

	// Attach scroll event listener
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const infinityModel = useGLTF(props.model);

	const silverTranslucentMaterial = new THREE.MeshStandardMaterial({
		color: 0xc0c0c0, // Silver color
		metalness: 1,
		roughness: 0.3, // Adjust roughness as needed
		emissive: 0x000000,
		side: THREE.DoubleSide,
		transparent: true,
		opacity: 0.7, // Adjust opacity as needed (0.0 to 1.0)
	});

	useEffect(() => {
		if (infinityModel.scene) {
			const meshes = [];
			infinityModel.scene.traverse((child) => {
				if (child.isMesh) {
					meshes.push(child);
				}
			});

			meshes.forEach((mesh) => {
				mesh.material = silverTranslucentMaterial;
			});
		}
	}, [infinityModel.scene]);

	return (
		// <group ref={group}>
		//   {/* Load and display your GLTF model */}
		//   {/* Example: <primitive object={yourModel} /> */}
		//   <primitive object={infinityModel.scene} scale={0.75} />
		//   <mesh>
		//     <boxBufferGeometry args={[1, 1, 1]} />
		//     <meshBasicMaterial color="red" />
		//   </mesh>
		// </group>

		<Canvas>
			{/* Ambient Light */}
			<ambientLight intensity={1} />

		 {/* Directional Lights */}
		 <directionalLight position={[0, 100, 0]} intensity={1} color={0xFFFF00} />
      <directionalLight position={[100, 0, 0]} intensity={1} color={0xFF69B4} />
      <directionalLight position={[0, 0, 100]} intensity={1} color={0x008080} />

      {/* Retro Point Lights */}
      <pointLight position={[10, 10, 10]} intensity={2} color={0xFF6347} />
      <pointLight position={[-10, -10, -10]} intensity={1} color={0x00FF00} />
      <pointLight position={[0, 20, 0]} intensity={1} color={0x800080} />
      <pointLight position={[10, -10, 0]} intensity={1} color={0xFFFF00} />
      <pointLight position={[0, -10, 10]} intensity={1} color={0xFF69B4} />
      <pointLight position={[10, 0, -10]} intensity={1} color={0x008080} />

      {/* Additional Retro Point Lights */}
      <pointLight position={[-10, 0, -10]} intensity={1} color={0xFFD700} />
      <pointLight position={[0, 10, -10]} intensity={1} color={0x00CED1} />
      <pointLight position={[10, 0, 10]} intensity={1} color={0x800000} />
      <pointLight position={[0, -10, 0]} intensity={1} color={0x9370DB} />
      <pointLight position={[-10, 10, 0]} intensity={1} color={0xADFF2F} />
      <pointLight position={[0, 0, -10]} intensity={1} color={0xDC143C} />


			<group ref={group}>
				{/* Load and display your GLTF model */}
				{/* Example: <primitive object={yourModel} /> */}
				<primitive object={infinityModel.scene} scale={0.3}></primitive>
			</group>
			<SceneRotation scrollPosition={scrollPosition} group={group} />
		</Canvas>
	);
};

const SceneRotation = ({ scrollPosition, group }) => {
	useFrame(() => {
		group.current.rotation.y = (scrollPosition * Math.PI) / 360;
	});

	return null;
};

export default ModelCanvas;
