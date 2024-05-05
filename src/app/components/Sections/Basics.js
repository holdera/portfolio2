import Accordion from '../Demos/Accordion';
import Modal from '../Demos/Modal/Modal';
import Section from '../Layout/Section';
import Tabs from '../Demos/Tabs/Tabs';

import { AccordionData } from '../data';
import { sectionStyle } from '../../ui/styles';

export default function Basics({}) {
	return (
		<>
			<Section className={sectionStyle} id='basics' title='Basics'>
				<p>
					I want to show you what I can do so lets first show you some
					basic components (it'll get more interesting, I promise).
				</p>
			</Section>

			<Section title='Accordions' className={sectionStyle}>
				{AccordionData.map((data, i) => (
					<Accordion
						key={`accordion-${i}`}
						question={data.question}
						answer={data.answer}
					/>
				))}
			</Section>

			<Section title='Tabs' className={sectionStyle}>
				<p className='pb-5'>Examples of my skillset</p>
				<Tabs />
			</Section>

			<Section title='Modal' className={sectionStyle}>
				<p className='pb-5'>
					Click the button below to trigger the modal.
				</p>

				<Modal
					className='bg-primary py-4 px-5 text-center rounded-xl'
					triggerContent='Click Me!'
					modalTitle='Meow'
				>
					Hello!
				</Modal>
			</Section>

			<Section className={sectionStyle}>
				<p className='text-2xl text-center'>
					That's just a little snippet of what I could.
					<br /> To see some fun, sexy, coll things, keep scrolling!
				</p>
			</Section>
		</>
	);
}
