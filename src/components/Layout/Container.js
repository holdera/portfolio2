import { containerStyles } from '../../styles/styles';

export default function Container({ children, ...props }) {
	return (
		<div className={`${containerStyles} px-5 site-container`} {...props}>
			{children}
		</div>
	);
}
