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
 
};
