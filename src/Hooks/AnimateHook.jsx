import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const useAnimateHook = (scope) => {
	useEffect(() => {
		new LocomotiveScroll();
	}, []);
	const { contextSafe } = useGSAP({ scope });
	return { useGSAP, contextSafe };
};

export default useAnimateHook;
