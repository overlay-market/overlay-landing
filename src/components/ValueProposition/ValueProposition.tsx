import styled from 'styled-components'
import ValuePropImage from '../../assets/images/value-proposition-image.png'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`

const DesktopSplitViewContainer = styled.div`
  display: flex;
  margin: auto;
  max-width: 1100px;
  width: 100%;
`

const PrimaryViewContainer = styled.div`
  margin-top: auto;
  width: 40%;
`

const SecondaryViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 60%;
  width: 60%;
  align-items: end;
`

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: black;
  max-width: 400px;
`

const Description = styled.div`
  max-width: 400px;
  font-size: 18px;
  font-weight: regular;
  color: #7b7b7b;
  margin: 32px 0;
`

const LightArrowButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  padding: 16px;
  border: 1px solid #71ceff;
  border-radius: 10px;
  background: white;
  box-shadow: none;
  outline: none;
  cursor: pointer;
`

const ImageContainer = styled.img`
  max-width: 650px;
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
          <LightArrowButton>Learn More</LightArrowButton>
        </PrimaryViewContainer>
        <SecondaryViewContainer>
          <ImageContainer src={ValuePropImage} />
        </SecondaryViewContainer>
      </DesktopSplitViewContainer>
    </MainContainer>
  )
}

export default ValueProposition
