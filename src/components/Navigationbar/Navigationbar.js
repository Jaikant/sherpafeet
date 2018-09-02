import React, { Component } from 'react'
import styled, { css } from 'react-emotion'
import { Link } from 'gatsby'
import { NavLink, Image } from 'rebass'
import FaAlignJustify from 'react-icons/lib/fa/align-justify'
import { Menu, Icon } from 'antd';
import { slide as BurgerMenu } from 'react-burger-menu'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const topnav = css`
    box-shadow:0px 1px 8px -2px #000000;
    display:flex;    
    position: fixed;
    background: white;
    width: 100%;
    top: 0;                                  
`
const DesktopNav = styled.nav`
    display:flex;                                                        
    flex:5;                                                                
    align-items:center;                                                                                                   
    list-style:none;
    font-size:18px;  
    font-weight: bold;
    text-transform: uppercase;
    font-family:Helvetica Neue,Helvetica,Arial,sans-serif;  
    @media all and (max-width: 768px) {
        flex-wrap: wrap;
        display:none;
    }     
`
const space = css`
    flex:3
`
const MobileNav = styled.div`
    display:none;
    @media all and (max-width: 768px) {
        display:block;
    }
`
const noTypographyMargin = css`
    li {
        margin: 0px;
    }
`

class AntdMenu extends React.Component {
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click ', e);
    }

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[this.state.current]}
                defaultOpenKeys={['treks']}
                mode={this.props.mode}
                className={noTypographyMargin}
            >
                <Menu.Item key="mail">
                    <Link to="/guides">
                        <Icon type="heart" /> 
                        Find & Review Guides
                    </Link>
                </Menu.Item>

                <SubMenu title={<span>Treks</span>}>
                    <MenuItemGroup title="India">
                        <Menu.Item key="setting:1"> Indian Himalayas </Menu.Item>
                        <Menu.Item key="setting:2">Uttarakhand Treks</Menu.Item>
                        <Menu.Item key="setting:3">Himachal Treks</Menu.Item>
                        <Menu.Item key="setting:4">Ladakh Treks</Menu.Item>
                        <Menu.Item key="setting:5">Lahaul Spiti Treks</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup title="Nepal">
                        <Menu.Item key="setting:6" disabled>Coming Soon</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>

                <SubMenu title={<span>About</span>}>
                    <Menu.Item key="app">
                        <NavLink>
                            <Icon type="appstore" />About Us
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="app2">
                        <NavLink>
                            <Icon type="rocket" />Mission
                        </NavLink>
                    </Menu.Item>
                    <Menu.Item key="app3">
                        <NavLink>
                            <Icon type="form" />Contact
                        </NavLink>
                    </Menu.Item>
                </SubMenu>

                <Menu.Item key="app4">
                    <Icon type="login" />Login
                </Menu.Item>
            </Menu>
        )
    }
}

var styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '50px',
      right: '24px',
      top: '16px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmCrossButton: {
      height: '36px',
      width: '36px',
    },
    bmCross: {
      background: '#bdc3c7'
    },
    bmMenu: {
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em',
      background: 'white'
    },
    bmOverlay: {
        top: 0,
        left: 0,
      }
  }
  
  
class Nav extends Component {
    constructor(props) {
        super(props);
        this.toggleSlideMenu = this.toggleSlideMenu.bind(this);
        this.closeSlideMenu = this.closeSlideMenu.bind(this);
        this.state = { isMenuOpen: false };
    }

    toggleSlideMenu() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen });
    }

    closeSlideMenu() {
        this.setState({ isMenuOpen: false });
    }


    render() {
        console.log("the menu is open:", this.state.isMenuOpen)
        return (
            <div className={topnav}>

                <NavLink href="/"> <Image m={1} width={200} src="https://sherpafeet.com/assets/767ae8db.png" alt="sherpafeet brand logo" /></NavLink>

                <div className={space}></div>

                <MobileNav>
                    <BurgerMenu 
                        customBurgerIcon={ <FaAlignJustify /> } 
                        styles={styles} 
                        width={ '80%' } 
                        isOpen={this.state.isMenuOpen} 
                        right
                    >
                        <AntdMenu mode="inline"/>
                    </BurgerMenu>
                </MobileNav>

                <DesktopNav>
                    <AntdMenu mode="horizontal"/>
                </DesktopNav>
            </div>
        )
    }
}

export default Nav;


