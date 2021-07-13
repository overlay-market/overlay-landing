import styled from 'styled-components';
import OverlayLogo from "../../assets/icons/overlay-logo.png";
import { Icon } from "../Icon/Icon";

export const NavContainer = styled.div`
  display: block;
  margin-bottom: 64px;
`

export const NavContent = styled.div`
  display: flex;
  max-width: 1200px;
`

const Nav: React.FC = () => {
  return (
      <NavContainer>
        <NavContent>
          <Icon 
            height={100} 
            width={100} 
            src={OverlayLogo} 
            alt="Overlay Logo" 
            margin={'auto'} 
            />
        </NavContent>
      </NavContainer>
  );
};

export default Nav;
