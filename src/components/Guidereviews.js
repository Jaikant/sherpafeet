import React, { Component, Fragment } from 'react';
import Title from '../components/Guideprofiletitles';
import { Box, Text } from 'rebass';
import ShowReviews from './Reviews';

export default class Review extends Component {

    render() {

        let guide = this.props.data.mongodbTestGuides;

        const review = () => {
            if (this.props.data.allMongodbTestRatings === null) {
                return <Text pl={[3, 3, 4]} pb={3}>No customer ratings yet, be the first one to rate {guide.firstname}!</Text>
            }
            else {
                const { edges } = this.props.data.allMongodbTestRatings;
                const  usrs  = this.props.data.allMongodbTestUsrs.edges;
                return <ShowReviews 
                            edges={edges} 
                            usrs={usrs}/>
            }
        }

        return (
            <Box bg='white' mt={2} id='review'>
                <Title title={`Trekkers speak on ${guide.firstname}`} />
                <Box>{review()}</Box>
            </Box>
        )
    }
}
