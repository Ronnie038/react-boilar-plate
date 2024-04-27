/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';
import useAnimateHook from '../Hooks/AnimateHook';
import gsap from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';

import { animateImages } from '../Animations';
import { imagePaths } from '../assets';
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

// eslint-disable-next-line react/prop-types
const Sequence = ({ images, loading }) => {
	const { useGSAP } = useAnimateHook();
	const canvasRef = useRef(null);
	const sectionRef = useRef(null);
	const frameSequence = useRef({ frame: 0 });
	const frameCount = useRef(imagePaths.length);
	// const [loading, setLoading] = useState(true);

	useGSAP(() => {
		if (sectionRef.current) {
			gsap.to(frameSequence.current, {
				frame: frameCount.current - 1,
				snap: 'frame',
				scrollTrigger: {
					trigger: sectionRef.current,
					start: 'top top',
					end: 'bottom bottom',
					scrub: true,
					onUpdate: (self) => {
						// console.log(self.progress * 100);
					},
					// markers: true,
				},
			});
		}

		gsap.set('.sl', {
			x: '-200%',
			opacity: 0,
		});
		gsap.set('.sr', {
			x: '200%',
			opacity: 0,
		});
		const tl = gsap.timeline();
		tl.to(
			'#s1l',
			{
				scrollTrigger: {
					trigger: sectionRef.current,
					start: '1% top',
					end: '1%',
					scrub: true,
					onEnter: () => {
						gsap.to('#s1l', {
							x: '0%',
							duration: 1,
							opacity: 1,
						});
					},
					onEnterBack: () => {
						gsap.to('#s1l', {
							x: '-200%',
							duration: 1,
							opacity: 0,
						});
					},
				},
			},
			'a'
		)
			.to(
				'#s1r',
				{
					scrollTrigger: {
						trigger: sectionRef.current,
						start: '1% top',
						end: '1%',
						scrub: true,
						onEnter: () => {
							gsap.to('#s1r', {
								x: '0%',
								duration: 1,
								opacity: 1,
							});
						},
						onEnterBack: () => {
							gsap.to('#s1r', {
								x: '200%',
								duration: 1,
								opacity: 0,
							});
						},
					},
				},
				'a'
			)
			.to(
				's2l',
				{
					scrollTrigger: {
						trigger: sectionRef.current,
						start: '15% top',
						end: '15%',
						scrub: true,
						onEnter: () => {
							gsap.to('#s2l', {
								x: '0%',
								duration: 1,
								opacity: 1,
							});
						},
						onEnterBack: () => {
							gsap.to('#s2l', {
								x: '-200%',
								duration: 1,
								opacity: 0,
							});
						},
					},
				},
				'b'
			)
			.to(
				'#s2r',
				{
					scrollTrigger: {
						trigger: sectionRef.current,
						start: '15% top',
						end: '15%',
						scrub: true,
						onEnter: () => {
							gsap.to('#s2r', {
								x: '0%',
								duration: 1,
								opacity: 1,
							});
						},
						onEnterBack: () => {
							gsap.to('#s2r', {
								x: '200%',
								duration: 1,
								opacity: 0,
							});
						},
					},
				},
				'b'
			)
			.to(
				's3l',
				{
					scrollTrigger: {
						trigger: sectionRef.current,
						start: '28% top',
						end: '34%',
						scrub: true,
						onEnter: () => {
							gsap.to('#s3l', {
								x: '0%',
								duration: 1,
								opacity: 1,
							});
						},
						onEnterBack: () => {
							gsap.to('#s3l', {
								x: '-200%',
								duration: 1,
								opacity: 0,
							});
						},
					},
				},
				'c'
			)
			.to(
				'#s3r',
				{
					scrollTrigger: {
						trigger: sectionRef.current,
						start: '28% top',
						end: '34%',
						scrub: true,
						onEnter: () => {
							gsap.to('#s3r', {
								x: '0%',
								duration: 1,
								opacity: 1,
							});
						},
						onEnterBack: () => {
							gsap.to('#s3r', {
								x: '200%',
								duration: 1,
								opacity: 0,
							});
						},
					},
				},
				'c'
			);

		if (canvasRef.current) {
			animateImages(canvasRef, sectionRef, images, frameSequence);
		}
		window.addEventListener('resize', () => {
			animateImages(canvasRef, sectionRef, images, frameSequence);
		});

		return () => {
			window.removeEventListener('resize', animateImages);
		};
	}, [loading]);

	const [isMobile, setIsMobile] = useState(false);

	const handleResize = () => {
		setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
	};

	useEffect(() => {
		// Add event listener on component mount
		window.addEventListener('resize', handleResize);
		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div ref={sectionRef} id='main' className='min-h-[1800vh] relative  '>
			<canvas
				id='herocanvas'
				className=' fixed md:top-[15%] -z-10 md:w-[45%] max-md:h-[30vh] h-[70vh] object-cover w-[70%] max-md:object-cover max-md:left-1/2 max-md:-translate-x-1/2 md:right-[10%] top-[40%] '
				ref={canvasRef}
			></canvas>

			<div
				className='h-full container mx-auto text-[2.5vw]  max-md:text-[4vw] max-sm:text-[6vw] font-semibold max-sm:font-thin leading-none text-transparent'
				style={{
					WebkitTextStrokeWidth: isMobile ? '1px' : '1px',
					WebkitTextStrokeColor: 'white',
				}}
			>
				<div className='h-[230vh] relative '>
					<div className=' sticky h-screen  px-[1rem] top-0   overflow-hidden'>
						<div className='h-[35vh] flex justify-center items-center'>
							<h1 className='text-5xl font-bold'> History</h1>
						</div>
						<div className='flex w-full justify-between h-[65vh] '>
							<div id='s1l' className='sl'>
								<p className='max-w-[650px] -mt-[10%]'>
									Reddit user{' '}
									<span
										style={{ WebkitTextStrokeWidth: '0px' }}
										className='text-[#c5fb67] max-sm:text-[#c5fb67]'
									>
										Watchieboy
									</span>{' '}
									drew a portrait of{' '}
									<span
										style={{ WebkitTextStrokeWidth: '0px' }}
										className='text-[#c5fb67]'
									>
										Elon Musk.
									</span>{' '}
									It went viral, for obvious reasons. It even got the attention
									of Elon himself!
								</p>
							</div>
							<div id='s1r' className='mt-[18%] sr'>
								<p className='max-w-[600px]'>
									A few years back, @lil_dojo from{' '}
									<span
										style={{ WebkitTextStrokeWidth: '0px' }}
										className='text-[#c5fb67]'
									>
										FeistyDAO
									</span>{' '}
									bought the original work from the creator. Since then,
									it&apos;s traveled worldwide, even meeting{' '}
									<span
										style={{ WebkitTextStrokeWidth: '0px' }}
										className='text-[#c5fb67]'
									>
										Kabosu
									</span>{' '}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className='h-[330vh] relative '>
					<div className=' sticky h-screen  overflow-hidden items-center top-0  px-[1rem] '>
						<div className='h-[35vh] flex justify-center items-center'>
							<h1 className='text-5xl font-normal'>Real world assets</h1>
						</div>
						<div
							className='flex justify-between    font-semibold  '
							style={{
								WebkitTextStrokeWidth: '0',
								// WebkitTextStrokeColor: 'black',
								// strokeLinejoin: 'round',
								textShadow: ' 1px 5px 4px black',
								color: 'white',
							}}
						>
							<div className=''>
								<div id='s2l' className='-mt-[10vh] sl'>
									<p className='max-w-[650px]'>
										<span
											style={{ WebkitTextStrokeWidth: '0px' }}
											className='text-[#c5fb67] max-sm:text-[#c5fb67]'
										>
											Real world assets
										</span>{' '}
										provide tangible value, from property and{' '}
										<span
											style={{ WebkitTextStrokeWidth: '0px' }}
											className='text-[#c5fb67] max-sm:text-[#c5fb67]'
										>
											commodities
										</span>{' '}
										to infrastructure and natural resources.
									</p>
								</div>
							</div>
							<div className=''>
								<div id='s2r' className='sr'>
									{' '}
									<p className='max-w-[650px] mt-[30vh]'>
										Real world assets anchor wealth in physical form, from land
										and buildings to machinery and precious metals.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='h-[330vh] relative '>
					<div className=' sticky h-screen flex overflow-hidden justify-between items-center top-0  px-[1rem] '>
						<div className=''>
							<div id='s3l' className='-mt-[20vh] sl'>
								<p className='max-w-[650px]'>Fractionalization </p>
								<p className='max-w-[650px]'>
									Fractionalization in crypto breaks down barriers to
									investment, enabling even small amounts of capital to access
									valuable assets.s.
								</p>
							</div>
						</div>
						<div className=''>
							<div id='s3r' className='sr'>
								<p className='max-w-[650px] mt-[40vh]'>
									Fractionalization in crypto democratizes ownership, making
									high-value assets accessible to a broader range of investors.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sequence;
