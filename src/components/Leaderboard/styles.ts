import styled from 'styled-components';
import { colors } from '../../styles/settings';
import { rem } from '../../styles/tools';

export const Heading = styled.h2`
  background-color: ${colors.darkGrey};
  color: ${colors.white};
  font-size: ${rem(16)};
  margin: 0;
  padding: ${rem(5)} ${rem(10)};
  text-transform: uppercase;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0 ${rem(10)};
`;
