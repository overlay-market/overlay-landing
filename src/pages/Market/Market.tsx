import styled from 'styled-components';
import { device } from '../../theme/theme';
import About from "./About/About";
import Links from "./Links/Links";
import Stats from "./Stats/Stats";
import Streams from "./Streams/Streams";
import Technical from "./Technical/Technical";
import Email from "./Email/Email";
import Stakeholders from "./Stakeholders/Stakeholders";

interface ContainerProps {
  maxWidth: number;
}

const Container = styled.div<ContainerProps>`
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
    <>
      <Container maxWidth={1400}>
        <About header="About"/>
        <Links header="Links"/>
        <Stats header="Stats"/>
      </Container>
        <Streams header="Streams"/>
      <Container maxWidth={1400}>
        <Technical header="Technical"/>
        <Email header="Stay Updated"/>
        <Stakeholders header="Stakeholders"/>
      </Container>
    </>
  );
};

export default Market;