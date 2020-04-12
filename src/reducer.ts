import {Reducer} from 'redux';
import {AxiosError} from 'axios';

import {ArticlesAction} from './actions/articles';
import * as ActionType from './actions/types';
import {Article} from './models/Article';

export interface ArticlesState {
  list: Article[];
  single?: Article | null;
  isLoading: boolean;
  error?: AxiosError | null;
}

export const articlesInitialState: ArticlesState = {
  list: [],
  isLoading: false,
};

const articlesReducer: Reducer<ArticlesState, ArticlesAction> = (
  state: ArticlesState = articlesInitialState,
  action: ArticlesAction,
): ArticlesState => {
  switch (action.type) {
    case ActionType.GET_ARTICLES_START:
      return {
        ...state,
        list: [],
        isLoading: true,
      };
    case ActionType.GET_ARTICLES_SUCCEED:
      return {
        ...state,
        list: action.payload.list.articles,
        isLoading: false,
      };
    case ActionType.GET_ARTICLES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case ActionType.GET_ARTICLE_BY_ID_START:
      return {
        ...state,
        single: null,
        isLoading: true,
      };
    case ActionType.GET_ARTICLE_BY_ID_SUCCEED:
      return {
        ...state,
        single: action.payload.single.article,
        isLoading: false,
      };
    case ActionType.GET_ARTICLE_BY_ID_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case ActionType.UPDATE_ARTICLE_BODY:
      if (state.single == null) {
        return { ...state }
      }

      return {
        ...state,
        single: { ...state.single, body: action.payload.body }
      }

    case ActionType.UPDATE_ARTICLE_TITLE:
      if (state.single == null) {
        return { ...state }
      }

      return {
        ...state,
        single: { ...state.single, title: action.payload.title }
      }
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default articlesReducer;
