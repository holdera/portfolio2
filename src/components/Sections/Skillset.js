import React from 'react';
import {
	h1Heading,
	containerStyles,
	gradient,
	sectionStyle,
} from '@styles/styles';
import { motion } from 'framer-motion';
import { skillsData } from '../data';

export default function Skillset() {
	return (
		<section className={`${sectionStyle} mb-20 md:pb-28 md:mb-0`}>
			<div className={`${containerStyles} px-5 site-container relative`}>
				<h2 className={h1Heading}>Technical Specs</h2>

				<div className='flex flex-wrap justify-center gap-3 md:gap-5 md:w-[90%] max-w-[1000px] mt-10 mx-auto overflow-hidden'>
					{skillsData.map((skills, i) => (
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
								delay: i,
							}}
							className={`${gradient} flex flex-col font-bold items-center justify-center text-white rounded-lg w-1/3 md:w-[200px] p-10 overflow-hidden`}
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
