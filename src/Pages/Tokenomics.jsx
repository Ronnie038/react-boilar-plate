/* eslint-disable react/no-unescaped-entities */
import hero from '../assets/images/tokenomics/hero.png';
import chart from '../assets/images/tokenomics/chart.png';
import { useEffect, useState } from 'react';
const Tokenomics = () => {
	const data = [
		{
			color: '#fc3a0a',
			text: 'Custodian of physical image and team member of retrodoges 2,5% 1y vsting, same as presale',
			percent: '2.5%',
			name: 'Louis',
			width: '70%',
		},
		{
			color: '#fff600',
			text: 'Custodian of physical image and team member of retrodoges 2,5% 1y vsting, same as presale',
			percent: '2.5%',
			name: 'watchieboy',
			width: '75%',
		},
		{
			color: '#ea6c4d',
			text: 'Custodian of physical image and team member of retrodoges 2,5% 1y vsting, same as presale',
			percent: '15%',
			name: 'FristyDAO',
			width: '80%',
		},
		{
			color: '#00ffda',
			text: 'Custodian of physical image and team member of retrodoges 2,5% 1y vsting, same as presale',
			percent: '25%',
			name: 'Lp',
			width: '85%',
		},
		{
			color: '#0e4bf2',
			text: 'Custodian of physical image and team member of retrodoges 2,5% 1y vsting, same as presale',
			percent: '20%',
			name: 'presale/ Mktg',
			width: '90%',
		},
		{
			color: '#19f20e',
			text: 'founder of  retroDoges,  purchser of the image, and lead on $elonrwa',
			percent: '18%',
			name: 'Dojo',
			width: '85%',
		},
		{
			color: '#e30ef2',
			text: 'founder of  retroDoges,  purchser of the image, and lead on $elonrwa',
			percent: '10%',
			name: 'Team Reserve',
			width: '80%',
		},
		{
			color: '#00b0fe',
			text: 'founder of  retroDoges,  purchser of the image, and lead on $elonrwa',
			percent: '6.9%',
			name: 'airdrop/ completed',
			width: '75%',
		},
	];
	const [isMobile, setIsMobile] = useState(false);

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
		<div className=' w-full'>
			<div
				className='w-full h-[500px] bg-cover flex justify-center items-center'
				style={{ backgroundImage: `url(${hero})` }}
			>
				<div className='text-center space-y-3 font-semibold'>
					<h1 className='text-5xl'>TOKENOMICS</h1>
					<p className='text-sm font-thin text-gray-200'>
						Navigating The Digital Economy's Currents
					</p>
				</div>
			</div>

			<div className='pb-[20%] pt-[5%] px-[5%] space-y-10'>
				<div className=' flex w-full justify-center max-xl:flex-col space-y-10'>
					<div className='flex-1 flex justify-center items-center'>
						<img
							src={chart}
							className='max-w-[500px] max-md:w-full object-contain'
							alt=''
						/>
					</div>
					<div className=' flex-1 gap-2 flex flex-col items-center text-stone-400'>
						{data.map((elem, index) => (
							<div
								key={index}
								className={`flex py-2 px-5 text-sm rounded-md  gap-5  bg-[#1d1e1d]`}
								style={{ width: isMobile ? '100%' : elem.width }}
							>
								<div className='w-[130px] max-sm:w-[50px] flex flex-col justify-center items-center'>
									<span
										className={`text-[${elem.color}]`}
										style={{ color: elem.color }}
									>
										{elem.percent}
									</span>{' '}
									<span className='text-wrap'>{elem.name}</span>
								</div>
								<div className='flex-1'>
									<p className='w-[80%] max-md:w-full'>{elem.text}</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className='space-y-5'>
					<div className='text-5xl'>
						<h1>ELON DAO RAISED</h1>
						<h1>
							<span className='text-[#b6f075]'>$340K</span> AT A{' '}
							<span className='text-[#b6f075]'>1.7M</span> VALUTION
						</h1>
					</div>
					<p className='max-w-[700px]'>
						Etiam vestibulum nibh elit, tincidunt maximus augue rutrum nec.
						Morbi cursus elit id quam finibus, nec condimentum risus fermentum.
						Donec blandit, metus in consequat venenatis, sem nisl efficitur
						eros, eget malesuada quam nisi eu ante. Interdum et malesuada fames
						ac ante ipsum primis in faucibus. Phasellus id sapien nunc. Nulla
						euismod non metus non porta. Morbi dignissim dignissim tellus, sit
						amet sodales magna bibendum at. Morbi maximus molestie consequat.
						Proin venenatis non velit ac gravida.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Tokenomics;
