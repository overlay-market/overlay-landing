import React from 'react';
import styled from 'styled-components/macro';
import { device } from '../../theme/theme';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  @media ${device.lg} {
    margin-bottom: 75px;
    margin-right: auto;
    max-width: 300px;
    --oneThird: calc(1 / 3);
    width: calc(var(--oneThird) * 100%);
  }
`

const CardHeader = styled.div`
  text-align: left;
  position: relative;
  color: #0b0f1c;
  font-weight: 700;
  font-size: 30px;
  margin-bottom: 25px;

  &:after {
    position: absolute;
    content: "";
    height: 2px;
    /* adjust this to move up and down. */
    bottom: -5px;

    /* center - use with adjusting width   */
    margin: 0 auto;
    left: 0;
    width: 85%;
    background: black;
  }

  @include ${device.lg} {
    font-size: 36px;
  }
`

interface FeedCardProps {
  header: string;
  children: React.ReactNode;
}

export const FeedCard: React.FC<FeedCardProps> = ({header, children}) => {
    return (
      <CardContainer>
        <CardHeader> {header} </CardHeader>
          {children}
      </CardContainer>
    );
}