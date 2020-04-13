import { Action, Language } from './types';
import { get } from './utils';

interface AppState {
  searchValue: string;
  avatar: string;
  userName: string;
  repositories: Array<object>;
  userLanguages: Array<Language>;
}

export const initialState: AppState = {
  searchValue: '',
  avatar: '',
  userName: '',
  repositories: [],
  userLanguages: []
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
        avatar: get(['avatarUrl'])(action.payload, ''),
        userName: state.searchValue,
        repositories: get(['repositories', 'nodes'])(action.payload, [])
      };
    default:
      return state;
  }
};

export default reducer;
