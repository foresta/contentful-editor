import React, {FC} from 'react';
import {Redirect, Route, Switch} from 'react-router';
import {Link} from 'react-router-dom';
import {Header, Container} from 'semantic-ui-react';

import Home from './components/Home';
import Articles from './components/Articles';

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
      <Route path="/" exact component={Home} />
      <Route path="/articles" component={Articles} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
