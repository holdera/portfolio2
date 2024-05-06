import { h1Heading, containerStyles } from '../../ui/styles';

export default function Section({ children, title, ...props }) {
	return (
		<section {...props}>
			<div className={`${containerStyles} px-5 site-container relative`}>
				{title && <h2 className={h1Heading}>{title}</h2>}
				{children}
			</div>
		</section>
	);
}
