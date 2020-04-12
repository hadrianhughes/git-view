import { Action } from './types';

export const setSearchValue = (value: string): Action => ({
  type: 'SET_SEARCH_VALUE',
  payload: value
});
