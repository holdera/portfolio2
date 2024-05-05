import { useState, useRef } from "react";
import Image from "next/image";
import Arrow from "../../assets/images/arrow.svg";

export default function Accordion({
	accordionId,
	accordionPanelId,
	accordionButtonId,
	answer,
	question,
	...props
}) {
	const ref = useRef();
	const [isActive, setisActive] = useState(false);

	function handleButton() {
		setisActive((prev) => !prev);
	}

	return (
		<div id={accordionId} className="mb-6" {...props}>
			{/* border-primary border border-solid */}
			<h3>
				<button
					className={`align-left p-4 text-left w-full bg-primary relative flex justify-between items-center md:py-5 md:px-6 ${
						isActive ? " rounded-t-xl rounded-b-none" : "rounded-xl"
					}`}
					aria-expanded={isActive}
					aria-controls={accordionPanelId}
					id={accordionButtonId}
					onClick={handleButton}
				>
					{question}
					<span className={`${isActive ? "rotate-180" : "rotate-0"}`}>
						<Image
							src={Arrow}
							alt={isActive ? "collapse" : "expand"}
						/>
					</span>
				</button>
			</h3>
			<div
				id={accordionPanelId}
				role="region"
				ref={ref}
				aria-labelledby={accordionButtonId}
				className={`bg-white flex items-center text-black p-8 rounded-b-xl transition-[height] duration-300 ease-in-out delay-75 ${
					isActive
						? "opacity-1 relative z-10"
						: "opacity-0 absolute z-[-1]"
				}`}
				style={
					isActive
						? {
								height: `${ref.current.scrollHeight + "px"}`,
						  }
						: { height: `0px` }
				}
			>
				<p className="py-8">{answer}</p>
			</div>
		</div>
	);
}
