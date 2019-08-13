module.exports = {
	siteMetadata: {
		title: 'Gatsby Default Starter',
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-plugin-s3`,
			options: {
				bucketName: 'luckynguyen.me',
				acl: null
			},
		}
	],
};
