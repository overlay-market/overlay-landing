import styled from 'styled-components'
import {Box} from 'rebass'
import Investor_PolychainCapital_Logo from '../../assets/images/polychain-capital-logo.png'
import Investor_ParafiCapital_Logo from '../../assets/images/parafi-capital-logo.png'
import Investor_1kx_Logo from '../../assets/images/1kx-logo.png'
import Investor_TheLao_Logo from '../../assets/images/the-lao-logo.png'
import Investor_Metacartel_Logo from '../../assets/images/metacartel-logo.png'

const Wrapper = styled.div`
  padding: 45px 0;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  margin: auto;
  padding: 0 16px;
`

const Text = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  border-top: 1px solid black;
  padding-top: 48px;
  margin-bottom: 10px;
`

const Investor = styled.div<{
  src?: string
  width?: number
  height?: number
}>`
  display: flex;
  background: url(${({src}) => src ?? src});
  margin: auto;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: ${({width}) => (width ? width + 'px' : '150px')};
  height: ${({height}) => (height ? height + 'px' : '100px')};
`

interface InvestorAsset {
  name: string
  logoSrc: string
  width?: number
  height?: number
}

const investorsList: Array<InvestorAsset> = [
  {
    name: 'Polychain Capital',
    logoSrc: `${Investor_PolychainCapital_Logo}`,
    width: 200,
  },
  {
    name: 'Parafi Capital',
    logoSrc: `${Investor_ParafiCapital_Logo}`,
    width: 200,
  },
  {
    name: '1kx',
    logoSrc: `${Investor_1kx_Logo}`,
    height: 125,
  },
  {
    name: 'The Lao',
    logoSrc: `${Investor_TheLao_Logo}`,
  },
  {
    name: 'MetaCartel',
    logoSrc: `${Investor_Metacartel_Logo}`,
    width: 100,
  },
]

const Investors = () => {
  return (
    <Wrapper>
      <MainContainer>
        <Text>Backed by the best</Text>
        <Box style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {investorsList.map(investor => (
            <Investor src={investor.logoSrc} width={investor.width} height={investor.height} />
          ))}
        </Box>
      </MainContainer>
    </Wrapper>
  )
}

export default Investors
