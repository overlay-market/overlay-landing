import styled from 'styled-components'
import {Icon} from '../Icon/Icon'
import OverlayLogo from '../../assets/images/updated-overlay-icon.png'

const Wrapper = styled.div`
  background: #f0f0f0;
  padding: 75px 0 55px;
`

const FooterContainer = styled.div`
  max-width: 1100px;
  margin: auto;
`

const InteractiveContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const BrandContainer = styled.div``

const LogoContainer = styled.div`
  display: flex;
  cursor: pointer;
`

const LogoDescription = styled.div`
  width: 280px;
  color: #d0d0d0;
  font-size: 12px;
`

const LinksContainer = styled.div``

const Line = styled.div`
  height: 1px;
  width: 100%;
  background: black;
`

const CopyrightText = styled.div`
  font-size: 16px;
  margin-top: 45px;
  text-align: center;
`

interface LinkAsset {
  label: string
  href: string
}

const Links = {
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
          <LinksContainer></LinksContainer>
        </InteractiveContentsContainer>
        <Line />
        <CopyrightText>Copyright 2022 © Overlay Foundation, All Right Reserved</CopyrightText>
      </FooterContainer>
    </Wrapper>
  )
}

export default Footer
