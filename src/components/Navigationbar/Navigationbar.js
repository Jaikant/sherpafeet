import React, { Component } from 'react'
import { css } from 'react-emotion'
import { Link } from 'gatsby'
import { NavLink, Image } from 'rebass'
import FaAlignJustify from 'react-icons/lib/fa/align-justify'
import { Menu, Icon } from 'antd';

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
const logo = css`
    width:200px;
    top: 15%;
    left: 5%;
`
const DesktopNav = css`
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
const burgerbutton = css`
    position: absolute;
    display:none;
    color:#3b5998;
    right: 5%;
    font-size:32px;
    @media all and (max-width: 768px) {
        display:block;
    }
`
const logoSideNav = css`
    position:absolute;
    top:10px;
    left:22px;                                              
`
const sideNav = css`
    height:100%;
    width:0px;
    box-sizing:border-box;
    position:fixed;
    top:0;
    right:0;
    z-index:1;
    background:#3b5998;
    overflow-x:hidden;
    padding-top:60px;
    transition:0.5s;
    font-family:Helvetica Neue,Helvetica,Arial,sans-serif;  
`
const sideNavLink = css`
    padding:10px 10px 10px 30px;
    text-decoration:none;
    font-size:17px;
    color:white;
    display:block;
    transition:0.3s;
`
const btnClose = css`
    position:absolute;
    top:0;
    right:22px;
    color:white;
    font-size:36px;
    margin-left:50px;
    text-decoration:none;
`

const noTypographyMargin = css`
    li {
        margin: 0px;
    }
`

class NavigationBar extends React.Component {
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
                mode="horizontal"
                className={noTypographyMargin}
            >
                <Menu.Item key="mail">
                    <Icon type="heart" /> Find & Review Guides
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


class Nav extends Component {
    constructor(props) {
        super(props);
        this.openSlideMenu = this.openSlideMenu.bind(this);
        this.closeSlideMenu = this.closeSlideMenu.bind(this);
        this.state = { isSlideOpen: `closed`, width: `0px` };
    }

    openSlideMenu() {
        this.setState({ isSlideOpen: `open`, width: `300px` });
    }

    closeSlideMenu() {
        this.setState({ isSlideOpen: `closed`, width: `0px` });
    }


    render() {
        const menuState = css`
            width: ${this.state.width};
        `
        return (
            <div className={topnav}>

                <NavLink href="/"> <Image m={1} width={200} src="https://sherpafeet.com/assets/767ae8db.png" alt="sherpafeet brand logo" /></NavLink>

                <div className={space}></div>


                <div className={burgerbutton}>
                    <a onClick={this.openSlideMenu}><FaAlignJustify /></a>
                    <div className={`${sideNav} ${menuState}`}>
                        <Link to="#" className={btnClose} onClick={this.closeSlideMenu}>&times;</Link>
                        <div className={`${logo} ${logoSideNav}`}><img src="https://sherpafeet.com/assets/767ae8db.png" alt="sherpafeet brand logo" /></div>
                        <NavLink>Find & Review Guides</NavLink>
                        <a className={sideNavLink} href="#">Indian Himalayas</a>
                        <a className={sideNavLink} href="#">Uttarakhand Treks</a>
                        <a className={sideNavLink} href="#">Himachal Treks</a>
                        <a className={sideNavLink} href="#">Ladakh Treks</a>
                        <a className={sideNavLink} href="#">Lahaul Spiti Treks</a>
                        <a className={sideNavLink} href="#">About Us</a>
                        <a className={sideNavLink} href="#">Mission</a>
                        <a className={sideNavLink} href="#">Contact</a>
                    </div>
                </div>

                <nav className={DesktopNav}>
                    <NavigationBar />
                </nav>
            </div>
        )
    }
}

export default Nav;


