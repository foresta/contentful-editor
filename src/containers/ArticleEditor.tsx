import React, {FC, useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch} from 'redux';

import ArticleEditor, {ArticleEditorProps} from '../components/ArticleEditor';
import {Article} from '../models/Article';
import {ArticlesState} from '../reducer';
import {getArticleById} from '../actions/articles';

interface StateProps {
  article?: Article | null;
  isLoading?: boolean;
}

interface DispatchProps {
  getArticleByIdStart: (id: string) => void;
}

interface ArticleEditorContainerProps {
  id: string;
}

type EnhanceArticleEditorProps = ArticleEditorProps &
  ArticleEditorContainerProps &
  StateProps &
  DispatchProps;

const mapStateToProps = (state: ArticlesState): StateProps => ({
  article: state.single,
  isLoading: state.isLoading,
});

const mapDipatchToProps = (dispatch: Dispatch): DispatchProps =>
  bindActionCreators(
    {
      getArticleByIdStart: (id: string) => getArticleById.start({id}),
    },
    dispatch,
  );

const ArticleEditorContainer: FC<EnhanceArticleEditorProps> = ({
  id,
  article,
  isLoading,
  getArticleByIdStart,
}) => {
  useEffect(() => {
    getArticleByIdStart(id);
  }, [getArticleByIdStart]);

  return <ArticleEditor article={article} isLoading={isLoading} />;
};

export default connect(
  mapStateToProps,
  mapDipatchToProps,
)(ArticleEditorContainer);
