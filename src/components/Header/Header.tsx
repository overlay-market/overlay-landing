import {useState, useEffect} from 'react'
import styled from 'styled-components'
import {device} from '../../theme/theme'
import {ExternalIcon, Icon} from '../Icon/Icon'
import {Menu} from 'react-feather'
import {BlueCTAButton} from '../Button/Button'
import {GENERAL_LINKS} from '../../constants/constants'
import {useLocation} from 'react-router-dom'
import {enableLock, disableLock} from '../../utils/scrollLock'
import MobileMenu from '../MobileMenu/MobileMenu'
import OverlayLogo from '../../assets/images/updated-overlay-icon.png'
import {ReactComponent as DiscordIcon} from '../../assets/icons/discord.svg'
import {ReactComponent as TwitterIcon} from '../../assets/icons/twitter.svg'
import {ReactComponent as MirrorIcon} from '../../assets/icons/mirror.svg'
import {IconButton} from '@material-ui/core'

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

export const FlexRow = styled.div`
  display: flex;
`

export const LogoContainer = styled.div`
  display: flex;
`

const LinksContainer = styled.div`
  display: none;

  @media ${device.lg} {
    display: flex;
    flex-direction: row;
    margin-left: 96px;
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
    align-items: center;
  }
`

interface IconButtonProps {
  href: string
  target: string
  marginRight?: number
  marginLeft?: number
}

export const StyledIconButton = styled(IconButton)<IconButtonProps>(props => ({
  marginRight: props.marginRight ? '42px !important' : 0,
  marginLeft: props.marginLeft ? `${props.marginLeft}px !important` : 0,
  '& svg': {
    height: '22px',
    width: '22px',
  },
  '&:hover': {
    backgroundColor: 'transparent !important',
  },
  '& .MuiTouchRipple-root': {
    display: 'none',
  },
  [`@media ${device.lg}`]: {
    marginRight: props.marginRight ? `${props.marginRight}px !important` : 0,
    marginLeft: '0px !important',
  },
}))

StyledIconButton.defaultProps = {
  disableRipple: true,
}

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
      <FlexRow>
        <LogoContainer>
          <Icon src={OverlayLogo} alt="Overlay Logo" width={200} margin="" />
        </LogoContainer>

        <LinksContainer>
          <StyledLink href={GENERAL_LINKS.DOCUMENTATION} target="_blank" rel="noopener noreferrer">
            Documentation
          </StyledLink>
          <StyledLink href={GENERAL_LINKS.GOVERNANCE} target="_blank" rel="noopener noreferrer">
            Governance
          </StyledLink>
          <StyledLink href={GENERAL_LINKS.WHITEPAPER_V1} target="_blank" rel="noopener noreferrer">
            White Paper
          </StyledLink>
        </LinksContainer>
      </FlexRow>

      <ButtonsContainer>
        {/* <TokenFaucetButton>Get OVL</TokenFaucetButton> */}
        <StyledIconButton href={GENERAL_LINKS.MIRROR} target="_blank">
          <MirrorIcon />
        </StyledIconButton>
        <StyledIconButton href={GENERAL_LINKS.DISCORD} target="_blank">
          <DiscordIcon />
        </StyledIconButton>
        <StyledIconButton
          href={GENERAL_LINKS.TWITTER}
          target="_blank"
          marginLeft={18}
          marginRight={60}
        >
          <TwitterIcon />
        </StyledIconButton>
        <BlueCTAButton href={GENERAL_LINKS.LAUNCH_APP}>Launch App</BlueCTAButton>
      </ButtonsContainer>

      <MobileMenuButton open={open} setOpen={setOpen} />
      <MobileMenu open={open} setOpen={setOpen} />
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
        {!open && <Menu onClick={() => setOpen(!open)} />}
      </ExternalIcon>
    </MobileOnly>
  )
}
