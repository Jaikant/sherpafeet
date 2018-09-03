import React, { Component } from 'react'
import Layout from '../components/Layout'
import Icon from '../components/Icon'
import Education from '../generated/Education'
import Tree from '../generated/Tree'
import Grain from '../generated/Grain'
import Heart from '../generated/Heart'
import Link from 'gatsby'

import { Box, Image, Flex, Heading, Column, Row, Text } from "rebass"

export default () => {
  return (
    <div>
      <Layout>
        <Box
          mt={[4]}
        >
          
          <Flex flexWrap="wrap" justifyContent="center" flexDirection="row">
            <Box width={[1, 5/ 7]} m={3}>
              <Flex flexDirection="column">
                <Heading textAlign="center" mb={4} children="About Sherpafeet" color='#757575'/>
                <Text
                  textAlign="center"
                  px={[0, 1, 2]}
                  color="#333"
                  mb={1}
                >
                  We connect you to trekking and mountaineering guides. Trekking
                  directly with a local guide will give you a feel of the local
                  culture. Local guides are necessary to make your trek safe.
                  Local guides are experts who know a little more about the ways
                  of the mountains.
                </Text>
                <Flex flexWrap="wrap" flexDirection="row">
                  <Box width={[1, 1 / 2]} p={3} bg="white">
                    <Flex flexWrp="wrap" flexDirection="column">
                      <Row>
                        <Column>
                          <Text textAlign="center" fontSize={6} mb={0} mr={-15} ml={-15}>
                            <Icon
                              color={"#757575"}
                              width={"50px"}
                              render={Grain}
                            />
                          </Text>
                          <Text textAlign="center" color="#333">
                            LOCAL FLAVOUR
                          </Text>
                          <Text textAlign="center" mb={0} color="#333">
                            Connect with a local guide and get to know their
                            culture.
                          </Text>
                        </Column>
                      </Row>
                    </Flex>
                  </Box>
                  <Box width={[1, 1 / 2]} p={3}>
                    <Flex flexWrp="wrap" flexDirection="row">
                      <Row>
                        <Column>
                          <Text
                            textAlign="center"
                            fontSize={6}
                            color="#626262"
                            
                          >
                            <Icon
                              color={"#757575"}
                              width={"50px"}
                              render={Education}
                            />
                          </Text>
                          <Text textAlign="center" color="#333">
                            EXPERT AND VERIFIED GUIDES
                          </Text>
                          <Text textAlign="center" mb={0} color="#333">
                             Verified guides with their experience and
                             qualifications on their profile.
                          </Text>
                        </Column>
                      </Row>
                    </Flex>
                  </Box>
                  <Box width={[1, 1 / 2]} p={3}>
                    <Flex
                      flexWrp="wrap"
                      alignItems="center"
                      flexDirection="column"
                    >
                      <Row>
                        <Column>
                          <Text textAlign="center" fontSize={6}>
                          
                            <Icon
                              color={"#757575"}
                              width={"50px"}
                              render={Heart}
                            />
                          </Text>
                          <Text textAlign="center" color="#333">
                            EMPOWER LOCAL COMMUNITIES
                          </Text>
                          <Text textAlign="center" color="#333">
                            Instead of helping a CEO buy a 3rd holiday home,
                            help a family get food on their table and an
                            education for their little girl.
                          </Text>
                        </Column>
                      </Row>
                    </Flex>
                  </Box>
                  <Box width={[1, 1 / 2]} p={3}>
                    <Flex flexWrp="wrap">
                      <Row>
                        <Column>
                          <Text
                            textAlign="center"
                            fontSize={6}
                            color="#626262"
                            mb={0}
                          >
                            <Icon
                              color={"#757575"}
                              width={"50px"}
                              render={Tree}
                            />
                          </Text>
                          <Text textAlign="center" color="#333">CONSERVE NATURE</Text>
                          <Text textAlign="center" color="#333">
                            We make a direct economic connection between the
                            livelihoods of the local people and nature.
                          </Text>
                        </Column>
                      </Row>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
            </Box>
            <Box
              width={[1, 1/5]}
              p={3}
              color="black"
              bg="white"
              pr={3}
              pl={3}
              alignSelf="top"
            >
              <Image
                src="https://sherpafeet.com/assets/57f80496.png"
                mb={3}
                width={1}
              />
              <Image
                src="https://sherpafeet.com/assets/0e23c256.png"
                mb={3}
                width={1}
              />
              <Image
                src="https://sherpafeet.com/assets/4dd56ec1.png"
                width={1}
              />
            </Box>
          </Flex>
        </Box>
        <Text
            mb={[4,5]}
            mx={[1,3,5]}
          >
            <Text mb={3}>
              We stand for the empowerment of individuals and local
              communities. We feel, the only sustainable way to conserve nature
              is when people see their livelihoods linked to it. sherpafeet
              stands to make this connection between you, the guides and your
              mountains stronger.
            </Text>
            <Text mb={3}>
              sherpafeet provides local guides a platform which enables them to
              build their profile over time. shepafeet strives to build and take
              forward the trust between guides and customers.
            </Text>
            <Text mb={3}>
              We do not charge any <strong>fee</strong> from the guides or the
              trekkers for this service. Plus trekkers could review the guide on
              a transparent platform after their trek, an incentive for the
              guide to provide his <strong>best service</strong> to you!
            </Text>
            <Text mb={0}>
              sherpafeet also provides limited number of{" "}
              <strong>scholarships</strong> to individual talented local guides
              to pursue mountaineering courses in recognised government
              institutes. As a company we also encourage{" "}
              <strong>women guides</strong>. To get listed as a guide on
              sherpafeet, we check for at least one year of experience in
              guiding trekkers. We require local guides to submit proof of their
              guiding experience along with customer references for each trek.
            </Text>
          </Text>
      </Layout>
    </div>
  );
};
