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

	return (
		<Section
			ref={sectionRef}
			id='about-me'
			className='flex h-screen items-center justify-center text-center'
		>
			<h1 className={h1Heading}>
				Hello My Name is{' '}
				<span className='overflow-hidden relative md:w-[325px] md:h-[56px] lg:w-[433px] lg:h-[76px]  block md:inline-block align-top'>
					<motion.span
						className={gradientText}
						initial={{ marginLeft: '-1000px' }}
						animate={{ marginLeft: '0px' }}
						transition={{
							type: 'spring',
							stiffness: 40,
							duration: 3,
						}}
					>
						Alannah&nbsp;Holder
					</motion.span>
				</span>
			</h1>
			<p className='text-lg md:text-xl md:px-5 lg:px-32'>
				I am a{' '}
				<b>
					<span className={gradientText}>Front-End Developer</span>
				</b>{' '}
				who also loves watching horror movies, reading books and
				graphic&nbsp;novels and&nbsp;traveling.
			</p>
			<p className='mt-5 text-lg md:text-xl'>
				Keep scrolling to learn and{' '}
				<b>
					<span className={gradientText}>see more!</span>
				</b>
			</p>

			<p className='rotate-180'>
				<Arrow className='animate-bouncing block mt-14 mx-auto ' />
			</p>
		</Section>
	);
}
