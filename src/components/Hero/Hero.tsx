import styled from 'styled-components'
import {device} from '../../theme/theme'
import {StyledCTAButton} from '../Button/Button'
import HeroChart from '../../assets/images/hero-chart.png'
import HeroBackground from '../../assets/images/hero-background.png'

const HeroContainer = styled.div`
  display: flex;
  min-height: 480px;
  background: url(${HeroBackground});
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  padding-top: 60px;
  margin-bottom: 45px;

  @media ${device.sm} {
    background-position: center;
  }
`

const SplitViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1115px;
`

const PrimaryViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;

  @media ${device.sm} {
    width: 50%;
  }
`

const SecondaryViewContainer = styled.div`
  display: none;

  @media ${device.sm} {
    display: flex;
    flex-direction: column;
    width: 50%;
    max-width: 50%;
    align-items: center;
  }
`

const Title = styled.div`
  font-family: 'Inter', san-serif;
  font-weight: 600;
  font-size: 48px;
  margin-bottom: 24px;
  max-width: 300px;

  @media ${device.sm} {
    font-size: 69px;
    max-width: none;
  }
`

const Description = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #7b7b7b;
  margin-bottom: 36px;
  max-width: 330px;

  @media ${device.sm} {
    font-size: 20px;
  }
`

const DarkArrowButton = styled(StyledCTAButton)`
  font-family: 'Inter', sans-serif;
  margin-bottom: 48px;
`

const HeroStatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
`

const StatContainer = styled.div`
  display: flex;
  align-items: center;
`

const StatNumber = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-right: 8px;
`

const StatDescription = styled.div`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 12px;
  color: #7d7a76;
`

const MainImage = styled.img`
  max-width: 450px;
`

const Hero = () => {
  return (
    <HeroContainer>
      <SplitViewContainer>
        <PrimaryViewContainer>
          <Title>
            Liquidity for the <i>ILL</i>iquid
          </Title>
          <Description>Explore Overlay - Endless data markets, built on Ethereum</Description>
          <StyledCTAButton>Get Started</StyledCTAButton>
          <HeroStatsContainer>
            <StatContainer>
              <StatNumber>1400+</StatNumber>
              <StatDescription>Users Active</StatDescription>
            </StatContainer>
            |
            <StatContainer>
              <StatNumber>20+</StatNumber>
              <StatDescription>Data Streams</StatDescription>
            </StatContainer>
          </HeroStatsContainer>
        </PrimaryViewContainer>
        <SecondaryViewContainer>
          <MainImage src={HeroChart} />
        </SecondaryViewContainer>
      </SplitViewContainer>
    </HeroContainer>
  )
}

export default Hero
