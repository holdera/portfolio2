import Section from '../Layout/Section';
import { h1Heading } from '../../ui/styles';
import Image from 'next/image';
import Arrow from '../../assets/images/arrow.svg';

export default function AboutMe() {
	const gradientText =
		'bg-gradient-to-r from-violet-500  to-fuchsia-500 bg-clip-text text-transparent';
	return (
		<Section
			id='about-me'
			className='flex h-screen items-start justify-center pt-[40%] text-center md:pt-[30%] lg:pt-[234px]'
		>
			<h1 className={h1Heading}>
				Hello My Name is{' '}
				<span className={gradientText}>Alannah&nbsp;Holder</span>.
			</h1>
			<p className='text-lg md:text-xl md:px-5 lg:px-32'>
				I am a{' '}
				<b>
					<span className={gradientText}>Front-End Developer</span>
				</b>{' '}
				who also loves watching horror movies, reading books and
				graphic&nbsp;novels and&nbsp;traveling.
			</p>
			<p className='mt-5 text-lg md:text-xl'>
				I like Keep scrolling to learn and{' '}
				<b>
					<span className={gradientText}>see more!</span>
				</b>
			</p>

			<p className='rotate-180'>
				<Arrow className='animate-bouncing block mt-14 mx-auto ' />
			</p>
		</Section>
	);
}
