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
  const whiskyPage = path.resolve(`./src/templates/whiskyTemplate.js`);
  const ginPage = path.resolve(`./src/templates/ginTemplate.js`);
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
    if (node.frontmatter.pagetype === 'whiskies') {
      createPage({
        path: node.fields.slug,
        component: whiskyPage,
        context: {
          slug: node.fields.slug
        }
      });
    } else if (node.frontmatter.pagetype === 'gins') {
      createPage({
        path: node.fields.slug,
        component: ginPage,
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
  })
}