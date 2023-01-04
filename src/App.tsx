import {Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import {Market, TermsOfService} from './pages'
import {Nav} from './components'
import './App.scss'

const HeroContainer = styled.div`
  min-height: 625px;
`

const SplitViewContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const PrimaryViewContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SecondaryViewContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Hero = () => {
  return (
    <HeroContainer>
      <SplitViewContainer>
        <PrimaryViewContainer></PrimaryViewContainer>
        <SecondaryViewContainer></SecondaryViewContainer>
      </SplitViewContainer>
    </HeroContainer>
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
        </Route>
        <Route exact strict path="/markets" component={Market} />
        <Route exact strict path="/ToS" component={TermsOfService} />
      </Switch>
    </div>
  )
}

export default App
