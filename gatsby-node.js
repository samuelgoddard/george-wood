const createBlog = require(`./gatsby/createBlog`)
const createWork = require(`./gatsby/createWork`)

exports.createPages = async ({ actions, graphql }) => {
  await createWork({ actions, graphql })
  await createBlog({ actions, graphql })
}