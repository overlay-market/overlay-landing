import {Route, Switch} from 'react-router-dom'
import styled from 'styled-components'
import {Market, TermsOfService} from './pages'
import {Nav} from './components'
import Hero from './components/Hero/Hero'
import Investors from './components/Investors/Investors'
import ValueProposition from './components/ValueProposition/ValueProposition'
import News from './components/News/News'
import Audits from './components/Audits/Audits'
import Contributing from './components/Contributing/Contributing'
import MediaCarousel from './components/MediaCarousel/MediaCarousel'
import Footer from './components/Footer/Footer'
import './App.scss'

const MainContainer = styled.div`
  display: flex;
  max-width: 1100px;
  margin: auto;
`

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  max-width: 450px;
`

const Description = styled.div`
  font-size: 18px;
  color: #7b7b7b;
  max-width: 650px;
`

const ExploreButton = styled.button`
  background: #71CEFF;
  font-weight: 18px;
  color: white;
  border-radius: 10px;
  outline: none;
  box-shadow; none;
  border: none;
  padding: 12px 24px;
`

const Markets = () => {
  return (
    <MainContainer>
      <HeaderContainer>
        <div>
          <Title>Discover a wide world of new markets</Title>
          <Description>
            Overlay can spin up markets on nearly any scalar data. From DeFi to the real world,
            nothing will be illiquid again.
          </Description>
        </div>
        <div>
          <ExploreButton>Explore</ExploreButton>
        </div>
      </HeaderContainer>
    </MainContainer>
  )
}
const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Hero />
          <Investors />
          <ValueProposition />
          <News />
          <Markets />
          <Audits />
          <Contributing />
          <MediaCarousel />
        </Route>
        <Route exact strict path="/markets" component={Market} />
        <Route exact strict path="/ToS" component={TermsOfService} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
