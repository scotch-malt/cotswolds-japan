module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-transformer-remark`,
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