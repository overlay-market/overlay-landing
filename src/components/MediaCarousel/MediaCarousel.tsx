import styled from 'styled-components'
import {Box} from 'rebass'
import {TwitterTimelineEmbed} from 'react-twitter-embed'
import {device} from '../../theme/theme'
import {Icon} from '../Icon/Icon'
import HeroBackground from '../../assets/images/hero-background.png'
import Star from '../../assets/images/star.png'

const Wrapper = styled.div`
  background: url(${HeroBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px 16px;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: 100%;
  margin: auto;
  padding-bottom: 135px;
`

const Title = styled.div`
  display: flex;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 32px;
  width: 100%;
  text-align: left;
  border-bottom: 1px solid #232323;
  padding-bottom: 30px;

  @media ${device.sm} {
    font-size: 36px;
  }
`

const Subheader = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 20px;

  @media ${device.sm} {
    font-size: 34px;
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
  margin-bottom: 32px;
`

const MirrorContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const MirrorTitle = styled.a`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 15px;
  cursor: pointer;
  text-decoration: none;
  color: black;
`

const AuthorContainer = styled.div`
  display: flex;
  margin-bottom: 15px;
  align-items: center;
`

const AuthorIcon = styled.div<{background?: string}>`
  background: ${({background}) => background ?? background};
  background-repeat: no-repeat;
  border-radius: 50px;
  height: 20px;
  width: 20px;
  margin-right: 4px;
`

const Author = styled.div`
  font-weight: 600;
  margin-right: 10px;
`

const Date = styled.div`
  background: #f0f0f0;
  border-radius: 8px;
  color: #aaaaaa;
  padding: 4px;
`

const Content = styled.div``

interface MirrorPostAsset {
  link: string
  title: string
  author: string
  date: string
  content: string
  background?: string
}

const overlayMirrorPosts: Array<MirrorPostAsset> = [
  {
    link: 'https://mirror.xyz/0x7999C7f0b9f2259434b7aD130bBe36723a49E14e/nauBWxFQTSAVMxfXCmo8WtTLRarZKd3mA1dc_NBFQvA',
    title: 'Litter Box 1, OVL and rewards program',
    author: 'mertoi.eth',
    date: 'October 4th, 2022',
    content: 'Overlay is launched on Ethereum Mainnet',
    background:
      'radial-gradient(79.05% 79.05% at 21.62% 20.95%, rgb(0, 122, 255) 0%, rgb(0, 224, 255) 100%)',
  },
  {
    link: 'https://mirror.xyz/0x7999C7f0b9f2259434b7aD130bBe36723a49E14e/n1suXTe7Xcj-z1w5njRsWM_0Y6RHy-nGr1bB6SUYs00',
    title: 'Using OpenZeppelin Defender To Monitor A Contract',
    author: 'c-note.eth',
    date: 'September 29th, 2022',
    content:
      'This doc acts as a guide/workflow on how to set up a relay, autotask, and sentinel to watch and act on certain responses from a smart contract.',
    background: 'radial-gradient(79.05% 79.05% at 21.62% 20.95%, #FF3B30 0%, #FFA030 100%);',
  },
]

const MirrorPost = ({link, title, author, date, content, background}: MirrorPostAsset) => {
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
      <MirrorTitle href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </MirrorTitle>
      <Box style={{display: 'flex', flexDirection: 'column'}}>
        <AuthorContainer>
          <AuthorIcon background={background} />
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
        <Title>
          Latest Updates
          <Icon src={Star} height={45} alt="" margin="0 0 0 30px" />
        </Title>
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
                link={post.link}
                title={post.title}
                author={post.author}
                date={post.date}
                content={post.content}
                background={post.background}
              />
            ))}
          </MirrorContainer>
        </CarouselContainer>
      </MainContainer>
    </Wrapper>
  )
}

export default MediaCarousel
