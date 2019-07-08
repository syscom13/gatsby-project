module.exports = {
  siteMetadata: {
    title: 'Design+Code course',
    description: 'Complete courses about the best tools and design systems. Prototype and build apps with React and Swift. 60 hours of video content and resource materials. No coding experience required.',
    keywords: 'react course, react for designers, ios development, sketch app, swift app course, arkit 2, after effects, create sketch plugin'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'w0hc2p0gopq7',
        accessToken: '9LeWpqBroMXaXC3J3gB3VnbmJwnBUhyD40RpY0GxQqA'
      }
    }
  ],
}
