import styled from 'styled-components'
import {device} from '../../theme/theme'
import {ExternalIcon} from '../Icon/Icon'
import {ArrowRight, ExternalLink} from 'react-feather'
import SpearbitDAOLogo from '../../assets/images/spearbit-dao-logo.png'
import LeastAuthorityLogo from '../../assets/images/least-authority-logo.png'
import ImmunefiLogo from '../../assets/images/immunefi-logo.png'

const Wrapper = styled.div`
  padding: 45px 0;
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  margin: auto;
`

const Title = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 36px;
  font-weight: 600;
  max-width: 370px;
`

const Description = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  color: #808182;
  margin: 24px 0;
  max-width: 430px;
`

const AuditorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #232323;
  justify-content: space-between;

  @media ${device.sm} {
    flex-direction: row;
  }
`

const AuditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #232323;
  width: 100%;
  padding: 20px 0 25px;

  @media ${device.sm} {
    width: 300px;
  }
`

const AuditorLogo = styled.div<{src: string}>`
  width: 150px;
  height: 100px;
  background: url(${({src}) => src});
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
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
    completedAuditHref: `https://github.com/overlay-market/v1-core/blob/main/audits/spearbit/audit.pdf`,
    externalLinkText: 'Least Authority Audit',
  },
  {
    name: 'Immunefi',
    logoUrl: `${ImmunefiLogo}`,
    completedAuditHref: `https://github.com/overlay-market/v1-core/blob/main/audits/spearbit/audit.pdf`,
    externalLinkText: 'Immunefi Bounty',
  },
]

const Audits = () => {
  return (
    <Wrapper>
      <MainContainer>
        <Title>Security at the heart of production</Title>
        <Description>
          Overlay Protocol has gone through two rigorous audits with some of the best, and continues
          to have open bounties for smart contract security bugs.
        </Description>
        <ArrowIconLink href="#">
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
