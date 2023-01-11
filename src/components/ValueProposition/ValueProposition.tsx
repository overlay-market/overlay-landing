import styled from 'styled-components'
import {device} from '../../theme/theme'
import {ExternalIcon} from '../Icon/Icon'
import {ArrowRight} from 'react-feather'
import {StyledCTAButton} from '../Button/Button'
import {GENERAL_LINKS} from '../../constants/constants'
import ValuePropImage from '../../assets/images/value-proposition-image.png'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 45px 16px;
`

const DesktopSplitViewContainer = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  max-width: 1100px;
`

const PrimaryViewContainer = styled.div`
  margin-top: auto;

  @media ${device.sm} {
    width: 40%;
  }
`

const SecondaryViewContainer = styled.div`
  display: none;

  @media ${device.sm} {
    display: flex;
    flex-direction: column;
    align-items: end;
  }
`

const Title = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 600;
  color: black;
  max-width: 300px;

  @media ${device.sm} {
    font-size: 36px;
    max-width: 400px;
  }
`

const Description = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  line-height: 150%;
  color: #7b7b7b;
  max-width: 400px;
  margin: 32px 0;
`

const ImageContainer = styled.img`
  max-width: 600px;
  margin: auto;
`

const ValueProposition = () => {
  return (
    <MainContainer>
      <DesktopSplitViewContainer>
        <PrimaryViewContainer>
          <Title>Say Goodbye to Liquidity Pools and Counter Parties</Title>
          <Description>
            Overlay is built from the ground up with OVL, a cryptocurrency that longs/shorts DeFi
            data streams and much, much more.
          </Description>
          <StyledCTAButton href={GENERAL_LINKS.COMMUNITY_DOCS}>
            Learn More
            <ExternalIcon margin={'4px'}>
              <ArrowRight size={16} />
            </ExternalIcon>
          </StyledCTAButton>
        </PrimaryViewContainer>
        <SecondaryViewContainer>
          <ImageContainer src={ValuePropImage} />
        </SecondaryViewContainer>
      </DesktopSplitViewContainer>
    </MainContainer>
  )
}

export default ValueProposition
