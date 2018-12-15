import React, { Component, Fragment } from 'react';
import { Popover } from 'antd';
import Meadows from '../generated/Meadows';
import Waterbody from '../generated/Waterbody';
import BigTree from '../generated/BigTree';
import Snow from '../generated/Snow';
import Camping from '../generated/Camping';
import Wildlife from '../generated/Wildlife';
import { Box } from 'rebass';

export default class Attractions extends Component {

    render() {

        let usersArray = this.props.usrs.map(x => x.node);

        const attraction = (a) => {
            let b = a.attractions;
            let username = usersArray.find(x => x.mongodb_id === a.raterid).firstname;
            if (b != null) {
                let c = Object.keys(b).map(y => {
                    switch (y) {
                        case "meadows":
                            if (b[y] === true) {
                                return (
                                    <Popover placement="bottomRight" content={`${username} saw beautiful meadows on this trek!`} title="Meadows">
                                        <Box mx={2}><Meadows width={23} /></Box>
                                    </Popover>
                                )
                            }
                            break;
                        case "waterbody":
                            if (b[y] === true) {
                                return (
                                    <Popover placement="bottomRight" content={`${username} saw lakes or rivers on this trek!`} title="Lakes or Rivers">
                                        <Box mx={2}><Waterbody width={23} /></Box>
                                    </Popover>
                                )
                            }
                            break;
                        case "forests":
                            if (b[y] === true) {
                                return (
                                    <Popover placement="bottomRight" content={`${username} had passed through forest while on this trek!`} title="Forests">
                                        <Box mx={2} ><BigTree width={23} /></Box>
                                    </Popover>
                                )
                            }
                            break;
                        case "snow":
                            if (b[y] === true) {
                                return (
                                    <Popover placement="bottomRight" content={`${username} saw snow on this trek!`} title="Snow">
                                        <Box mx={2}><Snow width={23} /></Box>
                                    </Popover>
                                )
                            }
                            break;
                        case "camping":
                            if (b[y] === true) {
                                return (
                                    <Popover placement="bottomRight" content={`${username} was camping on this trek!`} title="Camping">
                                        <Box mx={2}><Camping width={23} /></Box>
                                    </Popover>
                                )
                            }
                            break;
                        case "wildlife":
                            if (b[y] === true) {
                                return (
                                    <Popover placement="bottomRight" content={`${username} spotted animals or birds on this trek!`} title="Animals or Birds">
                                        <Box mx={2}><Wildlife width={23} /></Box>
                                    </Popover>
                                )
                            }
                            break;
                    }
                }
                )
                return c;
            }
        }

        return (
            <Fragment>{attraction(this.props.reviewinfo)}</Fragment>
        )
    }
}
