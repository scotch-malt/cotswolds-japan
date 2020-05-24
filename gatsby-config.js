module.exports = {
    plugins: [
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
              name: `content`,
              path: `${__dirname}/content`,
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-netlify-cms`
    ]
}