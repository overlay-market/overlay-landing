import styled from 'styled-components/macro';
import { device } from '../../theme/theme';

interface RowProps {
  marginBottom: string;
}

const Row = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: ${theme => theme.marginBottom}
`

export default Row;

export const ListRow = styled(Row)`
  margin-bottom: 15px;

  @media ${device.lg} {
    margin-bottom: 25px;
  }
`