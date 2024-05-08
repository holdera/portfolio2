import React from 'react';
import { containerStyles } from '@styles/styles';
import IconEmail from '@images/icons/icon-email.svg';
import IconGithub from '@images/icons/icon-github.svg';
import IconLinkedIn from '@images/icons/icon-linkedin.svg';

export default function Footer() {
	const todaysDate = new Date();

	const socialMediaLinks = [
		{
			url: 'https://github.com/holdera',
			icon: <IconGithub className='fill-slate-50' />,
			text: 'Visit my repo on github',
		},
		{
			url: 'https://www.linkedin.com/in/alannahholder/',
			icon: <IconLinkedIn className='fill-slate-50' />,
			text: 'Visit my linkedin profile',
		},
	];

	const circleStyles = 'rounded-full h-2.5 w-2.5';
	const linkStyles =
		'flex justify-center border-violet-500 mt-10 mx-auto font-bold rounded-xl border-2 border-solid py-3.5 px-5 hover:bg-violet-500 md:rounded-[60px]';

	return (
		<>
			<div id='contact-me' className='h-screen' />
			<footer className='h-screen fixed flex flex-col justify-center w-full  bottom-0 left-0 z-0 pt-5 px-5'>
				<div className={`${containerStyles} relative mx-auto`}>
					<div className='rounded-xl border border-solid border-violet-500 pt-12 pb-4 md:pt-16'>
						<div className='absolute top-0 flex gap-1 pl-4 pt-[10px]'>
							<div className={`${circleStyles} bg-red-600`} />
							<div className={`${circleStyles} bg-yellow-300`} />
							<div className={`${circleStyles} bg-green-500`} />
						</div>
						<div className='border border-solid border-violet-500 absolute top-[30px] w-full' />

						<div className='text-center'>
							<h2 className='font-bold mb-5 text-2xl md:text-4xl lg:text-5xl'>
								Contact Me
							</h2>
							<p className='mt-9 md:text-xl text-lg'>
								If you liked what you saw and want to get in
								touch, you can{' '}
							</p>
							<div className='flex justify-between gap-3 mx-auto px-5 md:max-w-[50%] md:gap-0'>
								<a
									className={linkStyles}
									href='mailto:holdera09@gmail.com'
								>
									email me
								</a>
								<a
									className={linkStyles}
									href='https://docs.google.com/document/d/1btpbIiVrSqkXtWrJW4ksPCvmD6aY6uuQ/edit?usp=sharing&ouid=111814661169982273280&rtpof=true&sd=true'
									target='_blank'
									rel='noopener noreferrer'
								>
									view my resume
								</a>
							</div>
						</div>
						<ul className='flex gap-4 mt-10 justify-center'>
							{socialMediaLinks.map((sm, i) => (
								<li key={`sm-${i}`}>
									<a href={sm.url} target='_blank'>
										{sm.icon}
										<span className='opacity-0 absolute text-[0px] w-0 h-0'>
											{sm.text}
										</span>
									</a>
								</li>
							))}
						</ul>
						<p className='text-semibold text-sm text-center py-4'>
							&copy; Alannah Holder Inc {todaysDate.getFullYear()}
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}
