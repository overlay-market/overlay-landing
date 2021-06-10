import React from 'react'
import styled from 'styled-components/macro';

interface LinkBaseProps {
  newWindow?: boolean;
  href: string;
}

const LinkBase = styled.a.attrs((props: LinkBaseProps) => ({
  target: props.newWindow ? "_blank" : null,
  rel: "noreferrer",
  href: props.href
}))<LinkBaseProps>`
  margin: auto 0;
  color: #0b0f1c;
  text-decoration: none;
  position: relative;
  font-size: 20px;

  &:after {
    position: absolute;
    content: "";
    height: 1px;
    /* adjust this to move up and down. you may have to adjust the line height of the paragraph if you move it down a lot. */
    bottom: 1px;

    /* center - (optional) use with adjusting width   */
    margin: 0 auto;
    left: 0;
    right: 0;
    width: 100%;
    background: #0b0f1c;

    /* optional animation */
    -o-transition: 0.5s;
    -ms-transition: 0.5s;
    -moz-transition: 0.5s;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }
  &:hover:after {
    width: 80%;
    background: blue;
  }
`

interface LinkProps {
  newWindow?: boolean;
  href: string;
  children: React.ReactChild;
}

export const Link: React.FC<LinkProps> = ({newWindow, href, children}) => {
    return (
      <LinkBase href={href} newWindow={newWindow}>
        {children}
      </LinkBase>
    );
}