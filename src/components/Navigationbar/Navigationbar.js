import React, { Component } from 'react';
import { css } from 'react-emotion';
import {Link} from 'gatsby';
import FaAlignJustify from 'react-icons/lib/fa/align-justify';

const topnav = css`
    box-shadow:0px 1px 8px -2px #000000;
    display:flex;                                      
`
const logo = css`
    width:200px;
    top: 15%;
    left: 5%;
    position: absolute;
`
const nav = css`
    display:flex;                                                        
    flex:5;                                                                
    align-items:center;                                                                                                   
    list-style:none;
    font-size:18px;  
    font-weight: bold;
    text-transform: uppercase;
    font-family:Helvetica Neue,Helvetica,Arial,sans-serif;  
    @media all and (max-width: 850px) {
        flex-wrap: wrap;
    }
    @media all and (max-width: 750px) {
        flex-wrap: wrap;
        display:none;
    }     
`
const navli = css`
    white-space:nowrap;  
    text-align:center;
    flex:1;                                                            
    color: rgba(59,89,152,.6);
    text-decoration:none;
    letter-spacing:3px;
    -webkit-transition-duration: 0.4s;
    transition-duration: 0.4s; 
    &:hover {
        color: #23527c;
      }
`
const dropdownitemstyle = css`
      display:block;
      position:absolute;
      background-color:white;
      left:-40px;
      min-width:268px;
      z-index:1;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      & a {
        display: block;
        text-transform: uppercase;
        text-decoration:none;
        letter-spacing: .1em;
        margin: 16px;
        color:rgba(59,89,152,.6);
      }
      & a:hover {
        color: #23527c;
      } 
`
const dropdownMenustyle = css`
      position:relative;
      display:inline-block;
      margin:auto;
      & span{
          font-weight:bold;   
      }
      & div{
          display:none;    
      }
      & :hover{
          & div{
              ${dropdownitemstyle}
          }
      }
`
const space = css`
    flex:3
`
const navDiv = css`
    text-align:center;
    flex:1;
    @media all and (max-width: 750px) {
        flex-basis: 100%;
}
`
const burgerbutton = css`
    position: absolute;
    display:none;
    color:#3b5998;
    right: 5%;
    font-size:32px;
    @media all and (max-width: 750px) {
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

class Nav extends Component {
    constructor(props) {
        super(props);
        this.openSlideMenu = this.openSlideMenu.bind(this);
        this.closeSlideMenu = this.closeSlideMenu.bind(this);
        this.state = { isSlideOpen: `closed`, width: `0px` };
    }

    openSlideMenu() {
        this.setState({ isSlideOpen: `open`, width: `300px` });
        console.log("clicked");
    }

    closeSlideMenu() {
        this.setState({ isSlideOpen: `closed`, width: `0px` });
    }


    render() {
        //const isSlideOpen = this.state.isSlideOpen;

        const menuState = css`
            width: ${this.state.width};
        `
        return (
            <div className={topnav}>
                <div className={logo}><Link to="/"><img src="https://sherpafeet.com/assets/767ae8db.png" alt="sherpafeet brand logo" /></Link></div>
                <div className={space}></div>

                <div className={burgerbutton}>
                    <a onClick={this.openSlideMenu}><FaAlignJustify /></a>
                    <div className={`${sideNav} ${menuState}`}>
                        <Link to="#" className={btnClose} onClick={this.closeSlideMenu}>&times;</Link>
                        <div className={`${logo} ${logoSideNav}`}><img src="https://sherpafeet.com/assets/767ae8db.png" alt="sherpafeet brand logo" /></div>
                        <a className={sideNavLink} href="#">Find & Review Guides</a>
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

                <nav className={nav}>
                    <div className={navDiv}>
                        <Link to="/guides/" className={navli}>Find & Review Guides</Link>
                    </div>
                    <div className={`${dropdownMenustyle} ${navDiv}`}>
                        <Link className={navli}>Treks</Link>
                        <div className={dropdownitemstyle}>
                            <a href="#">Indian Himalayas</a>
                            <a href="#">Uttarakhand Treks</a>
                            <a href="#">Himachal Treks</a>
                            <a href="#">Ladakh Treks</a>
                            <a href="#">Lahaul Spiti Treks</a>
                        </div>
                    </div>

                    <div className={`${dropdownMenustyle} ${navDiv}`}>
                        <Link className={navli}>About</Link>
                        <div className={dropdownitemstyle}>
                            <a href="/aboutus/">About Us</a>
                            <a href="#">Mission</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>

                    <div className={navDiv}>
                        <Link to="/login/" className={navli}>Log In</Link>
                    </div>
                </nav>


            </div>
        )
    }
}

export default Nav;


