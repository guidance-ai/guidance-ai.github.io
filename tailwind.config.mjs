/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Lato', 'system-ui', 'sans-serif'],
				mono: [
					'Menlo',
					'Monaco',
					'Lucida Console',
					'Liberation Mono',
					'DejaVu Sans Mono',
					'Bitstream Vera Sans Mono',
					'Courier New',
					'monospace',
				],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}