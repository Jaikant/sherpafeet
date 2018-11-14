const path = require(`path`);
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  new Promise((resolve, reject) => {
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
      })
     )}
    )

    new Promise((resolve, reject) => {
      const treksTemplate = path.resolve(`src/templates/treks.js`)
      // Query for markdown nodes to use in creating pages.
      resolve(
        graphql(
          `
        {
          allMongodbTestTreks{
            edges{
              node{
                  region
              }
            }
          }
        
        }
      `
        ).then(result => {
          let regions = [`Indian-Himalayas`,`Uttarakhand`, `Ladakh`,`Spiti`,`Himachal-Pradesh`]
          if (result.errors) {
            reject(result.errors)
          }
          regions.map(region => {
              createPage({
                path: `treks/${region}`, // required
                component: treksTemplate,
                context: {
                  region: region
                  // Add optional context data. Data can be used as
                  // arguments to the page GraphQL query.
                  //
                  // The page "path" is always available as a GraphQL
                  // argument.
                }
              })
            })
          })       
         )}
        )
}
