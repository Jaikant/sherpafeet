import React, { Component } from 'react';
import { css } from 'react-emotion';

const popoverWrapper = css`
    position: relative;
    margin-top: 5px;
    display: inline-block;
    & span{
        ${popover}
        }
    &:hover{& span{
        visibility: visible;
        }
    }
`
const popover = css`
    visibility: hidden;
    width: 250px;
    background-color: white;
    color: black;
    text-align: left;
    border-radius: 6px;


    /* Position the tooltip */
    position: absolute;
    z-index: 1;

    
    top: 100%;
    left: 50%;
    margin-left: -125px; 
    border:1px #d9d9d9 solid;
`
const bcolor = css`
    background-color: #f2f2f2;
    padding:7px;
`
const dcolor = css`
    background-color: #fff;
    padding:7px;
`
  
  function Popover(props) {
    return (
        <div className={popoverWrapper}>
        {props.children}
        <span className={popover}>
        <div className={bcolor}>{props.title}</div>
        <div className={dcolor}>{props.content}</div>
            
        </span>
            

            </div>

    );
  }

  
export default Popover;


                