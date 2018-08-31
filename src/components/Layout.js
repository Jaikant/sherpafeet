import React,{Component} from 'react';
import Navigationbar from './Navigationbar/Navigationbar';
import SFFooter from './Footer/SFFooter';
import styled, { css } from 'react-emotion';
import { Layout } from 'antd'

const { Header, Content, Footer, Sider } = Layout;

const SmallBanner = styled.div`
    width: 100%;
    padding: 10px;
    background: #3b5998;
    color: #ffffff;
    text-align: center;
    font-size: 0.8em;
    box-sizing:border-box;
    box-shadow:0px 7px 8px -2px #FFFFFF inset;
    margin-top: 64px;
    position: absolute; 
`;

const HeaderColor = css`
  background: white;
  position: fixed; 
  z-index: 1;
  width: 100%;
`;

const SFLayout = (props)=>(
    <Layout>
        <Header className={HeaderColor}>
            <Navigationbar/>
        </Header>
        <SmallBanner>
            sherpafeet.com is a free service to benefit trekkers and empower local guides. We do not take any money from guides or trekkers.
        </SmallBanner>
            {props.children}
        <Footer>
            <SFFooter/>
        </Footer>
    </Layout>
)
export default SFLayout;



