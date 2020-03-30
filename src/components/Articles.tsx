import React, {FC} from 'react';
import {Header, Container} from 'semantic-ui-react';

import ArticleList from '../containers/ArticleList';
import './Articles.css';

const Articles: FC = () => (
  <Container>
    <Header as="h1">Articles</Header>
    <ArticleList />
  </Container>
);

export default Articles;
