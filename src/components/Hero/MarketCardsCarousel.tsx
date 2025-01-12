import {Swiper, SwiperSlide} from 'swiper/react'
import {Mousewheel, Navigation, Pagination} from 'swiper'
import 'swiper/swiper-bundle.css'
import MarketCard from './MarketCard'
import styled from 'styled-components'
import {formatPriceWithCurrency} from '../../utils/formatPriceWithCurrency'
import {MARKETS_FULL_LOGOS} from '../../constants/markets'
import {useMarkets} from '../../hooks/useMarkets'
import {device} from '../../theme/theme'

const MarketCardsContainer = styled.div`
  position: relative;
  top: 0px;
  width: 100%;

  @media ${device.sm} {
    top: -140px;
  }
  @media ${device.lg} {
    top: -100px;
  }
`

const Carousel = styled.div`
  display: flex;
  overflow-x: hidden;
`

export const MARKETSORDER = [
  "Counter-Strike%202%20Skins",
  "BTC%20Dominance",
  "ETH%20Dominance",
  "AI%20Index",
  "Lana%20Del%20Rey",
  "ETH%20%2F%20SOL",
  "Quantum%20Cats",
  "Bitcoin%20Frogs",
  "NodeMonkes",
  "Ink",
  "Real%20Estate%20Dominance",
  "SUPER%20%2F%20ETH",
  "Hikaru%20Nakamura",
  "Magnus%20Carlsen",
  "Cats%20vs%20Dogs%20-%20Meme%20War",
  "Rifles%20-%20CS2%20Skins",
  "Cats%20vs%20Frogs%20-%20Meme%20War",
  "Knives%20-%20CS2%20Skins",
  "Frogs%20vs%20Dogs%20-%20Meme%20War",
  "Knives%20vs%20Rifles%20-%20CS2%20Skins",
];

const MarketCardsCarousel = () => {
  const marketIds = Object.keys(MARKETS_FULL_LOGOS)
  const markets = useMarkets(marketIds)

  return (
    <MarketCardsContainer>
      {markets && markets.length > 0 && (
        <Carousel>
          <Swiper
            modules={[Navigation, Pagination, Mousewheel]}
            style={{
              height: '200px',
              paddingTop: '4px',
            }}
            spaceBetween={9}
            slidesPerView={'auto'}
            loop={false}
            centeredSlides={false}
            enabled={markets.length > 0}
            mousewheel={true}
          >
            {markets
              .sort((a, b) => {
                return MARKETSORDER.indexOf(a.marketId) - MARKETSORDER.indexOf(b.marketId);
              })
              .map((market, index) => (
                <SwiperSlide key={index} style={{width: '150px'}}>
                  <MarketCard
                    id={market.marketId}
                    priceWithCurrency={formatPriceWithCurrency(
                      market.latestPrice ?? 0,
                      market.priceCurrency,
                      3,
                    )}
                    title={decodeURIComponent(market.marketId)}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </Carousel>
      )}
    </MarketCardsContainer>
  )
}

export default MarketCardsCarousel
