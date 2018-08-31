import React,{Component} from 'react';
import Navigationbar from './Navigationbar/Navigationbar';
import SFFooter from './Footer/SFFooter';
import styled, { css } from 'react-emotion';
import { Layout } from 'antd'
import { Box } from 'rebass'
import { ThemeProvider } from 'emotion-theming'
import { injectGlobal } from 'emotion'
import Color from 'color';

const { Header, Content, Footer, Sider } = Layout;

// https://github.com/ant-design/ant-design/issues/5570#issuecomment-313183003

/*
 * We'll start with just one theme for now. Define colors and other styles here.
 * More themes can be easily added later. 
 */

const mainTheme = {
    primaryColor: Color('#fd3d57'),
    primaryTextColor: Color('#fff'),
  };
  
  const defaultTheme = mainTheme;
  
  // Inject global styles - seems to be the only way to customize Ant Design
  // PLEASE ADD STYLES IN ALPHABETICAL ORDER for everyone's sanity. Thanks.
  

injectGlobal`  
  .ant-layout-footer {
    padding: 0px;
  }
  .ant-layout-header {
    padding: 0px;
  }

  .ant-menu-horizontal > .ant-menu-item:hover,
  .ant-menu-horizontal > .ant-menu-submenu:hover,
  .ant-menu-horizontal > .ant-menu-item-active,
  .ant-menu-horizontal > .ant-menu-submenu-active,
  .ant-menu-horizontal > .ant-menu-item-open,
  .ant-menu-horizontal > .ant-menu-submenu-open,
  .ant-menu-horizontal > .ant-menu-item-selected,
  .ant-menu-horizontal > .ant-menu-submenu-selected {
    border-bottom: 2px solid #ffffff;
    color: #1890ff;
  }

  .ant-menu-horizontal {
    border-bottom: 2px solid #ffffff;
  }
`; 


const SmallBanner = styled(Box)`
    width: 100%;
    padding: 10px;
    background: #3b5998;
    color: #ffffff;
    text-align: center;
    font-size: 0.8em;
    box-sizing:border-box;
    box-shadow:0px 7px 8px -2px #FFFFFF inset;
`;

const HeaderColor = css`
  background: white;
  position: fixed; 
  z-index: 1;
  width: 100%;
`;

const SFLayout = (props)=>(
    <div>
        <Navigationbar/>
        <SmallBanner mt={["70px"]}>
            sherpafeet.com is a free service to benefit trekkers and empower local guides. We do not take any money from guides or trekkers.
        </SmallBanner>
        {props.children}
        <SFFooter/>
    </div>
)
export default SFLayout;



