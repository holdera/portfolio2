import Accordion from '../Demos/Accordion';
import Modal from '../Demos/Modal/Modal';
import Section from '../Layout/Section';
import Tabs from '../Demos/Tabs/Tabs';

import { AccordionData } from '../data';
import { h2Heading, sectionStyle } from '../../ui/styles';

export default function Basics({}) {
	const pStyles = 'md:text-xl text-lg pb-5';
	const linkStyles = 'text-primary underline hover:no-underline';
	return (
		<>
			<Section className={sectionStyle} id='basics' title='Basics'>
				<p className='text-lg md:text-xl'>
					I want to show you what I can do so lets first show you some
					basic components (it'll get more interesting, I promise).
				</p>
			</Section>

			<Section title='Accordions' className={sectionStyle}>
				<p className={pStyles}>Introductory questions and answers.</p>
				{AccordionData.map((data, i) => (
					<Accordion
						key={`accordion-${i}`}
						question={data.question}
						answer={data.answer}
					/>
				))}
			</Section>

			<Section title='Tabs' className={sectionStyle}>
				<p className={pStyles}>Examples of my skillset</p>
				<Tabs />
			</Section>

			<Section title='Modal' className={sectionStyle}>
				<p className={pStyles}>
					Click the button below to trigger the modal.
				</p>

				<Modal
					className='bg-primary py-4 px-5 text-center rounded-xl'
					triggerContent='Click Me!'
				>
					<h2 className={[h2Heading, 'mt-0 mb-5']}>Hello There!</h2>
					<p>
						The examples show are just to show you that I am
						proficient in ReactJS without using a utility library
						like{' '}
						<a
							className={linkStyles}
							href='https://headlessui.com/'
							rel='noopener noreferrer'
							target='_blank'
						>
							Headless UI
						</a>
						. You can see my code in my github{' '}
						<a
							className={linkStyles}
							href='https://github.com/holdera/portfolio2'
							rel='noopener noreferrer'
							target='_blank'
						>
							here
						</a>
						.
					</p>
				</Modal>
			</Section>

			<Section className={sectionStyle}>
				<p className='text-2xl text-center'>
					That's just a little snippet of what I could.
					<br /> To see some fun, sexy, cool things, keep scrolling!
				</p>
			</Section>
		</>
	);
}
