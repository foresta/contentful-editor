import React, {FC} from 'react';
import {RouteComponentProps, withRouter} from 'react-router';
import {Container, Header} from 'semantic-ui-react';
import ArticleEditor from '../components/ArticleEditor';

import './ArticlePage.css';

import {Article} from '../models/Article';

const testArticle: Article = {
  id: '1',
  title: 'article 1',
  eyecatch: 'https://placehold.jp/320x200.png',
  body:
    'This is article1.This is article1.This is article1.This is article1.This is article1.This is article1.This is article1.This is article1.',
};

type ArticlePageProps = RouteComponentProps<{articleId: string}>;

const ArticlePage: FC<ArticlePageProps> = ({match}) => {
  const {articleId} = match.params;
  console.log(articleId);

  return (
    <Container>
      <Header as="h1">Article Edit</Header>
      <ArticleEditor article={testArticle} isLoading={false} />
    </Container>
  );
};

export default withRouter(ArticlePage);
