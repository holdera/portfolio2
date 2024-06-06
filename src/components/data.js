import React from 'react';
import javascript from '@images/logos/js.png';
import html from '@images/logos/html.png';
import css from '@images/logos/css.png';
import sass from '@images/logos/sass.png';
import tailwindcss from '@images/logos/tailwindcss.png';
import jquery from '@images/logos/jquery.png';
import reactjs from '@images/logos/react.png';
import gatsby from '@images/logos/gatsby.png';
import framerMotion from '@images/logos/motion.png';
import gsap from '@images/logos/gsap.png';
import php from '@images/logos/php.png';
import wordpress from '@images/logos/wordpress.png';
import drupal from '@images/logos/drupal.png';
import git from '@images/logos/git.png';
import nextjs from '@images/logos/nextjs.png';

const listStyles = 'list-[square] pl-5';

export const AccordionData = [
	{
		question: "How long have you've been a web developer?",
		answer: 'I have been a web developer for almost 10 years. I specialize more in the front-end side.',
	},
	{
		question: 'What are some of your biggest accomplishments?',
		answer: 'It would probably be creating 2 sites at the same time for a pharmaceutical client at the same time. Both multilingual, but one having over 10 languages.',
	},
	{
		question: 'Where do you see yourself in 5 years?',
		answer: 'Hopefully alive. I hope to be content with my life and not have to worry about life essentials like food, shelter, etc. I hope to be far more advanced in my career, however that might look.',
	},
];

export const tabData = [
	{
		title: 'Front-end Technologies',
		content: (
			<>
				<ul className={listStyles}>
					<li>Css (including LESS/SASS and TailwindCss)</li>
					<li>Framer Motion</li>
					<li>GSAP</li>
					<li>GatsbyJS</li>
					<li>HTML</li>
					<li>JavaScript</li>
					<li>jQuery</li>
					<li>ReactJS</li>
				</ul>
			</>
		),
	},
	{
		title: 'Back-end Technologies',
		content: (
			<>
				<ul className={listStyles}>
					<li>PHP</li>
					<li>Drupal</li>
					<li>Wordpress</li>
				</ul>
			</>
		),
	},
	{
		title: 'Toolset',
		content: (
			<>
				<ul className={listStyles}>
					<li>Visual Studio</li>
					<li>Adobe Creative Suite</li>
					<li>Sketch</li>
					<li>Figma</li>
					<li>Git</li>
				</ul>
			</>
		),
	},

	{
		title: 'Other',
		content: (
			<>
				<ul className={listStyles}>
					<li>Cookie Policy including GDPR</li>
					<li>Google Analytics implementation including GA4</li>
					<li>Web Accessibility</li>
					<li>
						JS testing frameworks: Cypress and Microsoft Playwright
					</li>
				</ul>
			</>
		),
	},
];

export const techData = [
	{
		text: 'HTML',
		image: html,
	},
	{
		text: 'CSS',
		image: css,
	},
	{
		text: 'SASS',
		image: sass,
	},
	{
		text: 'TailwindCss',
		image: tailwindcss,
	},
	{
		text: 'JavaScript',
		image: javascript,
	},
	{
		text: 'jQuery',
		image: jquery,
	},
	{
		text: 'React',
		image: reactjs,
	},
	{
		text: 'GatsbyJs',
		image: gatsby,
	},
	{
		text: 'NextJs',
		image: nextjs,
	},
	{
		text: 'Framer Motion',
		image: framerMotion,
	},
	{
		text: 'GSAP',
		image: gsap,
	},
	{
		text: 'PHP',
		image: php,
	},
	{
		text: 'Wordpress',
		image: wordpress,
	},
	{
		text: 'Drupal',
		image: drupal,
	},
	{
		text: 'GIT',
		image: git,
	},
];

export const skillsData = [
	{
		text: 'Web Accessibility Compliance',
		desc: ['WCAG 2.1 AA', 'AODA', 'Section 508'],
	},
	{
		text: 'Analytics',
		desc: [
			'Google Analytics: GA4 and legacy of GA3',
			'PIWIK',
			'Social Media Pixels (Facebook, Reddit, etc.',
		],
	},
	{
		text: 'More',
		desc: [
			'Cookie Privacy Laws including PIPEDA & GDPR',
			'Experience with issue tracking software like Jira',
		],
	},
];

export const workData = [
	{
		title: (
			<>
				Senior Web Developer,{' '}
				<span className='text-[#0443fb]'>Klick Health</span>
			</>
		),
		date: 'February 2020 to April 2024',
		workDesc: [
			'Created web applications, websites and email templates based off Sketch or Figma or Photoshop Document (PSD) files provided by the creative team',
			'Built reusable code that was scalable and optimized for performance.',
			'Worked with REST API’s to display and send data',
			'Mentored other developers in tech and team processes and on other projects',
			'Tested accessibility of sites and applications using NVDA, Axe, ChromeVox, Voice Over and Web Aim',
			'Implemented tracking using Google Tag Manager and/or PIWIK that is in line with GDPR and other data protection laws',
		],
	},
	{
		title: (
			<>
				Web Developer,{' '}
				<span className='text-[#0d97cf]'>E&#8209;Dealer</span>
			</>
		),
		date: 'March 2015 to November 2018',
		workDesc: [
			'Created websites and landing pages based off Photoshop Documents (PSD) from the design team',
			'Updated and created custom theme templates for Wordpress',
			'Customized, added and updated site content and design for clients',
			'Conducted bug fixes and solved cross browser issues',
			'Created onboard training guides to educate clients or developers on their team, on how to update their site and which plugins to use',
		],
	},
	{
		title: (
			<>
				Web Developer,{' '}
				<span className='text-[#febc25]'>Baby&#8209;Robot/KBSP</span>
			</>
		),
		date: 'October 2014 to January 2015',
		workDesc: [
			'Transformed PSD templates into interactive web pages for clients',
			'Added and updated site content for clients',
			'Developed and edited animated banners',
			'Created training guides to educate clients on how to update their site',
		],
	},
];
