import React from 'react'
import styled, { css } from 'styled-components'

const width = '93'
const height = '93'
const viewBox = '0 0 93 93'

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
      d='M55.513 72.889c6.368 0 11.662-4.466 12.963-10.435 6.338-1.01 11.194-6.447 11.194-13.072 0-2.738-.832-5.284-2.263-7.4a13.07 13.07 0 0 0 1.171-5.4c0-5.701-3.607-10.526-8.662-12.412 1.058-1.903 1.711-4.062 1.711-6.393 0-7.33-5.943-13.276-13.284-13.276-2.614 0-5.048.787-7.108 2.094C48.928 2.667 44.71 0 39.822 0c-6.283 0-11.51 4.374-12.898 10.229-5.713.887-10.402 5.407-11.151 11.432-.39 3.164.406 6.167 1.987 8.668-2.736 2.437-4.504 5.944-4.504 9.897 0 4.702 2.461 8.807 6.148 11.168-.561 1.469-.905 3.053-.905 4.716 0 5.729 3.645 10.568 8.73 12.43 2.431 2.655 5.889 4.35 9.77 4.35 2.334 0 4.492-.654 6.398-1.701V90.58h-25.42v2.347h55.136V90.58h-25.44V70.277c2.203 1.622 4.903 2.612 7.84 2.612z'
      key='key-0'
    />
  ],
  viewBox
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Tree'
})
