const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Hack3 - Experience Innovation', // Navigation and Site Title
  siteTitleAlt: 'Hack3', // Alternative Site title for SEO
  siteTitleShort: 'Hack3', // short_name for manifest
  siteHeadline: 'Experience innovation.', // Headline for schema.org JSONLD
  siteUrl: 'https://hack3.co', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'A new hackathon in the Boston Area',
  author: 'Hack3 Team', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@Hack3_Hackathon', // Twitter Username
  ogSiteName: 'cara', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
