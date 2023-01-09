import styled from 'styled-components'
import {device} from '../../theme/theme'
import NewsBrandsLogos from '../../assets/images/news-brands-desktop.png'
import CoindeskLogo from '../../assets/images/coindesk-brand-logo.png'
import BloombergLogo from '../../assets/images/bloomberg-brand-logo.png'
import MessariLogo from '../../assets/images/messari-brand-logo.png'
import Background from '../../assets/images/news-background.png'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 135px 0;
  background: url(${Background});
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
  padding: 40px 0;
  margin: auto;
  width: 1100px;
  max-width: 1100px;
  border-top: 0.5px solid #232323;
  border-bottom: 0.5px solid #232323;

  @media ${device.sm} {
    flex-direction: row;
  }
`

const LogoContainer = styled.div`
  display: flex;
  width: 100%;
  min-width: 215px;

  @media ${device.sm} {
    width: 33%;
  }
`

const Logo = styled.img`
  margin: auto;
  width: 215px;
`

const NewsPlatformLogo = ({src}: {src: string}) => {
  return (
    <LogoContainer>
      <Logo src={src} />
    </LogoContainer>
  )
}

const News = () => {
  return (
    <MainContainer>
      <Title>Overlay in the news</Title>
      <NewsPlatformContainer>
        <NewsPlatformLogo src={CoindeskLogo} />
        <NewsPlatformLogo src={BloombergLogo} />
        <NewsPlatformLogo src={MessariLogo} />
      </NewsPlatformContainer>
    </MainContainer>
  )
}

export default News
