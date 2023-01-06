import styled from 'styled-components'
import {TwitterTimelineEmbed} from 'react-twitter-embed'

const MainContainer = styled.div``

const MediaCarousel = () => {
  return (
    <MainContainer>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="OverlayProtocol"
        options={{height: 400}}
      />
    </MainContainer>
  )
}

export default MediaCarousel
