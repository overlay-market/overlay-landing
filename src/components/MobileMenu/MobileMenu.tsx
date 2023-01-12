import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import {bool} from 'prop-types'
import useWindowDimensions from '../../hooks/useWindowDimensions'

const StyledMenu = styled.nav<{open: boolean; height: number; width: number}>`
  display: flex;
  flex-direction: column;
  background: transparent;
  height: 100vh;
  text-align: left;
  width: 100%;
  height: ${({height, open}) => `${height}`}px;
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  overflow: hidden;
  padding-top: 75px;
  opacity: ${({open}) => (open ? 1 : 0)};
  z-index: ${({open}) => (open ? 1 : -1)};
  visibility: ${({open}) => (open ? 'default' : 'hidden')};
`

const StyledInternalLink = styled(NavLink)`
  color: #f7f7f7;
  font-size: 32px;
  text-align: center;
  text-decoration: none;
  font-weight: 700;
  margin: 16px 0;
  border: none !important;

  :focus {
    outline: none;
    text-decoration: none;
  }
  :hover {
    outline: none;
    text-decoration: none;
  }
  :active {
    outline: none;
    text-decoration: none;
  }
`

const StyledExternalLink = styled.a.attrs(props => ({
  target: props.target || '_blank',
  rel: props.rel || 'noopener noreferrer',
  href: props.href,
}))`
  font-size: 14px;
  text-align: left;
  text-decoration: none;
  color: white;
  font-weight: 700;
  margin: 16px 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`

const MobileMenu = ({open, ...props}: {open: boolean; props?: any}) => {
  const {height, width} = useWindowDimensions()
  const isHidden = open ? true : false
  const tabIndex = isHidden ? 0 : -1

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} height={height} width={width} {...props}>
      <Content>
        <StyledInternalLink tabIndex={tabIndex} to={'/home'}>
          HOME
        </StyledInternalLink>
        <StyledInternalLink tabIndex={tabIndex} to={'/mint'}>
          MINT
        </StyledInternalLink>
      </Content>
    </StyledMenu>
  )
}

MobileMenu.propTypes = {
  open: bool.isRequired,
}

export default MobileMenu
