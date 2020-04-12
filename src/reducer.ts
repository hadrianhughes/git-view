import { Action } from './types';

interface AppState {
  searchValue: string;
}

export const initialState: AppState = {
  searchValue: ''
};

function reducer (state: AppState = initialState, action: Action): AppState {
  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return {
        ...state,
        searchValue: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
