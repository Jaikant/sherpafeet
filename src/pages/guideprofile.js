import React from 'react';
import Layout from '../components/Layout';
import styled, { css } from 'react-emotion';
import Sharebuttons from '../components/Sharebuttons';
import { graphql } from 'gatsby';
import Ratings from '../components/Rating';
import FaHeart from 'react-icons/lib/fa/heart';
import IoIosEmail from 'react-icons/lib/io/ios-email';
import Icon from '../components/Icons';
import Popover from '../components/Popover';
import { Card, BackgroundImage, Subhead, Flex, Box, Small, Image, Border, Relative, Absolute, Text, Button, Row, Column, Link, Divider, Blockquote } from 'rebass';

const Button_ = styled(Button)`
    background-color:#3b5998;
    color: rgba(255, 255, 255, 0.6);
    width:50%;
    //font-size:18px;
    font-family:Helvetica Neue,Helvetica,Arial,sans-serif;
    //font-weight:normal;
    &:hover {
        color:white;
      }
      height:45px;
      border-radius:8px;
    //margin-left:255px;
     //margin-bottom:20px;
    
    `
const Link_ = styled(Link)`
      text-decoration:none;
      color:rgba(59,89,152,.6);
      &:hover {
        color: #23527c;
      }
      //font-weight:bold;
      font-size:18px;
`

