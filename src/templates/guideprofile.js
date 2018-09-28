import React, { Fragment } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import Link_ from '../components/Link';
import Scrollchor from 'react-scrollchor';
import { Flex, Box, Border, Row, Column } from 'rebass';
import GuideprofileLeft from '../components/Guideprofileleft';
import Guideinfo from '../components/Guideprofileinfo';
import Guidereviews from '../components/Guidereviews';
import Guidetreks from '../components/Guideprofiletrek';
import Aboutguide from '../components/Guideprofileabout';
import Certifications from '../components/Guideprofilecertification';

export default (props) => {
  const { data } = props;
  console.log(props);
  return (
    <Fragment>
      <Layout>
        <Flex flexWrap='wrap'>
          <GuideprofileLeft data={data} />
          <Box id='toplink' width={[1, 2 / 3, 3 / 4]} bg='#f2f2f2'>
            <Border px={2} borderColor='#d9d9d9'>
              <Guideinfo data={data} />
              <Box bg='#ffffff' mt={[290, 250, 160]}>
                <Row pt={4} pl={[0, 3, 170]}>
                  <Flex flex={1} flexDirection={["column", "row", "row"]} alignItems={"center"}>
                    <Column><Scrollchor to='#review' animate={{ offset: -100 }}><Link_>Reviews</Link_></Scrollchor></Column>
                    <Column><Scrollchor to='#trek' animate={{ offset: -250 }}><Link_>Treks</Link_></Scrollchor></Column>
                    <Column><Scrollchor to='#about' animate={{ offset: -250 }}><Link_>About</Link_></Scrollchor></Column>
                    <Column><Scrollchor to='#link' animate={{ offset: -250 }}><Link_>Certifications</Link_></Scrollchor></Column>
                  </Flex>
                </Row>
              </Box>
              <Guidereviews data={data} />
              <Guidetreks data={data} />
              <Aboutguide data={data} />
              <Certifications data={data} />
            </Border>
          </Box>
        </Flex>
      </Layout>
    </Fragment>
  )
}

export const query = graphql`
  query ($uid: String!){
    mongodbTestGuides (uid:{eq:$uid}){
          uid
          businessname
          firstname
          lastname
          age
          address {
                      city
                      country
                  }
          startwork
          rating
          raters
          about
          info {
              bmc
              amc
              moi
              english
              sar
            }
            treks {
              trekname
            }
            }
  
                    allImageSharp{
                        edges{
                          node {
                            id
                            original {
                              src
                            }
                          }
                        }
                      }
                      allMongodbTestRatings(filter:{guideuid:{eq:$uid}}){
                        edges{
                          node{
                              id
                            guideuid
                            raterid
                            comment
                            rating
                            raterid
                            date
                            month
                            year
                            destination
                            attractions {
                              meadows
                              waterbody
                              forests
                              snow
                              camping
                              wildlife
                            }  
                          }
                        }
                      }
                      allMongodbTestUsrs {
                        edges {
                          node {
                            firstname
                            lastname
                            picture
                            mongodb_id
                          }
                        }
                      }
                      allMongodbTestTreks{
                        edges {
                          node {
                            name
                            profileurl
                            noofdays
                            level
                          } 
                        }
                      }
                      allMongodbTestDepartures(filter:{guideuid:{eq:$uid}}){
                        edges{
                          node{
                            trekid
                            guideuid
                            id
                            packagename
                            packagetype
                            trekkingdays
                          }
                        }
                      }                                      
}
`

