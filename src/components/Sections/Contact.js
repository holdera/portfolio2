import React, { useRef } from 'react';
import Section from '../Layout/Section';
import { gradient, sectionStyle } from '@styles/styles';

export default function Contact() {
	const sectionRef = useRef();
	return (
		<Section
			ref={sectionRef}
			id='contact'
			title='Contact Me'
			className={`${sectionStyle} items-start h-[50vh] min-h-[50vh]`}
		>
			<p className='mt-9 md:text-xl text-lg'>
				If you liked what you saw and want to get in touch, you can{' '}
			</p>
			<a
				className={`${gradient} block  max-w-[200px] mt-10 mx-auto font-bold rounded-[60px] border-2 border-solid border-transparent p-3.5 hover:bg-clip-text hover:text-transparent hover:border-violet-500`}
				href='mailto:holdera09@gmail.com'
			>
				email me
			</a>
		</Section>
	);
}
