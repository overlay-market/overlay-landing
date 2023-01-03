import styled from 'styled-components'
import {device} from '../../theme/theme'

export const HeaderContainer = styled.div`
  display: flex;
  margin-bottom: 64px;
  justify-content: space-evenly;
`

export const LogoContainer = styled.div`
  display: flex;
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const ButtonsContainer = styled.div`
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

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer></LogoContainer>
      <LinksContainer>
        <Link>Governance</Link>
        <Link>Documentation</Link>
      </LinksContainer>
      <ButtonsContainer></ButtonsContainer>
    </HeaderContainer>
  )
}

export default Header
