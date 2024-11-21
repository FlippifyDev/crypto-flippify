import React from 'react';
import Navbar from './Navbar';

const PageLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex flex-col min-h-screen w-full">
			{/* Navbar */}
			<Navbar />
			{/* Main Content */}
			<main className="h-full flex flex-grow p-4 justify-center items-center">{children}</main>
		</div>
	);
};

export default PageLayout;
