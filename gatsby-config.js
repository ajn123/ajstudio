require(`dotenv`).config();

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE;

module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/gatsby-config.js
    siteTitle: `AJ Studio Pro`,
    siteTitleAlt: `AJ Studio Pro - Photography & Videography`,
    siteHeadline: `AJ Studio Pro - Photography & Videography in the DMV`,
    siteUrl: `https://www.ajstudiopro.com`,
    siteDescription: `Professional Portrait, Product, and event photography in the DMV area`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@ajstudiopro`,
  },
  plugins: [
  {
    resolve: `gatsby-plugin-netlify`,
    options: {
      headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
      allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
      mergeSecurityHeaders: true, // boolean to turn off the default security headers
      mergeCachingHeaders: true, // boolean to turn off the default caching headers
      transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
      generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
    },
  },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-225263838-1",
        head: true,
        anonymize: true,
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
    }
  ].filter(Boolean),
};
