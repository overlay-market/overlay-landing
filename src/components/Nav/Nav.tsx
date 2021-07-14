import styled from 'styled-components';
import OverlayLogo from "../../assets/icons/overlay-logo.png";
import { device } from '../../theme/theme';
import { IconContainer } from '../Icon/Icon';

export const NavContainer = styled.div`
  display: block;
  margin-bottom: 64px;
`;

export const NavContent = styled.div`
  display: flex;
  max-width: 1400px;
`;

const StyledIconContainer = styled(IconContainer)`
  @media ${device.lg} {
    padding-right: 150px;
  }
`;

const Nav: React.FC = () => {
  return (
      <NavContainer>
        <NavContent>
          <StyledIconContainer height={100} width={100} margin={'auto'}>
            <img src={OverlayLogo} alt={'Overlay Logo'} loading="lazy"/>
          </StyledIconContainer>
        </NavContent>
      </NavContainer>
  );
};

export default Nav;
