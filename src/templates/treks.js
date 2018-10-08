import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Trekcard";
import { graphql } from "gatsby";
import { Flex, Box } from "rebass";
import { injectGlobal } from "emotion";

injectGlobal`
    .ant-card{
        border: 1px solid #ccc;
        width: 250px;
        height:600px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .ant-card-bordered{
        text-align: center;
        margin:0 auto;
        color:#757575;
    }
    .ant-card-hoverable{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .ant-card-cover{
        fit-width: 100%;
        height: 360px;
        display:block;
    }
    img{
        height:330px;
    }
    .ant-card-body{
    }
    .ant-card-meta{
        text-align: center;
        margin-bottom:0;
        color:rgba(59,89,152,.6);
        padding:25px 10px 10px 10px;;
        &:hover {
            color: #23527c;
        }
    }
    .ant-card-actions{
        
    }
    .ant-popover-inner-content {
    }
    .ant-popover-title {
    }
`;

export default props => {
  const { data, pathContext } = props;

  let imagePath = data.allImageSharp.edges.map(x => x.node.original.src);

  return (
    <Layout>
        <Box pl={[2,4,5]} pt={[4,5]}>
            <h6>
            Found {data.allMongodbTestTreks.edges.length} treks in the{" "}
            {props.pathContext.region}
            </h6>
        </Box> 
        <Flex flexWrap="wrap" justifyContent="center">
          {data.allMongodbTestTreks.edges.map(({ node }) => (
            <div>
              <Flex flexDirection="row" justifyContent="center" >
                <Box m={5}>
                    <Card
                    key={node.id}
                    src={imagePath.find(x => x.includes(node.mongodb_id))}
                    treks={node}
                    />
                </Box>
              </Flex>
            </div>
          ))}
        </Flex>
    </Layout>
  );
};

export const query = graphql`
  query TreksQuery1($region: String!) {
    allMongodbTestTreks(filter: { region: { eq: $region } }) {
      edges {
        node {
          region
          id
          mongodb_id
          name
          attractions {
            meadows
            snow
            forests
            camping
            waterbody
            wildlife
            villagestay
            rivercrossings
          }
          altitude
          noofdays
        }
      }
    }
    allImageSharp {
      edges {
        node {
          original {
            src
          }
        }
      }
    }
  }
`;
