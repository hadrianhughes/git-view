import styled from 'styled-components';
import { appMaxWidth } from './styles/settings';
import { minWidth, rem } from './styles/tools';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: ${rem(appMaxWidth)};

  ${minWidth('medium')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
