import React from 'react';
import Popover from '../components/Trekpopover';
import { Card as AntdCard, Image } from 'antd';
import { Link } from 'gatsby';
import { Flex, Text, Divider, Box } from 'rebass';
import Snow from '../generated/Snow';
import Meadows from '../generated/Meadows';
import Camping from '../generated/Camping';
import Forests from '../generated/Forests';
import Waterbody from '../generated/Waterbody';
import Wildlife from '../generated/Wildlife';
import Icon from '../components/Icon';
import { css } from 'react-emotion';



const incards = css`
    display:flex;
    flex-wrap:wrap;
    flex-basis:26%;
    margin-bottom:100px;
    fit-width: 250px;
    height: 550px;
`


const cardblock = css`
    text-align: center;
    margin:0 auto;
    color:#757575;
`
const cardtitle = css`
    text-decoration:none;
    text-align: center;

    
`
const cardh1 = css`
    //text-decoration;none;
    text-align: center;
    font-size:1em;
    font-weight=500em;
    margin-bottom:0px;
    padding-bottom:0px; 
    color:rgba(59,89,152,.6);
    padding:25px 10px 10px 10px;;
    &:hover {
        color: #23527c;
      }
`




const trekcard = (props) => {
    //console.log(props);
    const { src, treks } = props;
    const { name, altitude, noofdays, attractions } = treks;

    




    const attraction = (b) => {
        if (b != null) {
            let explore = Object.keys(attractions).map(y => {
                switch (y) {
                    case "meadows":
                        if (attractions[y] === true) {
                            return <Popover title="Meadows" content="You will find beautiful meadows on this trek!"><Meadows width={25} color={'#757575'} /></Popover>
                        }
                        break;
                    case "waterbody":
                        if (attractions[y] === true) {
                            return <Popover title="Lakes or Rivers" content="You will find lakes or rivers on this trek!"><Waterbody width={23} /></Popover>
                        }
                        break;
                    case "forests":
                        if (attractions[y] === true) {
                            return <Popover title="Forests" content="This trek passes through forests!"><Forests width={25} /></Popover>
                        }
                        break;
                    case "snow":
                        if (attractions[y] === true) {
                            return <Popover title="Snow" content="You will find lots of snow on this trek!">
                                <Snow width={25} /></Popover>
                        }
                        break;
                    case "camping":
                        if (attractions[y] === true) {
                            return <Popover title="Camping" content="You will be camping on tents on this trek!"><Camping width={25} /></Popover>
                        }
                        break;
                    case "wildlife":
                        if (attractions[y] === true) {
                            return <Popover title="Animals or Birds" content="If you are lucky,you could spot wild animals or exotic birds on this trek!"><Wildlife width={25} /></Popover>
                        }
                        break;
                }
            }

            )

            // We remove any undefined elements in the array.
            explore = explore.filter(function (element) {
                return typeof element != 'undefined';
            });

            return explore;


        }
        else {
            return null
        }
    }
    

    return (

        <Flex>
            <div 
            
            // style={{ color: '#757575', padding: '30px' }}
            >
                
                <div className={incards}>
                    <div className={cardblock}>
                        <AntdCard

                            hoverable
                            //style={{ width: '125px',height:'300px' }}
                            cover={<img alt="trek images"

                                src={src}
                            />}

                            bordered={true}

                            actions={attraction(attractions)}
                        >

                            <p className={cardtitle}><h1 className={cardh1}>{<Link>{`${name} Trek Info`}</Link>}</h1></p>


                            


                            <Divider />


                            <Text>{`Altitude ${altitude} m`}</Text>
                            <Text>{`Duration ${noofdays} (Days)`}</Text>

                        </AntdCard>
                    </div>
                </div>

            </div>
        </Flex>

    )
}
export default trekcard;