import React from 'react';
import Link from 'next/link';

import Logo from './Logo';

const Navbar = () => {
	return (
		<nav className="bg-darkBlue text-white px-6 py-4">
			<div className="w-full flex justify-between items-center">
				{/* Logo or Brand Name */}
				<Logo />

				{/* Navigation Links */}
				<div className="space-x-4">
					<Link href="https://photon-sol.tinyastro.io/" className="hover:text-gray-400 transition duration-200" target='blank_'>
						Photon
					</Link>
					<Link href="https://dexscreener.com/" className="hover:text-gray-400 transition duration-200" target='blank_'>
						DEX Screener
					</Link>
					<Link href="https://flippify.co.uk/" className="hover:text-gray-400 transition duration-200" target='blank_'>
						Flippify
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
