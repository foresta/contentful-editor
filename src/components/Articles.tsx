import React, {FC} from 'react';
import {Header, Container} from 'semantic-ui-react';

import ArticleList from './ArticleList';
import {Article} from '../models/Article';
import './Articles.css';

const testArticles: Article[] = [
  {
    id: '1',
    title: 'Article 1',
    eyecatch: 'https://placehold.jp/320x240.png',
    body: 'This is Sample Article1',
  },
  {
    id: '2',
    title: 'Article 2',
    eyecatch: 'https://placehold.jp/320x240.png',
    body: 'This is Sample Article2',
  },
];

const Articles: FC = () => (
  <Container>
    <Header as="h1">Hello Articles</Header>
    <ArticleList articles={testArticles} isLoading={false} />
  </Container>
);

export default Articles;
