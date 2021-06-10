import styled from 'styled-components';
import { device } from '../../theme/theme';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export default Row;

export const ListRow = styled(Row)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 15px;

  @media ${device.lg} {
    margin-bottom: 25px;
  }
`;