import styled from 'styled-components'
import {device} from '../../theme/theme'
import {StyledCTAButton} from '../Button/Button'
import {GENERAL_LINKS} from '../../constants/constants'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: auto;
  padding: 80px 34px;

  @media ${device.md} {
    padding: 80px 40px;
  }
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;

  @media ${device.md} {
    flex-direction: row;
    gap: 80px;
  }
`

const Title = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 36px;
  max-width: 300px;
  margin-bottom: 20px;
  line-height: 42px;

  @media ${device.md} {
    max-width: 450px;
  }
`

const Description = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #7b7b7b;
  max-width: 350px;
  margin-bottom: 20px;
  line-height: 25px;

  @media ${device.md} {
    max-width: 650px;
  }
`

const Markets = () => {
  return (
    <MainContainer>
      <HeaderContainer>
        <div>
          <Title>Discover a wide world of new markets</Title>
          <Description>
            Overlay can spin up markets on nearly any scalar data. From DeFi to the real world,
            nothing will be illiquid again.
          </Description>
        </div>
        <div>
          <StyledCTAButton href={GENERAL_LINKS.LAUNCH_APP}>Explore</StyledCTAButton>
        </div>
      </HeaderContainer>
    </MainContainer>
  )
}

export default Markets
