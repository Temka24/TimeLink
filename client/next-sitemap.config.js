/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://timelink.mn', // өөрийн домэйн
    generateRobotsTxt: true,
    exclude: ['/404'],
    transform: async (config, path) => {
        return {
            loc: path,
            changefreq: 'weekly',
            priority: 0.7,
            lastmod: new Date().toISOString(),
            alternateRefs: [],
        };
    },
};
