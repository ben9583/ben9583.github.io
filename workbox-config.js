module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{png,jpg,jpeg,gif,css,ico,ttf,svg,webp,js,mp3,txt}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	runtimeCaching: [
		{
			urlPattern: /^posts(\/)?$/,
			handler: 'NetworkFirst',
		},
		{
			urlPattern: /^projects(\/)?$/,
			handler: 'NetworkFirst',
		},
		{
			urlPattern: /^tags(\/)?$/,
			handler: 'NetworkFirst',
		}
	]
};