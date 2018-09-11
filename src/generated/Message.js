import React from 'react'
import styled, { css } from 'styled-components'

const width = '395'
const height = '395'
const viewBox = '0 0 395 395'

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
      d='M395 320.089V74.911L258.806 197.5zM197.5 252.682l-38.884-35L22.421 340.271h350.158L236.384 217.682zM372.579 54.729H22.421L197.5 212.318zM0 74.911v245.178L136.194 197.5z'
      key='key-0'
    />
  ],
  viewBox
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Message'
})
