import { createGlobalStyle } from 'styled-components';
import { baseFontSize } from './settings';

const globals = createGlobalStyle`
  html, body {
    font-size: ${baseFontSize}px;
    margin: 0;
  }
`;

export default globals;
