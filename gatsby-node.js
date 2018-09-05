const path = require('path');
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const guidesTemplate = path.resolve(`src/templates/guides.js`)
    // Query for markdown nodes to use in creating pages.
    resolve(
      graphql(
        `
        {
              allImageSharp{
                edges{
                  node{
                    original {
                      src
                    }
                  }
                }
              }
            }
      `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        
        createPage({
          path: `/guides/`,
          component: guidesTemplate,
          context: result.data.allImageSharp.edges
          ,
        })
        return
      })
    )
  })
}


