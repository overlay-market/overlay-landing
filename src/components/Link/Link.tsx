import React from 'react'
import styled from 'styled-components/macro';

interface LinkBaseProps {
  newWindow?: boolean;
  href: string;
  underline?: boolean;
  marginBottom?: string;
}

const LinkBase = styled.a.attrs((props: LinkBaseProps) => ({
  target: props.newWindow ? "_blank" : null,
  rel: "noreferrer",
  href: props.href
}))<LinkBaseProps>`
  margin: auto 0;
  color: #0b0f1c;
  text-decoration: ${(props) => props.underline ? 'underline' : 'none'};
  text-decoration-thickness: 1px;
  position: relative;
  font-size: 20px;
  margin-bottom: ${(props) => props.marginBottom};

  :hover {
    text-decoration: underline;
  }
`

interface LinkProps {
  newWindow?: boolean;
  href: string;
  children: React.ReactChild;
  underline?: boolean;
  marginBottom?: string;
}

export const Link: React.FC<LinkProps> = ({newWindow, href, children, underline, marginBottom }) => {
    return (
      <LinkBase href={href} newWindow={newWindow} underline={underline} marginBottom={marginBottom}>
        {children}
      </LinkBase>
    );
}