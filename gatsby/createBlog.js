const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsBlog {
          edges {
            node {
              id
              title
              slug
            }
          }
        }
      }   
    `).then(result => {
      const articleData = result.data.allDatoCmsBlog.edges;
      const articleTemplate = path.resolve(`./src/templates/blog.js`);

      articleData.map((edge, index) => {
        const prev = index < articleData.length - 1 ? articleData[index + 1] : null;

        createPage({
          path: `blog/${edge.node.slug}`,
          component: articleTemplate,
          context: { 
            slug: edge.node.slug,
            prev
          },
        })
      })
      resolve()
    })
  })
}