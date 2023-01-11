import styled from 'styled-components'
import {ExternalIcon} from '../Icon/Icon'
import {ArrowRight} from 'react-feather'
import './Button.css'

interface StyledCTAButtonProps {
  children: React.ReactNode | string
  href?: string
}

const StyledLink = styled.a`
  text-decoration: none;
`

export const StyledCTAButton = ({children, href}: StyledCTAButtonProps) => {
  return (
    <StyledLink href={href} target="_blank" rel="noopener noreferrer">
      <button className="cta-button glow-on-hover">{children}</button>
    </StyledLink>
  )
}

export const RightArrowButton = ({children, href}: StyledCTAButtonProps) => {
  return (
    <StyledCTAButton href={href}>
      {children}
      <ExternalIcon margin={'4px'}>
        <ArrowRight size={16} />
      </ExternalIcon>
    </StyledCTAButton>
  )
}
