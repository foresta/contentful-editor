import React, {FC} from 'react';
import {Header, Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import './HomePage.css';

const HomePage: FC = () => (
  <Container>
    <Header as="h1">Hello Home</Header>
    <Link to="/articles">Articles</Link>
  </Container>
);

export default HomePage;
