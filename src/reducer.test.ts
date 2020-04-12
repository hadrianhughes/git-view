import reducer, { initialState } from './reducer';

describe('reducer function', () => {
  it('Should accept a previous state and an action with an invalid type and return the same state', () => {
    const action = { type: 'INVALID' };

    expect(reducer(initialState, action)).toStrictEqual(initialState);
  });

  it('Should accept a previous state and a SET_SEARCH_VALUE action and return the state with updated searchValue', () => {
    const newSearchValue = 'new value';
    const action = {
      type: 'SET_SEARCH_VALUE',
      payload: newSearchValue
    };

    expect(reducer(initialState, action)).toStrictEqual({
      ...initialState,
      searchValue: newSearchValue
    });
  });

  it('Should accept a previous state and a SET_USER action and return the state with updated avatar', () => {
    const newAvatar = 'avatarURL';
    const action = {
      type: 'SET_USER',
      payload: {
        avatarUrl: newAvatar
      }
    };

    expect(reducer(initialState, action)).toStrictEqual({
      ...initialState,
      avatar: newAvatar
    });
  });
});
