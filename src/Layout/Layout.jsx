import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
import { useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from 'gsap/all';
import { imagePaths } from '../assets';
import useImages from '../Hooks/Images';
import { LiaOdnoklassniki } from 'react-icons/lia';
import Loading from '../Components/Loading';

const Main = () => {
	const [enter, setEnter] = useState(false);
	const { images, loadedImageCount, loading } = useImages();

	useEffect(() => {
		new LocomotiveScroll();
	}, []);

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);
	}, []);

	// {(loading || !enter) && (
	// 	<Loading
	// 		loading={loading}
	// 		loadedImageCount={loadedImageCount}
	// 		imagePaths={imagePaths}
	// 		setInter={setEnter}
	// 		playAudo={playAudo}
	// 	/>
	// )}

	// if (loading || !enter) {
	// return (
	// <Loading
	// 	loading={loading}
	// 	loadedImageCount={loadedImageCount}
	// 	imagePaths={imagePaths}
	// 	setInter={setEnter}
	// 	// playAudo={playAudo}
	// />
	// );
	// }
	return (
		<div className='h-full w-full text-white '>
			{(loading || !enter) && (
				<Loading
					loading={loading}
					loadedImageCount={loadedImageCount}
					imagePaths={imagePaths}
					setInter={setEnter}
					// playAudo={playAudo}
				/>
			)}
			<Navbar />
			<Outlet loading={loading} />
			<Footer />
		</div>
	);
};

export default Main;
