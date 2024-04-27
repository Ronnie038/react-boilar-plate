/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import elon from '../assets/images/Elondao/elondao.png';
import arrow from '../assets/images/Icons/arrow.png';
import conference from '../assets/images/Elondao/conference.png';

const Elondao = () => {
	const [isMobile, setIsMobile] = useState(false);
	const boundingRef = useRef(null);

	useEffect(() => {
		const checkIsMobile = () => {
			setIsMobile(window.innerWidth < 768); // Adjust the breakpoint according to your needs
		};

		checkIsMobile();

		window.addEventListener('resize', checkIsMobile);

		return () => {
			window.removeEventListener('resize', checkIsMobile);
		};
	}, []);
	return (
		<div
			onMouseLeave={() => (boundingRef.current = null)}
			onMouseEnter={(ev) => {
				boundingRef.current = ev.currentTarget.getBoundingClientRect();
			}}
			onMouseMove={(ev) => {
				if (!boundingRef.current) return;
				const x = ev.clientX - boundingRef.current.left;
				const y = ev.clientY - boundingRef.current.top;
				const xPercentage = x / boundingRef.current.width;
				const yPercentage = y / boundingRef.current.height;
				const xRotation = (xPercentage - 0.5) * 60;
				const yRotation = (0.5 - yPercentage) * 60;

				ev.currentTarget.style.setProperty('--x-rotation', `${yRotation}deg`);
				ev.currentTarget.style.setProperty('--y-rotation', `${xRotation}deg`);
				ev.currentTarget.style.setProperty('--x', `${xPercentage * 100}%`);
				ev.currentTarget.style.setProperty('--y', `${yPercentage * 100}%`);
			}}
			className='min-h-screen xl:pt-[10%] py-[15%] space-y-16 max-md:pt-[15%] max-sm:pt-[20%]'
		>
			<div className='relative  min-h-[400px] flex justify-center items-center  [perspective:500px]'>
				<div className='max-w-[500px] max-md:w-[80%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[20] '>
					<img
						src={elon}
						alt=''
						className=' transition-transform ease-out [transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)]'
					/>
				</div>

				<Marquee
					speed={isMobile ? 100 : 200}
					className='text-[8vw] max-md:text-[15vw] '
				>
					<div className='flex text-white  font-semibold gap-5 items-center'>
						{' '}
						<p>ELONRWA</p>
						<span className=' size-[40px] max-md:size-[25px] bg-[#c5fb67] rounded-full inline-block'></span>
						<p>ELONRWA</p>
						<span className=' size-[40px] max-md:size-[25px] bg-[#c5fb67] rounded-full inline-block'></span>
						<p>ELONRWA</p>
						<span className=' size-[40px] max-md:size-[25px] bg-[#c5fb67] rounded-full inline-block mr-[20px]'></span>
					</div>
				</Marquee>
			</div>

			<div className='w-[80%] mx-auto space-y-10'>
				<h2 className='text-[4vw] uppercase font-semibold leading-none'>
					Own a Piece of History, <br /> Shape the Future{' '}
					<img src={arrow} className='inline-block w-[4vw]' alt='' />
				</h2>

				<div className='flex gap-5 max-md:flex-col'>
					<img src={conference} alt='' />
					<div className='space-y-10 text-stone-400'>
						<h3 className='text-5xl text-[#c5fb67]'>ELONDAO</h3>
						<p>
							ElonRWA is the first ever real-world asset (RWA) memecoin,
							representing ownership in the iconic portrait of Elon Musk. By
							holding tokens, you gain membership into ElonDAO, entitling you to
							voting privileges regarding the project's direction.
						</p>
						<p>
							ElonDAO’s goal is to become part of the fabric of our social
							consciousness. We will achieve this through diverse mediums like
							digital campaigns, physical gallery exhibitions, and the
							acquisitions of other RWA meme artifacts to display in our
							anticipated museum.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Elondao;
