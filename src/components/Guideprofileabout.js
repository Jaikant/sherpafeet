import React, { Component } from 'react';
import Title from './Guideprofiletitles';
import { Box } from 'rebass';

export default class Aboutguide extends Component {

    render() {

        let guide = (this.props.data.allMongodbTestGuides.edges.map(x=>x.node))[0];

        return (
            <Box bg='white' mt={2} id='about'>
                <Title title={`About ${guide.firstname} ${guide.lastname}`} />
                <Box px={4} pt={3}>
                    <div dangerouslySetInnerHTML={{ __html: guide.about }} />
                </Box>
            </Box>
        )
    }
}