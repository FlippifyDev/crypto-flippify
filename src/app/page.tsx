import Link from "next/link";
import { Metadata } from "next";

import PageLayout from "./components/PageLayout";

export const metadata: Metadata = {
	title: "Flippify Crypto",
	description: "Trading Fast and Smart - Tools designed to maximize profits and minimize losses.",
	openGraph: {
		title: "Flippify Crypto",
		description: "Trading Fast and Smart - Tools designed to maximize profits and minimize losses.",
		url: "https://crypto.flippify.co.uk",
		siteName: "Flippify Crypto",
		images: [
			{
				url: "https://i.imgur.com/Lm7Vy0d.png",
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

export default function Home() {
	return (
		<PageLayout>
			<div className="flex items-center justify-center h-full p-4">
				<div className="text-center text-white p-8 rounded-lg shadow-lg bg-opacity-75 bg-darkBlue">
					<h1 className="text-4xl font-bold mb-4">Welcome to Our Tools</h1>
					<p className="text-xl mb-6">Access a variety of calculators to help you with your trading and investments.</p>
					<div className="w-full flex flex-col justify-center items-center gap-4">
						<Link
							href="/calculators"
							className="w-64 inline-block py-3 px-6 bg-neonGreen text-gray-900 font-semibold rounded-lg hover:bg-green-400 transition duration-300"
						>
							Calculators
						</Link>
						<Link
							href="/converters"
							className="w-64 inline-block py-3 px-6 bg-neonGreen text-gray-900 font-semibold rounded-lg hover:bg-green-400 transition duration-300"
						>
							Converters
						</Link>
					</div>
				</div>
			</div>
		</PageLayout>
	);
}
