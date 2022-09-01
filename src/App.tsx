import {Route, Switch} from 'react-router-dom'
import {Market} from './pages'
import {Nav} from './components'
import './App.scss'

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact strict path="/" component={Market} />
      </Switch>
    </div>
  )
}

export default App
