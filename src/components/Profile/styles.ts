import styled from 'styled-components';
import { colors } from '../../styles/settings';
import { rem } from '../../styles/tools';

const avatarSize = 50;

export const Wrapper = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 0 ${rem(20)};
  position: relative;
`;

export const Name = styled.a`
  color: ${colors.black};
  display: inline-block;
  font-size: ${rem(22)};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  height: ${rem(avatarSize)};
  width: ${rem(avatarSize)};
`;
