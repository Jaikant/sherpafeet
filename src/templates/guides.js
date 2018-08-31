import React from 'react';
import { graphql } from "gatsby";
import { css } from 'react-emotion';
import { Link } from 'gatsby';
import Rating from 'react-rating';
import Icon from '../components/Icons';
import Popover from '../components/Popover';
import Layout from '../components/Layout';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaHeart from 'react-icons/lib/fa/heart';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon, LinkedinIcon } from 'react-share';
import Img from "gatsby-image";


const numberofGuides = css`
    padding: 128px 47px 48px;
    color:#626262;
`
const cards = css`
    display:flex;
    flex-wrap:wrap;
    padding-left:30px;
`
const incards = css`
    display:flex;
    flex-wrap:wrap;
    flex-basis:26%;
`

const spacing = css`
    flex:1;
`


const card = css`
    margin-bottom: 100px;
    border: 1px solid #ccc;
    width: 250px;
    height:600px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }      
`
const cardTitle = css`
    text-decoration:none;
    text-align: center;

    
`
const cardh = css`
    //text-decoration;none;
    text-align: center;
    margin-bottom:0;
    color:rgba(59,89,152,.6);
    padding:25px 10px 10px 10px;;
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
    color:#757575;
    

`
const symbolFull = css`
    color: #8a0707;
    font-size:16px;
`
const symbolEmpty = css`
    color: #f4f4f4;
    font-size:18px;
`

const sharebuttons = css`
    display:flex;
    justify-content:center;
    padding-bottom:10px;    
`

const shareButton = css`
    margin:8px;
    &:hover {
        opacity:0.75;
    }
`


export default (props) => {
    const { data } = props;
    // console.log(JSON.stringify(props.pathContext));

    let imagePath = Object.values(props.pathContext).map(x => x.node.original.src);

    const business=(nameofbusiness) => {
        if(nameofbusiness!=null){
            return nameofbusiness;
        } else {
            return <div>Independent Trekking Guide</div>
        }
    }

     const guidingSince=(datestring) => {
        var year=datestring.substring(datestring.lastIndexOf('-')+1,datestring.length);
        return year;
    }

    const getAge=(datestring) => {
        var parts = datestring.split("-");
        var today = new Date();
        var birthDate = new Date(parts[2], parts[1] - 1, parts[0]);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
      }

    const marriedKids=(ismarried,haskids) => {
        if(ismarried||haskids){
            if(haskids){
                var married=(<span>, Married with kids</span>)
            } else{
                married=(<span>, Married</span>)
            }
        }
        return married;
    }
    
    const reviews=(raters) => {
        if(raters){
            return raters
        } else {
            return <span>No</span>
                 }
        }
            
    // const iconpop=(eng) => {
    //     if (eng){
    //         return(
    //             <Popover title="English" content="The guide can understand English.">
    //                 <Icon icon="speaking" />
    //             </Popover>
    //         )
    //     }
    // }

    // const iconpop=(info,eng) => {
    //     if (info!=null){
    //         if (eng!=null){
    //             return(
    //                 <Popover title="English" content="The guide can understand English.">
    //                     <Icon icon="speaking" />
    //                 </Popover>
    //             )
    //         }
    //     }
    // }
    
    return (
        <div>
            <Layout>
                <h6 className={numberofGuides}>Found {data.allMongodbTestGuides.edges.length} guides for treks and hikes in the Indian Himalayas.
      </h6>
      <div className={cards}>
                    {data.allMongodbTestGuides.edges.map(({ node }, index) =>(
                      <div className={incards}>  
                    <div className={spacing}></div>
                        <div className={card} key={index}>
                            <Link to="#" className={cardTitle}><h5 className={cardh}>{business(node.businessname)}</h5></Link>


                        <div className={sharebuttons}>
                            <div>
                                <FacebookShareButton url={"https://sherpafeet.com/" + "guide/" + node.uid} className={shareButton}>
                                    <FacebookIcon size={24} round={true}></FacebookIcon>
                                </FacebookShareButton>
                            </div>
                            <div>
                                <TwitterShareButton url={"https://sherpafeet.com/" + "guide/" + node.uid} className={shareButton}>
                                    <TwitterIcon size={24} round={true}></TwitterIcon>
                                </TwitterShareButton>
                            </div>
                            <div>
                                <WhatsappShareButton url={"https://sherpafeet.com/" + "guide/" + node.uid} className={shareButton}>
                                    <WhatsappIcon size={24} round={true}></WhatsappIcon>
                                </WhatsappShareButton>
                            </div>
                            <div>
                                <LinkedinShareButton url={"https://sherpafeet.com/" + "guide/" + node.uid} className={shareButton}>
                                    <LinkedinIcon size={24} round={true}></LinkedinIcon>
                                </LinkedinShareButton>
                            </div>

                        </div>
                 
                            <Link to="#" className={cardimg}><img src={imagePath.find(x=> x.includes(node.uid))}/></Link>
                        

                            
                            <div className={cardBlock}>
                                <span><strong>{node.firstname} {node.lastname}</strong></span>
                                <div>Age {getAge(node.dateofbirth)}{marriedKids(node.married,node.haschildren)}</div>
                                <div>{node.address.city}, {node.address.state}</div>
                                <div>Guiding work since <strong>{guidingSince(node.startwork)}</strong></div>

                                <Rating readonly={true} initialRating={node.rating} emptySymbol={<FaHeartO className={symbolEmpty} />} fullSymbol={<FaHeart className={symbolFull} />} />
                                <div><strong>{reviews(node.raters)} Reviews</strong></div>
                                <div>
                                
                            
                                        <Popover title="English" content="The guide can understand English.">
                                        <Icon icon="speaking" />
                                        </Popover>
                                     <Popover title="Basic Mountaineering" content="The guide has completed a certification in Basic Mountaineering.">
                                        <Icon icon="degree" />
                                    </Popover>  
                                                                    
                                    <Popover title="Advanced Mountaineering" content="The guide has completed a certification in Advanced Mountaineering.">
                                        <Icon icon="certificate" />
                                    </Popover>

                                    <Popover title="Methods Of Instruction" content="The guide is a trained instructor.">
                                        <Icon icon="degreecap" />
                                    </Popover>
                                    <Popover title="Search & Rescue" content="The guide has completed a certification in Search & Rescue.">
                                        <Icon icon="firstaid" />
                                    </Popover>


                                </div>
        
                                

                            </div>

                        </div>
                       </div> 

                    ))}
                </div>
            </Layout>
        </div>
    )
}


export const query = graphql`
  query{
    allMongodbTestGuides{
      edges{
        node{
          uid
          businessname
          firstname
          lastname
          age
          address {
            street
            city
            state
            country
            pincode
            }
          startwork
          rating
          raters
          dateofbirth
          married
          haschildren
          info {
            bmc
            amc
            moi
            english
            sar
          }

        }
      }
    }
    
    

  }
`
//<span>{iconwithpop(node.info.english)}</span>
