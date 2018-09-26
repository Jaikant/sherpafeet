import React, { Component, Fragment } from 'react';
import Sharebuttons from '../components/Sharebuttons';
import Ratings from '../components/Rating';
import { Button } from 'antd';
import Icons from '../components/Icon';
import Heartfilled from '../generated/Heartfilled';
import Mail from '../generated/Mail';
import { Flex, Box, Image, Border, Relative, Absolute, Text } from 'rebass';

export default class Guideinfo extends Component {
    render() {

        let guide = this.props.data.mongodbTestGuides;

        let imagePath = this.props.data.allImageSharp.edges.map(x => x.node.original.src);

        const reviews = (raters) => {
            if (raters) {
                return raters
            } else {
                return <span>No</span>
            }
        }

        return (
            <Fragment>
                <Sharebuttons />
                <Relative >
                    <Image width={1} src='https://s3-ap-southeast-1.amazonaws.com/carabiner/cover/default-800.jpg' />
                    <Absolute>
                        <Flex flexWrap='wrap'>
                            <Box width={[1 / 3, 1 / 5, 1 / 7]} ml={[12, 15, 40]} mt={[-55, -60, -90]} bg='#f2f2f2'>
                                <Border p={1} borderColor='#d9d9d9'>
                                    <Image mb={0} src={imagePath.find(x => x.includes(guide.uid))} />
                                </Border>
                            </Box>
                            <Box ml={2} bg='#f2f2f2'>
                                <Text fontSize={4} fontWeight='bold'>{guide.firstname} {guide.lastname}</Text>
                                <Text fontSize={2}>{guide.businessname}</Text>
                                <Text fontSize={1}>{guide.address.city}, {guide.address.country}</Text>
                                <Ratings initialRating={guide.rating} />
                                <Text fontSize={1}>{reviews(guide.raters)} Reviews</Text>
                            </Box>
                            <Box mx='auto' />
                            <Box width={[1, 1, 1 / 5]}>
                                <Button type="primary" style={{ marginBottom: 10, marginTop: 10 }} block><Icons color={"white"} width={"13px"} render={Heartfilled} />   Write a Review</Button>
                                <Button type="primary" block><Icons color={"white"} width={"13px"} render={Mail} />   Contact</Button>
                            </Box>
                        </Flex>
                    </Absolute>
                </Relative>
            </Fragment>
        )
    }
}