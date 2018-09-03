import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import { graphql } from 'gatsby';
import Rating from 'react-rating';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaHeart from 'react-icons/lib/fa/heart';
import Popover from '../components/Popover';
import Img from "gatsby-image";
import { Flex, Box } from 'rebass'
import { Card as AntdCard, Icon as AntdIcon } from 'antd'
import Talk from '../generated/Talk'
import Amc from '../generated/Amc'
import Bmc from '../generated/Bmc'
import Moi from '../generated/Moi'

const { Meta } = AntdCard;

const symbolFull = css`
    color: rgba(59,89,152,0.6);
    font-size:16px;
`
const symbolEmpty = css`
    color: #f4f4f4;
    font-size:18px;
`

const getAge = (datestr) => {
    var parts = datestr.split("-");
    var today = new Date();
    var birthDate = new Date(parts[2], parts[1] - 1, parts[0]);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
  }
  

const Card = (props) => {
    const { src, guide, year } = props;
    const {businessname, firstname, lastname, dateofbirth, rating, info } = guide;

    // Create an array of Icons for the qualifications
    // We can make the info object an array, map through it and create a new array
    // of react elements.
    let qualification = Object.keys(info).map(q => {
        switch(q) {
            case "english": 
                if (info[q] === true) {
                    return <Talk width={30}/>
                }
                break;
            case "bmc": 
                if (info[q] === true) {
                   return <Bmc width={30}/>
                }
                break;
            case "amc":
                if (info[q] === true) {
                    return <Amc width={30}/>
                }
                break;
            case "moi":
                if (info[q] === true) {
                    return <Moi width={30}/>
                } 
                break;
            case "sar":
                if (info[q] === true) {
                 return <p> SAR </p>
                } 
                break;
        }
    })
    
    // We remove any undefined elements in the array.
    qualification = qualification.filter(function( element ) {
        return typeof element != 'undefined';
     });

    return (
        <AntdCard
            style={{ width: 290 }}
            title={businessname}
            cover={
                <img 
                    alt={`Picture of Local Trekking Guide ${firstname} ${lastname}`} 
                    src={src}/>
            }
            actions={qualification}
        >
            <Meta
            title={`${firstname} ${lastname}`}
            description={`Age` + getAge(dateofbirth) + `,` +
                ` Guiding work since ${year}`
            }
            />
            <Box mt={3}>
                <Rating 
                    readonly={true} 
                    initialRating={rating} 
                    emptySymbol={<FaHeartO className={symbolEmpty}/>} 
                    fullSymbol={<FaHeart className={symbolFull}/>}
                />
            </Box>
        </AntdCard>
    )
}

export default Card;

