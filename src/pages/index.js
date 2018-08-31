import React, { Component } from 'react';
import { css } from 'react-emotion';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import { graphql } from 'gatsby';
import Rating from 'react-rating';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaHeart from 'react-icons/lib/fa/heart';
import Icon from '../components/Icons';
import Popover from '../components/Popover';
import Img from "gatsby-image";


//@import url('https://fonts.googleapis.com/css?family=PT Serif');
//import { slide as BurgerMenu } from 'react-burger-menu'

const bg = css`
    background-image:url('https://sherpafeet.com/img/chandrataal.png');
    background-repeat: no-repeat;
    background-size: cover;
`
const container=css`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`

const img=css`
    width: 196px;
    height:196px;
`
const a=css`
    display:flex;
    font-size: 70px;
    padding-bottom:340px;
    justify-content:center;
    text-align:center;
`
const b=css`
    color:#3b5998`
const c=css`
    color:white;
    `
const contain = css`
    padding: 70px;
    display:flex;
    align-items:center;
    justify-content:center;
`
const pipe= css`
    background:#999;
    height:44px;
    width:1px;
    margin:0px 12px;
`

const x = css`
    display:flex;
    flex-direction:column;
`

const follow = css`
    color:#999;
    font-size:10px;
    text-transform: uppercase;
    letter-spacing:1px;
    font-weight:10px;
 `

const icons = css`
    color:#00aced;
    font-size:22px;
`

const guideText= css`
    padding:55px 0px 50px 30px;
    font-weight:normal;
`

const card = css`
    margin: 5px;
    border: 1px solid #ccc;
    width: 290px;
    min-height:550px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
    margin-left:80px;
    margin-bottom:50px;
`
const cardTitle = css`
    text-decoration:none;
    text-align: center;
    
`
const cardh = css`
    text-align: center;
    margin-bottom:0;
    color:rgba(59,89,152,.6);
    padding:25px 10px;
    &:hover {
        color: #23527c;
      }
`

const cardimg = css`
    max-width: 100%;
    height: auto;
`
const cardBlock = css`
    text-align: center;
    margin:0 auto;
    font-size:14px;
    color:#757575;
`
const symbolFull = css`
    color: rgba(59,89,152,0.6);
    font-size:16px;
`
const symbolEmpty = css`
    color: #f4f4f4;
    font-size:18px;
`

    
export default ({data}) => {
    const date = data.mongodbTestGuides.startwork;
    const year = date.substring(date.lastIndexOf('-')+1,date.length)
      
      
    return (<div>
                <Layout>  
                    <div className={bg}> 
                        <div className={container}>
                            <div className={contain}>
                                <img className={img} src="https://sherpafeet.com/assets/31c8c0d6.png" alt="sherpafeet logo" />
                                

                                <div className={pipe}></div>
                                <div>
                                    <div className={x}>
                                        <div className={follow}>
                                            <span>Follow Us</span>
                                        </div>
                                        <div className={icons}>
                                            <a><FaFacebook /></a>
                                            <a><FaTwitter /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={a}>
                                <p className={b}><span className={c}>Treks, Hikes &</span>Find Local Guides </p>
                            </div>
                        </div>

                    </div>
                    <h2 className={guideText}>Guide Spotlight (Based on most reviews)</h2>

                    <div className={card}>
                        <Link to="#" className={cardTitle}><h5 className={cardh}>{data.mongodbTestGuides.businessname}</h5></Link>
                        <Link to="#" className={cardimg}><img src={data.imageSharp.original.src}/></Link>
                        
                        <div className={cardBlock}>
                            <span><strong>{data.mongodbTestGuides.firstname} {data.mongodbTestGuides.lastname}</strong></span>
                            <div>Age {data.mongodbTestGuides.age}</div>
                            <div>{data.mongodbTestGuides.address.city}, {data.mongodbTestGuides.address.state}</div>
                            <div>Guiding work since <strong>{year}</strong></div>
                            <Rating readonly={true} initialRating={data.mongodbTestGuides.rating} emptySymbol={<FaHeartO className={symbolEmpty}/>} fullSymbol={<FaHeart className={symbolFull}/>}/>              
                            <div>
                            <Popover  title="English" content="The guide can understand English.">
                            <Icon icon="speaking"/>
                            </Popover>
                            <Popover  title="Basic Mountaineering" content="The guide has completed a certification in Basic Mountaineering.">
                            <Icon icon="degree"/>
                            </Popover>
                            <Popover  title="Advanced Mountaineering" content="The guide has completed a certification in Advanced Mountaineering.">
                            <Icon icon="certificate"/>
                            </Popover>
    
                            <Popover  title="Methods Of Instruction" content="The guide is a trained instructor.">
                            <Icon icon="degreecap"/>
                            </Popover>
                            
                        </div>
                            
                            
                    </div>  
                    </div>
                    
            </Layout>  
        </div> 
    )
}


export const query = graphql`
  query IndexQuery1 {
            mongodbTestGuides(uid: {eq: "RajeshThakur"}) {
                    businessname
                    firstname
                    lastname
                    age
                    address {
                                city
                                state
                            }
                    startwork
                    rating
                    info {
                        bmc
                        amc
                        moi
                        english
                        sar
                      }
                    }
            imageSharp(original: {src: {regex: "/RajeshThakur/"}}){
                    id
                    original {
                        width
                        height
                        src
                    }
                    }  
                    
            
    }

       
`


// export const query = graphql`
//   query IndexQuery1 {
//             mongodbTestGuides(uid: {eq: "RajeshThakur"}) {
//                     businessname
//                     firstname
//                     lastname
//                     age
//                     address {
//                                 city
//                                 state
//                             }
//                     startwork
//                     rating
//                     info {
//                         bmc
//                         amc
//                         moi
//                         english
//                         sar
//                       }
                    
//             }
//     }

       
// `

  

// export const query = graphql`
//   query IndexQuery1 
//         {
//             allMongodbTestGuides{
//                 edges{
//                     node{
//                         uid
//                         firstname
//                     }
//                 }
//             }
//         }
    
// `
