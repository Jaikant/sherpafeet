import React from 'react'
import { Menu, Button, Icon, Row, Col } from 'antd'
import { Box, Flex } from 'rebass'
import styled, { css } from 'react-emotion'
import Grain from '../generated/Grain'
import SFIcon from '../components/Icon'
import { space, width, fontSize, color } from 'styled-system'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const SFBox = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`

const Card = () =>
    <Box bg={["pink", "red"]}  m={[1,2,3]} p={[1,2,3]}>
        Card
    </Box>


const sfGutter = { xs: 8, sm: 16, md: 24, lg: 32 }


class NavigationBar extends React.Component {
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="mail">
              <Icon type="mail" />Navigation One
            </Menu.Item>
            <Menu.Item key="app" disabled>
              <Icon type="appstore" />Navigation Two
            </Menu.Item>
            <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
              <MenuItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </MenuItemGroup>
              <MenuItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </MenuItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
            </Menu.Item>
          </Menu>
        )
    }
}


class StyleGuide extends React.Component {
    state = {
        current: 'mail',
      }
    
    handleClick = (e) => {
    console.log('click ', e);
    this.setState({
        current: e.key,
    });
    }

    render() {
        return (
            <Flex flexDirection="column" p={[4]} css={{ overflow: 'hidden' }}>

               <NavigationBar />
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
                    <SFBox color='tomato'>
                        This is an emotion component, using styled system.
                    </SFBox>
                </Row>
            </Flex>          
        )
    }
}

export default StyleGuide;