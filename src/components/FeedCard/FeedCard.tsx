import React from 'react';
import styled from 'styled-components/macro';
import { device } from '../../theme/theme';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  min-height: 150px;

  @media ${device.lg} {
    margin-bottom: 75px;
    margin-right: auto;
    margin-left: auto;
    max-width: 300px;
    --oneThird: calc(1 / 3);
    width: calc(var(--oneThird) * 100%);
  }
`

export const EmptyCardContainer = styled(CardContainer)`
  min-height: 0px;
  margin-bottom: 0px;
`

export const CardHeader = styled.div`
  text-align: left;
  position: relative;
  color: #0b0f1c;
  font-weight: 900;
  font-size: 36px;
  margin-bottom: 23px;
  opacity: 88%;

  &:after {
    position: absolute;
    content: "";
    height: 2px;
    /* adjust this to move up and down. */
    bottom: -4px;

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