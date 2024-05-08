import React, { useRef } from 'react';
import {
	h1Heading,
	containerStyles,
	gradient,
	sectionStyle,
} from '@styles/styles';
import { motion, useScroll, useTransform } from 'framer-motion';
import { workData } from '../data';
import Code from '@images/misc/code.svg';

export default function WorkExperience() {
	const workRef = useRef();

	const { scrollYProgress } = useScroll({
		target: workRef,
		offset: ['start end', 'end start'],
	});

	const height = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);
	return (
		<section
			id='work-experience'
			className='text-center flex items-start justify-center mb-10 md:mb-24'
		>
			<div
				className={`${containerStyles} pt-20 px-5 site-container relative`}
			>
				<h2 className={`${h1Heading} text-left`}>My Work Journey</h2>

				<div
					ref={workRef}
					id='work-timeline'
					className='flex gap-1 md:gap-5  mt-10  w-full'
				>
					<div className='flex flex-col justify-between items-center relative w-full max-w-[20%]'>
						<div id='grey-line' className='w-0.5 h-full bg-white' />
						<div
							id='progress-line'
							className='absolute flex top-0 left-0 right-0 mx-auto h-full flex-col justify-start items-center'
						>
							<motion.div
								id='pink-line'
								className='w-0.5 h-full bg-fuchsia-400 will-change-[height]'
								style={{ height }}
							/>
							<motion.div
								id='circle'
								className='w-5 h-5 rounded-full bg-fuchsia-500'
							/>
						</div>
					</div>

					<div id='work-content' className='w-[80%]'>
						{workData.map((work, i) => (
							<div
								key={`work-key-${i}`}
								id={`work-${i + 1}`}
								className='text-left mb-10 md:mb-28'
							>
								<h3 className='font-bold text-xl mb-1 md:text-3xl'>
									{work.title}
								</h3>
								<p className='mb-5 '>{work.date}</p>
								<ul className='pl-6'>
									{work.workDesc.map((desc, index) => (
										<li
											className='mb-3.5 pl-2 md:mb-4 before:content-code before:text-fuchsia-500 before:absolute before:top-[3px] before:-left-5 relative'
											key={`desc-${index}`}
										>
											{desc}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
