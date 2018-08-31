import React, { Component } from 'react';
import { css } from 'react-emotion';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGoogle from 'react-icons/lib/fa/google';

const loginContainer = css`
    display:flex;
    flex-direction:column; 
    align-items:center;  
`

const text = css`
    font-size:14px;
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    text-align:center;
    padding-top: 145px;
    padding-bottom: 30px;
`

const linkWrap = css`
    display:flex;
`
const linkFb = css`
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    background:#3b5998;
    padding: 10px 95px;
    text-decoration:none;  
`
const linkGoogle = css`
    font-family: Helvetica Neue,Helvetica,Arial,sans-serif;
    background:#dd4b39;
    padding: 10px 106px;
    text-decoration:none; 
    //padding-bottom:20px; 
`

const linkIcon = css`
    color: white;
    font-size:20px;
    margin-right:8px;
`
const linkText = css`
    color: white;
    font-size:18px;
`


export default () => {
    return (<div>
        <Layout>
            <div className={loginContainer}>
            <p className={text}>Your privacy is safe with us. On login you will be subscribed to our newsletter. The newsletter comes with an unsubscribe option.</p>
            <div className={linkWrap}>
                <Link to="#" className={linkFb}>
                
                <FaFacebook className={linkIcon}/>
                    <span className={linkText}>Log in with Facebook</span>
                              
                </Link>
            </div>
        
            <div className={linkWrap}>
                <Link to="#" className={linkGoogle}>
                
                <FaGoogle className={linkIcon}/>
                    <span className={linkText}>Log in with Google</span>
                              
                </Link>
            </div>
            
            </div>

        </Layout>
    </div>
    )
}


