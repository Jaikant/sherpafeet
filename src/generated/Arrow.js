import React from 'react'
import styled, { css } from 'styled-components'

const width = '269'
const height = '269'
const viewBox = '0 0 269 269'

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
      d='M223.255 83.659l-80-79.998c-4.881-4.881-12.797-4.881-17.678 0l-80 80c-4.883 4.882-4.883 12.796 0 17.678 2.439 2.44 5.64 3.661 8.839 3.661s6.397-1.221 8.839-3.661l58.661-58.661v213.654c0 6.903 5.597 12.5 12.5 12.5 6.901 0 12.5-5.597 12.5-12.5V42.677l58.661 58.659c4.883 4.881 12.797 4.881 17.678 0 4.882-4.881 4.882-12.795 0-17.677z'
      key='key-0'
    />
  ],
  viewBox
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Arrow'
})
