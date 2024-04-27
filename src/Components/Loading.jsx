/* eslint-disable react/prop-types */

import gsap from 'gsap';
import useAnimateHook from '../Hooks/AnimateHook';
import { useRef } from 'react';
// eslint-disable-next-line react/prop-types
const Loading = ({
	loading,
	loadedImageCount,
	imagePaths,
	setInter,
	playAudo,
}) => {
	const loadingRef = useRef();
	const exploreRef = useRef(null);
	const { contextSafe } = useAnimateHook();

	const aniamteLoading = contextSafe(async () => {
		const rslices = gsap.utils.toArray('.rslice').reverse();
		let mm = gsap.matchMedia();
		const timeLine = gsap.timeline();

		mm.add(
			{
				isDesktop: '(min-width: 800px)',
				isMobile: '(max-width: 799px)',
				reduceMotion: '(prefers-reduced-motion: reduce)',
			},
			(context) => {
				let { isDesktop, isMobile, reduceMotion } = context.conditions;
				timeLine
					.to(exploreRef.current, {
						// scale: 5,
						height: 0,
						ease: 'power3.inOut',
						duration: 1,
						opacity: 0,
					})
					.to(
						'.slice',
						{
							// duration: 2,
							height: isDesktop && 0,
							xPercent: isMobile ? 100 : 0,
							stagger: 0.05,
						},
						'a'
					)
					.to(
						rslices,
						{
							// duration: 2,
							// height: 0,
							yPercent: isDesktop ? 100 : 0,
							width: isMobile ? '0' : 0,
							stagger: 0.05,
						},
						'a'
					)
					.from(
						'#herocanvas',
						{
							scale: 5,
							duration: 1.2,
							delay: 0.5,
							opacity: 0,
							onComplete: () => {
								setInter(true);
							},
						},
						'a'
					)
					.from('#herot .char', {
						y: '100%',
						duration: 0.5,
						// delay: -1,
					})
					.from('#herom .char', {
						y: '100%',
						duration: 0.5,
						// delay: -0.5,
					})
					.from('#herob p', {
						// opacity: 0,
						// duration: 2,
						y: '100%',
						stagger: 0.1,
						// delay: ,
					})
					.from('.hero1', {
						opacity: 0,
						stagger: 0.1,
					});
			}
		);

		return true;
	});

	const aniamte = () => {
		aniamteLoading().then(() =>
			setTimeout(() => {
				// playAudo();
				const audio = document.getElementById('audio');
				audio?.play();
				gsap.to('#toggleMusic', {
					opacity: 1,
					duration: 1,
				});
			}, 3000)
		);
	};
	return (
		<div
			ref={loadingRef}
			className='fixed inset-0 z-[99999]  text-white flex justify-center items-center text-3xl'
		>
			{loading && (
				<h1 className='z-50'>
					Loading{((loadedImageCount / imagePaths.length) * 100).toFixed(2)}%{' '}
				</h1>
			)}
			{!loading && (
				<div
					onClick={aniamte}
					ref={exploreRef}
					className='bg-white z-50 overflow-hidden rounded-full text-black px-5 py-2 '
				>
					Explore the ElonRWA <img src='' alt='' />
				</div>
			)}

			<div className='fixed overflow-hidden flex gap-0 max-md:-space-y-1 md:-space-x-1 md:flex-row flex-col inset-0 z-10 '>
				<div className='flex h-1/2 overflow-hidden  md:h-full md:flex-row flex-col md:w-1/2 w-full'>
					{[...Array(20)].map((_, index) => (
						<div
							key={index * Math.random()}
							className='md:w-[5%] w-full h-[5%] md:h-full slice bg-black'
						></div>
					))}
				</div>
				<div className='flex h-[55%] overflow-hidden  md:h-full md:flex-row flex-col md:w-[55%] w-full'>
					{[...Array(20)].map((_, index) => (
						<div
							key={index * Math.random()}
							className='md:w-[5%] w-full h-[5%] md:h-full rslice bg-black'
						></div>
					))}
				</div>
			</div>
			{/* <img
				src={img}
				alt=''
				id='loadingimg'
				className='fixed inset-0 h-full w-full object-cover object-center'
			/> */}
		</div>
	);
};

export default Loading;
