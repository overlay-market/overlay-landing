import styled from 'styled-components'
import {device} from '../../theme/theme'
import MessariLogo from '../../assets/images/messari-brand-logo.png'
import NewsBackground from '../../assets/images/news-background.jpg'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 80px 34px;
  background: url(${NewsBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.md} {
    padding: 80px 40px;
  }
`

const Title = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 24px;
`

const NewsPlatformContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 40px 0;
  width: 100%;
  max-width: 1100px;
  border-top: 0.5px solid #232323;
  border-bottom: 0.5px solid #232323;

  @media ${device.md} {
    flex-direction: row;
  }
`

const LogoContainer = styled.a`
  display: flex;
  width: 100%;
  min-width: 215px;
  max-height: 75px;
`

const Logo = styled.img`
  margin: 16px auto;
  width: 215px;

  @media ${device.md} {
    margin: auto;
  }
`

interface NewsPlatformLogoProps {
  src: string
  alt: string
  href?: string
}

const NewsPlatformLogo = ({src, alt, href}: NewsPlatformLogoProps) => {
  return (
    <LogoContainer href={href} target="_blank" rel="noopener noreferrer">
      <Logo src={src} alt={alt} />
    </LogoContainer>
  )
}

const News = () => {
  const MessariLink = 'https://messari.io/report/overlay-an-exchange-for-unexplored-markets'

  return (
    <MainContainer>
      <Title>Overlay in the news</Title>
      <NewsPlatformContainer>
        <NewsPlatformLogo src={MessariLogo} alt="Messari Logo" href={MessariLink} />
      </NewsPlatformContainer>
    </MainContainer>
  )
}

export default News
