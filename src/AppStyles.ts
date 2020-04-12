import styled from 'styled-components';
import { minWidth } from './styles/tools';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  ${minWidth('medium')} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
