import React, { Component, Fragment } from 'react';
import Link_ from './Link';
import { Column } from 'rebass';

export default class Certifications extends Component {

    render() {

        const certification = (b) => {
            return (
                Object.keys(b).map(y => {
                    switch (y) {
                        case "bmc":
                            if (b[y] === true) {
                                return (
                                    <Column><Link_ to='#'>Basic Mountaineering</Link_></Column>
                                )
                            }
                            break;
                        case "amc":
                            if (b[y] === true) {
                                return (
                                    <Column><Link_ to='#'>Advanced Mountaineering</Link_></Column>
                                )
                            }
                            break;
                        case "moi":
                            if (b[y] === true) {
                                return (
                                    <Column><Link_ to='#'>Methods of Instructions</Link_></Column>)
                            }
                            break;
                        case "sar":
                            if (b[y] === true) {
                                return (
                                    <Column><Link_ to='#'>Search and Rescue</Link_></Column>
                                )
                            }
                            break;
                    }
                }
                )
            )
        }

        return (
            <Fragment>{certification(this.props.info)}</Fragment>
        )
    }
}

