import React from 'react';

export default function TabButton({
	children,
	isSelected,
	selectedTab,
	onSelect,
	...props
}) {
	return (
		<li {...props}>
			<button
				className={`bg-primary w-full border-b-4 border-solid border-black p-4 md:rounded-t-xl md:w-auto hover:underline hover:bg-secondary ${
					isSelected ? 'bg-secondary underline' : null
				}`}
				onClick={onSelect}
				aria-selected={isSelected}
				aria-controls={isSelected}
				role='tab'
				id={`tab-${selectedTab}`}
			>
				{children}
			</button>
		</li>
	);
}
