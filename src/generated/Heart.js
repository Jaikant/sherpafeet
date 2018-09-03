import React from 'react'
import styled, { css } from 'styled-components'

const width = '369'
const height = '369'
const viewBox = '0 0 369 369'

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
      d='M184.743 357.351a12.503 12.503 0 0 1-9.164-3.998l-147.67-159.16a12.628 12.628 0 0 1-.113-.123C9.871 174.223 0 147.921 0 120.008c0-27.914 9.871-54.215 27.796-74.061l2.244-2.484c18.246-20.201 42.608-31.327 68.599-31.327s50.354 11.126 68.601 31.328l17.503 19.38 17.503-19.379c18.246-20.202 42.608-31.328 68.6-31.328s50.354 11.126 68.601 31.329l2.241 2.478c17.928 19.851 27.799 46.152 27.799 74.065s-9.872 54.215-27.796 74.061a4.544 4.544 0 0 1-.113.125l-147.671 159.16a12.513 12.513 0 0 1-9.164 3.996zM46.295 177.252l138.448 149.219 138.448-149.22c28.485-31.603 28.467-82.97-.055-114.549l-2.239-2.478c-13.449-14.891-31.224-23.09-50.051-23.09-18.828 0-36.603 8.199-50.048 23.085l-26.778 29.65a12.496 12.496 0 0 1-18.551 0L148.69 60.221c-13.446-14.887-31.22-23.086-50.048-23.086S62.039 45.333 48.594 60.22l-2.244 2.484c-28.522 31.579-28.541 82.946-.055 114.548z'
      key='key-0'
    />
  ],
  viewBox
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Heart'
})
