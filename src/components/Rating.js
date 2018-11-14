import React, { Component } from 'react';
import { css } from 'react-emotion';
import Rating from 'react-rating';
import FaHeartO from 'react-icons/lib/fa/heart-o';
import FaHeart from 'react-icons/lib/fa/heart';

const symbolFull = css`
    color: rgba(59,89,152,0.6);
    font-size:16px;
`
const symbolEmpty = css`
    color: #f4f4f4;
    font-size:18px;
`

function Ratings(props){
    return(
        
    <Rating readonly={true} initialRating={props.initialRating} emptySymbol={<FaHeartO className={symbolEmpty}/>} fullSymbol={<FaHeart className={symbolFull}/>}/>
              
    )
}
export default Ratings;