import React, { Component, Fragment } from 'react';
import { Card as RebassCard } from 'rebass';
import styled from 'react-emotion';
import { Link } from 'gatsby';
import { Flex, Box, Image, Border, Text, Divider } from 'rebass';

const Link_ = styled(Link)`
      text-decoration:none;
      color:rgba(59,89,152,.6);
      &:hover {
        color: #23527c;
      }
      font-size:18px;
`
export default class GuideprofileLeft extends Component {
    render() {

        let imagePath = this.props.data.allImageSharp.edges.map(x => x.node.original.src);

        return (
            <Box width={[1, 1 / 3, 1 / 4]} mb={3}>
                <RebassCard mx={3} boxShadow='0 2px 16px rgba(0, 0, 0, 0.25)'>
                    {this.props.data.allMongodbTestDepartures.edges.map(({ node }) => (
                        <Fragment key={node.id}>
                            <Link_><Text fontSize={14} fontWeight='bold' textAlign='center' pt={3}>{node.packagename}</Text></Link_>
                            <Flex>
                                <Box width={1 / 4} mx={3} my={1} bg='white'>
                                    <Border p={1} borderColor='#d9d9d9'>
                                        <Image mb={0} src={imagePath.find(x => x.includes(node.trekid))} />
                                    </Border>
                                </Box>
                                <Box width={1 / 3}>
                                    <Link_ ><Text fontSize={13} textAlign='center' py={1}>{node.trekid}</Text></Link_>
                                    <Text fontSize={12} textAlign='center'>Group Booking</Text>
                                    <Text fontSize={12} textAlign='center'>{node.trekkingdays} Days</Text>
                                </Box>
                            </Flex>
                            <Text fontSize={13} textAlign='center' fontWeight='bold'>{node.packagetype}</Text>
                            <Divider w={1} borderColor='#e6e6e6' />
                        </Fragment>
                    ))}
                </RebassCard>
            </Box>
        )
    }
}