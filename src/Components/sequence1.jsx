/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import useAnimateHook from '../Hooks/AnimateHook';
import gsap from 'gsap';

import { animateImages, animateImages1 } from '../Animations';
import { imagePaths } from '../assets';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // If you're using ScrollTrigger as well

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

// eslint-disable-next-line react/prop-types
const Sequence1 = ({ images, loading }) => {
	const { useGSAP } = useAnimateHook();
	const canvasRef = useRef(null);
	const sectionRef = useRef(null);
	const frameSequence = useRef({ frame: 1 });
	const frameCount = useRef(imagePaths.length);
	const [duration, setDuration] = useState(10);
	const [isWheelActive, setIsWheelActive] = useState(false);
	const [timeline, setTimeLine] = useState(null);
	const [direction, setDirection] = useState(-1);

	useGSAP(() => {
		const tl = gsap.timeline();
		if (sectionRef.current) {
			gsap.to(
				frameSequence.current,
				{
					frame: frameCount.current - 1,
					snap: 'frame',
					scrollTrigger: {
						trigger: sectionRef.current,
						start: 'top top',
						end: 'bottom bottom',
						scrub: true,
					},
				},
				'a'
			);
		}

		if (canvasRef.current) {
			animateImages1(canvasRef, sectionRef, images, frameSequence, tl);
		}
		window.addEventListener('resize', () => {
			animateImages1(canvasRef, sectionRef, images, frameSequence, tl);
		});

		return () => {
			window.removeEventListener('resize', animateImages1);
			tl.kill();
		};
	}, []);

	// Setup GSAP timeline for scrolling animation
	useGSAP(() => {
		const tl = gsap.timeline({
			paused: true,

			scrollTrigger: {
				trigger: sectionRef.current,
				start: 'top top',
				end: 'bottom bottom',
				scrub: true,
				onUpdate: (self) => {
					const progress = self.progress;
					setDuration(Math.floor(10 - progress * 10));
					// make sure that auto scrolling not inActive unaxpected
					const shouldDireactionUpdate = Math.floor(progress * 100) > 5;
					if (shouldDireactionUpdate) {
						setDirection(self.direction);
					}
				},
				onEnter: () => {
					setIsWheelActive(true);
					gsap.to(window, {
						scrollTo: {
							y: '#scrollDiv',
							autoKill: true,
						},
						ease: 'none',
						duration: 10,
					});
				},
				onLeave: () => {
					setIsWheelActive(false);
				},
				onLeaveBack: () => {
					setIsWheelActive(false);
				},
				onEnterBack: () => {
					setIsWheelActive(true);
					gsap.to(window, {
						scrollTo: {
							y: sectionRef.current.offsetTop,
						},
						duration: 10,
						autoKill: true,
						ease: 'none',
						onStart: () => {
							setDirection(-1);
						},
					});
				},
			},
			onComplete: () => {
				// window.addEventListener('wheel', handleMouseWheel);
			},
		});

		setTimeLine(tl);

		return () => {
			tl.revert();
		};
	}, []);

	// Handle mouse wheel events
	useEffect(() => {
		if (isWheelActive) {
			window.addEventListener('wheel', handleMouseWheel, { passive: false });
		}

		return () => {
			window.removeEventListener('wheel', handleMouseWheel);
		};
	}, [isWheelActive, timeline, duration, direction]);
	// Inside handleMouseWheel function
	const handleMouseWheel = (event) => {
		event.preventDefault(); // Prevent default scrolling behavior
		window.event.stopPropagation();
		const delta = Math.sign(event.deltaY);

		console.log({ delta, direction });

		if (direction === delta) return false;

		if (isWheelActive) {
			// Clear any ongoing animations
			gsap.killTweensOf(window);

			// Calculate current scroll position
			const currentPosition =
				window.pageYOffset || document.documentElement.scrollTop;

			if (delta === 1) {
				// Smoothly scroll to the next frame
				gsap.to(window, {
					scrollTo: { y: '#scrollDiv' }, // Adjust according to your needs
					ease: 'none', // Use a smooth easing function
					duration: duration,
				});
			} else if (delta === -1) {
				// Smoothly scroll to the previous frame
				gsap.to(window, {
					scrollTo: { y: sectionRef.current }, // Adjust according to your needs
					ease: 'none', // Use a smooth easing function
					duration: 10 - duration,
				});
			}
		}
	};

	// const handleMouseWheel = (event) => {
	// 	event.preventDefault(); // Prevent default scrolling behavior
	// 	window.event.stopPropagation();
	// 	const delta = Math.sign(event.deltaY);

	// 	console.log({ delta, direction });

	// 	if (direction === delta) return false;

	// 	if (isWheelActive) {
	// 		// Clear any ongoing animations
	// 		gsap.killTweensOf(window);
	// 		// gsap.p(window);

	// 		if (delta === 1) {
	// 			gsap.to(window, {
	// 				scrollTo: {
	// 					y: '#scrollDiv',
	// 				},
	// 				ease: 'power1',
	// 				duration: duration,
	// 			});
	// 		} else if (delta === -1) {
	// 			gsap.to(window, {
	// 				scrollTo: {
	// 					y: sectionRef.current.offsetTop,
	// 				},
	// 				duration: 15 - duration,
	// 				ease: 'power1',
	// 			});
	// 		}
	// 	}
	// };

	// useGSAP(() => {
	// 	const tween = gsap.to(sectionRef.current, {
	// 		scrollTo: '#scrollDiv',
	// 		// duration: 10,
	// 		paused: true,
	// 		scrollTrigger: {
	// 			trigger: sectionRef.current,
	// 			start: 'top top',
	// 			end: 'bottom bottom',
	// 			markers: true,
	// 			onEnter: () => {
	// 				gsap.to(window, {
	// 					scrollTo: '#scrollDiv',
	// 					duration: 10,
	// 				});
	// 			},
	// 			onEnterBack: () => {
	// 				gsap.to(window, {
	// 					scrollTo: sectionRef.current,
	// 					duration: 10,
	// 				});
	// 			},
	// 		},
	// 	});

	// 	window.removeEventListener('wheel', (event) => {
	// 		event.preventDefault(); // Prevent default scrolling behavior
	// 		const delta = Math.sign(event.deltaY);

	// 		if (delta === -1) {
	// 			tween.reverse();
	// 		} else {
	// 			tween.play();
	// 		}
	// 	});
	// }, []);
	return (
		<>
			<div ref={sectionRef} id='main' className='min-h-[2000vh] relative '>
				<canvas
					id='herocanvas'
					className='-z-[1] sticky top-0 w-full '
					ref={canvasRef}
				></canvas>

				<div className='h-[330vh] relative '>
					<div className=' sticky h-screen  px-[1rem] top-0   text-white'>
						<div className='h-[35vh] flex justify-center items-center'>
							<h1 className='text-5xl font-bold'>Our History</h1>
						</div>
						<div className='flex w-full justify-between h-[65vh] items-center '>
							<div className=''>
								<p className='max-w-[400px]'>
									History of drawing (reddit)/ Provenance (elon twitter comment)
									fractionalization to RWA (real world asset) memecoin —
									Tokenomics Many people can own a piece of the art
								</p>
							</div>
							<div className=''>
								<p className='max-w-[400px]'>
									History of drawing (reddit)/ Provenance (elon twitter comment)
									fractionalization to RWA (real world asset) memecoin —
									Tokenomics Many people can own a piece of the art
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='h-[330vh] relative '>
					<div className=' sticky h-screen flex justify-between items-center top-0  px-[1rem] text-white'>
						<div className=''>
							<p className='max-w-[400px]'>
								History of drawing (reddit)/ Provenance (elon twitter comment)
								fractionalization to RWA (real world asset) memecoin —
								Tokenomics Many people can own a piece of the art
							</p>
						</div>
						<div className=''>
							<p className='max-w-[400px]'>
								History of drawing (reddit)/ Provenance (elon twitter comment)
								fractionalization to RWA (real world asset) memecoin —
								Tokenomics Many people can own a piece of the art
							</p>
						</div>
					</div>
				</div>

				<div
					id='scrollDiv'
					className='absolute  w-full h-screen  z-50 bottom-0 left-0 '
				></div>
			</div>
		</>
	);
};

export default Sequence1;
