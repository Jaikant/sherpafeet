module.exports = {
    plugins: [`gatsby-plugin-emotion`,
                {
                  resolve: "gatsby-source-graphql",
                  options: {
                      // This type will contain the remote schema Query type
                      typeName: "AWSAppSync",
                      // This is the field under which it's accessible
                      fieldName: "events",
                      // URL to query from
                      url: `${process.env.SF_AWS_APPSYNC_API_URL}`,
                      headers: {
                          "x-api-key": `${process.env.SF_AWS_APPSYNC_API_KEY}`
                      },
                      refetchInterval: 10,
                  },
              },
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
  
