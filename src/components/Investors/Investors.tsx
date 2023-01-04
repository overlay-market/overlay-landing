import styled from 'styled-components'
import InvestorsPanelDesktop from '../../assets/images/investors-desktop.png'

const Wrapper = styled.div`
  padding-top: 90px;
  padding-bottom: 60px;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: auto;
`

const Breakline = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  height: 1px;
`

const TextContainer = styled.div`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin: 48px 0;
`

const DesktopInvestorsPanel = styled.img``

const Investors = () => {
  return (
    <Wrapper>
      <MainContainer>
        <Breakline />
        <TextContainer>Backed by the best</TextContainer>
        <DesktopInvestorsPanel src={InvestorsPanelDesktop} />
      </MainContainer>
    </Wrapper>
  )
}

export default Investors
