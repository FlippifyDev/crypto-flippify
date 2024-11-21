import React from 'react';
import Link from 'next/link';
import { Lato } from 'next/font/google';

const lato = Lato({ weight: '900', style: 'italic', subsets: ['latin'] });


const Logo = () => {
	return (
		<Link href="/" passHref className='relative'>
			{/* "flippify" */}
			<span className={`${lato.className} text-4xl text-gray-200 hover:text-gray-300 trasition duration-200`}>flippify</span>

			{/* "crypto" that overlaps at the bottom right */}
			<span className={`${lato.className} text-2xl absolute text-neonGreen bottom-0 right-0 left-24 transform translate-x-2 translate-y-2`}>
				crypto
			</span>
		</Link>
	);
};

export default Logo;
