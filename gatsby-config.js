module.exports = {
  siteMetadata: {
    title: `Password Generator | Universal Equations`,
    description: `Create strong passwords with our password generator.`,
    author: `@uequations`,
    url: "https://pwgen.uequations.com",
    image: `src/images/keys.png`,
    twitterUsername: `@uequations`,
    keywords: `passwords,Generator,options,security,character,create`
  },
  plugins: [
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
        name: `Password Generator Site | Universal Equations`,
        short_name: `Password Generator Site`,
        start_url: `/`,
        background_color: `#9EA4D3`,
        theme_color: `#380A13`,
        display: `minimal-ui`,
        icon: `src/images/icon.png` // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
