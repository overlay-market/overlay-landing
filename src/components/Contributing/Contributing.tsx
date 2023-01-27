import styled from 'styled-components'
import {RightArrowButton} from '../Button/Button'
import {device} from '../../theme/theme'
import {DynamicCarousel} from '../DynamicCarousel/DynamicCarousel'
import OverlayLogoHeartCatImg from '../../assets/images/overlay-heart-cat.jpg'

const Wrapper = styled.div`
  overflow-x: hidden !important;
  padding: 80px 0px;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: auto;
  justify-content: space-between;
  padding: 0 16px;
  margin-bottom: 80px;

  @media ${device.sm} {
    flex-direction: row;
    margin-bottom: 40px;
  }
`

const ContributingImageContainer = styled.div`
  display: flex;
  max-width: 250px;
  margin: auto auto 20px;

  img {
    width: 100%;
  }

  @media ${device.sm} {
    margin: 20px;
    max-width: 450px;
  }
`

const ContributingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto 60px auto auto;
`

const Title = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 36px;
  max-width: 350px;
  margin-bottom: 16px;
  line-height: 42px;
`

const Description = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #7b7b7b;
  padding: 8px 0;
  max-width: 350px;
  margin-bottom: 16px;
  line-height: 25px;
`

const Contributing = () => {
  return (
    <Wrapper>
      <MainContainer>
        <ContributingImageContainer>
          <img src={OverlayLogoHeartCatImg} alt="Contributing" />
        </ContributingImageContainer>
        <ContributingTextContainer>
          <Title>Overlay is run by cats, for real</Title>
          <Description>
            Overlay is run by the community, and consistent contributors earn Planck Cat NFTs,
            giving them special privileges and rewards.
          </Description>
          <RightArrowButton> Start Contributing</RightArrowButton>
        </ContributingTextContainer>
      </MainContainer>
      <DynamicCarousel height={150} />
    </Wrapper>
  )
}

export default Contributing
