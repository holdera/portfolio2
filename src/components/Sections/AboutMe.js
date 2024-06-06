import React, { useRef } from 'react';
import Section from '../Layout/Section';
import { h1Heading } from '@styles/styles';
import Arrow from '@images/icons/arrow.svg';
import { motion } from 'framer-motion';

export default function AboutMe() {
	const sectionRef = useRef();

	const gradientText =
		'bg-gradient-to-r from-violet-500  to-fuchsia-500 bg-clip-text text-transparent';

	const h1Heading = 'font-bold mb-5 text-2xl md:text-4xl lg:text-5xl';

	const greeting = 'Hello My Name is Alannah Holder.';
	const greetingArr = greeting.split('');

	return (
		<Section
			ref={sectionRef}
			id='about-me'
			className='flex h-screen items-center justify-center text-center'
		>
			<h1 className={h1Heading}>
				{greetingArr.map((g, i) => {
					const findA = (el) => el === 'A';
					const indexA = greetingArr.findIndex(findA);
					return (
						<motion.span
							key={`letter-id-${i}`}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{
								type: 'spring',
								stiffness: 60,
								delay: i * 0.2,
							}}
						>
							{i < indexA && g}
							{i >= indexA && (
								<span className={gradientText}>{g}</span>
							)}
						</motion.span>
					);
				})}
			</h1>

			<p className='text-lg md:text-xl md:px-5 lg:px-32'>
				I am a <b className={gradientText}>Front-End Developer</b> with{' '}
				<b className={gradientText}>9 years of experience</b> who loves
				watching horror movies, reading books and&nbsp;traveling.
			</p>
			<p className='mt-5 text-lg md:text-xl'>
				Keep scrolling to learn and{' '}
				<b>
					<span className={gradientText}>see&nbsp;more!</span>
				</b>
			</p>

			<p className='rotate-180'>
				<Arrow className='animate-bouncing block mt-14 mx-auto ' />
			</p>
		</Section>
	);
}
