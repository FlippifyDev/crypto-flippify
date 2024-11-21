"use client"

import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	return (
		<>
			{/* Navbar */}
			<nav className="bg-darkBlue text-white px-6 py-4">
				<div className="w-full flex justify-between items-center">
					{/* Logo or Brand Name */}
					<Logo />

					{/* Navigation Links for larger screens */}
					<div className="hidden md:flex space-x-4">
						<Link href="https://photon-sol.tinyastro.io/" className="hover:text-gray-400 transition duration-200" target="blank_">
							Photon
						</Link>
						<Link href="https://dexscreener.com/" className="hover:text-gray-400 transition duration-200" target="blank_">
							DEX Screener
						</Link>
						<Link href="https://flippify.co.uk/" className="hover:text-gray-400 transition duration-200" target="blank_">
							Flippify
						</Link>
					</div>

					{/* Hamburger Icon for smaller screens */}
					<button
						className="md:hidden text-neonGreen focus:outline-none"
						onClick={() => setIsSidebarOpen(!isSidebarOpen)}
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
						</svg>
					</button>
				</div>
			</nav>

			{/* Sidebar for smaller screens */}
			<div
				className={`fixed z-30 top-0 right-0 h-full w-64 bg-darkBlue shadow-lg transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
					} transition-transform duration-300`}
			>
				<div className="flex flex-col p-6 space-y-6 text-white font-semibold">
					{/* Close button */}
					<button
						className="self-end text-neonGreen focus:outline-none"
						onClick={() => setIsSidebarOpen(false)}
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>

					{/* Navigation Links */}
					<Link href="https://photon-sol.tinyastro.io/" target="blank_">
						<span className="hover:text-gray-400 transition duration-200">Photon</span>
					</Link>
					<Link href="https://dexscreener.com/" target="blank_">
						<span className="hover:text-gray-400 transition duration-200">DEX Screener</span>
					</Link>
					<Link href="https://flippify.co.uk/" target="blank_">
						<span className="hover:text-gray-400 transition duration-200">Flippify</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Navbar;
