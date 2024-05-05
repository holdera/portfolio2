import { containerStyles } from "../../ui/styles";

export default function Container({ children, ...props }) {
	return (
		<div className={`${containerStyles} px-5 site-container`} {...props}>
			{children}
		</div>
	);
}
