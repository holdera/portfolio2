import React, { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useInView } from 'framer-motion';

export default function Layout({ children }) {
	const footerSpacer = useRef();
	const isInView = useInView(footerSpacer, { amount: 0.5 });

	return (
		<div className={` antialiased`}>
			<Header itemInView={isInView} />
			<main className='relative z-20 bg-black'>{children}</main>
			<div ref={footerSpacer} id='footer-spacer' className='h-[40vh]' />
			<Footer />
		</div>
	);
}
