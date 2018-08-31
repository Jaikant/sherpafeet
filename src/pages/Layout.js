import React from 'react'
import { Layout } from 'antd'
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
`; 

export default () => 
<Layout>
  <Header>header</Header>
  <Layout>
    <Sider style={{ overflow: 'auto', height: '100vh'}}>left sidebar</Sider>
     <Content>main content</Content>
    <Sider>right sidebar</Sider>
  </Layout>
  <Footer>footer</Footer>
</Layout>
