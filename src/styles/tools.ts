import { baseFontSize } from './settings';

export const rem = (px: number): string => (px / baseFontSize) + 'rem';
