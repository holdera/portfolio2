import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
	return (
		<div className={` antialiased`}>
			<Header />
			<main className='relative z-20 bg-black'>{children}</main>
			<Footer />
		</div>
	);
}
