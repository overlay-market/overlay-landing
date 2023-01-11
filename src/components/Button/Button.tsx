import styled from 'styled-components'
import './Button.css'

interface StyledCTAButtonProps {
  children: React.ReactNode | string
}

export const StyledCTAButton = ({children}: StyledCTAButtonProps) => {
  return <button className="cta-button glow-on-hover">{children}</button>
}
