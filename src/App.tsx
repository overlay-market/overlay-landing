import "./App.scss";
import { Market } from "./pages";
import { Nav } from "./components";

const App: React.FC = () => {
  return (
    <div className="App">
      <Nav />
      <Market />
    </div>
  );
}

export default App;
