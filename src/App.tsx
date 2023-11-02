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
import { cookie3Analytics } from "@cookie3/analytics";
import { useEffect } from 'react';
import CookieConsent from 'react-cookie-consent'

const App: React.FC = () => {
  
  useEffect(() => {
    var gaProperty: string = 'G-QJR084KXFT'
    var disableStr: string = 'ga-disable-' + gaProperty

    const analytics = cookie3Analytics({"siteId":260,
    disabled: document.cookie.indexOf(disableStr + '=true') > -1,});

    analytics.trackPageView();
  }, [])

  return (
    <div>
      <Switch>
        <Route path="/" exact>
        <CookieConsent
          enableDeclineButton
          onDecline={() => {
            alert("nay!");
          }}
          declineButtonText="Decline"
          declineButtonStyle={{fontSize: "13px", padding: "16px, 36px, 16px, 36px", height: "40px", width: "116px", fontWeight: "700", background: "#ffffff00", border: "1px solid", borderRadius: "8px", borderColor: "#E5F6FF"}}
          location="bottom"
          buttonText="Allow"
          cookieName="myAwesomeCookieName2"
          style={{ background: "#2B373B" }}
          buttonStyle={{ color: "white", fontSize: "13px", background: "#53B1F9", borderRadius: "8px", padding: "16px, 36px, 16px, 36px", height: "40px", width: "116px", fontWeight: "700" }}
          expires={150}
        >
          This website uses cookies to enhance the user experience.{" "}
          View our <a href="https://overlay.market/#/tos" style={{ color: "#ffffff" }}>TOS</a> to learn more.
        </CookieConsent>
          <Nav />
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
