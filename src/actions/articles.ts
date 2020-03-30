import {AxiosError} from 'axios';
import {Article} from '../models/Article';
import * as ActionType from './types';

interface GetArticlesParams {}

interface GetArticlesResult {
  articles: Article[];
}

export const getArticles = {
  start: (params: GetArticlesParams) => ({
    type: ActionType.GET_ARTICLES_START as typeof ActionType.GET_ARTICLES_START,
    payload: params,
  }),

  succeed: (params: GetArticlesParams, result: GetArticlesResult) => ({
    type: ActionType.GET_ARTICLES_SUCCEED as typeof ActionType.GET_ARTICLES_SUCCEED,
    payload: {params, result},
  }),

  fail: (params: GetArticlesParams, error: AxiosError) => ({
    type: ActionType.GET_ARTICLES_FAIL as typeof ActionType.GET_ARTICLES_FAIL,
    payload: {params, error},
    error: true,
  }),
};

export type ArticlesAction =
  | ReturnType<typeof getArticles.start>
  | ReturnType<typeof getArticles.succeed>
  | ReturnType<typeof getArticles.fail>;
