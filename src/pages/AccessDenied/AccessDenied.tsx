import styled from 'styled-components'
import {Text, TextProps as TextPropsOriginal} from 'rebass'
import React, {HTMLProps} from 'react'
import {Box} from 'rebass/styled-components'

export const PageContainer = styled.div<{maxWidth?: string}>`
  max-width: ${({maxWidth}) => (maxWidth ? maxWidth : '1200px')};
  margin: auto;
  margin-top: 0;
  margin-bottom: 48px;
  padding: 16px;

  > div {
    background: blue !important;
  }
`

export const InterfaceWrapper = styled.div`
  display: flex !important;
  flex-direction: column;
  z-index: 0;
  color: white;
  position: static;
  max-width: 375px;
  padding: 0 16px;
  margin: 0 auto 48px;
`

const FlexContainer = styled(Box)<{
  width?: string
  align?: string
  justify?: string
  padding?: string
  border?: string
  borderRadius?: string
  borderTop?: string
  borderBottom?: string
}>`
  display: flex;
  position: relative;
  width: ${({width}) => width ?? '100%'};
  align-items: ${({align}) => align ?? 'center'};
  justify-content: ${({justify}) => justify ?? 'flex-start'};
  padding: ${({padding}) => padding};
  border: ${({border}) => border};
  border-radius: ${({borderRadius}) => borderRadius};
  border-top: ${({borderTop}) => borderTop ?? borderTop};
  border-bottom: ${({borderBottom}) => borderBottom ?? borderBottom};
`

export const FlexColumn = styled(FlexContainer)`
  flex-direction: column;
`

export const FlexRow = styled(FlexContainer)`
  flex-direction: row;
`

const MessageContainer = styled(FlexColumn)`
  border: 1px solid #71ceff;
  border-radius: 8px;
  box-shadow: 0 0 12px #5b60a4;
  padding: 16px 16px 24px;
  background: #1b2131;
  margin: auto;
  max-width: 400px;
`

const TextWrapper = styled(Text)`
  color: white;
`

const TextWrapperUnderlined = styled(Text)`
  color: white;
  text-decoration: underline dashed;
`

type TextProps = Omit<TextPropsOriginal, 'css'>

export const TEXT = {
  AdjustableSize(props: TextProps) {
    return <TextWrapper fontFamily="Inter, sans-serif" fontWeight={500} color={'text2'} {...props} />
  },
  Menu(props: TextProps) {
    return <TextWrapper fontFamily="Inter, sans-serif" fontWeight={700} fontSize={14} {...props} />
  },
  StandardHeader1(props: TextProps) {
    return <TextWrapper fontFamily="Inter, sans-serif" fontSize={20} fontWeight={400} {...props} />
  },
  BoldHeader1(props: TextProps) {
    return <TextWrapper fontFamily="Inter, sans-serif" fontSize={20} fontWeight={700} {...props} />
  },
  StandardBody(props: TextProps) {
    return <TextWrapper fontFamily="Inter, sans-serif" fontSize={16} fontWeight={400} {...props} />
  },
  BoldStandardBody(props: TextProps) {
    return <TextWrapper fontFamily="Inter, sans-serif" fontSize={16} fontWeight={700} {...props} />
  },
  SmallBody(props: TextProps) {
    return <TextWrapper fontFamily="Inter, sans-serif" fontSize={14} fontWeight={400} {...props} />
  },
  BoldSmallBody(props: TextProps) {
    return <TextWrapper fontFamily="Inter, sans-serif" fontSize={14} fontWeight={700} {...props} />
  },
  Supplemental(props: TextProps) {
    return <TextWrapper fontFamily="Inter, sans-serif" fontSize={12} fontWeight={400} {...props} />
  },
  SupplementalUnderlinedDashes(props: TextProps) {
    return <TextWrapperUnderlined fontFamily="Inter, sans-serif" fontSize={12} fontWeight={400} {...props} />
  },
  SupplementalHeader(props: TextProps) {
    return <TextWrapper fontFamily="Inter, sans-serif" fontSize={12} fontWeight={400} {...props} />
  },
  BoldSupplemental(props: TextProps) {
    return <TextWrapper fontFamily="Inter, sans-serif" fontSize={12} fontWeight={700} {...props} />
  },
  BoldNumber(props: TextProps) {
    return <TextWrapper fontFamily="Roboto Mono, monospace" fontSize={14} fontWeight={700} {...props} />
  },
  Number(props: TextProps) {
    return <TextWrapper fontFamily="Roboto Mono, monospace" fontSize={14} fontWeight={400} {...props} />
  },
}

const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  color: white;
  font-weight: 500;
  :focus {
    outline: none;
  }
`

const EXPLORER_HOSTNAMES: {[hostname: string]: true} = {
    'etherscan.io': true,
    'kovan.etherscan.io': true,
    'rinkeby.etherscan.io': true,
  }
  
  /**
   * Returns the anonymized version of the given href, i.e. one that does not leak user information
   * @param href the link to anonymize, i.e. remove any personal data from
   * @return string anonymized version of the given href
   */
  export function anonymizeLink(href: string): string {
    try {
      const url = new URL(href)
      if (EXPLORER_HOSTNAMES[url.hostname]) {
        const pathPieces = url.pathname.split('/')
  
        const anonymizedPath = pathPieces.map(pc => (/0x[a-fA-F0-9]+/.test(pc) ? '***' : pc)).join('/')
  
        return `${url.protocol}//${url.hostname}${anonymizedPath}`
      }
      return href
    } catch (error) {
      return href
    }
  }

function handleClickExternalLink(event: React.MouseEvent<HTMLAnchorElement>) {
  const {target, href} = event.currentTarget

  const anonymizedHref = anonymizeLink(href)

  // don't prevent default, don't redirect if it's a new tab
  if (target === '_blank' || event.ctrlKey || event.metaKey) {
    console.debug('Fired outbound link event', anonymizedHref)
  } else {
    event.preventDefault()
    window.location.href = anonymizedHref
  }
}

function ExternalLink({
    target = '_blank',
    href,
    rel = 'noopener noreferrer',
    ...rest
  }: Omit<HTMLProps<HTMLAnchorElement>, 'as' | 'ref' | 'onClick'> & {href: string}) {
    return <StyledLink target={target} rel={rel} href={href} onClick={handleClickExternalLink} {...rest} />
  }

export const AccessDenied = () => {
  return (
    <FlexColumn height="100vh" backgroundColor={'#1b2131'}>
      <MessageContainer>
        <TEXT.BoldHeader1 textAlign="center">Service Not Available In Your Region</TEXT.BoldHeader1>
        <TEXT.StandardBody textAlign="center" mt="12px">
          For compliance reasons, service is not available in your region.
        </TEXT.StandardBody>
        <TEXT.StandardBody textAlign="center" mt="12px">
          Use of Tor, VPN, proxies or other means to circumvent this restriction is a violation of our
          <ExternalLink href={'https://overlay.market/#/tos'}>
            <TEXT.StandardBody color={'#12b4ff'}>Terms of Service.</TEXT.StandardBody>
          </ExternalLink>
        </TEXT.StandardBody>
        {/* <TEXT.StandardBody>{message}</TEXT.StandardBody> */}
      </MessageContainer>
    </FlexColumn>
  )
}