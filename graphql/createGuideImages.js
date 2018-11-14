const path = require('path');

const createGuideImages = (createPage,graphql) => {
  return new Promise((resolve, reject) => {
    const guidesTemplate = path.resolve(`src/templates/guides.js`)
    resolve(
      graphql(
        ` {
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
        if (result.error) {
          return reject(result.errors)
        }
        createPage({
            path: `/guides/`,
            component: guidesTemplate,
            context: result.data.allImageSharp.edges
            
          })
          
      })
   );
  });
}
module.exports = createGuideImages;
//export default createGuideImages;



// const createGuideImages = (createPage, graphql, pageType, pagePath) => {
//     return new Promise((resolve, reject) => {
  
//       const trekIndexTemplate = path.resolve(
//         `src/templates/trek-index.js`
//       );
//       resolve(
//         graphql(
//           ` query IndexPages($indexPage : String!) 
//             {
//               allMarkdownRemark(filter: {fields: {slug: { regex: $indexPage }}}) {
//                 edges {
//                   node {
//                     id
//                     excerpt(pruneLength: 200)
//                     timeToRead
//                     frontmatter {
//                       title
//                       imgdesc
//                       imagepath
//                     }
//                     fields {
//                       slug
//                     }
//                   }
//                 }
//               }
//             }
//           `,
//           { indexPage: pageType }
//         ).then(result => {
//           if (result.error) {
//             return Promise.reject(result.errors)
//           }
  
//           if (result.data.allMarkdownRemark != null) {
//             const posts = result.data.allMarkdownRemark.edges;
  
//               createPage({
//                 path: pagePath,
//                 component: slash(trekIndexTemplate),
//                 context: {
//                   data: result.data
//                 }
//               });
//           }
//         })
//      );
//     });
//   }
  
