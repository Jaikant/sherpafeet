import React, { Component, Fragment } from 'react';
import Ratings from '../components/Rating';
import { Pagination } from 'antd';
import Scrollchor from 'react-scrollchor';
import presets from "../../utils/presets";
import styled from 'react-emotion';
import { Flex, Box, Image, Border, Text, Divider, Blockquote } from 'rebass';
import Attractions from './Attractions';

let ResponsiveDiv = styled.div`
  ${presets.Phone} {
    display: ${props => props.phone ? 'block' : 'none'};
  }
  ${presets.Tablet} {
    display: ${props => props.desktop ? 'block' : 'none'};
  }
  ${presets.Desktop} {
    display : ${props => props.desktop ? 'block' : 'none'};
  }
`
export default class ShowReviews extends Component {

    state = { current: 1 }
    handlePageChange = this.handlePageChange.bind(this);

    handlePageChange(pageNumber) {
        this.setState({ current: pageNumber });
    }

    render() {

        let usersArray = this.props.data.allMongodbTestUsrs.edges.map(x => x.node);

        let startindex = (this.state.current - 1) * 5;
        let endindex = startindex + 5;


        return (
            <Fragment>
                {this.props.data.allMongodbTestRatings.edges.slice(startindex, endindex).map(({ node }) => {
                    return (
                        <Fragment key={node.id}>
                            <Flex flexDirection={["column", "column", "row"]}>
                                <Box width={[1, 1, 1 / 10]}>
                                    <Flex flexDirection='column' alignItems='center' >
                                        <Box width={[1 / 5, 1 / 8, 2 / 5]} bg='white'>
                                            <Border p={1} borderColor='#d9d9d9'>
                                                <Image mb={0} src={usersArray.find(x => x.mongodb_id === node.raterid).picture} />
                                            </Border>
                                        </Box>
                                        <Text textAlign='center'>{usersArray.find(x => x.mongodb_id === node.raterid).firstname} {usersArray.find(x => x.mongodb_id === node.raterid).lastname}</Text>
                                    </Flex>
                                </Box>

                                <Box width={[1, 1, 9 / 10]} ml={2}>
                                    <Flex flexDirection={["column", "column", "row"]}>
                                        <Box>
                                            <Flex flexDirection="column" alignItems={["center", "center", "flex-start"]}>
                                                <Text fontSize={3} pb={1} textAlign={["center", "center", "justify"]}>{node.destination} Trek, {node.month} {node.year}</Text>
                                                <Ratings initialRating={node.rating} />
                                                <Text fontSize={1}>Reviewed 70 days ago</Text>
                                            </Flex>
                                        </Box>
                                        <Box mx='auto' />
                                        <Box pr={3}>
                                            <Box><Flex justifyContent={["center", "center", "flex-end"]}><Attractions reviewinfo={node} data={this.props.data} /></Flex></Box>
                                        </Box>
                                    </Flex>
                                    <Blockquote fontSize={2} pt={3} textAlign="justify" mr={4}>{node.comment}</Blockquote>
                                </Box>
                            </Flex>
                            <Divider w={1} borderColor='#e6e6e6' />
                        </Fragment>
                    )
                })}

                <Flex justifyContent="center">
                    <ResponsiveDiv desktop>
                        <Scrollchor to='#review' animate={{ offset: -100 }}><Pagination current={this.state.current} onChange={this.handlePageChange} total={this.props.data.allMongodbTestRatings.edges.length} showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} pageSize={5} defaultCurrent={1} /></Scrollchor>
                    </ResponsiveDiv>
                    <ResponsiveDiv phone>
                        <Scrollchor to='#review' animate={{ offset: -100 }}><Pagination simple defaultCurrent={1} current={this.state.current} onChange={this.handlePageChange} total={this.props.data.allMongodbTestRatings.edges.length} pageSize={5} /></Scrollchor>
                    </ResponsiveDiv>
                </Flex>
            </Fragment>
        )
    }
}
