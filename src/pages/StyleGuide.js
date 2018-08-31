import React from 'react'
import { Button, Icon, Row, Col } from 'antd'
import { Box, Flex } from 'rebass'
import { css } from 'react-emotion'
import Grain from '../generated/Grain'
import SFIcon from '../components/Icon'


const Card = () =>
    <Box bg={["pink", "red"]}  m={[1,2,3]} p={[1,2,3]}>
        Card
    </Box>


const sfGutter = { xs: 8, sm: 16, md: 24, lg: 32 }
export default () =>
    <Flex flexDirection="column" p={[4]} css={{ overflow: 'hidden' }}>
       {/* Button */}
        <Box bg="red" alignSelf="center" m={[4]}>
            <Button type="primary" size={"large"}>Primary</Button>
        </Box>

        {/* Button with loading indicator */}

        <Box bg="red" alignSelf="center" m={[4]}>
            <Button type="primary" size={"large"} loading>Primary</Button>
        </Box>

        <Icon type="hourglass" spin={true} style={{ fontSize: 16, color: '#08c'}}/>
        <Row css={{ overflow: 'hidden' }}>
            <Row gutter={sfGutter}>
                <Col span={12}>
                    <Card />
                </Col>
                <Col span={12}>
                    <Card />
                </Col>
            </Row>
            <Row gutter={sfGutter}>
                <Col span={8}>
                    <Card />
                </Col>
                <Col span={8}>
                    <Card />
                </Col>
                <Col span={8}>
                    <Card />
                </Col>
            </Row>
            <Row gutter={sfGutter}>
                <Col span={6}>                    
                    <Card />
                </Col>
                <Col span={6}>                    
                    <Card />
                </Col>
                <Col span={6}>                    
                    <Card />
                </Col>
                <Col span={6}>                    
                    <Card />
                </Col>
            </Row>
            <SFIcon color={"pink"} width={"140px"} render={Grain} />
        </Row>
    </Flex>  
