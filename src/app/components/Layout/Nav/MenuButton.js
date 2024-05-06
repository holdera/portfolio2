export default function MenuButton({ isOpen, onMenuButtonClick }) {
	const mobileLines = `block relative w-full rounded-2xl h-[2.5px] mb-[7px] pb-[3px] last:mb-0 btn-transition transition-all ${
		isOpen ? 'bg-black' : 'bg-white'
	}`;

	return (
		<button
			className='absolute right-0 top-0 z-40 w-[36px]'
			aria-label='Menu'
			aria-expanded={isOpen}
			aria-controls='site-navigation'
			onClick={onMenuButtonClick}
		>
			<span
				className={`${mobileLines} ${
					isOpen
						? 'translate-y-[10px] rotate-45 '
						: 'translate-y-0 rotate-0'
				}`}
			></span>
			<span
				className={`${mobileLines} ${
					isOpen ? '-rotate-45 ' : 'rotate-0'
				}`}
			></span>
			<span
				className={`${mobileLines} ${isOpen ? 'hidden' : 'block'} mb-0`}
			></span>
			{/* <span
				className={`block font-bold text-sm pt-1 ${
					isOpen ? 'text-black' : 'text-white'
				}`}
			>
				Menu
			</span> */}
		</button>
	);
}
