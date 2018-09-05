import React from 'react';
import { css } from 'react-emotion';
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon, LinkedinIcon } from 'react-share';

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


function Sharebuttons(props){
    return(
        <div className={sharebuttons}>
            
                
                            <div>
                                <FacebookShareButton url={props.url} className={shareButton}>
                                    <FacebookIcon size={24} round={true}></FacebookIcon>
                                </FacebookShareButton>
                            </div>
                            <div>
                                <TwitterShareButton url={props.url} className={shareButton}>
                                    <TwitterIcon size={24} round={true}></TwitterIcon>
                                </TwitterShareButton>
                            </div>
                            <div>
                                <WhatsappShareButton url={props.url} className={shareButton}>
                                    <WhatsappIcon size={24} round={true}></WhatsappIcon>
                                </WhatsappShareButton>
                            </div>
                            <div>
                                <LinkedinShareButton url={props.url} className={shareButton}>
                                    <LinkedinIcon size={24} round={true}></LinkedinIcon>
                                </LinkedinShareButton>
                            </div>

                        
                  
        </div>
    
    )
}
export default Sharebuttons;


