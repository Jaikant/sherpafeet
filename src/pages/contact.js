import Layout from "../components/Layout";
import React, { Component } from "react";

import Regform from "../components/Form";
import { Link } from "gatsby";
import Icon from "../components/Icon";
import MobilePhone from "../generated/MobilePhone";
import Message from "../generated/Message";
import { Heading, Text, Flex, Box } from "rebass";

const StyledHeading = Box.extend`
  position: relative;
  z-index: 1;
  display: inline-block;
  margin-bottom: 15px;
  color: #333;
  text-align: center;
  font-size: 100%;
  ::before {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: -1;
    margin-top: -5px;
    margin-left: -40px;
    width: 80px;
    height: 10px;
    background-color: #fff;
    content: "";
  }
  ::after {
    position: absolute;
    top: 50%;
    right: 18%;
    z-index: -2;
    display: block;
    width: 80%;
    margin-right: -40px;
    border-bottom: 1px solid #ddd;
    content: "";
  }
`;

export default () => {
  return (
    <Layout>
      <Flex alignItems="center" flexDirection="column" justifyContent="center">
        <Heading children="Our address is" m={[3, 4]} color="#333" />
        <Text my={1}>1st Stage, 4th Block</Text>
        <Text my={1}>HBR Layout, Bangalore - 560043</Text>
        <Text my={1}>Karnataka, India</Text>

        <Text my={1}>
          <Icon width={"15px"} render={MobilePhone} />
          9886106999
        </Text>

        <Flex flexDirection="rows" justifyContent="inline" mt={1}>
          <Box>
            <Icon width={"15px"} render={Message} />
          </Box>
          <Box ml={[0, 1, 2]} mt={-1}>
            <Link
              href="mailto:jai@sherpafeet.com"
              color="rgba(59,89,152,.6)"
              fontWeight={400}
              mb={40}
              children="jai@sherpafeet.com"
            />
          </Box>
        </Flex>
        <StyledHeading
          color="#757575"
          width={[1, 1 / 3]}
          mt={4}
          p={[2, 3, 4]}
          children="Contact Us"
        />

        <Flex flexWrap="wrap" flexDirection="column" justifyContent="center" />
        <Regform />
      </Flex>
    </Layout>
  );
};
