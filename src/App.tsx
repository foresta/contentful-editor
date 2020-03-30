import React, {FC} from 'react';
import {Redirect, Route, Switch} from 'react-router';
import {Link} from 'react-router-dom';
import {Header, Container} from 'semantic-ui-react';

import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import ArticlePage from './pages/ArticlePage';

import './App.css';

const title = 'Contentful Editor';

const App: FC = () => (
  <>
    <header className="app-header">
      <Container>
        <Header as="h1">
          <Link to="/">{title}</Link>
        </Header>
      </Container>
    </header>

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/articles/:articleId" component={ArticlePage} />
      <Route path="/articles" component={ArticlesPage} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
