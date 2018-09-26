import React from 'react'
import styled, { css } from 'styled-components'

const width = '493'
const height = '493'
const viewBox = '0 0 493 493'

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
      d='M492.719 166.008c0-73.486-59.573-133.056-133.059-133.056-47.985 0-89.891 25.484-113.302 63.569-23.408-38.085-65.332-63.569-113.316-63.569C59.556 32.952 0 92.522 0 166.008c0 40.009 17.729 75.803 45.671 100.178l188.545 188.553a17.17 17.17 0 0 0 24.284 0l188.545-188.553c27.943-24.375 45.674-60.169 45.674-100.178z'
      key='key-0'
    />
  ],
  viewBox
}

export default Object.assign(Image, {
  getDimensions,
  getDimensionsCss,
  defaultProps,
  displayName: 'Heartfilled'
})
