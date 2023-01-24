import styled from 'styled-components'
import PCD_Carousel from '../../assets/images/PCD-carousel.jpg'

const Container = styled.div<{height?: number}>`
  display: block;
  position: relative;
  overflow-x: hidden !important;
  height: ${({height}) => (height ? height + 'px' : '150px')};
`

const Carousel = styled.img<{height?: number}>`
  position: absolute;
  animation: moveSlideshow 100s linear infinite;
  height: ${({height}) => (height ? height + 'px' : '150px')} @keyframes moveSlideshow {
    100% {
      transform: translateX(-66.6666%);
    }
  }
`

interface DynamicCarouselProps {
  height: number
}

export const DynamicCarousel = ({height}: DynamicCarouselProps) => {
  return (
    <Container>
      <Carousel src={PCD_Carousel} height={height} />
    </Container>
  )
}
