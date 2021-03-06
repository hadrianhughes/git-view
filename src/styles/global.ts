import { createGlobalStyle } from 'styled-components';
import { baseFontSize, colors } from './settings';

const globals = createGlobalStyle`
  html, body {
    background-color: ${colors.lightGrey};
    font-family: sans-serif;
    font-size: ${baseFontSize}px;
    margin: 0;
  }
`;

export default globals;
