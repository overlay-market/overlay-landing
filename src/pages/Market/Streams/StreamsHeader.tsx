import React from 'react'
import styled from "styled-components";
import { device } from '../../../theme/theme';
import useWindowDimensions from '../../../hooks/useWindowDimensions';

interface HeaderProps {
  currentWidth: number;
}

const Header = styled.div<HeaderProps>`
    text-align: left;
    position: relative;
    color: #0b0f1c;
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 40px;
    font-family: 'Press Start 2P', cursive;

    @media ${device.lg} {
      font-size: 36px;
      --cardWidth: 300px;
      --currentWidth: ${(props) => props.currentWidth - 96}px;
      --negativeSpace: calc(var(--currentWidth) - 900px);
      --margin: calc(var(--negativeSpace) / 6);
      margin-left: var(--margin);
      margin-right: var(--margin);
      margin-bottom: 40px;
    }

    @media ${device.xl} {
      font-size: 36px;
      --cardWidth: 300px;
      --currentWidth: 1400px;
      --negativeSpace: calc(var(--currentWidth) - 900px);
      --margin: calc(var(--negativeSpace) / 6);
      margin-left: var(--margin);
      margin-right: var(--margin);
    }

    :after {
      position: absolute;
      content: "";
      height: 2px;
      bottom: -8px;
      margin: 0 auto;
      left: 0;
      width: 93%;
      background: black;

    }
`

interface StreamsHeaderProps {
  children: React.ReactNode;
}

export const StreamsHeader: React.FC<StreamsHeaderProps> = ({children}) => {
  const { width } = useWindowDimensions();
    return (
      <Header currentWidth={width}>
        {children}
      </Header>
    );
}
