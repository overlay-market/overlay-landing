import styled from 'styled-components'
import {Box} from 'rebass'
import {device} from '../../theme/theme'
import {RightArrowButton} from '../Button/Button'
import {GENERAL_LINKS} from '../../constants/constants'
import HeroChart from '../../assets/images/hero-chart.png'
import OptimizedHeroChart from '../../assets/images/hero-background-btcd.png'
import OptimizedHeroBackground from '../../assets/images/optimized-hero-background.jpg'

const HeroContainer = styled.div`
  display: flex;
  min-height: 350px;
  background: url(${OptimizedHeroBackground});
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  padding: 160px 16px 45px;

  @media ${device.md} {
    min-height: 480px;
  }
`

const SplitViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1115px;
  
  @media ${device.md} {
    padding-left: 64px;
  }
  @media ${device.xl} {
    padding-left: 0;
    max-width: 1100px;
  }
`

const PrimaryViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  
  @media ${device.md} {
    width: 60%;  
  }
  @media ${device.lg} {
    width: 50%;  
  }
`

const SecondaryViewContainer = styled.div`
  display: none;

  @media ${device.lg} {
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

  @media ${device.md} {
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
  line-height: 25px;

  @media ${device.md} {
    font-size: 20px;
  }
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

const HeroStats = () => {
  return (
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
  )
}

const Hero = () => {
  return (
    <HeroContainer>
      <SplitViewContainer>
        <PrimaryViewContainer>
          <Title>
            The Trade Everything Engine
          </Title>
          <Description>The Exotic Perps Dex, native to Arbitrum</Description>
          <Box style={{marginBottom: '40px'}}>
            <RightArrowButton href={GENERAL_LINKS.LAUNCH_APP}>Get Started</RightArrowButton>
          </Box>
        </PrimaryViewContainer>
        <SecondaryViewContainer>
          <MainImage src={OptimizedHeroChart} />
        </SecondaryViewContainer>
      </SplitViewContainer>
    </HeroContainer>
  )
}

export default Hero
