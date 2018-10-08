import { Card } from 'antd';
import React, {Component} from 'react';
import Layout from '../components/Layout';

const { Meta } = Card;
export default()=>{
return(
    <Layout>
    
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta
      title="Europe Street beat"
      description="www.instagram.com"
    />
  </Card>
  </Layout>
  )
};
  