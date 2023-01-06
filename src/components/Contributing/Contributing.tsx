import styled from 'styled-components'
import OverlayLogoHeartCatImg from '../../assets/images/overlay-logo-heart-cat.png'

const Wrapper = styled.div`
  padding: 45px 0;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1100px;
  margin: auto;
  justify-content: space-between;
`

const ContributingImageContainer = styled.div`
  display: flex;
  width: 50%;
  max-width: 450px;

  img {
    width: 100%;
  }
`

const ContributingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 25px;
`

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  max-width: 350px;
`

const Description = styled.div`
  font-size: 18px;
  color: #7b7b7b;
  padding: 8px 0;
  max-width: 350px;
`

const StartContributingButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: white;
  width: fit-content;
  padding: 16px;
  background: #71ceff;
  border-radius: 10px;
  border: none;
  box-shadow: none;
  outline: none;
`

const Contributing = () => {
  return (
    <Wrapper>
      <MainContainer>
        <ContributingImageContainer>
          <img src={OverlayLogoHeartCatImg} />
        </ContributingImageContainer>
        <ContributingTextContainer>
          <Title>Overlay is run by cats, for real</Title>
          <Description>
            Overlay is run by the community, and consistent contributors earn Planck Cat NFTs,
            giving them special privileges and rewards.
          </Description>
          <StartContributingButton> Start Contributing</StartContributingButton>
        </ContributingTextContainer>
      </MainContainer>
    </Wrapper>
  )
}

export default Contributing
