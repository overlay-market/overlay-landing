import styled from 'styled-components'
import {TwitterTimelineEmbed} from 'react-twitter-embed'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: 100%;
  margin: auto;
  padding: 45px 0;
`

const Title = styled.div`
  font-size: 54px;
  font-weight: bold;
  width: 100%;
  text-align: left;
  border-bottom: 1px solid #232323;
  padding-bottom: 30px;
`

const CarouselContainer = styled.div`
  display: flex;
  padding-top: 45px;
`

const TwitterEmbedContainer = styled.div`
  width: 350px;
  height: 700px;
`

const MediaCarousel = () => {
  return (
    <MainContainer>
      <Title>Latest Updates</Title>
      <CarouselContainer>
        <TwitterEmbedContainer>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="OverlayProtocol"
            options={{height: 700}}
          />
        </TwitterEmbedContainer>
      </CarouselContainer>
    </MainContainer>
  )
}

export default MediaCarousel
