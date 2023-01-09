import styled from 'styled-components'
import {device} from '../../theme/theme'
import CoindeskLogo from '../../assets/images/coindesk-brand-logo.png'
import BloombergLogo from '../../assets/images/bloomberg-brand-logo.png'
import MessariLogo from '../../assets/images/messari-brand-logo.png'
import NewsBackground from '../../assets/images/news-background.png'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 135px 0;
  background: url(${NewsBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
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
  margin: auto;
  padding: 40px 0;
  width: 100%;
  max-width: 1100px;
  border-top: 0.5px solid #232323;
  border-bottom: 0.5px solid #232323;

  @media ${device.sm} {
    flex-direction: row;
    width: 1100px;
  }
`

const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 215px;
`

const Logo = styled.img`
  margin: 16px auto;
  width: 215px;

  @media ${device.sm} {
    margin: auto;
  }
`

const NewsPlatformLogo = ({src, alt}: {src: string; alt: string}) => {
  return (
    <LogoContainer>
      <Logo src={src} alt={alt} />
    </LogoContainer>
  )
}

const News = () => {
  return (
    <MainContainer>
      <Title>Overlay in the news</Title>
      <NewsPlatformContainer>
        <NewsPlatformLogo src={CoindeskLogo} alt="Coindesk Logo" />
        <NewsPlatformLogo src={BloombergLogo} alt="Bloomberg Logo" />
        <NewsPlatformLogo src={MessariLogo} alt="Messari Logo" />
      </NewsPlatformContainer>
    </MainContainer>
  )
}

export default News
