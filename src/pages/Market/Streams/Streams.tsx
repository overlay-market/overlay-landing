import React from "react";
import styles from "./Streams.module.scss";
import { StreamsHeader } from "./StreamsHeader";
import { TEXT } from "../../../theme/theme";
import styled from 'styled-components/macro';
import ETH_DAI_NFT from "../../../assets/nft/eth-dai.png";
import OVL_DAI_NFT from "../../../assets/nft/ovl-dai.png";
import OVL_ETH_NFT from "../../../assets/nft/ovl-eth.png";
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import { device } from '../../../theme/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1400px;

  ${({theme}) => theme.mediaWidth.lg`
    width: 100%;
  `}
`;

interface PairsContainerProps {
  currentWidth: number;
}

export const PairsContainer = styled.div<PairsContainerProps>`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  @media ${device.lg} {
    font-size: 36px;
    flex-direction: row;
    --cardWidth: 300px;
    --currentWidth: ${(props) => props.currentWidth - 96}px;
    --negativeSpace: calc(var(--currentWidth) - 900px);
    --margin: calc(var(--negativeSpace) / 6);
    margin-left: var(--margin);
    margin-right: var(--margin);
    margin-bottom: 90px;
  };

  @media ${device.xl} {
    font-size: 36px;
    --cardWidth: 300px;
    --currentWidth: 1400px;
    --negativeSpace: calc(var(--currentWidth) - 900px);
    --margin: calc(var(--negativeSpace) / 6);
    margin-left: var(--margin);
    margin-right: var(--margin);
  }
`;

export const PairContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  max-width: 250px;

  ${({ theme }) => theme.mediaWidth.lg`
      --oneThird: calc(1 / 3);
      width: calc(var(--oneThird) * 100%);
      flex-basis: 27%;
  `};
`;

export const PairContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    margin-bottom: 16px;

    ${({theme}) => theme.mediaWidth.lg`
      width: 60%;
    `};
`;

export const Name = styled(TEXT.BodyBold)`
  color: #333;
  position: relative;

  &:after {
    position: absolute;
    content: "";
    height: 1px;
    bottom: -1px;
    margin: 0 auto;
    left: 0;
    width: 100%;
    background: black;

    ${({theme}) => theme.mediaWidth.sm`
      max-width: 140px;
    `}
  }
`

const data = {
  Streams: [
    {
      pair_name: "ETH-DAI",
      address: "",
      img: ETH_DAI_NFT,
    },
    {
      pair_name: "OVL-DAI",
      address: "0xDFC14d2Af169B0D36C4EFF567Ada9b2E0CAE044f",
      img: OVL_DAI_NFT,
    },
    {
      pair_name: "OVL-ETH",
      address: "0x2fDbAdf3C4D5A8666Bc06645B8358ab803996E28",
      img: OVL_ETH_NFT,
    },
  ],
};

interface StreamsProps { 
  header: string;
}

const Streams: React.FC<StreamsProps> = ({header}) => {
  const { width } = useWindowDimensions();

  return (
    <Container>
      <StreamsHeader>{header}</StreamsHeader>
      <PairsContainer currentWidth={width}>
        {data.Streams.map((pair) => (
          <PairContainer>
            <PairContent>
              <Name mb={'5px'}>{pair.pair_name}</Name>
              <TEXT.BodySmall>N/A ETH</TEXT.BodySmall>
            </PairContent>

            <div className={styles["token-img__container"]}>
              <img
                alt={`${pair.pair_name} Token`}
                src={pair.img}
                loading="lazy"
              />
            </div>
          </PairContainer>
        ))}
      </PairsContainer>
    </Container>
  );
};

export default Streams;
