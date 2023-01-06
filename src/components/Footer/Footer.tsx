import styled from 'styled-components'

const Wrapper = styled.div`
  background: #f0f0f0;
  padding: 75px 0 55px;
`

const FooterContainer = styled.div`
  max-width: 1100px;
  margin: auto;
`

const InteractiveContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const BrandLogoContainer = styled.div``

const LinksContainer = styled.div``

const Line = styled.div`
  height: 1px;
  width: 100%;
  background: black;
`

const CopyrightText = styled.div`
  font-size: 16px;
  margin-top: 45px;
  text-align: center;
`

const Footer = () => {
  return (
    <Wrapper>
      <FooterContainer>
        <InteractiveContentsContainer>
          <BrandLogoContainer></BrandLogoContainer>
          <LinksContainer></LinksContainer>
        </InteractiveContentsContainer>
        <Line />
        <CopyrightText>Copyright 2022 © Overlay Foundation, All Right Reserved</CopyrightText>
      </FooterContainer>
    </Wrapper>
  )
}

export default Footer
