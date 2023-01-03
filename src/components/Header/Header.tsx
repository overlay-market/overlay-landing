import styled from 'styled-components'
import {device} from '../../theme/theme'
import {IconContainer} from '../Icon/Icon'

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

const StyledIconContainer = styled(IconContainer)`
  @media ${device.lg} {
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <LogoContainer></LogoContainer>
      <LinksContainer></LinksContainer>
      <ButtonsContainer></ButtonsContainer>
    </HeaderContainer>
  )
}

export default Header
