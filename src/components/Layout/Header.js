import React from 'react';
import Navigation from './Nav/Navigation';
import { Link } from 'gatsby';

export default function Header({ itemInView }) {
	const siteLinks = [
		{ text: 'About Me', href: '#about-me' },
		{ text: 'Work Experience', href: '#work-experience' },
		{ text: 'Technical Specs', href: '#technical-skills' },
		{ text: 'Non-Technical Skill Set', href: '#non-tech-skillset' },
		{ text: 'Contact', href: '#contact-me' },
	];

	return (
		<header
			className={`py-4 px-3 bg-black lg:px-5 w-full ${
				itemInView ? 'static z-30' : 'fixed z-30'
			}`}
		>
			<div className='container mx-auto flex justify-between relative'>
				<Link className='font-bold' to='/'>
					Meet Alannah Holder
				</Link>
				<Navigation menuLinks={siteLinks} />
			</div>
		</header>
	);
}
