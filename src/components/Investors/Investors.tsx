import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 90px;
  padding-bottom: 60px;
`

const MainContainer = styled.div`
  display: flex;
  max-width: 1100px;
  margin: auto;
`

const Breakline = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  height: 1px;
`

const DesktopInvestorsPanel = styled.img``

const Investors = () => {
  return (
    <Wrapper>
      <MainContainer>
        <Breakline />
        <DesktopInvestorsPanel />
      </MainContainer>
    </Wrapper>
  )
}

export default Investors
