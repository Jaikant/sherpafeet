import React, { Fragment } from 'react';
import Scrollchor from 'react-scrollchor';
import { Button } from 'antd';
import Arrow from '../generated/Arrow';
import Icons from '../components/Icon';

import { Flex, Box, Text, Divider } from 'rebass';

function Title(props) {
    return (
        <Fragment>
            <Flex>
                <Box width={19 / 20}><Text fontSize={4} pl={[3, 3, 4]} pt={3}>{props.title}</Text></Box>
                <Scrollchor to='#toplink'><Box width={1 / 20} mt={[4, 3, 3]}><Button shape="circle"><Icons color={"#3b5998"} width={"15px"} render={Arrow} /></Button></Box></Scrollchor>
            </Flex>
            <Divider w={1} borderColor='#f2f2f2' />
        </Fragment>
    )
}
export default Title;