import {Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import {Market, TermsOfService} from './pages'
import {Nav} from './components'
import Hero from './components/Hero/Hero'
import Investors from './components/Investors/Investors'
import ValueProposition from './components/ValueProposition/ValueProposition'
import News from './components/News/News'
import './App.scss'

const MainContainer = styled.div``

const Title = styled.div``

const Description = styled.div``

const ArrowIconLink = styled.a``

const Audits = () => {
  return (
    <MainContainer>
      <Title>Security at the heart of production</Title>
      <Description>
        Overlay Protocol has gone through two rigorous audits with some of the best, and continues
        to have open bounties for smart contract security bugs.
      </Description>
      <ArrowIconLink>Explore bounties</ArrowIconLink>
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
          <News />
          <Audits />
        </Route>
        <Route exact strict path="/markets" component={Market} />
        <Route exact strict path="/ToS" component={TermsOfService} />
      </Switch>
    </div>
  )
}

export default App
