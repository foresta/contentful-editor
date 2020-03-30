import {all, call, fork, put, takeLatest} from 'redux-saga/effects';

import * as Action from '../actions/types';
import {getArticles, getArticleById} from '../actions/articles';
import {
  getArticlesFactory,
  getArticleByIdFactory,
} from '../services/contentful/api';

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

function* runGetArticleById(action: ReturnType<typeof getArticleById.start>) {
  const {id} = action.payload;

  try {
    const api = getArticleByIdFactory();
    const article = yield call(api, id);

    yield put(getArticleById.succeed({id}, {article}));
  } catch (error) {
    yield put(getArticleById.fail({id}, error));
  }
}

export function* watchGetArticleById() {
  yield takeLatest(Action.GET_ARTICLE_BY_ID_START, runGetArticleById);
}

export default function* rootSaga() {
  yield all([fork(watchGetArticles), fork(watchGetArticleById)]);
}
