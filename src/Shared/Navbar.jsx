import { Link } from 'react-router-dom';
import { cmcIcon, dexIcon, icon, logo, xIcon } from '../assets';
import { Dexscreener, Linktree, UniswapSvg, XIcon } from '../Components/Svgs';
import { FaDiscord } from 'react-icons/fa';

const Navbar = () => {
	return (
		<div className='fixed top-0  z-50 left-0 text-white py-5 px-2 w-full   '>
			<div
				className='flex justify-between mx-auto w-[80%] items-center bg-[#0000007c] px-10 rounded-full '
				style={{ backdropFilter: 'blur(4px)' }}
			>
				<div>
					<Link to='/'>
						<img src={logo} className='w-[150px]' alt='' />
					</Link>
				</div>
				<ul className='flex gap-5 items-center'>
					<li>About Us</li>
					<li>
						<Link to='tokenomics'>Tokenomics</Link>
					</li>
					<li>
						<Link to='history'>History</Link>
					</li>
					<li>
						<Link to='elondao'>Elondao</Link>
					</li>
					<li>Contract</li>
				</ul>

				<div>
					<ul className='flex gap-2'>
						<li>
							<Link
								to='#'
								className='border border-white inline-block p-1 rounded-full '
							>
								<Linktree className='size-[30px] text-white' />
							</Link>
						</li>
						<li>
							<Link
								to='#'
								className='border border-white inline-block p-1 rounded-full '
							>
								<Dexscreener className='size-[30px] text-white' />
							</Link>
						</li>
						<li>
							<Link
								to='#'
								className='border border-white inline-block p-1 rounded-full '
							>
								<UniswapSvg className='size-[30px] text-white' />
							</Link>
						</li>
						<li>
							<Link
								to='#'
								className='border border-white inline-block p-1 rounded-full '
							>
								<FaDiscord className='size-[30px] text-white' />
							</Link>
						</li>
						<li>
							<Link
								to='#'
								className='border border-white inline-block rounded-full p-1'
							>
								<XIcon className='size-[30px] text-white' />
							</Link>
						</li>
						<li>
							<Link
								to='#'
								className='border border-white inline-block  rounded-full p-1'
							>
								<img src={cmcIcon} alt='' className='size-[30px]' />
							</Link>
						</li>
						<li>
							<Link
								to='#'
								className='border border-white inline-block  rounded-full p-1'
							>
								<img src={icon} alt='' className='size-[30px]' />
							</Link>
						</li>
						<li>
							<Link
								to='#'
								className='border border-white inline-block  rounded-full p-1'
							>
								<img src={dexIcon} alt='' className='size-[30px]' />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
