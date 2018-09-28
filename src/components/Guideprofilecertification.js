import React, { Component, Fragment } from 'react';
import CertificationCheck from './Certificationcheck';

export default class GuideCertifications extends Component {

    render() {

        let guide = this.props.data.mongodbTestGuides;

        return (
            <Fragment><CertificationCheck data={this.props.data} /></Fragment>
        )
    }
}

