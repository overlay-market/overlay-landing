import styled from 'styled-components'
import HeroChart from '../../assets/images/hero-chart.png'
import HeroBackground from '../../assets/images/hero-background.png'

const HeroContainer = styled.div`
  display: flex;
  min-height: 625px;
  background: url(${HeroBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  margin-bottom: 45px;
`

const SplitViewContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1200px;
`

const PrimaryViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

const SecondaryViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 50%;
  align-items: center;
`

const HeroTitleContainer = styled.div`
  font-size: 69px;
  margin-bottom: 24px;
`

const HeroDescriptionContainer = styled.div`
  font-size: 20px;
  color: #232323;
  margin-bottom: 36px;
`

const DarkArrowButton = styled.button`
  background: black;
  color: #f9f9fb;
  border-radius: 10px;
  font-size: 20px;
  box-shadow: none;
  outline: none;
  border: none;
  padding: 16px 24px;
  width: fit-content;
  cursor: pointer;
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
          <HeroTitleContainer>Liquidity for the ILLiquid</HeroTitleContainer>
          <HeroDescriptionContainer>
            Explore Overlay - Endless data markets, built on Ethereum
          </HeroDescriptionContainer>
          <DarkArrowButton>Get Started</DarkArrowButton>
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
