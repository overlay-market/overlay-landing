import styled from 'styled-components'
import desktop from '../../assets/images/web-overlay-legion-banner.png'
import mobile from '../../assets/images/mobile-overlay-legion-banner.png'
import tablet from '../../assets/images/tablet-overlay-legion-banner.png'

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  img {
    width: 100%;
  }
`

const LegionBanner = () => {
  return (
    <Wrapper>
      <a href="https://legion.cc/" target="_blank" rel="noopener noreferrer">
        <picture>
          <source media="(max-width: 768px)" srcSet={mobile} />
          <source media="(max-width: 1280px)" srcSet={tablet} />
          <img src={desktop} alt="Legion x Overlay" />
        </picture>
      </a>
    </Wrapper>
  )
}

export default LegionBanner
