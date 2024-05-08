/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `Alannah Holder's Portfolio Site`,
		description: `Example project for the Gatsby Head API`,
		//twitterUsername: `@gatsbyjs`,
		//image: `/gatsby-icon.png`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		'gatsby-plugin-postcss',
		// 'gatsby-plugin-google-gtag',
		'gatsby-plugin-image',
		'gatsby-plugin-mdx',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
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
