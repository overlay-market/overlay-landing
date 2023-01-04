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

const ValueProposition = () => {
  return (
    <MainContainer>
      <DesktopSplitViewContainer>
        <PrimaryViewContainer></PrimaryViewContainer>
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
