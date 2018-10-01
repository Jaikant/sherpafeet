import React from 'react'
import styled, { css } from 'styled-components'

const width = '512'
const height = '512'
const viewBox = '0 0 512 512'

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
      d='M510.889 404.216l-114.945-199.09a8.29 8.29 0 1 0-14.358 8.29L489.351 400.07h-161.57l-147.78-255.96h161.57l23.776 41.182a8.287 8.287 0 0 0 11.324 3.034 8.29 8.29 0 0 0 3.034-11.324l-25.058-43.403v-29.961a8.29 8.29 0 0 0-16.58 0v23.89H173.932v-23.89a8.29 8.29 0 0 0-16.58 0v29.96L1.111 404.216a8.29 8.29 0 0 0 7.179 12.435h198.753a8.29 8.29 0 0 0 0-16.58h-33.111V166.759l134.703 233.313h-68.434a8.29 8.29 0 0 0 0 16.58H503.71a8.29 8.29 0 0 0 7.179-12.436zm-488.24-4.145l120.595-208.878-52.251 208.878H22.649zm134.704 0h-49.268l49.268-196.95v196.95z'
      key='key-0'
    />
  ],
  viewBox
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Camping'
})
