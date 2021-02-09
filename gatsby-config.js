module.exports = {
  siteMetadata: {
    title: "stonks",
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve(`${__dirname}/src/components/Layout.tsx`)
        }
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "261668927",
      },
    },
    // Pages
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
      __key: "pages",
    },
    // Posts
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
  ],
};
