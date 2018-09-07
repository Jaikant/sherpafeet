import React, { Component } from "react";
import Layout from "../components/Layout";
import { Flex, Box, Text, Heading, NavLink } from "rebass";
import styled from "react-emotion";
import { Link } from "gatsby";

const StyledHeading = styled.heading`
  text-decoration: underline;
  font-weight: bolder;
  font-size: 35px;
`;

export default () => {
  return (
    <div>
      <Layout>
        <Flex flexWrap="wrap" justifyConyent='center'>
          <Box
            width={[1, 1]}
            p={[1, 2, 3]}
            color="white"
            bg="white"
            textAlign="center"
          >
            <Text fontSize={18} color="#333" p={[10, 15, 20]} m={[10, 15, 20]} >
              The guides on our platform is a carefully <strong>curated</strong> list from the
              different valleys in the Himalayas. We have local businesses from
              every significant valley in the himalayan region, making it easy
              for you to book your treks and trips. We select only the most
              capable guides to be on our platform. If you know of someone who
              strongly deserves to be listed,{" "}
              <NavLink
                to="/contact/"
                fontSize={20}
                ml={-2}
                mr={-2}
                mt={-7}
                color="rgba(59,89,152,.6)"
                children="send"
              />{" "}
              us his/her details along with your recommendation for us to
              consider it further.
              <Text mt={[15, 20, 30]} mb={[10, 20, 24]}>
                <StyledHeading
                  fontWeight={"bolder"}
                  children="Why you should trek with a local business or local guide"
                />
              </Text>
              All trekking and tour companies who conduct treks and tours in the
              himalayas, outsource their trips to the local businesses, so when
              you book directly with a local business you cut out the middleman.
              The businesses and guides on our platform have served the best
              names in the industry.
              <Heading
                fontSize={25}
                mt={[15, 20, 30]}
                mb={[10, 14, 18]}
                children="Benefits you get"
              />
              <ol>
                <li>
                  Trekking with a local business or guide is a better
                  experience, as they have SMALLER groups of ~ 10 people unlike
                  companies which have HUGE group sizes ~ 25 to 50 people. The
                  best experience and safety in the mountains is with smaller
                  groups.{" "}
                </li>
                <li>
                  Trekking with a local business or guide is a richer
                  experience, because he knows the local folks tales and culture
                  and is more committed to your safety and experience.
                </li>
              </ol>
            </Text>
          </Box>
        </Flex>
      </Layout>
    </div>
  );
};
