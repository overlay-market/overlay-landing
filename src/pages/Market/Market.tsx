import About from "./About/About";
import { Links } from "./Links/Links"
import Streams from "./Streams/Streams";
import Technical from "./Technical/Technical";

const Market: React.FC = () => {
  return (
    <div>
      <About />
      <Links />
      <Streams />
      <Technical />
    </div>
  );
};

export default Market;
