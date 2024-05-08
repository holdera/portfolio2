import React, { useEffect, useState } from 'react';
import { useLockScroll } from '../../../utils/LockScroll';
import { motion, AnimatePresence } from 'framer-motion';
import Close from '@images/icons/close.svg';

export default function Modal({ children, triggerContent, ...props }) {
	const [showModal, setShowModal] = useState(false);
	const { lockScroll, unLockScroll } = useLockScroll();

	function handleCloseModal() {
		setShowModal(false);
		unLockScroll();
	}

	function handleTriggerModal() {
		setShowModal(true);
		lockScroll();
	}

	useEffect(() => {
		window.addEventListener('keypress', (e) => {
			console.log(e.key);
			if (e.key === 'Enter' || e.which === 13) {
				handleCloseModal();
			}
		});
	}, [showModal]);

	return (
		<>
			{showModal && (
				<>
					<div
						id='modal__backdrop'
						className='bg-[rgba(0,0,0,0.55)] transition-all ease-linear fixed z-10 top-0 left-0 w-full h-full'
						aria-modal='true'
						onClick={handleCloseModal}
					></div>
					<div
						id='modal'
						className='block bg-white rounded-3xl fixed top-1/2 z-30 w-[85%] m-auto left-0 right-0 -translate-y-2/4 text-black p-7'
					>
						<button
							id='close'
							aria-label='Close modal'
							className='absolute right-[30px] top-5'
							onClick={handleCloseModal}
						>
							<Close />
						</button>
						<div className='modal__content'>{children}</div>
					</div>
				</>
			)}
			<button onClick={handleTriggerModal} {...props}>
				{triggerContent}
			</button>
		</>
	);
}
