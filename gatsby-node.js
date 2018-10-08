

const path = require('path');
// exports.createPages = ({graphql,actions}) =>
// {
//   const {createPage} = actions 
//   return new Promise((resolve,reject) => {

//     const treksTemplate = path.resolve(`src/templates/treks.js`)
//      // Query for markdown nodes to use in creating pages.
//      resolve(
//        graphql(
//          `
//          {
//           allMongodbTestTreks{
//             edges{
//                node{
//                 region
               
//               }
//             }
//           }
//          }
//          `
//        )
//        .then(result=> {
//         //  let regions = [`Indian-Himalayas`,`Uttarakhand`, `Ladakh`,`Spiti`,`Himachal-Pradesh`]
//          if (result.errors){
//            reject(result.errors)
//          }
//           region.map(region => {
//          createPage({
//            path:`${edge.node.region}`,
//            component: treksTemplate ,
//            context: 
//                   {region:allMongodbTestTreks.edges.node.region}
//          })
//         })
//          return
//        })
//      )
// //   })
// // }

  
  
  exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
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
          // Create blog post pages.
          // result.data.allMongodbTestTreks.edges.forEach(edge => {
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
        
          return
        })
      )
    })
  }
  