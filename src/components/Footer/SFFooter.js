import React,{Component} from 'react';
import { css } from 'react-emotion';
import { Link } from 'gatsby';

const text = css`
    color: rgba(255, 255, 255, 1);
`
const spacer = css`
    color: rgba(255, 255, 255, 0.7);
`
const link = css`
    color: rgba(255, 255, 255, 0.6);
  font-size: 1em;
  font-weight: 400;
  padding-top: 10px;
  padding-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: .1em;
  text-decoration: none;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s; 
  &:hover {
      color:  rgba(255, 255, 255, 1);;
    }
`
const container = css`
    margin: 0 auto;
    padding: 20px 15px;
    max-width: var(--max-content-width);
    text-align: center; 
    background: #3b5998;
    color: #fff;
    width: 100%;

`

const SFFooter=()=>(
    <div className={container}>
    <span className={text}>© sherpafeet</span>
    <span className={spacer}>.</span>
    <Link to="/" className={link}>Home</Link>
    <span className={spacer}>.</span>
    <Link to="#" className={link}>Blog</Link>
    <span className={spacer}>.</span>
    <Link to="#" className={link}>Why</Link>
    <span className={spacer}>.</span>
    <Link to="#" className={link}>Must know</Link>
    <span className={spacer}>.</span>
    <Link to="#" className={link}>Checklist</Link>
    <span className={spacer}>.</span>
    <Link to="#" className={link}>Terms & Conditions</Link>
    <span className={spacer}>.</span>
    <Link to="#" className={link}>Privacy Policy</Link>
    <span className={spacer}>.</span>
    <Link to="#" className={link}>Contact</Link>
    <span className={spacer}>.</span>
    <Link to="#" className={link}>Partners</Link>
    </div>
)

export default SFFooter;
