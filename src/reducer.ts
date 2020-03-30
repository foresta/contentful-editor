import {Reducer} from 'redux';
import {AxiosError} from 'axios';

import {ArticlesAction} from './actions/articles';
import * as ActionType from './actions/types';
import {Article} from './models/Article';

export interface ArticlesState {
  articles: Article[];
  isLoading: boolean;
  error?: AxiosError | null;
}

export const articlesInitialState: ArticlesState = {
  articles: [],
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
        articles: [],
        isLoading: true,
      };
    case ActionType.GET_ARTICLES_SUCCEED:
      return {
        ...state,
        articles: action.payload.result.articles,
        isLoading: false,
      };
    case ActionType.GET_ARTICLES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _: never = action;

      return state;
    }
  }
};

export default articlesReducer;
