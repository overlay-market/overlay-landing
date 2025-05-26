import styled from 'styled-components'
import desktop from '../../assets/images/torch-banner-web.jpg'
import tablet from '../../assets/images/torch-banner-tablet.jpg'
import mobile from '../../assets/images/torch-banner-mobile.jpg'

const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 120px;
  img {
    width: 100%;
  }
`

const TorchBanner = () => {
  return (
    <Wrapper>
      <a href="https://app.overlay.market/faucet" target="_blank" rel="noopener noreferrer">
        <picture>
          <source media="(max-width: 768px)" srcSet={mobile} />
          <source media="(max-width: 1280px)" srcSet={tablet} />
          <img src={desktop} alt="Legion x Overlay" />
        </picture>
      </a>
    </Wrapper>
  )
}

export default TorchBanner
