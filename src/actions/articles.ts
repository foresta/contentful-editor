import {AxiosError} from 'axios';
import {Article} from '../models/Article';
import * as ActionType from './types';

interface GetArticlesParams {}

interface GetArticlesResult {
  articles: Article[];
}

interface GetArticleByIdParams {
  id: string;
}

interface GetArticleByIdResult {
  article: Article;
}

export const getArticles = {
  start: (params: GetArticlesParams) => ({
    type: ActionType.GET_ARTICLES_START as typeof ActionType.GET_ARTICLES_START,
    payload: params,
  }),

  succeed: (params: GetArticlesParams, result: GetArticlesResult) => ({
    type: ActionType.GET_ARTICLES_SUCCEED as typeof ActionType.GET_ARTICLES_SUCCEED,
    payload: {params, list: result},
  }),

  fail: (params: GetArticlesParams, error: AxiosError) => ({
    type: ActionType.GET_ARTICLES_FAIL as typeof ActionType.GET_ARTICLES_FAIL,
    payload: {params, error},
    error: true,
  }),
};

export const getArticleById = {
  start: (params: GetArticleByIdParams) => ({
    type: ActionType.GET_ARTICLE_BY_ID_START as typeof ActionType.GET_ARTICLE_BY_ID_START,
    payload: params,
  }),

  succeed: (params: GetArticleByIdParams, result: GetArticleByIdResult) => ({
    type: ActionType.GET_ARTICLE_BY_ID_SUCCEED as typeof ActionType.GET_ARTICLE_BY_ID_SUCCEED,
    payload: {params, single: result},
  }),

  fail: (params: GetArticleByIdParams, error: AxiosError) => ({
    type: ActionType.GET_ARTICLE_BY_ID_FAIL as typeof ActionType.GET_ARTICLE_BY_ID_FAIL,
    payload: {params, error},
  }),
};


interface UpdateArticleBodyParams {
  body: string;
}

export const updateArticleBody = (params: UpdateArticleBodyParams) => ({
  type: ActionType.UPDATE_ARTICLE_BODY as typeof ActionType.UPDATE_ARTICLE_BODY,
  payload: params
});


interface UpdateArticleTitleParams {
  title: string
}

export const updateArticleTitle = (params: UpdateArticleTitleParams) => ({
  type: ActionType.UPDATE_ARTICLE_TITLE as typeof ActionType.UPDATE_ARTICLE_TITLE,
  payload: params
});

export type ArticlesAction =
  | ReturnType<typeof getArticles.start>
  | ReturnType<typeof getArticles.succeed>
  | ReturnType<typeof getArticles.fail>
  | ReturnType<typeof getArticleById.start>
  | ReturnType<typeof getArticleById.succeed>
  | ReturnType<typeof getArticleById.fail>
  | ReturnType<typeof updateArticleBody>
  | ReturnType<typeof updateArticleTitle>;
