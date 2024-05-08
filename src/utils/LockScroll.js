import { useCallback, useLayoutEffect } from 'react';

const checkWindow = typeof window !== 'undefined';
const scrollBarWidth =
	checkWindow && window.innerWidth - document.body.offsetWidth;

const ifDocument = checkWindow && document.body;

export const useLockScroll = () => {
	const lockScroll = useCallback(() => {
		ifDocument.style.overflow = 'hidden';
		ifDocument.style.paddingRight = `${scrollBarWidth}px`;
		ifDocument.dataset.scrollLock = 'true';
	}, []);

	const unLockScroll = useCallback(() => {
		if (checkWindow) {
			document.body.style.overflow = '';
			document.body.style.paddingRight = '';
			document.body.removeAttribute('data-scroll-lock');
		}
	}, []);

	useLayoutEffect(() => {});

	return { lockScroll, unLockScroll };
};
