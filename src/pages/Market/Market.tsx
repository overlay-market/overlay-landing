import styled from 'styled-components';
import { device } from '../../theme/theme';
import About from "./About/About";
import Links from "./Links/Links";
import Stats from "./Stats/Stats";
import Streams from "./Streams/Streams";
import Technical from "./Technical/Technical";
import Email from "./Email/Email";
import Stakeholders from "./Stakeholders/Stakeholders";

interface TopContainerProps {
  maxWidth: number;
}

const TopContainer = styled.div<TopContainerProps>`
  display: flex;
  flex-direction: column;
  max-width: ${(props) => props.maxWidth}px;

  @media ${device.lg} {
    flex-direction: row;
    padding-left: 30px;
  }

`
const Market: React.FC = () => {
  return (
    <div>
    <TopContainer maxWidth={1400}>
      <About header="About"/>
      <Links header="Links"/>
      <Stats header="Stats"/>
    </TopContainer>
      <Streams header="Streams"/>
      <Email header="Stay Updated"/>
      <Technical header="Technical"/>
      <Stakeholders header="Stakeholders"/>
    </div>
  );
};

export default Market;