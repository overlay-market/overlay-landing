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

const Wrapper = styled.div`
  padding: 45px 0;
`

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

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
`

const Description = styled.div`
  font-size: 18px;
  color: #7b7b7b;
  padding: 8px 0;
`

const StartContributingButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: white;
  width: fit-content;
  padding: 16px;
  background: #71ceff;
  border-radius: 10px;
  border: none;
  box-shadow: none;
  outline: none;
`

const Contributing = () => {
  return (
    <Wrapper>
      <MainContainer>
        <ContributingImageContainer></ContributingImageContainer>
        <ContributingTextContainer>
          <Title>Overlay is run by cats, for real</Title>
          <Description>
            Overlay is run by the community, and consistent contributors earn Planck Cat NFTs,
            giving them special privileges and rewards.
          </Description>
          <StartContributingButton> Start Contributing</StartContributingButton>
        </ContributingTextContainer>
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
