'use client';

import React, { useEffect, useState } from 'react';
import Navigation from '../Layout/Nav/Navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
	const [seenFirst, setSeenFirst] = useState(false);

	const siteLinks = [
		{ text: 'Basics', href: '#basics' },
		{ text: 'About Me', href: '#about-me' },
		{ text: 'Contact', href: '#contact' },
	];

	// function setVisibilty() {
	// 	const firstSession = sessionStorage.getItem("firstSession");

	// 	if (!seenFirst) {
	// 		sessionStorage.setItem("firstSession", "true");
	// 		setSeenFirst(true);
	// 	}
	// }

	useEffect(() => {
		// if (seenFirst === false) {
		// 	setSeenFirst(true);
		// }
	}, []);

	return (
		<header className='py-4 px-5'>
			<div className='container mx-auto flex justify-between relative'>
				<Link className='font-bold' href='/'>
					Meet Alannah Holder
				</Link>
				{/* <AnimatePresence>
					{seenFirst === false && (
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						>
							Original Name, I know ;)
						</motion.p>
					)}
				</AnimatePresence> */}
				<Navigation menuLinks={siteLinks} />
			</div>
		</header>
	);
}
