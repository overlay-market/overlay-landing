import styled from 'styled-components'
import PCD_Carousel from '../../assets/PCD-carousel.png'

const Container = styled.div`
  display: block;
  overflow-x: hidden !important;
`

const Carousel = styled.img`
  position: absolute;
  bottom: 0;
  animation: moveSlideshow 100s linear infinite;
  height: 33%;

  @keyframes moveSlideshow {
    100% {
      transform: translateX(-66.6666%);
    }
  }
`

export const DynamicCarousel = () => {
  return (
    <Container>
      <Carousel src={PCD_Carousel} />
    </Container>
  )
}
