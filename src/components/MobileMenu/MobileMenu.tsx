import styled from 'styled-components'
import {GENERAL_LINKS, LINKS, LinkAsset} from '../../constants/constants'
import {ExternalIcon, Icon} from '../Icon/Icon'
import {X} from 'react-feather'
import OverlayLogo from '../../assets/images/updated-overlay-icon.webp'
import {BlueCTAButton} from '../Button/Button'

const StyledMenu = styled.div<{open: boolean}>`
  display: flex;
  flex-direction: column;
  background: white;
  height: 100vh;
  text-align: left;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  overflow: scroll;
  opacity: ${({open}) => (open ? 1 : 0)};
  z-index: 999;
  visibility: ${({open}) => (open ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding-left: 2rem;
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
        <BlueCTAButton href={GENERAL_LINKS.LISTING_APPLICATION}>Listing Application</BlueCTAButton>
      </LaunchButtonContainer>

      <Content>
        <LinkSection title="Connect" links={LINKS.connect} tabIndex={tabIndex} />
        <LinkSection title="Protocol" links={LINKS.protocol} tabIndex={tabIndex} />
        <LinkSection title="Legal" links={LINKS.legal} tabIndex={tabIndex} />
      </Content>
    </StyledMenu>
  )
}

export default MobileMenu
