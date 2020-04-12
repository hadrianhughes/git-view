import { takeEvery, select } from 'redux-saga/effects';
import get from '../utils/get';

function* search () {
  const query = yield select(get(['searchValue']));
  console.info(query);
}

export default function* () {
  yield takeEvery('PERFORM_SEARCH', search);
};
