import React from 'react'
import styled, { css } from 'styled-components'

const width = '125'
const height = '109'
const viewBox = '0 0 125 109'

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
    <g
      dataName='图层 2'
      key='key-0'
    >
      <path
        d='M125.18 64.7l-29.46-17V5.24a1.89 1.89 0 0 0-.94-1.64 2.67 2.67 0 0 0-.36-.14.48.48 0 0 0-.19-.23L88.74.07a.46.46 0 0 0-.41 0 .48.48 0 0 0-.3.29L85 8.15 48.82 29a3.22 3.22 0 0 0-.88.76l-6.23-3.6a.56.56 0 0 0-.42 0 .51.51 0 0 0-.3.29l-7.31 19L.25 64.7a.5.5 0 0 0-.25.43v7a.5.5 0 0 0 .25.43l62.21 35.92a.59.59 0 0 0 .25.07.52.52 0 0 0 .25-.07l62.22-35.92a.5.5 0 0 0 .25-.43v-7a.5.5 0 0 0-.25-.43zm-30.46-7.8l-22.46-13L85.81 8.84l7.57-4.37a.9.9 0 0 1 .9 0 .89.89 0 0 1 .44.77zm-6-55.67l4.13 2.38-6.5 3.75zM48.23 31.8a2.2 2.2 0 0 1 1.09-1.89L84.43 9.64 71.28 43.69 48.23 57V31.8zm-6.52-4.44l5.73 3.31a3.1 3.1 0 0 0-.21 1.13v25.78L25.12 70.34zm5.52 56.87L25.14 71.48l22.09-12.75zM33.1 46.88L23.68 71.3a.19.19 0 0 0 0 .08.31.31 0 0 0 0 .1v.07a.36.36 0 0 0 0 .11.49.49 0 0 0 .16.16l23.64 13.71a.44.44 0 0 0 .23.06.43.43 0 0 0 .22-.06.53.53 0 0 0 .13-.13v-.05a.45.45 0 0 0 .07-.23V58.15l23.43-13.47L95 58.2a.47.47 0 0 0 .25.07.5.5 0 0 0 .43-.25.43.43 0 0 0 .06-.29v-8.89l28.21 16.29-61.24 35.34L1.5 65.13zM1 66l61.21 35.34v5.79L1 71.79zm123.43 5.79l-61.22 35.34v-5.79L124.43 66z'
        dataName='图层 1'
      />
    </g>
  ],
  viewBox
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'SportRorelse'
})
