import {Route, Switch} from 'react-router-dom'
import {TermsOfService} from './pages'
import {Nav} from './components'
import Hero from './components/Hero/Hero'
import Investors from './components/Investors/Investors'
import ValueProposition from './components/ValueProposition/ValueProposition'
import News from './components/News/News'
import Markets from './components/Markets/Markets'
import Audits from './components/Audits/Audits'
import Contributing from './components/Contributing/Contributing'
import MediaCarousel from './components/MediaCarousel/MediaCarousel'
import Footer from './components/Footer/Footer'

const App: React.FC = () => {
  return (
    <div>
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
        <Route exact strict path="/ToS" component={TermsOfService} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
