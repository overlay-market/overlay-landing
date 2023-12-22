import styled from 'styled-components'
import {device} from '../../theme/theme'
import {ExternalIcon} from '../Icon/Icon'
import {ArrowRight, ExternalLink} from 'react-feather'
import SpearbitDAOLogo from '../../assets/images/spearbit-dao-logo.png'
import LeastAuthorityLogo from '../../assets/images/least-authority-logo.png'
import ImmunefiLogo from '../../assets/images/immunefi-logo.png'

const Wrapper = styled.div`
  padding: 80px 0;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  margin: auto;
  padding: 0 34px;

  @media ${device.md} {
    padding: 0px 40px;
  }
`

const Title = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-weight: 600;
  max-width: 300px;
  line-height: 42px;

  @media ${device.md} {
    font-size: 36px;
    max-width: 370px;
  }
`

const Description = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #808182;
  margin: 24px 0;
  max-width: 430px;
  line-height: 25px;
`

const AuditorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #232323;
  justify-content: space-between;

  @media ${device.md} {
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: start;
    gap: 80px;
  }

  @media ${device.md} {
    gap: 100px;
  }
`

const AuditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #232323;
  width: 300px;
  padding: 20px 0 25px;
`

const AuditorLogo = styled.div<{src: string}>`
  width: 150px;
  height: 80px;
  background: url(${({src}) => src});
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 10px;
`

const AuditorLink = styled.a`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  text-decoration: underline;
  box-shadow: none;
  color: #12b4ff;
  margin-top: 10px;
  font-size: 16px;
`

const ArrowIconLink = styled.a`
  font-family: 'Be Vietnam Pro', sans-serif;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  text-decoration: underline;
  box-shadow: none;
  color: black;
  font-size: 16px;
  margin-bottom: 50px;
`

interface AuditorProps {
  logoUrl: string
  completedAuditHref: string
  externalLinkText: string
}

const Auditor = ({logoUrl, completedAuditHref, externalLinkText}: AuditorProps) => {
  return (
    <AuditorContainer>
      <AuditorLogo src={logoUrl} />
      <AuditorLink href={completedAuditHref}>
        {externalLinkText}
        <ExternalIcon margin="auto 8px">
          <ExternalLink size={12} />
        </ExternalIcon>
      </AuditorLink>
    </AuditorContainer>
  )
}

interface AuditorAsset extends AuditorProps {
  name: string
}

const auditorsList: Array<AuditorAsset> = [
  {
    name: 'Spearbit DAO',
    logoUrl: `${SpearbitDAOLogo}`,
    completedAuditHref: `https://github.com/overlay-market/v1-core/blob/main/audits/spearbit/audit.pdf`,
    externalLinkText: 'Spearbit DAO Audit',
  },
  {
    name: 'Least Authority',
    logoUrl: `${LeastAuthorityLogo}`,
    completedAuditHref: `https://github.com/overlay-market/v1-core/blob/main/audits/leastauthority/audit.pdf`,
    externalLinkText: 'Least Authority Audit',
  },
  {
    name: 'Immunefi',
    logoUrl: `${ImmunefiLogo}`,
    completedAuditHref: `https://immunefi.com/bounty/overlay/`,
    externalLinkText: 'Immunefi Bounty',
  },
]

const Audits = () => {
  const ImmunefiBountyLink = auditorsList[2].completedAuditHref

  return (
    <Wrapper>
      <MainContainer>
        <Title>Security at the heart of production</Title>
        <Description>
          Overlay Protocol has gone through two rigorous audits with some of the best, and continues
          to have open bounties for smart contract security bugs.
        </Description>
        <ArrowIconLink href={ImmunefiBountyLink}>
          Explore bounties
          <ExternalIcon margin="auto 8px">
            <ArrowRight size={12} />
          </ExternalIcon>
        </ArrowIconLink>

        <AuditorsContainer>
          {auditorsList.map(current => (
            <Auditor
              logoUrl={current.logoUrl}
              completedAuditHref={current.completedAuditHref}
              externalLinkText={current.externalLinkText}
            />
          ))}
        </AuditorsContainer>
      </MainContainer>
    </Wrapper>
  )
}

export default Audits
