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
  padding: 0 16px;
`

const Text = styled.div`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  border-top: 1px solid black;
  padding-top: 48px;
  margin-bottom: 48px;
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
