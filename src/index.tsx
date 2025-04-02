import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {transitions, positions, Provider as ReactAlertProvider} from 'react-alert'
import {HashRouter} from 'react-router-dom'
import ThemeProvider from './theme/theme'
import AlertMUITemplate from 'react-alert-template-mui'
import App from './App'
import store from './state/state'
import reportWebVitals from './reportWebVitals'
import './index.css'
import {MARKETS_FULL_LOGOS, MARKETS_ORDER} from './constants/markets'
import OptimizedHeroChart from '../src/assets/images/hero-background-ai.webp'
import OptimizedHeroBackground from '../src/assets/images/optimized-hero-background.webp'

const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE,
}

const sevenVisibleMarketLogos = Object.entries(MARKETS_FULL_LOGOS)
  .sort(
    ([marketIdA], [marketIdB]) =>
      MARKETS_ORDER.indexOf(marketIdA) - MARKETS_ORDER.indexOf(marketIdB),
  )
  .slice(0, 7)
  .map(([_, logo]) => logo)

const images = [OptimizedHeroBackground, OptimizedHeroChart, ...sevenVisibleMarketLogos]

function preloadImages() {
  images.forEach(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.href = src
    link.as = 'image'

    if (src === OptimizedHeroChart || src === OptimizedHeroBackground) {
      link.setAttribute('fetchpriority', 'high')
    }

    document.head.appendChild(link)
  })
}

preloadImages()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        {/* @ts-ignore */}
        <ReactAlertProvider template={AlertMUITemplate} {...options}>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ReactAlertProvider>
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
