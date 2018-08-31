import React from 'react';
  
const Icon = (props) => {

  const { color, width, height } = props;

  const SFIcon = props.render.extend`
  height : ${height};
  width: ${width};
  & path {
    fill: ${color};
    stroke: ${color};
  }
`
  return(
    <SFIcon />
  )
}

export default Icon;
