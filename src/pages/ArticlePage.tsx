import React, {FC} from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import {Container} from 'semantic-ui-react';
import ArticleEditor from '../containers/ArticleEditor';

import './ArticlePage.css';

type ArticlePageProps = RouteComponentProps<{articleId: string}>;

const ArticlePage: FC<ArticlePageProps> = ({match}) => {
  const {articleId} = match.params;

  return (
    <Container>
      <ArticleEditor id={articleId} />
    </Container>
  );
};

export default withRouter(ArticlePage);
