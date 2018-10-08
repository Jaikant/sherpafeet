module.exports = {
    plugins: [`gatsby-plugin-emotion`,
              {
                resolve: `gatsby-plugin-typography`,
                options: {
                  pathToConfigModule: `utils/typography`,
                },
              },
              {
                resolve: `gatsby-source-mongodb`,
                options: { dbName: `test`, 
                           collection: [`guides`,`rating`,`usrs`,`treks`]
                         }
              },
              {
                resolve: `gatsby-source-filesystem`,
                options: {
                  name: `guideimages`,
                  path: `${__dirname}/src/guideimages`,
                }
              },

              {
                resolve: `gatsby-source-filesystem`,
                options: {
                  name: `trekimages`,
                  path: `${__dirname}/src/trekimages`,
                }
              },
              `gatsby-transformer-remark`,
              `gatsby-transformer-sharp`,
             
              `gatsby-plugin-sharp`,
              `gatsby-plugin-antd`,
            ],
  }

/*

module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
*/

  
