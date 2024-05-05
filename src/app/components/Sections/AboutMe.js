import Section from '../Layout/Section';
import { h1Heading } from '../../ui/styles';

export default function AboutMe() {
	const gradientText =
		'bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent';
	return (
		<Section
			id='about-me'
			className='text-center h-screen flex items-start justify-center pt-16 md:pt-[120px]'
		>
			<h1 className={h1Heading}>
				Hello My Name is{' '}
				<span className={gradientText}>Alannah Holder</span>.
			</h1>
			<p className='md:px-5 lg:'>
				I am a{' '}
				<b>
					<span className={gradientText}>Front-End Developer</span>
				</b>{' '}
				who also loves watching horror movies, reading books and
				graphic&nbsp;novels and&nbsp;traveling.
			</p>
			<p className='mt-5'>
				Keep scrolling to learn and{' '}
				<b>
					<span className={gradientText}>see more!</span>
				</b>
			</p>
		</Section>
	);
}
