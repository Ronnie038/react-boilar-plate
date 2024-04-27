import { useEffect, useRef, useState } from 'react';

import { MdOutlineMusicNote } from 'react-icons/md';
import { MdOutlineMusicOff } from 'react-icons/md';
import audio from '../assets/audio/audio.mp3';
import gsap from 'gsap';
import Sequences from '../Components/Sequences';
import Hero from '../Components/Hero';
import useImages from '../Hooks/Images';
import soundImg from '../assets/images/Home/sound.png';

// eslint-disable-next-line react/prop-types
const Home = ({ loading }) => {
	const audioRef = useRef(null);
	const mainRef = useRef(null);
	const { images } = useImages();

	const playAudo = () => {
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	const [audioContext] = useState(new AudioContext());
	const [audioBuffer, setAudioBuffer] = useState(null);
	const [isPlaying, setIsPlaying] = useState(true);

	useEffect(() => {
		const fetchAudioData = async () => {
			try {
				const response = await fetch('/src/assets/audio/audio.mp3'); // Replace with your audio file path
				const arrayBuffer = await response.arrayBuffer();
				const buffer = await audioContext.decodeAudioData(arrayBuffer);
				setAudioBuffer(buffer);
			} catch (error) {
				console.error('Error loading audio:', error);
			}
		};

		fetchAudioData();
	}, [audioContext]);

	useEffect(() => {
		// setTimeout(() => {
		// 	// playAudo();
		// 	const audio = document.getElementById('audio');
		// 	audio?.play();
		// 	gsap.to('#toggleMusic', {
		// 		opacity: 1,
		// 		duration: 1,
		// 	});
		// }, 3000);
	}, []);

	return (
		<div ref={mainRef} className=' relative'>
			<audio ref={audioRef} id='audio' loop src={audio}></audio>
			{/* <Sequences images={images} loading={loading} /> */}
			<div
				id='toggleMusic'
				className='opacity-0 fixed bottom-10 right-10 text-5xl z-50'
			>
				{isPlaying ? (
					<>
						<div onClick={playAudo}>
							<img src={soundImg} alt='' />
						</div>
					</>
				) : (
					<div
						className='relative overflow-hidden size-[70px] rounded-full'
						onClick={playAudo}
					>
						<img src={soundImg} alt='' className='w-full h-full' />
						<div className='bg-black absolute left-1/2 -translate-x-1/2 h-[3px]  top-1/2 -translate-y-1/2 -rotate-[30deg] w-[50px]'></div>
					</div>
				)}
			</div>

			<Hero />
			<Sequences images={images} loading={loading} />
		</div>
	);
};

export default Home;
