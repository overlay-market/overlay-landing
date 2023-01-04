import {Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import {Market, TermsOfService} from './pages'
import {Nav} from './components'
import Hero from './components/Hero/Hero'
import './App.scss'

const Wrapper = styled.div`
  padding-top: 90px;
  padding-bottom: 60px;
`

const MainContainer = styled.div`
  display: flex;
  max-width: 1100px;
  margin: auto;
`

const Breakline = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
  height: 1px;
`

const Investors = () => {
  return (
    <Wrapper>
      <MainContainer>
        <Breakline />
      </MainContainer>
    </Wrapper>
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
        </Route>
        <Route exact strict path="/markets" component={Market} />
        <Route exact strict path="/ToS" component={TermsOfService} />
      </Switch>
    </div>
  )
}

export default App
