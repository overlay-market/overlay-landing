import styled from 'styled-components'
import {ExternalIcon} from '../Icon/Icon'
import {ArrowRight} from 'react-feather'
import './Button.css'

interface StyledCTAButtonProps {
  children: React.ReactNode | string
  href?: string
}

const StyledLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`

export const StyledCTAButton = ({children, href}: StyledCTAButtonProps) => {
  return (
    <StyledLink href={href} target="_blank" rel="noopener noreferrer">
      <button className="cta-button linear-bg">{children}</button>
    </StyledLink>
  )
}

export const BlueCTAButton = ({children, href}: StyledCTAButtonProps) => {
  return (
    <StyledLink href={href} target="_blank" rel="noopener noreferrer">
      <button className="cta-button linear-bg" style={{fontSize: '16px'}}>
        {children}
      </button>
    </StyledLink>
  )
}

export const RightArrowButton = ({children, href}: StyledCTAButtonProps) => {
  return (
    <StyledCTAButton href={href}>
      {children}
      <ExternalIcon margin={'0 0 0 4px'}>
        <ArrowRight size={20} />
      </ExternalIcon>
    </StyledCTAButton>
  )
}
