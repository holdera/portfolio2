export default function MenuButton({ isOpen, onMenuButtonClick }) {
	const mobileLines = `block relative w-[30px] rounded-2xl h-[2.5px] mb-[7px] pb-[3px] last:mb-0 btn-transition ${
		isOpen ? 'bg-black' : 'bg-white'
	}`;

	return (
		<button
			className='absolute right-0 top-0 z-30'
			aria-label='Menu'
			aria-expanded={isOpen}
			aria-controls='site-navigation'
			onClick={onMenuButtonClick}
		>
			<span className={`${mobileLines}`}></span>
			<span className={`${mobileLines}`}></span>
			<span className={`${mobileLines}`}></span>
			<span className={`${isOpen ? 'text-black' : 'text-white'}`}>
				Menu
			</span>
		</button>
	);
}
