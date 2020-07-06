module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
          resolve: `gatsby-plugin-netlify-cms-paths`,
          options: {
            // Path to your Netlify CMS config file
            cmsConfig: `/static/admin/config.yml`
          }
        },
        {
          resolve: `gatsby-transformer-remark`,
          options: {
            plugins: [
              `gatsby-plugin-netlify-cms-paths`,
            ],
          },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `content`,
              path: `${__dirname}/content`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `news`,
              path: `${__dirname}/news`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `images`,
              path: `${__dirname}/src/images/`,
            },
        },
        `gatsby-plugin-netlify-cms`
    ]
}