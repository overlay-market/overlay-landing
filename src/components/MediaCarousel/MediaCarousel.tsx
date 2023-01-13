import styled from 'styled-components'
import {Box} from 'rebass'
import {device} from '../../theme/theme'
import {TwitterTimelineEmbed} from 'react-twitter-embed'
import HeroBackground from '../../assets/images/hero-background.png'

const Wrapper = styled.div`
  background: url(${HeroBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 16px;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: 100%;
  margin: auto;
  padding: 45px 0 135px;
`

const Title = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 32px;
  width: 100%;
  text-align: left;
  border-bottom: 1px solid #232323;
  padding-bottom: 30px;

  @media ${device.sm} {
    font-size: 54px;
  }
`

const Subheader = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 20px;

  @media ${device.sm} {
    font-size: 40px;
    width: 500px;
  }
`

const CarouselContainer = styled.div`
  display: flex;
  padding-top: 45px;
  flex-direction: column;
  justify-content: space-between;

  @media ${device.sm} {
    flex-direction: row;
  }
`

const TwitterEmbedContainer = styled.div`
  width: 350px;
  height: 700px;
`

const MirrorContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const MirrorTitle = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 10px;
`

const AuthorContainer = styled.div`
  display: flex;
  margin-bottom: 8px;
`

const Author = styled.div``

const Date = styled.div``

const Content = styled.div``

interface MirrorPostAsset {
  title: string
  author: string
  date: string
  content: string
}

const overlayMirrorPosts: Array<MirrorPostAsset> = [
  {
    title: 'Litter Box 1, OVL and rewards program',
    author: 'mertoi.eth',
    date: 'October 4th, 2022',
    content: 'Overlay is launched on Ethereum Mainnet',
  },
  {
    title: 'Using OpenZeppelin Defender To Monitor A Contract',
    author: 'c-note.eth',
    date: 'September 29th, 2022',
    content:
      'This doc acts as a guide/workflow on how to set up a relay, autotask, and sentinel to watch and act on certain responses from a smart contract.',
  },
]

const MirrorPost = ({title, author, date, content}: MirrorPostAsset) => {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        borderTop: '1px solid #CCCCCC',
        maxWidth: '500px',
        padding: '16px 0',
      }}
    >
      <MirrorTitle>{title}</MirrorTitle>
      <Box style={{display: 'flex', flexDirection: 'column'}}>
        <AuthorContainer>
          <Author>{author}</Author>
          <Date>{date}</Date>
        </AuthorContainer>
        <Content>{content}</Content>
      </Box>
    </Box>
  )
}

const MediaCarousel = () => {
  return (
    <Wrapper>
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

          <MirrorContainer>
            <Subheader>Mirror</Subheader>
            {overlayMirrorPosts.map(post => (
              <MirrorPost
                title={post.title}
                author={post.author}
                date={post.date}
                content={post.content}
              />
            ))}
          </MirrorContainer>
        </CarouselContainer>
      </MainContainer>
    </Wrapper>
  )
}

export default MediaCarousel
