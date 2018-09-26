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
                           collection: [`guides`,`ratings`,`usrs`,`blogs`,`departures`,`bookings`,`treks`]
                         }
              },
              {
                resolve: `gatsby-source-filesystem`,
                options: {
                  name: `guideimages`,
                  path: `${__dirname}/src/guideimages`,
                }},
                {
                  resolve: `gatsby-source-filesystem`,
                  options: {
                    name: `trekimages`,
                    path: `${__dirname}/src/trekimages`,
                  }
                },
                `gatsby-transformer-sharp`,
                `gatsby-plugin-sharp`,
                `gatsby-plugin-antd`,
            ],
          }


  
