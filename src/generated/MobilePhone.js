import React from 'react'
import styled, { css } from 'styled-components'

const width = '430'
const height = '430'
const viewBox = '0 0 430 430'

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
      d='M140 0c-7.854.001-15.665 3.228-21.219 8.781-5.553 5.553-8.78 13.365-8.781 21.219v370c.001 7.854 3.228 15.665 8.781 21.219 5.553 5.553 13.365 8.78 21.219 8.781h150c7.854-.001 15.665-3.228 21.219-8.781 5.553-5.554 8.78-13.365 8.781-21.219V30c-.001-7.854-3.228-15.665-8.781-21.219C305.666 3.228 297.854.001 290 0H140zm59.281 20c.073-.002.146-.002.219 0 .167-.008.333-.008.5 0h30a5.001 5.001 0 1 1 .001 10h-30a5.013 5.013 0 0 1-.72-10zM120 50h190v325H120V50zm95 335c8.284 0 15 6.716 15 15s-6.716 15-15 15-15-6.716-15-15c0-8.285 6.716-15 15-15z'
      style={{
        fill: '#222',
      }}
      key='key-0'
    />
  ],
  viewBox
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'MobilePhone'
})
