import React from 'react'
import styled, { css } from 'styled-components'

const width = '484'
const height = '484'
const viewBox = '0 0 484 484'

const getDimensions = () => ({
  height,
  width
})

const getDimensionsCss = () => css`
  width: ${width}px;
  height: ${height}px;
`

const Image = styled.svg`
  ${({noStyles}) => !noStyles ? getDimensionsCss() : null}
`

const defaultProps = {
  children: [
    <path
      d='M484.006 189.845v-10.659L241.897 62.561 0 179.083v10.863l241.897 116.525z'
      key='key-0'
    />,
    <path
      d='M83.808 251.571v69.7l145.836 70.25h24.506l145.435-70.057c.14-.307.271-.613.402-.922V251.57l-158.09 76.152-158.089-76.151zM458.506 358.195V222.599l-19.147 9.656v125.94l-12.476 38.008 18.859 25.242h6.381l18.858-25.242z'
      key='key-1'
    />
  ],
  viewBox
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Education'
})
