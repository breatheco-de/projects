module.exports = {
  siteMetadata: {
    siteUrl: `https://projects.breatheco.de`,
    preview: `https://ucarecdn.com/03b6cba5-457e-474c-b4e3-7ea65f3b3375/`,
    title: `BreatheCode Coding Projects and Tutorials`,
    description: `Practice and polish your coding skills by building real life projects and tutorials.`,
    author: `@alesanchezr`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/breathecode.32.png`, // This path is relative to the root of the site.
      },
    },
    {
    resolve: `gatsby-plugin-google-tagmanager`,
    options: {
      id: "GTM-574Z6C5",

      // Include GTM in development.
      // Defaults to false meaning GTM will only be loaded in production.
      includeInDevelopment: false,

      // Specify optional GTM environment details.
      gtmAuth: "HXY0OFiOxShdVVBJHK5sbg",
      gtmPreview: "env-2",
      dataLayerName: "YOUR_DATA_LAYER_NAME",
    },
  },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
