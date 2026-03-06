import {useState, useEffect, useMemo} from 'react'
import {MARKET_CHART_URL, MARKETS_PRICE_CURRENCIES} from '../constants/markets'

interface MarketDataPoint {
  latestPrice: number
  marketAddress: string
  priceOneDayAgo: number
  priceOneHourAgo: number
  priceSevenDaysAgo: number
  prices: number[]
}

interface MarketData {
  marketId: string
  latestPrice: number
  priceCurrency: string
}

export function useMarkets(marketIds: string[]): {marketsData: MarketData[], isLoading: boolean} {
  const [marketsData, setMarketsData] = useState<MarketData[]>([])
  const [marketAddressMapping, setMarketAddressMapping] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(true)

  const marketIdsKey = marketIds.join('|')
  const stableMarketIds = useMemo(() => (marketIdsKey ? marketIdsKey.split('|') : []), [marketIdsKey])

  // Fetch the market address mapping once
  useEffect(() => {
    const fetchMarketAddressMapping = async () => {
      try {
        const response = await fetch('https://api.overlay.market/data/api/markets')

        const mapping: Record<string, string> = {}
        const data = await response.json()
        data[97].forEach((item: { marketId: string; chains: { deploymentAddress: string }[] }) => {
          mapping[item.marketId] = item.chains[0]?.deploymentAddress.toLowerCase()
        })

        setMarketAddressMapping(mapping)
      } catch (error) {
        console.error('Error fetching response data:', error)
      }
    }

    fetchMarketAddressMapping()
  }, [])

  // Fetch marketsPricesOverview whenever marketIds or the mapping changes
  useEffect(() => {
    const fetchMarketsPricesOverview = async () => {
      setIsLoading(true)
      if (Object.keys(marketAddressMapping).length === 0 || stableMarketIds.length === 0) {
        setIsLoading(false)
        return
      }

      try {
        const responseOverview = await fetch(`${MARKET_CHART_URL.BSC_TESTNET}/marketsPricesOverview`)
        const chartDataArray: MarketDataPoint[] = await responseOverview.json()

        const updatedMarketsData: MarketData[] = stableMarketIds
          .filter(marketId => marketAddressMapping[marketId])
          .map(marketId => {
            try {
              const marketAddressBscTestnet = marketAddressMapping[marketId]
              const chartData = chartDataArray.find(item => item.marketAddress === marketAddressBscTestnet)

              if (!chartData) {
                throw new Error(`No chart data available for ${marketId}`)
              }

              return {
                marketId,
                latestPrice: chartData.latestPrice,
                priceCurrency: MARKETS_PRICE_CURRENCIES[marketId],
              }
            } catch (err) {
              console.error(`Error processing market data for ${marketId}:`, err)
              return {
                marketId,
                latestPrice: 0,
                priceCurrency: MARKETS_PRICE_CURRENCIES[marketId],
              }
            };
          })

        if (updatedMarketsData.length > 0) {
          setMarketsData(prevMarketsData =>
            JSON.stringify(prevMarketsData) !== JSON.stringify(updatedMarketsData) ? updatedMarketsData : prevMarketsData
          )
        }
      } catch (error) {
        console.error('Error fetching market prices overview:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMarketsPricesOverview()

    const intervalId = setInterval(fetchMarketsPricesOverview, 300000) // 5 minutes interval

    return () => clearInterval(intervalId)
  }, [marketAddressMapping, stableMarketIds])

  return {marketsData, isLoading}
}
