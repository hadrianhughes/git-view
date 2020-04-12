import { baseFontSize, breakpoints } from './settings';

export const rem = (px: number): string => (px / baseFontSize) + 'rem';

export const minWidth = (bp: string): string => `@media only screen and (min-width: ${breakpoints[bp]}px)`;
