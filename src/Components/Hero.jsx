import React, { useRef } from 'react';
import img from '../assets/elonMuseum_fxB/0001.jpg';
import useAnimateHook from '../Hooks/AnimateHook';
import SplitType from 'split-type';
import { gsap } from 'gsap/all';
import arrow from '../assets/images/Icons/arrow.png';
import profile from '../assets/images/Home/Ellipse 14.png';
const Hero = () => {
	const { useGSAP } = useAnimateHook();

	const heroRef = useRef(null);
	const heroLeftRef = useRef(null);
	useGSAP(() => {
		new SplitType('#herot');
		new SplitType('#herom');
		// new SplitType('#herob');
		let mm = gsap.matchMedia();

		mm.add(
			{
				isDesktop: '(min-width: 800px)',
				isMobile: '(max-width: 799px)',
				reduceMotion: '(prefers-reduced-motion: reduce)',
			},
			(context) => {
				// context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
				let { isDesktop, isMobile, reduceMotion } = context.conditions;
				const tl = gsap.timeline();

				tl.to(
					heroRef.current,
					{
						scrollTrigger: {
							trigger: heroRef.current,
							start: '20% top',
							end: '20%',
							// markers: true,
							onEnter: () => {
								gsap.to(heroLeftRef.current, {
									xPercent: -200,
									duration: 1,
								});
							},
							onEnterBack: () => {
								gsap.to(heroLeftRef.current, {
									xPercent: 0,
									duration: 1,
								});
							},
						},
					},
					'a'
				).to(
					'#herocanvas',
					{
						scrollTrigger: {
							trigger: heroRef.current,
							start: '20% top',
							end: '20%',

							onEnter: () => {
								gsap.to('#herocanvas', {
									top: 0,
									right: 0,
									width: '100%',
									height: '100%',
									duration: 1,
								});
							},
							onEnterBack: () => {
								gsap.to('#herocanvas', {
									// xPercent: 0,
									top: isDesktop ? '15%' : '40%',
									width: isDesktop ? '45%' : '70%',
									right: '10%',
									height: '70vh',
									duration: 1,
								});
							},
						},
					},
					'a'
				);

				return () => {
					// optionally return a cleanup function that will be called when none of the conditions match anymore (after having matched)
					// it'll automatically call context.revert() - do NOT do that here . Only put custom cleanup code here.
				};
			}
		);
	}, []);
	return (
		<div className='py-[10%] h-[150vh] mx-auto ' ref={heroRef}>
			<div className='md:flex sticky top-[15%] w-[80%] mx-auto overflow-hidden'>
				<div ref={heroLeftRef} className='md:w-[40%]    leading-none '>
					<h1
						id='herot'
						className='text-left text-[4vw] ml-5 h-[4vw] overflow-hidden'
					>
						ElonRWA
					</h1>
					<h1
						id='herom'
						className=' h-[4vw] text-right text-[4vw] overflow-y-hidden overflow-x-visible text-[#c5fb67]'
					>
						Real World Asset
					</h1>
					<div
						id='herob'
						className='text-sm  text-stone-400 [&_p]:h-[22px] [&_div]:h-[22px] mt-5 [&_div]:overflow-hidden space-y-1 w-[70%]  text-justify'
					>
						<div>
							<p>
								{' '}
								The most iconic meme of Elon Musk is a drawing made by the
								reddit artist
							</p>
						</div>{' '}
						<div>
							{' '}
							<p>
								Watchyboy. Join us on an intergalactic journey through the eyes
								of ElonRwa,
							</p>
						</div>{' '}
						<div>
							{' '}
							<p>
								where memes meet Real life art and gaming/ai exploration. Get
								ready for an out-of-this-world experience!
							</p>
						</div>
					</div>
					<div className='py-[10%] hero1 text-xl'>
						<div className='flex -space-x-5  items-center'>
							<div className='bg-[#c5fb67] w-fit h-fit rounded-full  text-slate-800 font font-bold p-2 px-5 '>
								<span>BUY $ELONRWA</span>
							</div>
							<img
								src={arrow}
								className='w-[70px] -rotate-[45deg] rounded-full'
								alt=''
							/>
						</div>
					</div>

					<div className='flex hero1  text-stone-400 gap-5'>
						<div className='bg-[#1e1e1d] p-5 rounded-lg space-y-10'>
							<h3 className='text-xl'>User And Supportive Community</h3>

							<div className='flex justify-between items-center'>
								<span className='text-4xl font-mono'>4.8k</span>
								<div className='flex -space-x-4 [&_img]:w-[40px]'>
									<img src={profile} alt='' />
									<img src={profile} alt='' />
									<img src={profile} alt='' />
								</div>
							</div>
						</div>
						<div className='bg-[#333432] hero1 rounded-lg p-5 text-xl relative'>
							<h3>Get Ready for an Out-of-this-World Experience!</h3>
							<img src={arrow} alt='' className='absolute right-0 bottom-0' />
						</div>
					</div>
				</div>
				<div className='flex-1 relative overflow-hidden rounded-xl'></div>
			</div>
		</div>
	);
};

export default Hero;
