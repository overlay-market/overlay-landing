import About from "./About/About";
import Links from "./Links/Links";
import Stats from "./Stats/Stats";
import Streams from "./Streams/Streams";
import Technical from "./Technical/Technical";
import Email from "./Email/Email";
import Stakeholders from "./Stakeholders/Stakeholders";

const Market: React.FC = () => {
  return (
    <div>
      <About header="About"/>
      <Links header="Links"/>
      <Stats header="Stats"/>
      <Streams />
      <Email header="Stay Updated"/>
      <Technical />
      <Stakeholders header="Stakeholders"/>
    </div>
  );
};

export default Market;