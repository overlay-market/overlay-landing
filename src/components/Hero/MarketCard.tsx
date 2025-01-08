import styled from 'styled-components'
import {MARKETS_FULL_LOGOS} from '../../constants/markets'

interface MarketCardProps {
  priceWithCurrency: string
  title: string
  id: string
}

const CustomCard = styled.div`
  aspect-ratio: 150 / 192;
  width: 100%;
  max-width: 150px;
  border-radius: 20px;
  border: 1px solid rgba(236, 236, 236, 0.15);
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    transform: scale(1.02);
    position: relative;
    left: 2px;
  }
`

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0));
  width: 100%;
  padding: 0.5rem;
  text-align: center;
  color: white;
  border-radius: 0 0 20px 20px;
  text-align: end;
`

const CardsValue = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #50ffb1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`

const CardsTitle = styled.h2`
  margin: 0;
  font-size: 10.5px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`

const MarketCard = ({priceWithCurrency, title, id}: MarketCardProps) => {
  return (
    <CustomCard
      style={{
        backgroundImage: `url(${MARKETS_FULL_LOGOS[id]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer',
        width: 150,
      }}
    >
      <CardContent>
        <CardsValue>{priceWithCurrency}</CardsValue>
        <CardsTitle>{title}</CardsTitle>
      </CardContent>
    </CustomCard>
  )
}

export default MarketCard
