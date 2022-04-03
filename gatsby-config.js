require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/gatsby-config.js
    siteTitle: `AJ Studio Pro`,
    siteTitleAlt: `AJ Studio Pro - Photography & Videography`,
    siteHeadline: `AJ Studio Pro - Photography & Videography in the DMV`,
    siteUrl: `https://www.ajstudiopro.com`,
    siteDescription: `Professional Portrait, Pet, Bouduir, and event photography in the DMV area`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@ajstudiopro`,
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: `About`, slug: `/about` },
          { name: `Photos`, slug: `/projects` },
        ],
        homepageProjectLimit: 100,
      },
    },
    // {
    //     resolve: 'gatsby-plugin-mailchimp',
    //     options: {
    //         endpoint: '', // string; add your MC list endpoint here; see instructions below
    //         timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
    //     },
    // },
     {
      resolve: `gatsby-plugin-tawk.to`,
      options: {
        tawkId: "6249c2da2abe5b455fc41a9c",
        tawkKey: "1fvo229d7",
        // get this from the tawk script widget
        // https://tawk.to/chat/YOUR_TAWK_ID/YOUR_TAWK_KEY
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.gstatic.com`],
        interval: 300,
        timeout: 30000,
        // If you plan on changing the font you'll also need to adjust the Theme UI config to edit the CSS
        // See: https://github.com/LekoArts/gatsby-themes/tree/main/examples/jodie#changing-your-fonts
        web: [
          {
            name: `Work Sans`,
            file: `https://fonts.googleapis.com/css2?family=Work+Sans:wght@400..700&display=swap`,
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jodie - @lekoarts/gatsby-theme-jodie`,
        short_name: `jodie`,
        description: `Image-heavy photography portfolio with colorful accents & customizable pages. Includes adaptive image grids powered by CSS grid and automatic image integration into projects.`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
