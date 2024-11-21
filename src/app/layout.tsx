import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				{/* Google Site Verification Meta Tag */}
				<meta name="google-site-verification" content="fkeCyYpXzaSUhpjO1SF_6zF_NpxEiZNB2y6708pO78w" />
				
				{/* Google AdSense Script */}
				<Script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6066589868368367"
					crossOrigin="anonymous"
					strategy="lazyOnload"
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				style={{
					backgroundImage: "linear-gradient(90deg, #019267, #151D3B)",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
