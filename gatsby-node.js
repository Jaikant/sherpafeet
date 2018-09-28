const path = require(`path`);
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const guideProfileTemplate = path.resolve(`src/templates/guideprofile.js`)
    resolve(
      graphql(
        `
        {
            allMongodbTestGuides {
                edges{
                  node{
                    uid
                  }
                }   
                      }   
        }
        `
      ).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allMongodbTestGuides.edges.forEach(edge => {
          createPage({
            path: `${edge.node.uid}`,
            component: guideProfileTemplate,
            context: {
              uid: edge.node.uid
            },
          })
        })
        return
      })
    )
  })
}

