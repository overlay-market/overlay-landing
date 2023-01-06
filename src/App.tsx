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
