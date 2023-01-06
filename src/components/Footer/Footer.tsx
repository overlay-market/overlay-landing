import styled from 'styled-components'
import {Icon} from '../Icon/Icon'
import OverlayLogo from '../../assets/images/updated-overlay-icon.png'

const Wrapper = styled.div`
  background: #f0f0f0;
  padding: 55px 0;
`

const FooterContainer = styled.div`
  max-width: 1100px;
  margin: auto;
`

const InteractiveContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const BrandContainer = styled.div`
  min-width: 400px;
`

const LogoContainer = styled.div`
  display: flex;
  cursor: pointer;
`

const LogoDescription = styled.div`
  width: 280px;
  color: #d0d0d0;
  font-size: 12px;
`

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding-top: 18px;
`

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

const ColumnTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 6px;
`

const Line = styled.div`
  height: 1px;
  width: 100%;
  background: black;
  margin: 60px 0 45px;
`

const CopyrightText = styled.div`
  font-size: 16px;
  text-align: center;
`

const Link = styled.a`
  display: flex;
  font-size: 15px;
  color: #232323;
  text-decoration: none;
  margin: 10px 0;
`

interface LinkAsset {
  label: string
  href: string
}

/**
 * @TO-DO: Create constant file with Overlay link assets and hrefs
 */

const links = {
  protocol: [
    {label: 'Github', href: ''},
    {label: 'Documentation', href: ''},
    {label: 'Community Docs', href: ''},
    {label: 'Governance', href: ''},
    {label: 'Whitepaper V1', href: ''},
  ] as Array<LinkAsset>,
  connect: [
    {label: 'Discord', href: ''},
    {label: 'Twitter', href: ''},
    {label: 'Mirror.xyz', href: ''},
  ] as Array<LinkAsset>,
  legal: [
    {label: 'Privacy Policy', href: ''},
    {label: 'Terms of Service', href: ''},
  ] as Array<LinkAsset>,
}

const LinkSection = ({title, links}: {title: string; links: Array<LinkAsset>}) => {
  return (
    <LinksColumn>
      <ColumnTitle>{title}</ColumnTitle>
      {links.map(link => (
        <Link href={link.href}>{link.label}</Link>
      ))}
    </LinksColumn>
  )
}

const Footer = () => {
  return (
    <Wrapper>
      <FooterContainer>
        <InteractiveContentsContainer>
          <BrandContainer>
            <LogoContainer>
              <Icon src={OverlayLogo} alt="Overlay Logo" width={200} margin="0" />
            </LogoContainer>
            <LogoDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh in maecenas posuere at
              congue.
            </LogoDescription>
          </BrandContainer>

          <LinksContainer>
            <LinkSection title="Protocol" links={links.protocol} />
            <LinkSection title="Connect" links={links.connect} />
            <LinkSection title="Legal" links={links.legal} />
          </LinksContainer>
        </InteractiveContentsContainer>

        <Line />
        <CopyrightText>Copyright 2022 © Overlay Foundation, All Right Reserved</CopyrightText>
      </FooterContainer>
    </Wrapper>
  )
}

export default Footer
