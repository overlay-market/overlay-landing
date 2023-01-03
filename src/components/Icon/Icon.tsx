import React from 'react'
import styled from 'styled-components/macro'

interface IconContainerProps {
  height?: number
  width?: number
  margin: string
  children?: React.ReactNode
}

export const IconContainer = styled.div<IconContainerProps>`
  height: ${props => (props.height ? props.height + 'px' : 'auto')};
  width: ${props => (props.width ? props.width + 'px' : 'auto')};
  margin: ${props => props.margin};

  img {
    height: 100%;
    width: 100%;
  }
`

interface IconProps {
  src: string
  alt: string
  height?: number
  width?: number
  margin: string
}

export const Icon: React.FC<IconProps> = ({src, alt, height, width, margin}) => {
  return (
    <IconContainer height={height} width={width} margin={margin}>
      <img src={src} alt={alt} loading="lazy" />
    </IconContainer>
  )
}
