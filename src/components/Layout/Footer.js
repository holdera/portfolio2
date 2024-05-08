import React from 'react';
import { containerStyles } from '@styles/styles';
import { Link } from 'gatsby';
import IconEmail from '@images/icons/icon-email.svg';
import IconGithub from '@images/icons/icon-github.svg';
import IconLinkedIn from '@images/icons/icon-linkedin.svg';

export default function Footer() {
	const todaysDate = new Date();
	const circleStyles = 'rounded-full h-2.5 w-2.5';

	const footerLinks = [
		{
			text: 'About Me',
			url: '#about-me',
		},
		{
			text: 'Basics',
			url: '#basics',
		},
		{
			text: 'Email Me',
			url: 'holdera09@gmail.com',
			icon: <IconEmail className='fill-slate-50' />,
		},
		{
			text: 'My Resume',
			url: 'https://docs.google.com/document/d/1btpbIiVrSqkXtWrJW4ksPCvmD6aY6uuQ/edit',
			target: '_blank',
		},
	];

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
	return (
		<footer className='h-[40vh] w-full fixed bottom-0 left-0 z-0 pt-5 px-5'>
			<div className={`${containerStyles} relative`}>
				<div className='rounded-xl border border-solid border-violet-500 pt-12'>
					<div className='absolute top-0 flex gap-1 pl-4 pt-[10px]'>
						<div className={`${circleStyles} bg-red-600`} />
						<div className={`${circleStyles} bg-yellow-300`} />
						<div className={`${circleStyles} bg-green-500`} />
					</div>
					<div className='border border-solid border-violet-500 absolute top-[30px] w-full' />
					<ul className='pl-4'>
						{footerLinks.map((links, i) => (
							<li key={`sm-${i}`}>
								{links.target ? (
									<a
										target='_blank'
										rel='noopener noreferrer'
										href={links.url}
									>
										{links.text}
									</a>
								) : (
									<Link to={links.url}>{links.text}</Link>
								)}
							</li>
						))}
					</ul>
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
	);
}
