import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {device} from '../../theme/theme'
import BncPreTgeBackground from '../../assets/images/bnc_pre_TGE.png'
import OverlayFullLogo from '../../assets/images/overlay-full-logo.png'
import BscMainnetLogo from '../../assets/images/bsc-mainnet-logo.png'

const TGE_DATE = new Date('2025-08-14T07:30:00Z')

const BannerContainer = styled.div`
  background: url(${BncPreTgeBackground});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  padding: 40px 16px;
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }
`

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  padding: 8px;
  opacity: 0.7;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }
`

const LogosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  justify-content: center;

  @media ${device.sm} {
    flex-direction: row;
    gap: 24px;
  }
`

const LogoImage = styled.img`
  height: 60px;
  max-width: 100%;
  object-fit: contain;
`

const Separator = styled.div`
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;

  @media ${device.sm} {
    font-size: 32px;
  }
`

const CountdownContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
  justify-content: center;

  @media ${device.sm} {
    gap: 24px;
  }
`

const CountdownBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem;
  border-radius: 4px;
  min-width: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
`

const CountdownNumber = styled.div`
  color: white;
  font-family: monospace;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1;
`

const CountdownLabel = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.75rem;
  margin-top: 0.25rem;
  text-transform: uppercase;
`

const CountdownBox: React.FC<{value: number; label: string}> = ({value, label}) => (
  <CountdownBoxContainer>
    <CountdownNumber>{value.toString().padStart(2, '0')}</CountdownNumber>
    <CountdownLabel>{label}</CountdownLabel>
  </CountdownBoxContainer>
)

const CountdownSeparator = styled.div`
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  height: 60px;

  @media ${device.sm} {
    font-size: 32px;
    height: 72px;
  }
`

const LearnMoreButton = styled.a`
  background: linear-gradient(135deg, #d4af37 0%, #f4d03f 100%);
  color: #1a1a1a;
  padding: 12px 32px;
  border-radius: 24px;
  text-decoration: none;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
  }

  @media ${device.sm} {
    font-size: 16px;
    padding: 16px 36px;
  }
`

const Arrow = styled.span`
  font-size: 16px;
  transition: transform 0.2s;

  ${LearnMoreButton}:hover & {
    transform: translateX(2px);
  }
`

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const CountdownBanner: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +TGE_DATE - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        // Countdown has ended
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!isVisible) {
    return null
  }

  return (
    <BannerContainer>
      <CloseButton onClick={() => setIsVisible(false)}>×</CloseButton>

      <LogosContainer>
        <LogoImage src={OverlayFullLogo} alt="Overlay" />
        <Separator>×</Separator>
        <LogoImage src={BscMainnetLogo} alt="Binance Alpha" />
      </LogosContainer>

      <CountdownContainer>
        <CountdownBox value={timeLeft.days} label="DAYS" />

        <CountdownSeparator>:</CountdownSeparator>

        <CountdownBox value={timeLeft.hours} label="HRS" />

        <CountdownSeparator>:</CountdownSeparator>

        <CountdownBox value={timeLeft.minutes} label="MINS" />

        <CountdownSeparator>:</CountdownSeparator>

        <CountdownBox value={timeLeft.seconds} label="SECS" />
      </CountdownContainer>

      <LearnMoreButton
        href="https://x.com/overlayprotocol"
        target="_blank"
        rel="noopener noreferrer"
      >
        LEARN MORE <Arrow>→</Arrow>
      </LearnMoreButton>
    </BannerContainer>
  )
}

export default CountdownBanner
