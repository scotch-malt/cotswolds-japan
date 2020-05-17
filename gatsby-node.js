const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const aboutPage = path.resolve(`./src/templates/aboutTemplate.js`);
  const productsPage = path.resolve(`./src/templates/productsTemplate.js`);
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
              pagetype
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.pagetype === 'products') {
      createPage({
        path: node.fields.slug,
        component: productsPage,
        context: {
          slug: node.fields.slug
        }
      });
    } else { 
      createPage({
        path: node.fields.slug,
        component: aboutPage,
        context: {
          slug: node.fields.slug 
        }
      });
    }
    // createPage({
    //   path: node.fields.slug,
    //   component: ,
    //   context: {
    //     // Data passed to context is available
    //     // in page queries as GraphQL variables.
    //     slug: node.fields.slug,
    //   },
    // })
  })
}