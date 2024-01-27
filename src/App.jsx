import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import './App.css';

function App() {
	useEffect(() => {
		new LocomotiveScroll();
	}, []);

	useGSAP(() => {
		gsap.registerPlugin(ScrollTrigger);
		// gsap code here...
		// <-- automatically reverted
		//
	}, []);
	return (
		<>
			<div>
				<h3>Basic setup</h3>
			</div>
		</>
	);
}

export default App;
