module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{html,png,jpg,jpeg,gif,css,ico,ttf,svg,webp,js,mp3,txt}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};