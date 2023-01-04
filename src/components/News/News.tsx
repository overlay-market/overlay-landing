import styled from 'styled-components'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 45px 0;
`

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const NewsPlatformContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 0.5px solid #232323;
  border-bottom: 0.5px solid #232323;
`

const News = () => {
  return (
    <MainContainer>
      <Title>Overlay in the news</Title>
      <NewsPlatformContainer></NewsPlatformContainer>
    </MainContainer>
  )
}

export default News
