import styled from 'styled-components'
import {device} from '../../theme/theme'
import {Icon} from '../Icon/Icon'
import OverlayLogo from '../../assets/images/updated-overlay-icon.png'
import {LINKS} from '../../constants/constants'
import getCurrentYear from '../../hooks/getCurrentYear'

const Wrapper = styled.div`
  background: #f0f0f0;
  padding: 35px 16px;

  @media ${device.sm} {
    padding: 55px 16px;
  }
`

const FooterContainer = styled.div`
  max-width: 1100px;
  margin: auto;
`

const InteractiveContentsContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.sm} {
    flex-direction: row;
  }
`

const BrandContainer = styled.div`
  width: auto;
  margin-bottom: 20px;

  @media ${device.sm} {
    min-width: 400px;
  }
`

const LogoContainer = styled.div`
  display: flex;
  margin-bottom: 12px;
`

// const LogoDescription = styled.div`
//   width: 280px;
//   color: #d0d0d0;
//   font-size: 12px;
// `

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  padding: 18px 0px 0px 18px;

  @media ${device.sm} {
    padding: 18px 0px 0px 0px;
  }
`

const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 40%;
  margin-bottom: 25px;

  @media ${device.sm} {
    width: auto;
  }
`

const ColumnTitle = styled.div`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 6px;
`

const Line = styled.div`
  height: 1px;
  width: 100%;
  background: black;
  margin: 60px 0 45px;
`

const CopyrightText = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  text-align: center;
  line-height: 20px;
`

const Link = styled.a`
  font-family: 'Inter', sans-serif;
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
  const currentYear = getCurrentYear()

  return (
    <Wrapper>
      <FooterContainer>
        <InteractiveContentsContainer>
          <BrandContainer>
            <LogoContainer>
              <Icon src={OverlayLogo} alt="Overlay Logo" width={200} margin="0" />
            </LogoContainer>
            {/* <LogoDescription>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh in maecenas posuere at
                congue.
              </LogoDescription> */}
          </BrandContainer>

          <LinksContainer>
            <LinkSection title="Protocol" links={LINKS.protocol} />
            <LinkSection title="Connect" links={LINKS.connect} />
            <LinkSection title="Legal" links={LINKS.legal} />
          </LinksContainer>
        </InteractiveContentsContainer>

        <Line />
        <CopyrightText>
          Copyright {currentYear} © Overlay Foundation, All Rights Reserved
        </CopyrightText>
      </FooterContainer>
    </Wrapper>
  )
}

export default Footer
