import React, {FC} from 'react';
import {Header, Container} from 'semantic-ui-react';

import ArticleList from '../containers/ArticleList';
import './ArticlesPage.css';

const ArticlesPage: FC = () => (
  <Container>
    <Header as="h1">Articles</Header>
    <ArticleList />
  </Container>
);

export default ArticlesPage;
