const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsBlog {
          edges {
            node {
              slug
            }
          }
        }
      }   
    `).then(result => {
      result.data.allDatoCmsBlog.edges.map(edge => {
        createPage({
          path: `blog/${edge.node.slug}`,
          component: path.resolve(`./src/templates/blog.js`),
          context: { slug: edge.node.slug },
        })
      })      
      resolve()
    })
  })
}