import styled from 'styled-components'
import {MEDIA_WIDTHS, device} from '../../theme/theme'
import {RightArrowButton} from '../Button/Button'
import {GENERAL_LINKS} from '../../constants/constants'
import HeroChart from '../../assets/images/hero-chart.png'
import OptimizedHeroChart from '../../assets/images/hero-background-ai.png'
import HeroImageDesktop from '../../assets/images/hero-image-desktop.png'
import HeroImageMobile from '../../assets/images/hero-image-mobile.png'
import OptimizedHeroBackground from '../../assets/images/optimized-hero-background.jpg'
import {useEffect, useState} from 'react'
import MarketCardsCarousel from './MarketCardsCarousel'

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${OptimizedHeroBackground});
  background-position: left;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  padding: 160px 16px 45px;

  @media ${device.sm} {
    background-position: center;
    justify-content: flex-end;
    align-items: end;
  }
`

const SplitViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1115px;
  margin: 0 auto;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const PrimaryViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  position: relative;
  z-index: 100;
  @media ${device.sm} {
    width: 50%;
  }
`

const SecondaryViewContainer = styled.div`
  display: none;

  @media ${device.sm} {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 50%;
    max-width: 50%;
  }
`

const ButtonContainer = styled.div`
  margin-bottom: 40px;
  padding-top: 20px;
  position: relative;
  top: 0;

  @media ${device.sm} {
    top: -140px;
    margin-bottom: -120px;
  }
  @media ${device.lg} {
    top: -80px;
    margin-bottom: -80px;
  }
`

const Title = styled.div`
  font-family: 'Inter', san-serif;
  font-weight: 600;
  font-size: 48px;
  margin-bottom: 24px;
  max-width: 300px;

  @media ${device.sm} {
    font-size: 56px;
    max-width: none;
  }
  @media ${device.lg} {
    font-size: 69px;
  }
`

const Description = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: #7b7b7b;
  margin-bottom: 36px;
  line-height: 160%; /* 32px */

  @media ${device.sm} {
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

const HeroImage = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MEDIA_WIDTHS.sm)
    }

    // Set initial value
    handleResize()

    // Add event listener
    window.addEventListener('resize', handleResize)

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div style={{display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start'}}>
      <img
        src={isMobile ? HeroImageMobile : HeroImageDesktop}
        alt="Hero"
        style={{width: isMobile ? '375px' : '537px', paddingBottom: '25px'}}
      />
    </div>
  )
}

const Hero = () => {
  return (
    <HeroContainer>
      <SplitViewContainer>
        <TitleContainer>
          <PrimaryViewContainer>
            <Title>The Trade Everything Engine</Title>
            <Description>The Exotic Perps Dex</Description>
          </PrimaryViewContainer>
          <SecondaryViewContainer>
            <MainImage src={OptimizedHeroChart} />
          </SecondaryViewContainer>
        </TitleContainer>

        <MarketCardsCarousel />
        <ButtonContainer>
          <RightArrowButton href={GENERAL_LINKS.LAUNCH_APP}>Start Trading</RightArrowButton>
        </ButtonContainer>
      </SplitViewContainer>
    </HeroContainer>
  )
}

export default Hero
