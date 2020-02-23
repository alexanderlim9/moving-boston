const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {format} = require('date-fns')

async function createBlogPostPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []

  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const {id, slug = {}, publishedAt} = edge.node
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/blog/${dateSegment}/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: {id}
      })
    })
}

async function createSectionPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanitySection(sort: {fields: order}) {
        edges {
          node {
            id
            title
            slug {
              current
            }
            order
            question {
              id
              title
              slug {
                current
              }
              description
            }
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanitySection || {}).edges || []

  postEdges
    .forEach((edge, index) => {
      const {id, slug = {}, order, question} = edge.node
      const pathSection = `/${slug.current}`

      question.forEach((q, index) => {
        const pathQuestion = `/${q.slug.current}/`
        const path = pathSection + pathQuestion
        createPage({
          path,
          component: require.resolve('./src/templates/page.js'),
          context: {id}
        })
      })
    })
}

exports.createPages = async ({graphql, actions}) => {
  await createBlogPostPages(graphql, actions)
  await createSectionPages(graphql, actions)
}
