import "./App.scss";
import { Market } from "./pages";
import { Nav, Footer } from "./components";

function App() {
  return (
    <div className="App">
      <Nav />
      <Market />
      <Footer />
    </div>
  );
}

export default App;
