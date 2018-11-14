import React, { Component, Fragment } from 'react';
import Title from './Guideprofiletitles';
import { Box, Row, Flex } from 'rebass';
import Certifications from './Certifications';

export default class CertificationCheck extends Component {

    render() {

        let guide = this.props.data.mongodbTestGuides;

        const guideCertification = (b) => {
            let y;
            if (b != null && b[y] != null) {
                return (
                    <Box bg='white' mt={2} id='link'>
                        <Title title={`${guide.firstname}'s Certifications`} />
                        <Row pt={2} pl={4}>
                            <Flex flex={1} flexDirection={["column", "row", "row"]}>
                                <Certifications info={guide.info} />
                            </Flex>
                        </Row>
                    </Box>
                )
            }
        }

        return (
            <Fragment>{guideCertification(guide.info)}</Fragment>
        )
    }
}

