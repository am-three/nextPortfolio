/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'nextportfolio-two-amber.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 7000,
};
