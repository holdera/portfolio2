import { useState } from 'react';
import { useLockScroll } from '../../../utils/LockScroll';
import MenuButton from './MenuButton';
import Link from 'next/link';

export default function Navigation({ menuLinks }) {
	const [open, setOpen] = useState(false);

	const { lockScroll, unLockScroll } = useLockScroll();

	const windowScroll = open ? lockScroll() : unLockScroll();

	function handleMenuButtonClick() {
		setOpen((prevState) => !prevState);
		//windowScroll;
	}

	return (
		<>
			<MenuButton
				onMenuButtonClick={handleMenuButtonClick}
				isOpen={open}
			/>
			{open && (
				<nav
					id='site-navigation'
					className='fixed top-0 left-0 w-full h-screen bg-white z-30 text-center pt-16'
				>
					{' '}
					<ul>
						{menuLinks.map((link, i) => (
							<li key={`link-${i}`} className='mb-5'>
								<Link
									className='antialiased text-black font-bold text-2xl md:text-3xl'
									href={link.href}
								>
									{link.text}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			)}
		</>
	);
}
