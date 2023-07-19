import styled from 'styled-components'
import {Box} from 'rebass'
import {TwitterTimelineEmbed} from 'react-twitter-embed'
import {device} from '../../theme/theme'
import {Icon} from '../Icon/Icon'
import OptimizedHeroBackground from '../../assets/images/optimized-hero-background.jpg'
import Star from '../../assets/images/star.png'

const Wrapper = styled.div`
  background: url(${OptimizedHeroBackground});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 80px 16px 160px;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  width: 100%;
  margin: auto;
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
  width: 100% !important;
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
  height: 1200px;
  margin-bottom: 32px;
`

const MirrorContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
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
    link: 'https://mirror.xyz/0x7999C7f0b9f2259434b7aD130bBe36723a49E14e/b6Zt_6IrDSTwgM0NjmlNLvTGgx0vIfNzGhP6hXMJKKQ',
    title: 'Introducing Bored Ape Yacht Club Floor Price Market',
    author: 'mertioi.eth',
    date: 'March 15th, 2023',
    content:
      "It’s the day that Overlay Protocol pushes the boundaries of what's possible in DeFi. We've just launched Bored Ape Yacht Club floor price market.",
    background:
      'radial-gradient(79.05% 79.05% at 21.62% 20.95%, rgb(0, 122, 255) 0%, rgb(0, 224, 255) 100%)',
  },
  {
    link: 'https://mirror.xyz/0x7999C7f0b9f2259434b7aD130bBe36723a49E14e/vimCWCt5I63CLHQq5AXrH4PAS-pxzIKlYVwRdXCGPuM',
    title: 'Payoff Caps, OI Caps, and the Circuit Breaker on Overlay Protocol',
    author: 'madhav.eth',
    date: 'January 26th, 2023',
    content:
      'Overlay Protocol has governance-set payoff and open interest caps that are specific to each Overlay market. These caps help the protocol minimize the impact of heavy tail behavior of some assets. Circuit Breakers act as an additional layer of protection that restrict the notional size of new positions when OVL printing (to pay out PnL) in the recent past has been excessive.',
    background:
      'radial-gradient(79.05% 79.05% at 21.62% 20.95%, rgb(0, 122, 255) 0%, rgb(0, 224, 255) 100%)',
  },
  {
    link: 'https://mirror.xyz/0x7999C7f0b9f2259434b7aD130bBe36723a49E14e/wTsX1pBySrFOGNenYEB3mNTR410JLP4_YjxwYuunYKE',
    title: 'Inverse Markets on Overlay',
    author: 'madhav.eth',
    date: 'January 25th, 2022',
    content:
      'Pending governance approval, Overlay will employ “inverse markets” on the protocol - markets where the “quote” of one unit of an asset will be presented in terms of Overlay’s native token, OVL. For instance, there may be an ETH-OVL market. This will help users to hedge the OVL exposure they may have (because of entering positions on Overlay’s markets), and go long on OVL, if they so wish.',
    background:
      'radial-gradient(79.05% 79.05% at 21.62% 20.95%, rgb(0, 122, 255) 0%, rgb(0, 224, 255) 100%)',
  },
  {
    link: 'https://mirror.xyz/0x7999C7f0b9f2259434b7aD130bBe36723a49E14e/RpnX3-Z0rG_kO_cmmTImRNg5cC-eSxrURkHxG1BmwLw',
    title: 'Basis Position / Funding Arbitrage on Overlay',
    author: 'madhav.eth',
    date: 'January 25th, 2023',
    content: 'Earn yield in market neutral positions',
    background:
      'radial-gradient(79.05% 79.05% at 21.62% 20.95%, rgb(0, 122, 255) 0%, rgb(0, 224, 255) 100%)',
  },
  {
    link: 'https://mirror.xyz/0x7999C7f0b9f2259434b7aD130bBe36723a49E14e/vtmmujPcVINTIVavcsztrYHmP_N1mA4RwgYHmZ8lLdw',
    title: 'Introduction to Pricing and Price Impact on Overlay',
    author: 'madhav.eth',
    date: 'January 25th, 2023',
    content:
      'Pricing based on oracle feeds makes Overlay versatile, but also prone to certain oracle manipulation-based attack vectors. To counter these factors, Overlay employs several mechanisms that should mitigate exposure to the protocol: TWAP-based pricing, bid-ask spreads, and price impact/slippage.',
    background:
      'radial-gradient(79.05% 79.05% at 21.62% 20.95%, rgb(0, 122, 255) 0%, rgb(0, 224, 255) 100%)',
  },
  {
    link: 'https://mirror.xyz/0x7999C7f0b9f2259434b7aD130bBe36723a49E14e/nauBWxFQTSAVMxfXCmo8WtTLRarZKd3mA1dc_NBFQvA',
    title: 'Litter Box 1, OVL and rewards program',
    author: 'mertoi.eth',
    date: 'October 4th, 2022',
    content: 'Overlay is launched on Ethereum Mainnet',
    background:
      'radial-gradient(79.05% 79.05% at 21.62% 20.95%, rgb(0, 122, 255) 0%, rgb(0, 224, 255) 100%)',
  },
  // {
  //   link: 'https://mirror.xyz/0x7999C7f0b9f2259434b7aD130bBe36723a49E14e/n1suXTe7Xcj-z1w5njRsWM_0Y6RHy-nGr1bB6SUYs00',
  //   title: 'Using OpenZeppelin Defender To Monitor A Contract',
  //   author: 'c-note.eth',
  //   date: 'September 29th, 2022',
  //   content:
  //     'This doc acts as a guide/workflow on how to set up a relay, autotask, and sentinel to watch and act on certain responses from a smart contract.',
  //   background: 'radial-gradient(79.05% 79.05% at 21.62% 20.95%, #FF3B30 0%, #FFA030 100%);',
  // },
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
        width: '100%',
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
  let showTwitterWidget = false

  return (
    <Wrapper>
      <MainContainer>
        <Title>
          Latest Updates
          <Icon src={Star} height={45} alt="" margin="0 0 0 20px" />
        </Title>
        <CarouselContainer>
          {showTwitterWidget && (
            <TwitterEmbedContainer>
              <TwitterTimelineEmbed
                sourceType="profile"
                screenName="OverlayProtocol"
                options={{height: 1200}}
              />
            </TwitterEmbedContainer>
          )}

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
