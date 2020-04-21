const path = require(`path`)

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWork(sort: { fields: [position], order: ASC }) {
          edges {
            node {
              slug
              title
              id
            }
          }
        }
      }   
    `).then(result => {
      
      const workData = result.data.allDatoCmsWork.edges;
      const articleTemplate = path.resolve(`./src/templates/work.js`);

      workData.map((edge, index) => {
        const prev = index < workData.length - 1 ? workData[index + 1] : null;

        createPage({
          path: `work/${edge.node.slug}`,
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