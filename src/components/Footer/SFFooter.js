import React,{Component} from 'react';
import styled, { css } from 'react-emotion';
import { Link } from 'gatsby';
import { Flex, Box } from 'rebass';
import StyledLink from '../StyledLink';

const StyledSpan = styled.span`
    color: rgba(255, 255, 255, 0.7);
    padding: 2px;
`
const Dot = () => <StyledSpan>·</StyledSpan>

const SFFooter=()=>(
    <Flex bg={"#3b5998"} flexWrap="wrap" justifyContent="center" width={1} p={[1,3]}>
        <Box color="white">© sherpafeet</Box>
        <Dot/>
        <StyledLink to="/">Home</StyledLink>
        <Dot/>
        <StyledLink to="#">Blog</StyledLink>
        <Dot/>
        <StyledLink to="#">Why</StyledLink>
        <Dot/>
        <StyledLink to="#">Must know</StyledLink>
        <Dot/>
        <StyledLink to="#">Checklist</StyledLink>
        <Dot/>
        <StyledLink to="#">Terms & Conditions</StyledLink>
        <Dot/>
        <StyledLink to="#">Privacy Policy</StyledLink>
        <Dot/>
        <StyledLink to="#">Contact</StyledLink>
        <Dot/>
        <StyledLink to="#">Partners</StyledLink>
    </Flex>
)

export default SFFooter;