import { takeEvery, select, call, put } from 'redux-saga/effects';
import get from '../utils/get';
import { searchUser } from '../api';

function* search () {
  const userName = yield select(get(['searchValue']));

  if (!userName) return;

  const result = yield call(searchUser, userName);

  if (result.errors) {
    console.error(result.errors);
  }

  const user = get(['data', 'user'])(result);
  if (user) {
    yield put({ type: 'SET_USER', payload: user });
  }
}

export default function* () {
  yield takeEvery('PERFORM_SEARCH', search);
};
