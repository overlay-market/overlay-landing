import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {device} from '../../theme/theme'
import {ExternalIcon, Icon} from '../Icon/Icon'
import {Menu, X} from 'react-feather'
import {BlueCTAButton} from '../Button/Button'
import {GENERAL_LINKS} from '../../constants/constants'
import {useLocation} from 'react-router-dom'
import {enableLock, disableLock} from '../../utils/scrollLock'
import MobileMenu from '../MobileMenu/MobileMenu'
import OverlayLogo from '../../assets/images/updated-overlay-icon.png'

export const HeaderContainer = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  font-family: 'Inter', sans-serif;
  max-width: 1200px;
  justify-content: space-between;
  margin: 16px;

  @media ${device.sm} {
    margin: 32px auto 64px;
    padding: 0 16px;
  }
`

export const LogoContainer = styled.div`
  display: flex;
`

const LinksContainer = styled.div`
  display: none;

  @media ${device.sm} {
    display: flex;
    flex-direction: row;
  }
`

const StyledLink = styled.a`
  display: flex;
  color: black;
  text-decoration: none;
  font-weight: bold;
  margin: auto 16px;
  cursor: pointer;
`

const ButtonsContainer = styled.div`
  display: none;

  @media ${device.sm} {
    display: flex;
    flex-direction: row;
  }
`

const MobileOnly = styled.div`
  display: flex;
  margin-right: 8px;

  @media ${device.sm} {
    display: none;
  }
`

const TokenFaucetButton = styled.button`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  background: transparent;
  border: none;
  box-shadow: none;
  padding: 8px 16px;
  margin-right: 48px;
  font-weight: bold;
  cursor: pointer;
`

const Header = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation().pathname

  // close menu when at new route
  useEffect(() => {
    if (open) {
      setOpen(open => false)
    }
  }, [location])

  // disable scroll when mobile menu open
  useEffect(() => {
    if (open) {
      enableLock()
    } else {
      disableLock()
    }
  }, [open])

  return (
    <HeaderContainer>
      <LogoContainer>
        <Icon src={OverlayLogo} alt="Overlay Logo" width={200} margin="" />
      </LogoContainer>

      <LinksContainer>
        <StyledLink href={GENERAL_LINKS.GOVERNANCE} target="_blank">
          Governance
        </StyledLink>
        <StyledLink href={GENERAL_LINKS.DOCUMENTATION} target="_blank">
          Documentation
        </StyledLink>
      </LinksContainer>

      <ButtonsContainer>
        {/* <TokenFaucetButton>Get OVL</TokenFaucetButton> */}
        <BlueCTAButton href={GENERAL_LINKS.LAUNCH_APP}>Launch App</BlueCTAButton>
      </ButtonsContainer>

      <MobileMenuButton open={open} setOpen={setOpen} />
      <MobileMenu open={open} />
    </HeaderContainer>
  )
}

export default Header

interface MobileMenuButtonProps {
  open: boolean
  setOpen: Function
}

const MobileMenuButton = ({open, setOpen}: MobileMenuButtonProps) => {
  return (
    <MobileOnly>
      <ExternalIcon margin="auto" width={40} center={true}>
        {open && <X onClick={() => setOpen(!open)} />}
        {!open && <Menu onClick={() => setOpen(!open)} />}
      </ExternalIcon>
    </MobileOnly>
  )
}
