import gsap from 'gsap';
export const animateImages = (canvasRef, sectionRef, images, frameSequence) => {
	if (!canvasRef.current) return;
	console.log('called');
	const canvas = canvasRef?.current;
	const context = canvas?.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	function render() {
		scaleImage(images[frameSequence.current.frame], context);
	}
	render();
	images[1].onload = render;

	gsap.to(sectionRef.current, {
		ease: 'power3.inOut',
		// duration: 4,

		scrollTrigger: {
			trigger: sectionRef.current,
			start: 'top top',
			end: 'bottom bottom',

			// scrub: true,
			// pin: true,
			// markers: true,
			onUpdate: render,
		},
	});
	function scaleImage(img, ctx) {
		var canvas = ctx?.canvas;
		var hRatio = canvas?.width / img?.width;
		var vRatio = canvas?.height / img?.height;
		var ratio = Math.max(hRatio, vRatio);
		var centerShift_x = (canvas.width - img.width * ratio) / 2;
		var centerShift_y = (canvas.height - img.height * ratio) / 2;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(
			img,
			0,
			0,
			img.width,
			img.height,
			centerShift_x,
			centerShift_y,
			img.width * ratio,
			img.height * ratio
		);
	}
};
export const animateImages1 = (
	canvasRef,
	sectionRef,
	images,
	frameSequence,
	tl
) => {
	if (!canvasRef.current) return;

	const sectionHeight = sectionRef.current.scrollHeight;
	const canvas = canvasRef?.current;
	const context = canvas?.getContext('2d');
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	images[1].onload = render;
	function render() {
		scaleImage(images[frameSequence.current.frame], context);
	}
	render();

	gsap.to(
		sectionRef.current,
		{
			ease: 'power3',
			duration: 4,

			scrollTrigger: {
				trigger: sectionRef.current,
				start: 'top top',
				end: '98% bottom',
				// pin: true,
				// markers: true,
				onUpdate: (self) => {
					const direction = self.direction;

					render();
				},
			},
		},
		'a'
	);
	function scaleImage(img, ctx) {
		var canvas = ctx?.canvas;
		var hRatio = canvas?.width / img?.width;
		var vRatio = canvas?.height / img?.height;
		var ratio = Math.max(hRatio, vRatio);
		var centerShift_x = (canvas.width - img.width * ratio) / 2;
		var centerShift_y = (canvas.height - img.height * ratio) / 2;
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.drawImage(
			img,
			0,
			0,
			img.width,
			img.height,
			centerShift_x,
			centerShift_y,
			img.width * ratio,
			img.height * ratio
		);
	}
};
