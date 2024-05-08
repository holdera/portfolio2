import React, { useRef } from 'react';
import { h1Heading, containerStyles, sectionStyle } from '@styles/styles';
import { motion, useScroll, useTransform } from 'framer-motion';
import { skillsData } from '../data';

export default function SkillSet() {
	const sectionRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ['center end', 'end center'],
	});
	const viewportRoot = [0, 0.5];

	const rotateX = useTransform(scrollYProgress, viewportRoot, [88, 0]);
	const scale = useTransform(scrollYProgress, viewportRoot, [1.05, 1]);
	const translate = useTransform(scrollYProgress, viewportRoot, [
		'0%, 150%',
		'0%, 0%',
	]);

	const opacity = useTransform(
		scrollYProgress,
		[0, 0.3, 0.4, 0.7],
		[0, 0, 0.5, 1]
	);

	return (
		<section
			id='non-tech-skillset'
			ref={sectionRef}
			className={`${sectionStyle} min-h-screen items-center mb-20 md:mb-0 text-left`}
		>
			<div className={`${containerStyles} px-5 site-container relative`}>
				<h2 className={`${h1Heading} text-left`}>Non-Tech Skill Set</h2>

				<motion.div
					className='mt-10 mx-auto text-left flex flex-col justify-between gap-3 md:gap-0 md:mt-12 md:flex-row'
					style={{
						rotateX,
						scale,
						translate,
					}}
				>
					{skillsData.map((skills) => (
						<motion.div
							className='border border-solid border-fuchsia-500 py-5 px-5 rounded-xl bg-[rgba(220,65,223,0.05)]'
							key={skills.text}
						>
							<p className='pb-5'>
								<b>{skills.text}</b>
							</p>
							<ul className='pl-6 '>
								{skills.desc.map((skill, i) => (
									<motion.li
										key={`item-${i}`}
										className='mb-3.5 pl-2 md:mb-4 before:content-code before:text-fuchsia-500 before:absolute before:top-[3px] before:-left-5 relative'
										style={{ opacity }}
									>
										{skill}
									</motion.li>
								))}
							</ul>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
}
