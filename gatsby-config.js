/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `Alannah Holder's Portfolio Site`,
		description: `Alannah Holder's Portfolio Site that will showcase your experience as a web Developer.`,
		siteUrl: `https://www.aholder.net/`,
	},
	plugins: [
		'gatsby-plugin-postcss',
		'gatsby-plugin-image',
		'gatsby-plugin-mdx',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'Meet Alannah Holder',
				short_name: 'AH',
				start_url: '/',
				icon: 'src/assets/images/misc/favicon.png',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/assets/images/',
			},
			__key: 'images',
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: './src/pages/',
			},
			__key: 'pages',
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /icons/,
				},
			},
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@src': 'src',
					'@components': 'src/components',
					'@images': 'src/assets/images',
					'@styles': 'src/styles',
				},
				extensions: [],
			},
		},
	],
};
