import React from 'react';
import { graphql } from "gatsby";
import { css } from 'react-emotion';
import { Link } from 'gatsby';
import Icon from '../components/Icons';
import Popover from '../components/Popover';
import Layout from '../components/Layout';
import Sharebuttons from '../components/Sharebuttons';
import Ratings from '../components/Rating';





const numberofGuides = css`
    padding: 128px 47px 48px;
    color:#626262;
    font-size:12px;
    font-family:PT Serif,serif;
    font-weight:500;
`
const cards = css`
    display:flex;
    flex-wrap:wrap;
    //justify-content:space-between;
    //align-content:space between;
    padding-left:30px;
    //padding-right:30px;

`
const incards = css`
    display:flex;
    flex-wrap:wrap;
    //justify-content:space-between;
    //align-content:space between;
    flex-basis:26%;
    //flex:2;
`

const spacing = css`
    //display:flex;
    //flex-basis:40%;
    flex:1;
`


const card = css`
    margin-bottom: 100px;
    border: 1px solid #ccc;
    //float: left;
    width: 250px;
    height:600px;
    //margin-right:20px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    &:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      }
    //margin-right:50px;
    //margin-left:50px;
    //margin-bottom:50px;
      //flex:1;
      //flex-shrink:0;
      
`
const cardTitle = css`
    text-decoration:none;
    text-align: center;
    //font-family: Helvetica Neue,Helvetica,Arial,sans-serif;

    
`
const cardh = css`
    //text-decoration;none;
    text-align: center;
    margin-bottom:0;
    color:rgba(59,89,152,.6);
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
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
    font-size:14px;
    color:#757575;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    

`
export default ({data}) => {
    //const { data } = props;
    // console.log(JSON.stringify(props.pathContext));
    console.log(data.allImageSharp.edges.map(x => x.node.original.src));

    let imagePath=data.allImageSharp.edges.map(x => x.node.original.src);
    

    //let imagePath = Object.values(props.pathContext).map(x => x.node.original.src);
    // console.log(imagePath);
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
                            <Link to={'/guideprofile'} className={cardTitle}><h5 className={cardh}>{business(node.businessname)}</h5></Link>


                        <Sharebuttons url={"https://sherpafeet.com/" + "guide/" + node.uid}/>
                            <Link to="#" className={cardimg}><img src={imagePath.find(x=> x.includes(node.uid))}/></Link>
                            

                            
                            <div className={cardBlock}>
                                <span><strong>{node.firstname} {node.lastname}</strong></span>
                                <div>Age {getAge(node.dateofbirth)}{marriedKids(node.married,node.haschildren)}</div>
                                <div>{node.address.city}, {node.address.state}</div>
                                <div>Guiding work since <strong>{guidingSince(node.startwork)}</strong></div>
                                <Ratings initialRating={node.rating}/>
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
    allImageSharp{
        edges{
          node{
            original {
              src
            }
          }
        }
    }
  }
`
//<span>{iconwithpop(node.info.english)}</span>

