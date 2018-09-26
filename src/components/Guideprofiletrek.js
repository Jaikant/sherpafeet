import React, { Component } from 'react';
import { Carousel, Card } from 'antd';
import { Flex, Box, Text } from 'rebass';
import Title from '../components/Guideprofiletitles';
import styled from 'react-emotion';

const Text_ = styled(Text)`
    color:#3b5998;
    margin-top:0;
`
const Carousel_ = styled(Carousel)`
    text-align: center;
    line-height: 160px;
    background: rgba(59,89,152,0.6);
    overflow: hidden;
`
export default class Guidetreks extends Component {
    state = { viewportWidth: 1024 }

    componentDidMount() {
        if (typeof (window) !== 'undefined') {
            this.setState({ viewportWidth: window.innerWidth })
        }
    }

    render() {

        let guide = this.props.data.mongodbTestGuides;

        let imagePath = this.props.data.allImageSharp.edges.map(x => x.node.original.src);

        const trek = (guide.treks).map(y => y.trekname);
        const trekimages = trek.map(z => imagePath.find(a => a.includes(z)));
        var keys = trek;
        var values = trekimages;
        var result = {};
        keys.forEach((key, i) => result[key] = values[i]);
        const trekArray = Object.entries(result);

        const { Meta } = Card;

        return (
            <Box bg='white' mt={2} id='trek'>
                <Title title={`${guide.firstname} ${guide.lastname}'s treks`} />
                <Flex justifyContent='center'>
                    <Box px={[2, 3, 4]} pt={3} width={1}>
                        <Carousel_ autoplay slidesToShow={this.state.viewportWidth < 500 ? 1 : 4}>
                            {trekArray.map(c =>
                                <Card key={c[0]} hoverable style={{ width: 200 }} cover={<img style={{ marginBottom: 0 }} alt="example" src={c[1]} />}>
                                    <Meta title={<Text_ children={c[0]} />} />
                                </Card>
                            )}
                        </Carousel_>
                    </Box>
                </Flex>
            </Box>
        )
    }
}