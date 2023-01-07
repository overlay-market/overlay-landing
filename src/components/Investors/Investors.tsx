import styled from 'styled-components'
import InvestorsPanelDesktop from '../../assets/images/investors-list-desktop.png'

const Wrapper = styled.div`
  padding: 45px 0;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: auto;
  border-top: 1px solid black;
`

const Text = styled.div`
  font-family: 'Be Vietnam Pro', sans-serif;
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
        <Text>Backed by the best</Text>
        <DesktopInvestorsPanel src={InvestorsPanelDesktop} />
      </MainContainer>
    </Wrapper>
  )
}

export default Investors
