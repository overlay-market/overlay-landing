import styled from 'styled-components'
import {device} from '../../theme/theme'
import {ExternalIcon} from '../Icon/Icon'
import {ArrowRight} from 'react-feather'
import {StyledCTAButton} from '../Button/Button'
import {GENERAL_LINKS} from '../../constants/constants'
import ValuePropositionAsset from '../../assets/images/value-proposition-image.png'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 16px;
`

const DesktopSplitViewContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 100%;
  max-width: 1100px;
  @media ${device.sm} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media ${device.lg} {
    flex-direction: row;
  }
`

const PrimaryViewContainer = styled.div`
  @media ${device.lg} {
    width: 40%;
  }
`

const SecondaryViewContainer = styled.div`
  display: none;

  @media ${device.sm} {
    display: flex;
  }
`

const Title = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: #232323;
  max-width: 300px;
  line-height: 42px;

  @media ${device.sm} {
    font-size: 36px;
    max-width: 400px;
  }
`

const Description = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #232323;
  max-width: 400px;
  margin: 32px 0;
  line-height: 150%;
`

const ImageContainer = styled.img`
  max-width: 600px;
  margin: auto;
  @media (min-width: 1100px) {
    max-width: 747px;
  }
`

const ValueProposition = () => {
  return (
    <MainContainer>
      <DesktopSplitViewContainer>
        <PrimaryViewContainer>
          <Title>Say Goodbye to Liquidity Pools and Counter Parties</Title>
          <Description>
            Overlay is built from the ground up with OV, a cryptocurrency that longs/shorts DeFi
            data streams and much, much more.
          </Description>
          <StyledCTAButton href={GENERAL_LINKS.DOCUMENTATION}>
            Learn More
            <ExternalIcon margin={'4px'}>
              <ArrowRight size={16} />
            </ExternalIcon>
          </StyledCTAButton>
        </PrimaryViewContainer>
        <SecondaryViewContainer>
          <ImageContainer src={ValuePropositionAsset} />
        </SecondaryViewContainer>
      </DesktopSplitViewContainer>
    </MainContainer>
  )
}

export default ValueProposition
