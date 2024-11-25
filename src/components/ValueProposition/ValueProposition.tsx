import styled from 'styled-components'
import {device} from '../../theme/theme'
import {ExternalIcon} from '../Icon/Icon'
import {ArrowRight} from 'react-feather'
import {StyledCTAButton} from '../Button/Button'
import {GENERAL_LINKS} from '../../constants/constants'
import ValuePropImage from '../../assets/images/value-proposition-image.png'
import ValuePropositionAsset from '../../assets/images/value-proposition-image.png'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 34px 80px;

  @media ${device.md} {
    padding: 80px 16px 0px 40px;
  }
  @media ${device.lg} {
    padding: 80px 16px 80px 40px;
  }
`

const DesktopSplitViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 100%;
  max-width: 1100px;

  @media ${device.md} {
    flex-direction: column;
  }
  @media ${device.lg} {
    flex-direction: row;
  }
`

const PrimaryViewContainer = styled.div`
  margin-top: 0px;

  @media ${device.md} {
    min-width: 50%;
  }
  @media ${device.lg} {
    margin-top: auto;
    min-width: 40%;
  }
`

const SecondaryViewContainer = styled.div`
  display: none;

  @media ${device.md} {
    display: flex;
    justify-content: end;
    position: relative;
    bottom: 90px;
    z-index:-1;
  }
  @media ${device.lg} {
    display: flex;
    bottom: 0px;
    z-index: 0;
  }
`

const Title = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: black;
  max-width: 300px;
  line-height: 42px;

  @media ${device.md} {
    font-size: 36px;
    max-width: 400px;
  }
`

const Description = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #7b7b7b;
  max-width: 400px;
  margin: 32px 0;
  line-height: 150%;
`

const ImageContainer = styled.img`
  max-width: 600px;
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
