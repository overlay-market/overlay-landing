import {Route, Switch} from 'react-router-dom'
import {Market, TermsOfService} from './pages'
import {Nav} from './components'
import './App.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact strict path="/" component={Market} />
        <Route exact strict path="/ToS" component={TermsOfService} />
      </Switch>
    </div>
  )
}

export default App
