'use client';

import { useRef } from 'react';
import { poppins } from './ui/fonts';
import './ui/globals.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { useInView } from 'framer-motion';

export default function RootLayout({ children }) {
	const footerSpacer = useRef();
	const isInView = useInView(footerSpacer);

	return (
		<html lang='en'>
			<body className={`${poppins.className} antialiased`}>
				<Header itemInView={isInView} />
				{children}
				<div
					ref={footerSpacer}
					id='footer-spacer'
					className='h-[40vh]'
				/>
				<Footer />
			</body>
		</html>
	);
}
