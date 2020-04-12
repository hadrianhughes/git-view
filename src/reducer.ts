import { Action } from './types';
import get from './utils/get';

interface AppState {
  searchValue: string;
  avatar: string;
}

export const initialState: AppState = {
  searchValue: '',
  avatar: ''
};

function reducer (state: AppState = initialState, action: Action): AppState {
  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.payload
      };
    case 'SET_USER':
      return {
        ...state,
        avatar: get(['avatarUrl'])(action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
