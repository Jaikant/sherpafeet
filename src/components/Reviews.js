import React, { Component, Fragment } from 'react';
import Ratings from '../components/Rating';
import { Pagination } from 'antd';
import Scrollchor from 'react-scrollchor';
import presets from "../../utils/presets";
import styled from 'react-emotion';
import { Flex, Box, Image, Border, Text, Divider, Blockquote } from 'rebass';
import Attractions from './Attractions';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

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
class ShowReviews extends Component {

    state = { current: 1 }
    handlePageChange = this.handlePageChange.bind(this);

    handlePageChange(pageNumber) {
        this.setState({ current: pageNumber });
    }

    render() {

        let usersArray = this.props.usrs.map(x => x.node);

        let allRatings = this.props.edges.slice();
        if (!this.props.data.loading && this.props.data.listSherpafeetRatings) {
            const { items } = this.props.data.listSherpafeetRatings;
            allRatings = allRatings.concat(items)
            console.log("the allRatings are: ", allRatings)

        }

        let startindex = (this.state.current - 1) * 5;
        let endindex = startindex + 5;

        console.log("the usersArray are: ", usersArray)

        console.log("the edges are: ", this.props.edges)
        console.log("the props are: ", this.props)

        return (
            <Fragment>
                {allRatings.slice(startindex, endindex).map((item) => {
                    let info;
                    if (typeof item.node != 'undefined') {
                        info = item.node;
                    } else {
                        info = item;
                    }
                    const { id, guideuid, raterid, attractions, comments, comment, date,
                        destination, month, rating, year } = info;
                    console.log("info is ", info);
                    return (
                        <Fragment key={id}>
                            <Flex flexDirection={["column", "column", "row"]}>
                                <Box width={[1, 1, 1 / 10]}>
                                    <Flex flexDirection='column' alignItems='center' >
                                        <Box width={[1 / 5, 1 / 8, 2 / 5]} bg='white'>
                                            <Border p={1} borderColor='#d9d9d9'>
                                                {/* <Image mb={0} src={usersArray.find(x => x.mongodb_id === raterid).picture} /> */}
                                            </Border>
                                        </Box>
                                        {/* <Text textAlign='center'>{usersArray.find(x => x.mongodb_id === raterid).firstname} {usersArray.find(x => x.mongodb_id === raterid).lastname}</Text> */}
                                    </Flex>
                                </Box>

                                <Box width={[1, 1, 9 / 10]} ml={2}>
                                    <Flex flexDirection={["column", "column", "row"]}>
                                        <Box>
                                            <Flex flexDirection="column" alignItems={["center", "center", "flex-start"]}>
                                                <Text fontSize={3} pb={1} textAlign={["center", "center", "justify"]}>{destination} Trek, {month} {year}</Text>
                                                <Ratings initialRating={rating} />
                                                <Text fontSize={1}>Reviewed 70 days ago</Text>
                                            </Flex>
                                        </Box>
                                        <Box mx='auto' />
                                        <Box pr={3}>
                                            <Box>
                                                <Flex justifyContent={["center", "center", "flex-end"]}>
                                            {/* <Attractions reviewinfo={node} edges={this.props.edges} usrs={this.props.usrs}/> */}
                                            </Flex>
                                            </Box>
                                        </Box>
                                    </Flex>
                                    <Blockquote fontSize={2} pt={3} textAlign="justify" mr={4}>{comment} {comments}</Blockquote>
                                </Box>
                            </Flex>
                            <Divider w={1} borderColor='#e6e6e6' />
                        </Fragment>
                    )
                })}

                <Flex justifyContent="center">
                    <ResponsiveDiv desktop>
                        <Scrollchor to='#review' animate={{ offset: -100 }}><Pagination current={this.state.current} onChange={this.handlePageChange} 
                        total={allRatings.length} showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} pageSize={5} defaultCurrent={1} /></Scrollchor>
                    </ResponsiveDiv>
                    <ResponsiveDiv phone>
                        <Scrollchor to='#review' animate={{ offset: -100 }}><Pagination simple defaultCurrent={1} current={this.state.current} onChange={this.handlePageChange} 
                        total={allRatings.length} pageSize={5} /></Scrollchor>
                    </ResponsiveDiv>
                </Flex>
            </Fragment>
        )
    }
}

export default graphql(gql`query ListSherpafeetRatings(
    $filter: TableSherpafeetRatingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSherpafeetRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        usr
        commentid
        guideuid
        rating
        averagerating
        totalraters
        destination
        comment
        date
        month
        year
        attractions {
          meadows
          snow
          wildlife
          villagestay
          localfestival
          forests
          camping
          waterbody
          rivercrossings
        }
      }
      nextToken
    }
  }
  `,{ 
   options: { fetchPolicy: 'cache-and-network', errorPolicy: 'ignore', },
  })(ShowReviews);
  
