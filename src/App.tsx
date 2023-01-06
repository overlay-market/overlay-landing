import {Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import {Market, TermsOfService} from './pages'
import {Nav} from './components'
import Hero from './components/Hero/Hero'
import Investors from './components/Investors/Investors'
import ValueProposition from './components/ValueProposition/ValueProposition'
import News from './components/News/News'
import Audits from './components/Audits/Audits'
import './App.scss'

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1100px;
  margin: auto;
`

const ContributingImageContainer = styled.div`
  height: 450px;
  max-width: 50%;
`

const ContributingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Contributing = () => {
  return (
    <MainContainer>
      <ContributingImageContainer></ContributingImageContainer>
      <ContributingTextContainer></ContributingTextContainer>
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
          <Contributing />
        </Route>
        <Route exact strict path="/markets" component={Market} />
        <Route exact strict path="/ToS" component={TermsOfService} />
      </Switch>
    </div>
  )
}

export default App
