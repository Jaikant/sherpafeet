import React, { Component } from 'react';
import Layout from '../components/Layout';
import Card from '../components/Trekcard';
import { graphql } from 'gatsby';
import { css } from 'react-emotion';
import {Link} from 'gatsby';
import {Flex} from 'rebass';
import {Row} from 'antd';
import {injectGlobal} from 'emotion';


const numberofTreks = css`
    padding: 50px 97px 28px;
    color:#626262;
`


const cards = css`
    display:flex;
    flex-wrap:wrap;
    padding-left:75px;
    align-items:center;
     
`

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
        //text-decoration;none;
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
`




export default ( props ) => {
    const {data, pathContext} = props;
    
    let imagePath = data.allImageSharp.edges.map(x => x.node.original.src);
    console.log("props are",props)
    


    //let treks = data.allMongodbTestTreks.edges.map(a => a.node.region);
    
    
    // let treks = props.data.allMongodbTestTreks.edges.filter(function(element){
    //     //console.log(element);
    //        if( element.node.region.forEach  == props.pathContext.region )
    //             {
    //                 return treks;
    //             }
    //       else {
    //           return null;
    //       }

    //     }
    //     )
           //!= pathContext.region;
        // let treks = data.allMongodbTestTreks.edges.map(function(region){
        //         if(treks.forEach(function(treks,region){

        //         }))
        // })
//         let treks= data.allMongodbTestTreks.edges.map(function(element){
//             if(typeof element.node.region== pathContext.region){
//                 return treks;
//             }
//             else{
//                 return null;
//             }
//    })

              
         
           
        
           
                
        
           
                


    return (
        <Layout>
            <Flex flexDirection='column' justifyContent='center'>
            <h6 className={numberofTreks}>Found {data.allMongodbTestTreks.edges.length} 
            guides for treks in the {props.pathContext.region}
      </h6>
      
     <div className={cards}> {data.allMongodbTestTreks.edges.map(({ node }) =>(
                        
                            
                            
                         <div >
                            <Flex flexDirection='row' justifyContent='center' pl={[2,4,5]}>
                            
                        <Card key={node.id} 
                           
                            src=  {imagePath.find(x=> x.includes(node.mongodb_id))}
                            treks={node}
                            
                        />

                        </Flex>
                        
                        </div>
                       
                         
    ))}
    
     </div> 
     </Flex>
        </Layout>
    )
     }

export const query = graphql`
    
query TreksQuery1($region: String!) 
    {
        allMongodbTestTreks(filter:{region:{eq:$region}}){
            edges{
              node{
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
          allImageSharp{
            edges{
              node{
                original{
                  src
                }
              }
            }
          }
          
      }`
