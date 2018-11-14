import React, { Component, Fragment } from 'react';
import { Box } from 'rebass';
import Packages from './Packages';

export default class GuideprofileLeft extends Component {
    render() {

        const packages = () => {
            if (this.props.data.allMongodbTestDepartures === null) {
                return <Box mr={230} />;
            }
            else {
                return <Packages data={this.props.data} />
            }
        }

        return (
            <Fragment>{packages()}</Fragment>
        )
    }
}


