import React, { forwardRef } from 'react';
import { containerStyles, gradient } from '@styles/styles';
import { motion, useScroll, useTransform } from 'framer-motion';

const Section = forwardRef(function Section(
	{ children, title, ...props },
	ref
) {
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['end end', 'start start'],
	});

	const opacity = useTransform(
		scrollYProgress,
		[0, 0.4, 0.8, 1],
		[0, 1, 1, 0.6]
	);

	const h1Heading = 'font-bold mb-5 text-2xl md:text-4xl lg:text-5xl';

	return (
		<section {...props}>
			<div
				ref={ref}
				className={`${containerStyles} px-5 site-container relative`}
			>
				{title && (
					<h2 className={`${h1Heading}`}>
						<span>{title}</span>
						<motion.div
							className={`${gradient} h-2.5 mx-auto mt-2`}
							initial={{ width: '0%' }}
							whileInView={{ width: '50%' }}
							transition={{
								delay: 1,
								ease: 'linear',
							}}
						/>
					</h2>
				)}
				<motion.div style={{ opacity }}>{children}</motion.div>
			</div>
		</section>
	);
});

export default Section;
