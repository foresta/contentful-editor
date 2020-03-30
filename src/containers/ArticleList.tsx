import React, {FC, useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';
import {withRouter} from 'react-router';

import ArticleList, {ArticleListProps} from '../components/ArticleList';
import {Article} from '../models/Article';
import {ArticlesState} from '../reducer';
import {getArticles} from '../actions/articles';

interface StateProps {
  articles: Article[];
  isLoading?: boolean;
}

interface DispatchProps {
  getArticlesStart: () => void;
}

type EnhancedArticleListProps = ArticleListProps & StateProps & DispatchProps;

const mapStateToProps = (state: ArticlesState): StateProps => ({
  articles: state.articles,
  isLoading: state.isLoading,
});

const mapDipatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getArticlesStart: () => getArticles.start({}),
    },
    dispatch,
  );

const ArticleListContainer: FC<EnhancedArticleListProps> = ({
  articles,
  isLoading,
  getArticlesStart,
}) => {
  useEffect(() => {
    getArticlesStart();
  }, [getArticlesStart]);

  return <ArticleList articles={articles} isLoading={isLoading} />;
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDipatchToProps,
  )(ArticleListContainer),
);
