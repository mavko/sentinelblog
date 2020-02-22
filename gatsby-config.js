module.exports = {
  siteMetadata: {
    title: `Sentinel by Sebastian`,
    name: `Sentinel`,
    siteUrl: `https://novela.narative.co`,
    description: `Sentinel Blog by Sebastian Selling. Technical Analysis, Swing Trades and Active Investments.`,
    hero: {
      heading: `Welcome to Sentinel, <br> a blog by Sebastian Selling covering Market analysis, Trades and Investments.`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/narative`
      },
      {
        name: `github`,
        url: `https://github.com/narative`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/narative.co`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/narative/`
      },
      {
        name: `dribbble`,
        url: `https://dribbble.com/narativestudio`
      }
    ]
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true
          // contentful: true,
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    }
  ]
};
