import React, { Component } from "react";
import Layout from "../components/Layout";
import SFIcon from "../components/Icon";
import Grain from "../generated/Grain";
import TRIcon from "../components/Icon";
import Tree from "../generated/Tree";
import HRIcon from "../components/Icon";
import Heart from "../generated/Heart";
import EDIcon from "../components/Icon";
import Education from "../generated/Education";

import { Box, NavLink, Image, Flex, Heading, Column, Row, Text } from "rebass";

export default () => {
  return (
    <div>
      <Layout>
        <Box
          style={{ margin: "5rem auto", maxWidth: 1500 }}
          p={4}
          mx={3}
          my={3}
          color="black"
          bg="white"
        >
          <Text
            fontSize={18}
            pb={50}
            ml={45}
            mr={45}
            pl={25}
            pr={25}
            fontWeight={400}
            fontFamily={'"Helvetica Neue",Helvetica,Arial,sans-serif'}
            color="#333"
          >
            <Text mb={3}>
              sherpafeet stands for empowerment of individuals and local
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

          <Flex flexWrap="wrap" justifyContent="center" flexDirection="row">
            <Box
              width={[1, 1 / 5]}
              p={3}
              color="black"
              bg="white"
              pr={3}
              pl={3}
              alignSelf="top"
            >
              <Image
                src="https://sherpafeet.com/assets/57f80496.png"
                mb={0}
                width={[100,300,500]}
              />
              <Image
                src="https://sherpafeet.com/assets/0e23c256.png"
                mb={0}
                width={[100,300,500]}
              />
              <Image
                src="https://sherpafeet.com/assets/4dd56ec1.png"
                width={[100,300,500]}
              />
            </Box>
            <Box width={[1, 5/ 7]} p={3} bg="white">
              <Flex flexDirection="column">
                <Heading textAlign="center" mb={15} mt={20} children="About Sherpafeet" color='#757575'/>
                <Text
                  textAlign="center"
                  pl={[0, 10, 15]}
                  pr={[0, 10, 15]}
                  color="#333"
                  mb={10}
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
                            <SFIcon
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
                  <Box width={[1, 1 / 2]} p={3} bg="white">
                    <Flex flexWrp="wrap" flexDirection="row">
                      <Row>
                        <Column>
                          <Text
                            textAlign="center"
                            fontSize={6}
                            color="#626262"
                            
                          >
                            <EDIcon
                              color={"#757575"}
                              width={"50px"}
                              render={Education}
                            />
                          </Text>
                          <Text textAlign="center" color="#333">
                            EXPERT AND VERIFIED GUIDES
                          </Text>
                          <Text textAlign="center" mb={0} color="#333">
                            <NavLink
                            fontSize={3}
                              href="#!"
                              color="rgba(59,89,152,.6)"
                              children="Verified"
                            />{" "}
                            guides with their experience and{" "}
                            <NavLink
                            fontSize={3}
                              href="#!"
                              color="rgba(59,89,152,.6)"
                              children="qualifications"
                            />{" "}
                            on their profile.
                          </Text>
                        </Column>
                      </Row>
                    </Flex>
                  </Box>
                  <Box width={[1, 1 / 2]} p={3} bg="white">
                    <Flex
                      flexWrp="wrap"
                      alignItems="center"
                      flexDirectio="column"
                    >
                      <Row>
                        <Column>
                          <Text textAlign="center" fontSize={6}>
                          
                            <HRIcon
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
                  <Box width={[1, 1 / 2]} p={3} bg="white">
                    <Flex flexWrp="wrap">
                      <Row>
                        <Column>
                          <Text
                            textAlign="center"
                            fontSize={6}
                            color="#626262"
                            mb={0}
                          >
                            <TRIcon
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
          </Flex>
        </Box>
      </Layout>
    </div>
  );
};
