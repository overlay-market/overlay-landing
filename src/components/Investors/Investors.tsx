import styled from 'styled-components'
import {Box} from 'rebass'
import Investor_PolychainCapital_Logo from '../../assets/images/polychain-capital-logo.png'
import Investor_ParafiCapital_Logo from '../../assets/images/parafi-capital-logo.png'
import Investor_1kx_Logo from '../../assets/images/1kx-logo.png'
import Investor_TheLao_Logo from '../../assets/images/the-lao-logo.png'
import Investor_Metacartel_Logo from '../../assets/images/metacartel-logo.png'
import Investor_Citizenx_Logo from '../../assets/images/citizenx-logo.png'
import Investor_GTS_Logo from '../../assets/images/gts-logo.png'
import Investor_LBank_Logo from '../../assets/images/lbank-logo.png'
import Investor_CSPDAO_Logo from '../../assets/images/csp-logo.png'

const Wrapper = styled.div`
  padding: 45px 0 80px;
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
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  border-top: 1px solid #232323;
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

const investorsList1: Array<InvestorAsset> = [
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
]

const investorsList2: Array<InvestorAsset> = [
  {
    name: 'GTS Ventures',
    logoSrc: `${Investor_GTS_Logo}`,
    width: 120,
  },
  {
    name: 'LBank',
    logoSrc: `${Investor_LBank_Logo}`,
    width: 120,
  },
  {
    name: 'Citizen X',
    logoSrc: `${Investor_Citizenx_Logo}`,
    width: 120,
  },
]

const investorsList3: Array<InvestorAsset> = [
  {
    name: 'CSP DAO',
    logoSrc: `${Investor_CSPDAO_Logo}`,
    width: 148,
  },
  {
    name: 'The Lao',
    logoSrc: `${Investor_TheLao_Logo}`,
    width: 157,
  },
  {
    name: 'Metacartel',
    logoSrc: `${Investor_Metacartel_Logo}`,
    width: 78,
  },
]

const Investors = () => {
  return (
    <Wrapper>
      <MainContainer>
        <Text>Backed by the best</Text>
        <Box style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {investorsList1.map(investor => (
            <Investor src={investor.logoSrc} width={investor.width} height={investor.height} />
          ))}
        </Box>
        <Box style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '80%', alignSelf: 'center'}}>
          {investorsList2.map(investor => (
            <Investor src={investor.logoSrc} width={investor.width} height={investor.height} />
          ))}
        </Box>
        <Box style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '70%', alignSelf: 'center'}}>
          {investorsList3.map(investor => (
            <Investor src={investor.logoSrc} width={investor.width} height={investor.height} />
          ))}
        </Box>
      </MainContainer>
    </Wrapper>
  )
}

export default Investors
