import React from 'react'
import { Metadata } from 'next';

import PageLayout from '../components/PageLayout'
import CryptoToMoney from './components/CryptoToMoney'


export const metadata: Metadata = {
	title: "Flippify Crypto - Converters",
	description: "Convert between cryptocurrencies and fiat currencies with ease using Flippify Crypto's conversion tools. Whether you're trading Bitcoin, Ethereum, or any other crypto, our converter helps you quickly and accurately calculate values in your preferred fiat currency. Designed for traders who want a seamless and efficient experience, this tool simplifies your trading decisions and ensures you're always in control of your trades. Start converting now and make informed trading moves in an instant.",
	openGraph: {
		title: "Flippify Crypto - Calculators",
		description: "Trading Fast and Smart - Tools designed to maximize profits and minimize losses.",
		url: "https://crypto.flippify.co.uk/converters",
		siteName: "Flippify Crypto",
		images: [
			{
				url: "https://i.imgur.com/VjNa3RJ.png",
				width: 1200,
				height: 630,
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};


const page = () => {
  return (
	<PageLayout>
		<CryptoToMoney />
	</PageLayout>
  )
}

export default page
