import React, { Component } from 'react';
import Title from './Guideprofiletitles';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import { Box, Row, Column, Flex } from 'rebass';

const Link_ = styled(Link)`
      text-decoration:none;
      color:rgba(59,89,152,.6);
      &:hover {
        color: #23527c;
      }
      font-size:18px;
`
export default class Certifications extends Component {

    render() {

        let guide = (this.props.data.allMongodbTestGuides.edges.map(x=>x.node))[0];

        return (
            <Box bg='white' mt={2} id='link'>
                <Title title={`${guide.firstname}'s Certifications`} />
                <Row pt={2} pl={4}>
                    <Flex flex={1} flexDirection={["column", "row", "row"]}>
                        <Column><Link_ to='#'>Basic Mountaineering</Link_></Column>
                        <Column><Link_ to='#'>Advanced Mountaineering</Link_></Column>
                        <Column><Link_ to='#'>Methods of Instructions</Link_></Column>
                    </Flex>
                </Row>
            </Box>
        )
    }
}