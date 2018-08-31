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
  






          // Create blog post pages.
          
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
  
  
//   "/RoshanRautela/"
// result.data.allMarkdownRemark.edges.forEach(edge => {
//         createPage({
//       path: `${edge.node.fields.slug}`, // required
//       component: blogPostTemplate,
//       context: {
//         // Add optional context data. Data can be used as
//         // arguments to the page GraphQL query.
//         //
//         // The page "path" is always available as a GraphQL
//         // argument.
//       },
//     })
// })

// return
// })
// )
// })
