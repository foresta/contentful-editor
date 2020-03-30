import {all, call, fork, put, takeLatest} from 'redux-saga/effects';

import * as Action from '../actions/types';
import {getArticles} from '../actions/articles';
import {getArticlesFactory} from '../services/contentful/api';

function* runGetArticles(action: ReturnType<typeof getArticles.start>) {
  try {
    const api = getArticlesFactory();
    const articles = yield call(api);

    yield put(getArticles.succeed({}, {articles}));
  } catch (error) {
    yield put(getArticles.fail({}, error));
  }
}

export function* watchGetArticles() {
  yield takeLatest(Action.GET_ARTICLES_START, runGetArticles);
}

export default function* rootSaga() {
  yield all([fork(watchGetArticles)]);
}
