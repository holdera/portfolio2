import { containerStyles } from "../../ui/styles";
export default function Footer() {
	const todaysDate = new Date();
	return (
		<footer className="h-screen w-full fixed bottom-0 left-0 hidden">
			<div className={containerStyles}>
				<p className="text-semibold">
					&copy; Alannah Holder Inc {todaysDate.getFullYear()}
				</p>
			</div>
		</footer>
	);
}
