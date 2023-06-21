import React from 'react'
import styled from 'styled-components/macro'

interface IconContainerProps {
  height?: number
  width?: number
  margin: string
  children?: React.ReactNode
}

const IconContainer = styled.div<IconContainerProps>`
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

const ExternalIconWrapper = styled.div<{
  height?: number
  width?: number
  margin?: string
  color?: string
  transform?: string
  clickable?: boolean
  position?: string
  top?: string
  right?: string
  left?: string
  bottom?: string
  center?: boolean
  alignCenter?: boolean
}>`
  display: flex;
  height: ${({height}) => height}px;
  width: ${({width}) => width}px;
  margin: ${({margin}) => margin ?? margin};
  color: ${({color}) => (color ? color : 'inherit')};
  transform: ${({transform}) => (transform ? transform : 'rotate(0deg)')};
  transition: transform 0.2s ease-out;
  cursor: ${({clickable}) => (clickable ? 'pointer' : 'default')};
  z-index: 10;
  top: ${({top}) => top ?? top};
  right: ${({right}) => right ?? right};
  left: ${({left}) => left ?? left};
  bottom: ${({bottom}) => bottom ?? bottom};
  position: ${({position}) => (position ? position : 'auto')};
  justify-content: ${({center}) => (center ? 'center' : 'auto')};
  align-items: ${({alignCenter}) => (alignCenter ? 'center' : 'initial')};
`

type ExternalIconProps = {
  height?: number
  width?: number
  margin?: string
  children: React.ReactNode
  color?: string
  transform?: string
  clickable?: boolean
  onClick?: (event: any) => any
  top?: string
  right?: string
  left?: string
  bottom?: string
  position?: string
  center?: boolean
  alignCenter?: boolean
}

export const ExternalIcon = ({
  height,
  width,
  margin,
  children,
  color,
  transform,
  clickable,
  onClick,
  top,
  right,
  left,
  bottom,
  position,
  center,
  alignCenter,
}: ExternalIconProps) => {
  return (
    <ExternalIconWrapper
      height={height}
      width={width}
      margin={margin}
      color={color}
      transform={transform}
      clickable={clickable}
      onClick={onClick}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
      position={position}
      center={center}
      alignCenter={alignCenter}
    >
      {children}
    </ExternalIconWrapper>
  )
}
