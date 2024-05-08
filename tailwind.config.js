/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		`./src/pages/**/*.{js,jsx,ts,tsx}`,
		`./src/components/**/*.{js,jsx,ts,tsx}`,
	],
	theme: {
		extend: {
			animation: {
				bouncing: 'bouncing 1.5s linear infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				primary: '#5D0C7D',
				secondary: '#410856',
				dark: '#23042f',
			},
			content: {
				code: 'url("../assets/images/misc/code.svg")',
			},
			keyframes: {
				bouncing: {
					'0%,100%': { transform: 'translateY(5px)' },
					'50%': { transform: 'translateY(0px)' },
				},
			},
			maxWidth: {
				1000: '62.5rem',
			},
		},
	},
	plugins: [],
};
