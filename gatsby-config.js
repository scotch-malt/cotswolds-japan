module.exports = {
    siteMetadata: {
      title: `コッツウォルズ・ジャパン`,
      siteUrl: `https://cotswoldsdistilleryjapan.com/`,
      description: `コッツウォルズジンとウィスキーについてのオフィシャル情報サイト`
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-react-helmet`,
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
        `gatsby-plugin-netlify-cms`,
        {
          resolve: `gatsby-plugin-google-analytics`,
          options: {
            // replace "UA-XXXXXXXXX-X" with your own Tracking ID
            trackingId: "UA-171782298-1",
          },
        },
        {
          resolve: `gatsby-plugin-google-fonts`,
          options: {
            fonts: [
              `limelight`,
              `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
            ],
            display: 'swap'
          }
        }
    ]
}