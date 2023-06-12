import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {bool} from 'prop-types'
import {GENERAL_LINKS, LINKS, LinkAsset} from '../../constants/constants'
import {ExternalIcon, Icon} from '../Icon/Icon'
import {X} from 'react-feather'
import OverlayLogo from '../../assets/images/updated-overlay-icon.png'
import {BlueCTAButton} from '../Button/Button'

const StyledMenu = styled.div<{open: boolean}>`
  display: flex;
  flex-direction: column;
  background: transparent;
  height: 100vh;
  text-align: left;
  width: 100%;
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  overflow: scroll;
  opacity: ${({open}) => (open ? 1 : 0)};
  z-index: ${({open}) => (open ? 1 : -1)};
  visibility: ${({open}) => (open ? 'default' : 'hidden')};
`

const TopBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px 16px 16px;
`

const LogoContainer = styled.div`
  display: flex;
`

const LaunchButtonContainer = styled.div`
  padding-left: 2rem;
`

const StyledInternalLink = styled(NavLink)`
  color: #f7f7f7;
  font-size: 32px;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  margin: 16px 0;
  border: none !important;

  :focus {
    outline: none;
    text-decoration: none;
  }
  :hover {
    outline: none;
    text-decoration: none;
  }
  :active {
    outline: none;
    text-decoration: none;
  }
`

const StyledExternalLink = styled.a.attrs(props => ({
  target: props.target || '_blank',
  rel: props.rel || 'noopener noreferrer',
  href: props.href,
}))`
  display: flex;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  text-align: left;
  text-decoration: none;
  color: #232323;
  font-weight: 400;
  margin: 20px 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`

const LinksColumn = styled.div`
  margin-bottom: 40px;
`

const ColumnTitle = styled.div`
  font-family: 'Be Vietnam Pro', sans-serif;
  color: #232323;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
`

const LinkSection = ({
  title,
  links,
  tabIndex,
}: {
  title: string
  links: Array<LinkAsset>
  tabIndex: number
}) => {
  return (
    <LinksColumn>
      <ColumnTitle>{title}</ColumnTitle>
      {links.map(link => (
        <StyledExternalLink tabIndex={tabIndex} href={link.href}>
          {link.label}
        </StyledExternalLink>
      ))}
    </LinksColumn>
  )
}

const MobileMenu = ({open, setOpen, ...props}: {open: boolean; setOpen: Function; props?: any}) => {
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  return (
    <StyledMenu aria-hidden={isHidden} open={open} {...props}>
      <TopBarContainer>
        <LogoContainer>
          <Icon src={OverlayLogo} alt="Overlay Logo" width={200} margin="" />
        </LogoContainer>

        <ExternalIcon width={40} alignCenter={true} center={true}>
          <X onClick={() => setOpen(!open)} strokeWidth={1.5} />
        </ExternalIcon>
      </TopBarContainer>

      <LaunchButtonContainer>
        <BlueCTAButton href={GENERAL_LINKS.LAUNCH_APP}>Launch App</BlueCTAButton>
      </LaunchButtonContainer>

      <Content>
        <LinkSection title="Connect" links={LINKS.connect} tabIndex={tabIndex} />
        <LinkSection title="Protocol" links={LINKS.protocol} tabIndex={tabIndex} />
        <LinkSection title="Legal" links={LINKS.legal} tabIndex={tabIndex} />
      </Content>
    </StyledMenu>
  )
}

MobileMenu.propTypes = {
  open: bool.isRequired,
}

export default MobileMenu
