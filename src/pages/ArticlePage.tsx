import React, {FC} from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import {Container, Header} from 'semantic-ui-react';
import ArticleEditor from '../containers/ArticleEditor';

import './ArticlePage.css';

type ArticlePageProps = RouteComponentProps<{articleId: string}>;

const ArticlePage: FC<ArticlePageProps> = ({match}) => {
  const {articleId} = match.params;
  console.log(articleId);

  return (
    <Container>
      <Header as="h1">Article Edit</Header>
      <ArticleEditor id={articleId} />
    </Container>
  );
};

export default withRouter(ArticlePage);
