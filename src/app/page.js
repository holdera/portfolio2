'use client';
import AboutMe from './components/Sections/AboutMe';
import Basics from './components/Sections/Basics';
import Contact from './components/Sections/Contact';

export default function Home() {
	return (
		<>
			<main className='relative z-20 bg-black'>
				<AboutMe />
				<Basics />
				<Contact />
			</main>
			<div id='footer-spacer' className='h-[40vh]' />
		</>
	);
}
