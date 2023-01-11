import styled from 'styled-components'
import './Button.css'

interface StyledCTAButtonProps {
  children: React.ReactNode | string
  href?: string
}

export const StyledCTAButton = ({children, href}: StyledCTAButtonProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <button className="cta-button glow-on-hover">{children}</button>
    </a>
  )
}
