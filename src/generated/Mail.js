import React from 'react'
import styled, { css } from 'styled-components'

const width = '485'
const height = '485'
const viewBox = '0 0 485 485'

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
      d='M485.211 363.906c0 10.637-2.992 20.498-7.785 29.174L324.225 221.67l151.54-132.584c5.895 9.355 9.446 20.344 9.446 32.219v242.601zM242.606 252.793l210.863-184.5c-8.653-4.737-18.397-7.642-28.908-7.642H60.651c-10.524 0-20.271 2.905-28.889 7.642l210.844 184.5zm58.787-11.162l-48.809 42.734a15.145 15.145 0 0 1-9.978 3.729c-3.57 0-7.125-1.242-9.98-3.729l-48.82-42.736L28.667 415.23c9.299 5.834 20.197 9.329 31.983 9.329h363.911c11.784 0 22.687-3.495 31.983-9.329L301.393 241.631zM9.448 89.085C3.554 98.44 0 109.429 0 121.305v242.602c0 10.637 2.978 20.498 7.789 29.174l153.183-171.44L9.448 89.085z'
      key='key-0'
    />
  ],
  viewBox
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Mail'
})
