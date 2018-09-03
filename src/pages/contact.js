import React, { Component } from "react";
import Layout from "../components/Layout";
import FaMobile from "react-icons/lib/fa/mobile";
import styled from "react-emotion";
import { css } from "react-emotion";
import {
  Box,
  Heading,
  Row,
  Column,
  Text,
  NavLink,
  Border,
  Textarea,
  Button,
  Flex
} from "rebass";
import IoEmail from "react-icons/lib/io/email";

// const hr_ = styled('Text')`
//   color: #757575;

//   position: absolute;
//   ::before {
//     content: "---";
//     width: 80px;
//   }
//   ::after {
//     content: " ";

// `;
const StyledHeading = styled.heading`
  position: relative;
  z-index: 1;
  display: block;
  margin-bottom: 15px;
  width: 100%;
  color: #757575;
  text-align: center;
  font-size: 80%;
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
    top: 49%;
    z-index: -2;
    display: block;
    width: 100%;
    border-bottom: 1px solid #ddd;
    content: "";
  }
`;

export default () => {
  return (
    <div>
      <Layout>
        <Box bg="white" alignSelf="center" pt={40} pb={40}>
          <Flex alignItems="center" flexDirection="row" justifyContent="center">
            <center>
              <Heading
                is="p"
                children="Our address is"
                pt={40}
                pr={0}
                pl={0}
                mb={10}
                fontSize={24}
                fontWeight={500}
                color="#333"
              />
              <Text mt={10} mb={10} fontSize={14}>
                1st Stage, 4th Block
              </Text>
              <Text mt={10} mb={10} fontSize={14}>
                HBR Layout, Bangalore - 560043
              </Text>
              <Text mt={10} mb={10} fontSize={14}>
                Karnataka, India
              </Text>

              <Text fontSize={14}>
                <FaMobile fontSize={18} fontWidth={24} />
                9886106999
              </Text>
              <IoEmail fontSize={18} />
              <NavLink
                href="#!"
                color="rgba(59,89,152,.6)"
                fontWeight={400}
                mb={40}
                children="jai@sherpafeet.com"
              />

              
              <StyledHeading color="#757575" mb={15} children="Contact Us" />

             
              <Flex
                
                flexWrap="wrap"
                flexDirection="column"
                justifyContent="center"
              >
                <Box width={[1, 1]} color="#333" bg="white">
                  <Text
                    fontWeight="bold"
                    textAlign="left"
                    pl={18}
                    mb={2}
                    mt={40}
                    children="Name"
                  />
                  <Box width={[1, 1]} color="#333" bg="white">
                    <Border
                      py={20}
                      width={350}
                      borderColor="rgb(204, 204, 204)"
                      mb={15}
                      color="#757575"
                    />
                  </Box>
                </Box>
                <Box width={[1, 1]} color="#333" bg="white" mb={0}>
                  <Row mb={0}>
                    <Column>
                      <Text
                        fontWeight="bold"
                        textAlign="left"
                        pl={18}
                        
                        children="Mobile Number"
                      />
                      <Text
                    textAlign="left"
                    mb={-20}
                    ml={18}
                    fontSize={0}
                    fontWeight="bold"
                    children="919886198861)"
                  />
                    </Column>
                    <Column>
                      <Text
                        fontSize={0}
                        mt={2}
                        ml={-100}
                        textAlign='left'
                        fontWeight="bold"
                        children="(with country code, eg for India, "
                      />
                    </Column>
                  </Row>
                  
                  <Box width={[1, 1]} color="#333" bg="white">
                    <Border
                      py={20}
                      width={350}
                      borderColor="rgb(204, 204, 204)"
                      color="#757575"
                      mb={15}
                    />
                  </Box>
                </Box>
                <Box width={[1, 1]} color="#333" bg="white">
                  <Text
                    fontWeight="bold"
                    textAlign="left"
                    pl={18}
                    children="Email"
                    mb={2}
                  />
                  <Box width={[1, 1]} color="#333" bg="white">
                    <Border
                      py={20}
                      width={350}
                      borderColor="rgb(204, 204, 204)"
                      color="#757575"
                      mb={15}
                    />
                  </Box>
                </Box>
                <Box width={[1, 1]} color="#333" bg="white">
                  <Text
                    fontWeight="bold"
                    textAlign="left"
                    pl={18}
                    children="Message"
                    mb={0}
                  />
                  <Box width={[1, 1]} p={3} color="#333" bg="white">
                    <Textarea
                      borderColor="rgb(204, 204, 204)"
                      rows={4}
                      width={350}
                      color="#757575"
                      border="bold"
                    />
                  </Box>
                </Box>
                <Box width={[1, 1]} color="#333" bg="white">
                  <Button
                    children="Submit"
                    bg="rgba(59,89,152,.8)"
                    px={150}
                    py={15}
                    bordertopColor="rgb(59, 89, 152)"
                    borderRadius={5}
                    color="#fff"
                  />
                </Box>
              </Flex>
            </center>
          </Flex>
        </Box>
      </Layout>
    </div>
  );
};
