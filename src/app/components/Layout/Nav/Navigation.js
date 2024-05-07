import { useState } from 'react';
import { useLockScroll } from '../../../utils/LockScroll';
import MenuButton from './MenuButton';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navigation({ menuLinks }) {
	const [open, setOpen] = useState(false);

	const { lockScroll, unLockScroll } = useLockScroll();

	open ? lockScroll() : unLockScroll();

	function handleMenuButtonClick() {
		setOpen((prevState) => !prevState);
	}

	function handleLinkClick() {
		setOpen(false);
	}

	const variants = {
		open: {
			left: '0vw',
			transition: {
				type: 'spring',
				stiffness: 30,
			},
		},
		close: {
			left: '100vw',
			transition: {
				type: 'spring',
				stiffness: 30,
			},
		},
	};

	return (
		<>
			<MenuButton
				onMenuButtonClick={handleMenuButtonClick}
				isOpen={open}
			/>
			<AnimatePresence>
				{open && (
					<motion.nav
						animate='open'
						className='fixed top-0 -left-[100vw] w-full h-screen bg-white z-30 text-center pt-16'
						exit='close'
						id='site-navigation'
						variants={variants}
					>
						{' '}
						<ul>
							{menuLinks.map((link, i) => (
								<li key={`link-${i}`} className='mb-5'>
									<Link
										className=' antialiased text-black font-bold text-2xl md:text-3xl hover:underline transition-all'
										href={link.href}
										onClick={handleLinkClick}
									>
										{link.text}
									</Link>
								</li>
							))}
						</ul>
					</motion.nav>
				)}
			</AnimatePresence>
		</>
	);
}
