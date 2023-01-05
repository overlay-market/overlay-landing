import styled from 'styled-components'
import {ExternalIcon} from '../Icon/Icon'
import {ArrowRight, ExternalLink} from 'react-feather'
import SpearbitDAOLogo from '../../assets/images/spearbit-dao-logo.png'
import LeastAuthorityLogo from '../../assets/images/least-authority-logo.png'
import ImmunefiLogo from '../../assets/images/immunefi-logo.png'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1100px;
  margin: auto;
`

const Title = styled.div`
  font-size: 36px;
  font-weight: bold;
  width: 370px;
`

const Description = styled.div`
  font-size: 18px;
  color: #808182;
  margin: 24px 0;
  width: 430px;
`

const ArrowIconLink = styled.a``

const AuditorsContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #232323;
  justify-content: space-between;
`

const AuditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #232323;
  width: 300px;
  padding: 30px 0;
`

const AuditorLogo = styled.div<{src: string}>`
  width: 200px;
  height: 100px;
  background: url(${({src}) => src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`

const AuditorLink = styled.a``

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const _ArrowIconLink = (href: string, text: string) => {
  return (
    <LinkContainer>
      {text}
      <ExternalIcon>
        <ArrowRight />
      </ExternalIcon>
    </LinkContainer>
  )
}

const _ExternalIconLink = (href: string, text: string) => {
  return (
    <LinkContainer>
      {text}
      <ExternalIcon>
        <ExternalLink />
      </ExternalIcon>
    </LinkContainer>
  )
}

const _AuditorLink = (text: string, href: string, useArrowIcon: boolean) => {
  return <LinkContainer>{text}</LinkContainer>
}

interface AuditorProps {
  logoUrl: string
  completedAuditHref: string
  externalLinkText: string
  useArrowIcon: boolean
}

const Auditor = ({logoUrl, completedAuditHref, externalLinkText}: AuditorProps) => {
  return (
    <AuditorContainer>
      <AuditorLogo src={logoUrl} />
      <AuditorLink href={completedAuditHref}>{externalLinkText}</AuditorLink>
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
    useArrowIcon: false,
  },
  {
    name: 'Least Authority',
    logoUrl: `${LeastAuthorityLogo}`,
    completedAuditHref: `https://github.com/overlay-market/v1-core/blob/main/audits/spearbit/audit.pdf`,
    externalLinkText: 'Least Authority Audit',
    useArrowIcon: false,
  },
  {
    name: 'Immunefi',
    logoUrl: `${ImmunefiLogo}`,
    completedAuditHref: `https://github.com/overlay-market/v1-core/blob/main/audits/spearbit/audit.pdf`,
    externalLinkText: 'Immunefi Bounty',
    useArrowIcon: true,
  },
]

const Audits = () => {
  return (
    <MainContainer>
      <Title>Security at the heart of production</Title>
      <Description>
        Overlay Protocol has gone through two rigorous audits with some of the best, and continues
        to have open bounties for smart contract security bugs.
      </Description>
      <ArrowIconLink href="#">Explore bounties</ArrowIconLink>

      <AuditorsContainer>
        {auditorsList.map(current => (
          <Auditor
            logoUrl={current.logoUrl}
            completedAuditHref={current.completedAuditHref}
            externalLinkText={current.externalLinkText}
            useArrowIcon={current.useArrowIcon}
          />
        ))}
      </AuditorsContainer>
    </MainContainer>
  )
}

export default Audits