export default ({ data }) => {
    const reviews = (raters) => {
        if (raters) {
            return raters
        } else {
            return <span>No</span>
        }
    }
    return (
        <div>
            <Layout>
                <Flex flexWrap='wrap'>
                    <Box width={1 / 4}>
                        <Card>
                            <BackgroundImage src='https://s3-ap-southeast-1.amazonaws.com/carabiner/cover/default-800.jpg' />
                            <Box p={2}>
                                <Subhead>Card</Subhead>
                                <Small>Small meta text</Small>
                            </Box>
                        </Card>
                    </Box>

                    <Box width={3 / 4} bg='#f2f2f2'>
                        <Border px={2} borderColor='#d9d9d9'>
                            <Sharebuttons />
                            <Relative >
                                <Image width={1} src='https://s3-ap-southeast-1.amazonaws.com/carabiner/cover/default-800.jpg' />
                                <Absolute>
                                    <Flex>
                                        <Box width={1 / 7} ml={40} mt={-90} bg='white'>
                                            <Border p={1} borderColor='#d9d9d9'>
                                                <Image mb={0} src={data.imageSharp.original.src} />
                                            </Border>
                                        </Box>
                                        <Box ml={2}>
                                            <Text fontSize={4} fontWeight='bold'>{data.mongodbTestGuides.firstname} {data.mongodbTestGuides.lastname}</Text>
                                            <Text fontSize={2}>{data.mongodbTestGuides.businessname}</Text>
                                            <Text fontSize={1}>{data.mongodbTestGuides.address.city}, {data.mongodbTestGuides.address.country}</Text>
                                            <Ratings initialRating={data.mongodbTestGuides.rating} />
                                            <Text fontSize={1}>{reviews(data.mongodbTestGuides.raters)} Reviews</Text>
                                        </Box>
                                        <Box mx='auto' />
                                        <Box width={1 / 2}>
                                            <Button_ ml={99} mb={3}><FaHeart /> Write a Review</Button_>
                                            <Button_ ml={99} mb={3}><IoIosEmail /> Contact</Button_>
                                        </Box>
                                    </Flex>
                                </Absolute>
                            </Relative>

                            <Box bg='#ffffff' mt={160} pl={4}>
                                <Row pt={4} pl={225}>
                                    <Column><Link_ href='#!'>Reviews</Link_></Column>
                                    <Column><Link_ href='#!'>Treks</Link_></Column>
                                    <Column><Link_ href='#!'>About</Link_></Column>
                                </Row>
                            </Box>

                            <Box bg='white' mt={2}>
                                <Text fontSize={4} pl={4} pt={3}>Trekkers speak on {data.mongodbTestGuides.firstname}</Text>
                                <Divider w={1} borderColor='#f2f2f2' />
                                {data.allMongodbTestRatings.edges.map(({ node }, index) => (
                                    <React.Fragment>
                                        <Flex key={index}>
                                            <Box width={1 / 10} pl={4}>
                                                <Box width={2 / 3} mx={3} my={1} bg='white'>
                                                    <Border p={1} borderColor='#d9d9d9'>
                                                        <Image mb={0} src={data.imageSharp.original.src} />
                                                    </Border>
                                                </Box>
                                                <Text textAlign='center'>Bimal Pal</Text>
                                            </Box>
                                            <Box width={9 / 10} ml={2}>
                                                <Flex>
                                                    <Box>
                                                        <Text fontSize={3} pb={1}>{node.destination} Trek, {node.month} {node.year}</Text>
                                                        <Ratings initialRating={node.rating} />
                                                        <Text fontSize={1}>Reviewed 70 days ago</Text>
                                                    </Box>
                                                    <Box mx='auto' />
                                                    <Box pr={3} fontSize={2}>
                                                        <Popover title="Snow" content="usrname saw snow on this trek!">
                                                            <Icon icon="snow" />
                                                        </Popover>
                                                        <Popover title="Animals or Birds" content="usrname spotted animals or birds on this trek!">
                                                            <Icon icon="animal" />
                                                        </Popover>
                                                        <Popover title="Meadows" content="usrname saw beautiful meadows on this trek!">
                                                            <Icon icon="meadows" />
                                                        </Popover>
                                                        <Popover title="Camping" content="usrname was camping on this trek!">
                                                            <Icon icon="camping" />
                                                        </Popover>
                                                        <Popover title="Lakes or Rivers" content="usrname saw lakes or rivers on this trek!">
                                                            <Icon icon="river" />
                                                        </Popover>
                                                        <Popover title="Forests" content="usrname had passed through forest while on this trek!">
                                                            <Icon icon="forest" />
                                                        </Popover>
                                                    </Box>
                                                </Flex>
                                                <Blockquote fontSize={2} pt={3}>{node.comment}</Blockquote>
                                            </Box>
                                        </Flex>
                                        <Divider w={1} borderColor='#f2f2f2' />
                                    </React.Fragment>
                                ))}
                            </Box>
                            <Box bg='white' mt={2}>
                                <Text fontSize={4} pl={4} pt={3}>About {data.mongodbTestGuides.firstname} {data.mongodbTestGuides.lastname}</Text>
                                <Divider w={1} borderColor='#f2f2f2' />
                                <Box px={4} pt={3}>
                                    <div dangerouslySetInnerHTML={{ __html: data.mongodbTestGuides.about }} />
                                </Box>
                            </Box>
                            <Box bg='white' mt={2}>
                                <Text fontSize={4} pl={4} pt={3}>{data.mongodbTestGuides.firstname}'s Certifications</Text>
                                <Divider w={1} borderColor='#f2f2f2' />
                                <Row pt={2} pl={4}>
                                    <Column><Link_ href='#!'>Basic Mountaineering</Link_></Column>
                                    <Column><Link_ href='#!'>Advanced Mountaineering</Link_></Column>
                                    <Column><Link_ href='#!'>Methods of Instructions</Link_></Column>
                                </Row>
                            </Box>
                        </Border>
                    </Box>
                </Flex>
            </Layout>
        </div>
    )
}


export const query = graphql`
  query IndexQuery {
            mongodbTestGuides(uid: {eq: "RajeshThakur"}) {
                    businessname
                    firstname
                    lastname
                    age
                    address {
                                city
                                country
                            }
                    startwork
                    rating
                    raters
                    about
                    info {
                        bmc
                        amc
                        moi
                        english
                        sar
                      }
                    }
            imageSharp(original: {src: {regex: "/RajeshThakur/"}}){
                    id
                    original {
                        width
                        height
                        src
                    }
                    }
            allMongodbTestRatings {
                    edges{
                        node{
                        comment
                        rating
                        raterid
                        date
                        month
                        year
                        destination
                        attractions {
                            meadows
                            waterbody
                            forests
                            snow
                            camping
                            wildlife
                        }  
                        }
                    }
                    }
                    
}
`
