import styled from 'styled-components'

const Wrapper = styled.div``

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  margin: auto;
`

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  width: 370px;
`

const Description = styled.div`
  font-size: 18px;
  color: #808182;
  margin: 24px 0;
  width: 430px;
`

const ArrowIconLink = styled.a``

const Audits = () => {
  return (
    <Wrapper>
      <MainContainer>
        <Title>Security at the heart of production</Title>
        <Description>
          Overlay Protocol has gone through two rigorous audits with some of the best, and continues
          to have open bounties for smart contract security bugs.
        </Description>
        <ArrowIconLink href="#">Explore bounties</ArrowIconLink>
      </MainContainer>
    </Wrapper>
  )
}

export default Audits
