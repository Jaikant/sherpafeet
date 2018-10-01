
import React, { Component } from 'react';
import { Popover, Button } from 'antd';






function Popovertrek(props) {
    const content = (
        <div>
            <p>Content</p>

        </div>
    );
  

    return (
        <div 
            style={{ marginLeft:'0px', clear: 'both', whiteSpace: 'nowrap' }}
        >   
            <Popover content={props.content} title={props.title} arrowPointAtCenter trigger="hover">
           
                <div >{props.children}</div>
                {/* <Button style={{ borderColor: '#FFFAFA' }}></Button> */}
            </Popover>
            </div>
        

    )
}
export default Popovertrek;
