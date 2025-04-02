import {Swiper, SwiperSlide} from 'swiper/react'
import {Mousewheel, Navigation, Pagination} from 'swiper'
import 'swiper/swiper-bundle.css'
import MarketCard from './MarketCard'
import styled from 'styled-components'
import {formatPriceWithCurrency} from '../../utils/formatPriceWithCurrency'
import {MARKETS_FULL_LOGOS, MARKETS_ORDER} from '../../constants/markets'
import {useMarkets} from '../../hooks/useMarkets'
import {device} from '../../theme/theme'
import {Skeleton} from '@material-ui/lab'

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

const MarketCardsCarousel = () => {
  const marketIds = Object.keys(MARKETS_FULL_LOGOS)
  const {marketsData: markets, isLoading} = useMarkets(marketIds)

  return (
    <MarketCardsContainer>
      {isLoading || !markets?.length ? (
        <Carousel>
          <Swiper
            modules={[Navigation, Pagination, Mousewheel]}
            style={{height: '200px', paddingTop: '4px'}}
            spaceBetween={9}
            slidesPerView={'auto'}
            loop={false}
            centeredSlides={false}
            enabled={true}
            mousewheel={true}
          >
            {[...Array(7)].map((_, index) => (
              <SwiperSlide key={index} style={{width: '150px'}}>
                <Skeleton variant="rect" width={150} height={200} style={{borderRadius: '20px'}} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Carousel>
      ) : (
        markets &&
        markets.length > 0 && (
          <Carousel>
            <Swiper
              modules={[Navigation, Pagination, Mousewheel]}
              style={{height: '200px', paddingTop: '4px'}}
              spaceBetween={9}
              slidesPerView={'auto'}
              loop={false}
              centeredSlides={false}
              enabled={true}
              mousewheel={true}
            >
              {markets
                .sort(
                  (a, b) => MARKETS_ORDER.indexOf(a.marketId) - MARKETS_ORDER.indexOf(b.marketId),
                )
                .map((market, index) => (
                  <SwiperSlide key={index} style={{width: '150px'}}>
                    <MarketCard
                      id={market.marketId}
                      priceWithCurrency={formatPriceWithCurrency(
                        market.latestPrice ?? 0,
                        market.priceCurrency,
                        Number(market.latestPrice) > 10000 && Number(market.latestPrice) < 1000000
                          ? 5
                          : 4,
                      )}
                      title={decodeURIComponent(market.marketId)}
                    />
                  </SwiperSlide>
                ))}
            </Swiper>
          </Carousel>
        )
      )}
    </MarketCardsContainer>
  )
}

export default MarketCardsCarousel
