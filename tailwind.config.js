/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			strokeWidth: {
				1: '1px',
				2: '2px',
				3: '3px',
			},
			WebkitTextStrokeWidth: {
				1: '1px', // Add your custom stroke width value
				2: '2px', // Add your custom stroke width value
			},
		},
	},
	plugins: [],
};
