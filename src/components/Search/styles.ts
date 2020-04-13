import styled from 'styled-components';
import { baseFontSize, colors } from '../../styles/settings';
import { rem } from '../../styles/tools';

const buttonSize = 40;
const padding = 20;

export const Form = styled.form`
  position: relative;
`;

export const Input = styled.input`
  border: 0;
  box-sizing: border-box;
  display: block;
  font-size: ${rem(baseFontSize)};
  padding: ${rem(padding)};
  width: 100%;
`;

export const Button = styled.button`
  background-color: ${colors.primary};
  border: 0;
  cursor: pointer;
  height: ${rem(buttonSize)};
  position: absolute;
  right: ${rem(10)};
  text-indent: -9999px;
  top: 50%;
  transform: translateY(-50%);
  width: ${rem(buttonSize)};
`;
