import React, { Component } from "react";
import Layout from "../components/Layout";
import FaMobile from "react-icons/lib/fa/mobile";
import styled from "react-emotion";
import { css } from "react-emotion";
import { Input, Button } from 'antd';
import {
  Box,
  Heading,
  Row,
  Column,
  Text,
  NavLink,
  Border,
  Textarea,
  Flex
} from "rebass";
import IoEmail from "react-icons/lib/io/email";

const StyledHeading = Box.extend`
  position: relative;
  z-index: 1;
  display: block;
  margin-bottom: 15px;
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
    <Layout>
      <Flex alignItems="center" flexDirection="column" justifyContent="center">
        <Heading
          children="Our address is"
          m={[3, 4]}
          color="#333"
        />
        <Text my={1}>
          1st Stage, 4th Block
              </Text>
        <Text my={1}>
          HBR Layout, Bangalore - 560043
              </Text>
        <Text my={1}>
          Karnataka, India
              </Text>

        <Text my={1}>
          <FaMobile />
          9886106999
              </Text>
        <Flex>
          <IoEmail height="35" />
          <NavLink
            href="mailto:jai@sherpafeet.com"
            color="rgba(59,89,152,.6)"
            fontWeight={400}
            mb={40}
            children="jai@sherpafeet.com"
          />
        </Flex>


        <StyledHeading color="#757575" width={[1, 1 / 3]} m={5} children="Contact Us" />


        <Flex
          flexWrap="wrap"
          flexDirection="column"
          justifyContent="center"
        >
          <Box width={[1, 1]} p={2} color="#333">
            <Input size="large" placeholder="Name" />
          </Box>
          <Box width={[1, 1]} p={2} color="#333">
            <Input size="large" placeholder="Mobile Number(with country code)" />
          </Box>
          <Box width={[1, 1]} p={2} color="#333">
            <Input size="large" placeholder="Email" />
          </Box>
          <Box width={[1, 1]} p={2} color="#333">
            <Input size="large" placeholder="Message" />
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
            <Box width={[1, 1]} p={2} color="#333">
              <Button type="primary" size="large" block> 
                Submit
              </Button>
            </Box>
        </Flex>
        </Flex>
      </Layout>
      );
    };
