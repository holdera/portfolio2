import React, { useRef } from 'react';
import {
	h1Heading,
	containerStyles,
	gradient,
	sectionStyle,
} from '@styles/styles';
import { motion, useScroll, useTransform } from 'framer-motion';
import { skillsData } from '../data';

export default function SkillSet() {
	const sectionRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['center end', 'end center'],
	});

	const translateY = useTransform(scrollYProgress, [0, 0.4], [60, 0]);
	const opacity = useTransform(scrollYProgress, [0, 0.4, 0.95], [0, 1, 0.9]);
	return (
		<section
			id='non-tech-skillset'
			ref={sectionRef}
			className={`${sectionStyle} min-h-screen items-center mb-20 md:mb-0 text-left pb-6`}
		>
			<div className={`${containerStyles} px-5 site-container relative`}>
				<h2 className={`${h1Heading} text-left`}>Non-Tech Skill Set</h2>

				<div className='mt-10 mx-auto text-left flex flex-col justify-between gap-3  md:mt-12 md:flex-row'>
					{skillsData.map((skills, i) => (
						<motion.div
							key={skills.text}
							className='relative w-full h-full bg-fuchsia-500 rounded-xl p-[1px] overflow-hidden z-[1]'
						>
							<motion.div
								className={`${gradient} duration-[3s] absolute z-[2] inset-0`}
							/>
							<motion.div
								className='relative py-5 px-5 rounded-xl bg-black z-[3] h-[300px]'
								style={{ translateY, opacity }}
								transition={{
									ease: 'linear',
									duration: 1,
								}}
							>
								<p className='pb-5'>
									<b>{skills.text}</b>
								</p>
								<ul className='pl-6 '>
									{skills.desc.map((skill, i) => (
										<li
											key={`item-${i}`}
											className='mb-3.5 pl-2 md:mb-4 before:content-code before:text-fuchsia-500 before:absolute before:top-[3px] before:-left-5 relative'
										>
											{skill}
										</li>
									))}
								</ul>
							</motion.div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
