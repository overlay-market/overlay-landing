import styled from 'styled-components'
import {device} from '../../theme/theme'

export const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: 64px;
  justify-content: space-evenly;
`

export const LogoContainer = styled.div`
  display: flex;
  cursor: pointer;
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Link = styled.a`
  color: black;
  text-decoration: none;
  font-weight: bold;
  margin: 0 16px;
  cursor: pointer;
`

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const TokenFaucetButton = styled.button`
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 8px 16px;
  margin-right: 48px;
`

const AppButton = styled.button`
  background: #71ceff;
  border-radius: 5px;
  border: none;
  box-shadow: none;
  padding: 8px 16px;
`

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer>Overlay</LogoContainer>

      <LinksContainer>
        <Link>Governance</Link>
        <Link>Documentation</Link>
      </LinksContainer>

      <ButtonsContainer>
        <TokenFaucetButton>Get OVL</TokenFaucetButton>
        <AppButton>Launch App</AppButton>
      </ButtonsContainer>
    </HeaderContainer>
  )
}

export default Header
