import React, { Component, Fragment } from 'react';
import Ratings from '../components/Rating';
import { Pagination, Popover } from 'antd';
import Scrollchor from 'react-scrollchor';
import Meadows from '../generated/Meadows';
import Waterbody from '../generated/Waterbody';
import BigTree from '../generated/BigTree';
import Snow from '../generated/Snow';
import Camping from '../generated/Camping';
import Wildlife from '../generated/Wildlife';
import Title from '../components/Guideprofiletitles';
import presets from "../../utils/presets";
import styled from 'react-emotion';
import { Flex, Box, Image, Border, Text, Divider, Blockquote } from 'rebass';

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
export default class Review extends Component {

    state = { current: 1 }
    handlePageChange = this.handlePageChange.bind(this);

    handlePageChange(pageNumber) {
        this.setState({ current: pageNumber });
    }

    render() {

        let guide = (this.props.data.allMongodbTestGuides.edges.map(x=>x.node))[0];

        let usersArray = this.props.data.allMongodbTestUsrs.edges.map(x => x.node);

        const reviews = (raters) => {
            if (raters) {
                return raters
            } else {
                return <span>No</span>
            }
        }

        let startindex = (this.state.current - 1) * 5;
        let endindex = startindex + 5;

        const attraction = (a) => {
            let b = a.attractions;
            let username = usersArray.find(x => x.mongodb_id === a.raterid).firstname;
            if (b != null) {
                let c = Object.keys(b).map(y => {
                    switch (y) {
                        case "meadows":
                            if (b[y] === true) {
                                return (
                                    <Popover placement="bottomRight" content={`${username} saw beautiful meadows on this trek!`} title="Meadows">
                                        <Box mx={2}><Meadows width={23} /></Box>
                                    </Popover>
                                )
                            }
                            break;
                        case "waterbody":
                            if (b[y] === true) {
                                return (
                                    <Popover placement="bottomRight" content={`${username} saw lakes or rivers on this trek!`} title="Lakes or Rivers">
                                        <Box mx={2}><Waterbody width={23} /></Box>
                                    </Popover>
                                )
                            }
                            break;
                        case "forests":
                            if (b[y] === true) {
                                return (
                                    <Popover placement="bottomRight" content={`${username} had passed through forest while on this trek!`} title="Forests">
                                        <Box mx={2} ><BigTree width={23} /></Box>
                                    </Popover>
                                )
                            }
                            break;
                        case "snow":
                            if (b[y] === true) {
                                return (
                                    <Popover placement="bottomRight" content={`${username} saw snow on this trek!`} title="Snow">
                                        <Box mx={2}><Snow width={23} /></Box>
                                    </Popover>
                                )
                            }
                            break;
                        case "camping":
                            if (b[y] === true) {
                                return (
                                    <Popover placement="bottomRight" content={`${username} was camping on this trek!`} title="Camping">
                                        <Box mx={2}><Camping width={23} /></Box>
                                    </Popover>
                                )
                            }
                            break;
                        case "wildlife":
                            if (b[y] === true) {
                                return (
                                    <Popover placement="bottomRight" content={`${username} spotted animals or birds on this trek!`} title="Animals or Birds">
                                        <Box mx={2}><Wildlife width={23} /></Box>
                                    </Popover>
                                )
                            }
                            break;
                    }
                }
                )
                return c;
            }
        }

        return (
            <Box bg='white' mt={2} id='review'>
                <Title title={`Trekkers speak on ${guide.firstname}`} />

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
                                            <Box><Flex justifyContent={["center", "center", "flex-end"]}>{attraction(node)}</Flex></Box>
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
            </Box>
        )
    }
}


