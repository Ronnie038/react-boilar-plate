/* eslint-disable react/no-unescaped-entities */
import img from '../assets/images/Footer/footer.png';
import img1 from '../assets/images/Footer/footer1.png';
import arrow from '../assets/images/Icons/arrow.png';

const Footer = () => {
	return (
		<footer className='min-h-[50vh] overflow-y-visible bg-[#1d1e1d] relative'>
			<img
				src={img}
				className='absolute -top-[55%] h-full object-contain  w-full  '
				alt=''
			/>
			<img
				src={img1}
				className='absolute opacity-0 hover:opacity-[1] transition duration-[.5s] -top-[55%] h-full object-contain  w-full  '
				alt=''
			/>
			<div
				style={{ backdropFilter: 'blur(4px)' }}
				className='bg-[#1d1e1da2] h-full w-full p-[5%] pb-[2%'
			>
				<div className='top'>
					<div className='flex  justify-between max-md:flex-col max-md:gap-10'>
						<div className='text-2xl space-y-2'>
							<h2>Do You Like </h2>
							<h2>What You See?</h2>

							<div className='text-sm text-black font-bold flex -space-x-3 items-center'>
								<span className='bg-[#c5fb67] h-fit rounded-full inline-block p-2 px-4 '>
									CONTACT US
								</span>{' '}
								<img src={arrow} alt='' className='w-[45px] -rotate-[45deg]' />
							</div>
						</div>

						<div className='flex gap-[5rem] '>
							<div className='space-y-2'>
								<h3>EXPLORE</h3>
								<ul className='text-stone-400 '>
									<li>Home</li>
									<li>Work</li>
									<li>New</li>
									<li>Services </li>
									<li>Careers</li>
									<li>Contact</li>
								</ul>
							</div>
							<div className='space-y-2'>
								<h3>USE FULL LINKS</h3>
								<ul className='text-stone-400'>
									<li>Contract</li>
									<li>FAQS</li>
									<li>About</li>
									<li>Processes </li>
									<li>Blog</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div className='flex justify-around mt-[5%] max-sm:flex-col-reverse max-sm:items-center'>
					<div>
						<p>All Right reserved. Copyright &copy; ELONRWA</p>
					</div>
					<div>
						<p>
							Privacy Policy <span className='inline-block w-[30px]'></span>{' '}
							Terms of Use
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
