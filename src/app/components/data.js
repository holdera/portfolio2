import React from 'react';

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
