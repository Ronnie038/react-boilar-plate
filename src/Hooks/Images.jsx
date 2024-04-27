import React, { useEffect, useMemo, useState } from 'react';
import { imagePaths } from '../assets';

const useImages = () => {
	const [loadedImageCount, setLoadedImageCount] = useState(0);
	const [loading, setLoading] = useState(true);
	const images = useMemo(() => {
		return imagePaths.map((path) => {
			const img = new Image();
			img.src = path;
			img.onload = () => {
				setLoadedImageCount((prevCount) => prevCount + 1);
			};
			return img;
		});
	}, []);

	useEffect(() => {
		if (loadedImageCount >= imagePaths.length - 10) {
			// All images are loaded, start your animation here
			console.log('All images loaded! Starting animation...');
			setLoading(false);
		}
	}, [loadedImageCount]);
	return {
		images,
		loading,
		loadedImageCount,
	};
};

export default useImages;
