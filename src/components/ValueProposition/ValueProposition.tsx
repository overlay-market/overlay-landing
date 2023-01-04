import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`

const DesktopSplitViewContainer = styled.div`
  display: flex;
  margin: auto;
`

const PrimaryViewContainer = styled.div`
  width: 40%;
`

const SecondaryViewContainer = styled.div``

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: black;
`

const Description = styled.div`
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
        <SecondaryViewContainer></SecondaryViewContainer>
      </DesktopSplitViewContainer>
    </MainContainer>
  )
}

export default ValueProposition
