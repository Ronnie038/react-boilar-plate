/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import elon from '../assets/images/History/elon.png';
import substact from '../assets/images/History/Subtract.png';
import garantee from '../assets/images/History/garantee.png';
import { useRef } from 'react';
import poly1 from '../assets/images/History/polygon.png';
import poly2 from '../assets/images/History/polygon1.png';
const History = () => {
	return (
		<div className='py-[5%] md:py-[10%] max-md:py-[15%] max-sm:py-[25%] space-y-10 pb-[10%]'>
			<div className='w-fit mx-auto '>
				<h1 className='text-[20vw] text-center relative leading-none'>
					HISTORY
					<img
						src={poly1}
						className='absolute -top-[20%] -left-[10%] md:-left-[5%] md:-top-[5%] max-sm:w-[20px] lg:top-[10%] lg:-left-[3%]'
						alt=''
					/>
					<img
						src={poly2}
						className='absolute  -right-[5%] md:-right-[5%] md:-bottom-[5%] -bottom-[15%] max-sm:w-[25px] lg:right-0'
						alt=''
					/>
				</h1>
				{/* <p className='text-right text-xl text-[#c5fb67]'>HISTORY OF THE MEME</p> */}
			</div>

			<div className='flex w-[80%] mx-auto justify-around max-md:flex-col gap-5 md:p-5'>
				<div className='relative '>
					<img src={elon} className='w-full h-full object-contain' alt='' />
				</div>
				<div>
					<div className='max-w-[600px]'>
						<div className=' flex items-center flex-col space-y-5'>
							<p>
								<Link
									to='🛡️ @Cryptopathic'
									target='_blank'
									className='text-blue-400'
								>
									🛡️ @Cryptopathic
								</Link>
								: FeistyDAO is launching{' '}
								<Link
									target='_blank'
									to='https://twitter.com/ElonRWA'
									className='text-blue-500'
								>
									@ElonRWA
								</Link>{' '}
								on Base. It's the first Real World Asset memecoin. Read below
								for more details 👇 In 2019,
								<br /> <span className='block mt-5'></span> Reddit user
								Watchieboy drew a portrait of Elon Musk. It went viral, for
								obvious reasons. It even got the attention of Elon himself!{' '}
								<br /> <span className='block mt-5'></span> Then, a couple of
								years ago, FeistyDAO member{' '}
								<Link
									target='_blank'
									to='https://twitter.com/lil_dojo'
									className='text-blue-400'
								>
									@lil_dojo
								</Link>{' '}
								&#32; reached out to the creator and purchased the original
								physical work from them. Since then, it has been on adventures
								all around the world, even meeting Kabosu: <br />{' '}
								<span className='block mt-5'></span> The artist also minted it
								as an NFT, which is now held by a 4/7 multisig controlled by:{' '}
								<br />{' '}
								<Link
									target='_blank'
									to='https://twitter.com/lil_dojo'
									className='text-blue-400'
								>
									@lil_dojo
								</Link>
								, the creator of{' '}
								<Link
									target='_blank'
									to='https://twitter.com/RetroDogesNFT'
									className='text-blue-400'
								>
									@RetroDogesNFT
								</Link>
								, purchaser of the image, and lead on ElonRWA. <br />{' '}
								<Link
									target='_blank'
									to='https://twitter.com/summerinternXX2'
									className='text-blue-400'
								>
									@summerinternXX2
								</Link>
								, the custodian of the physical image and team member of
								RetroDoges. <br />
								<Link
									target='_blank'
									to='https://twitter.com/ArtofOrb'
									className='text-blue-400'
								>
									@ArtofOrb
								</Link>
								, an NFT artist and developer who created &#32;
								<Link
									target='_blank'
									to='https://twitter.com/_iterative_'
									className='text-blue-400'
								>
									@_iterative_
								</Link>{' '}
								,{' '}
								<Link
									target='_blank'
									to='https://twitter.com/palettebycfw'
									className='text-blue-400'
								>
									@palettebycfw
								</Link>{' '}
								and many other projects. <br />{' '}
								<Link
									target='_blank'
									to='https://twitter.com/doodlxr'
									className='text-blue-400'
								>
									@doodlxr
								</Link>
								, long time BAYC holder{' '}
								<Link
									target='_blank'
									to='https://twitter.com/UKApeClub'
									className='text-blue-400'
								>
									@UKApeClub
								</Link>
								. <br />{' '}
								<Link
									target='_blank'
									to='https://twitter.com/ppmoon69'
									className='text-blue-400'
								>
									@ppmoon69
								</Link>
								, developer of{' '}
								<Link
									target='_blank'
									to='https://twitter.com/brritoxyz'
									className='text-blue-400'
								>
									@brritoxyz
								</Link>
								. <br />{' '}
								<Link
									target='_blank'
									to='https://twitter.com/arc4g'
									className='text-blue-400'
								>
									@arc4g
								</Link>
								, a well known NFT artist. And myself.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className='w-[80%] mx-auto'>
				<img src={substact} alt='' />
			</div>

			<div className='flex  gap-10 mt-10 max-md:flex-col-reverse justify-between w-[80%] mx-auto'>
				<div className='space-y-5 '>
					<h2 className='text-[#c5fb67] text-5xl'>FEISTYDAO</h2>
					<p className='max-w-[600px]'>
						FeistyDAO and its members, including myself, came together to fund
						the marketing of this project and its acquisition of a real physical
						museum that will eventually grow to host many other origins of
						memes. While this is being organised, you can currently see the
						original portrait in all of its glory on this livestream: &#32;
						<Link
							to='https://youtube.com/watch?v=rzS600PnFCA'
							className='text-[#c5fb67]'
							target='_blank'
						>
							https://youtube.com/watch?v=rzS600PnFCA
						</Link>{' '}
						<br /> <span className='block mt-5'></span> ElonRWA tokens represent
						ownership of this portrait; ElonRWA is the first RWA memecoin. Token
						holders will have voting rights on what is done with the portrait in
						the future.
						<br /> <span className='block mt-5'></span>
						For a fair distribution, and to reward our existing community, we
						airdropped 6.9% of the supply to RetroDoge holders.
						{/* For a fair distribution, and
						to reward our existing community, we are airdropping 6.9% of the
						supply to RetroDoge holders tonight. */}
					</p>
				</div>
				<img
					src={garantee}
					alt=''
					className='h-[400px] w-[500px] max-md:w-full object-contain'
				/>
			</div>
		</div>
	);
};

export default History;
