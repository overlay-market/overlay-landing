import {Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import {Market, TermsOfService} from './pages'
import {Nav} from './components'
import Hero from './components/Hero/Hero'
import Investors from './components/Investors/Investors'
import './App.scss'

const MainContainer = styled.div``

const DesktopSplitViewContainer = styled.div`
  display: flex;
`

const PrimaryViewContainer = styled.div``

const SecondaryViewContainer = styled.div``

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: black;
`

const Description = styled.div`
  font-size: 18px;
  font-weight: regular;
  color: #7b7b7b;
`

const LightArrowButton = styled.button`
  border: 1px solid #71ceff;
  background: white;
  box-shadow: none;
  outline: none;
`

const ValueProposition = () => {
  return (
    <MainContainer>
      <DesktopSplitViewContainer>
        <PrimaryViewContainer>
          <Title>Say Goodbye to Liquidity Pools and Counter Parties</Title>
          <Description>
            Overlay is built from the ground up with OVL, a cryptocurrency that longs/shorts DeFi
            data streams and much, much more.
          </Description>
          <LightArrowButton>Learn More</LightArrowButton>
        </PrimaryViewContainer>
        <SecondaryViewContainer></SecondaryViewContainer>
      </DesktopSplitViewContainer>
    </MainContainer>
  )
}
const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        {/* TO DO: add Landing Page components in / route */}
        <Route path="/" exact>
          <Hero />
          <Investors />
          <ValueProposition />
        </Route>
        <Route exact strict path="/markets" component={Market} />
        <Route exact strict path="/ToS" component={TermsOfService} />
      </Switch>
    </div>
  )
}

export default App
