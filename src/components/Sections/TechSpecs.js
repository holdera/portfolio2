import React from 'react';
import {
	h1Heading,
	containerStyles,
	gradient,
	sectionStyle,
} from '@styles/styles';
import { motion } from 'framer-motion';
import { techData } from '../data';

export default function TechSpecs() {
	return (
		<section
			id='technical-skills'
			className={`${sectionStyle} mb-20 pb-6 md:pb-28 md:mb-0`}
		>
			<div
				className={`${containerStyles} pt-20 max-w-none px-5 site-container relative`}
			>
				<h2 className={h1Heading}>Technical Specs</h2>

				<div className='flex flex-wrap justify-center gap-3 md:gap-5 md:w-[90%] max-w-[1000px] mt-10 mx-auto overflow-hidden'>
					{techData.map((skills, i) => (
						<motion.div
							key={`skill-${skills.text}`}
							initial={{
								transform: 'scale(0)',
							}}
							whileInView={{
								transform: 'scale(1)',
							}}
							transition={{
								type: 'spring',
								delay: i * 0.2,
							}}
							className={`${gradient} flex flex-col font-bold items-center justify-center text-white rounded-lg w-1/3 md:w-[200px] p-10 overflow-hidden max-h-[117px]`}
						>
							<span>{skills.text}</span>
							{skills.image && (
								<motion.img
									initial={{ opacity: 0.1 }}
									whileHover={{ opacity: 1 }}
									className='absolute object-contain'
									src={skills.image}
									alt=''
								/>
							)}
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
