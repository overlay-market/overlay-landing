import styled from 'styled-components'
import {device} from '../../theme/theme'
import About from './About/About'
import Links from './Links/Links'
import Stats from './Stats/Stats'
import Technical from './Technical/Technical'
import Stakeholders from './Stakeholders/Stakeholders'
import Auditors from './Auditors/Auditors'
import {CardContainer} from '../../components/FeedCard/FeedCard'

interface ContainerProps {
  maxWidth?: number
}

const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  max-width: ${props => props.maxWidth}px;

  @media ${device.lg} {
    flex-direction: row;
  }
`

const Market: React.FC = () => {
  return (
    <>
      <Container>
        <About header="Overlay" />
        <Links header="Links" />
        <Stats header="Stats" />
      </Container>
      {/* <Streams header="Streams"/> */}
      <Container>
        <Technical header="Technical" />
        <Stakeholders header="Stakeholders" />
        <Auditors header="Auditors" />
        <CardContainer />
      </Container>
    </>
  )
}

export default Market
