import React, {FC} from 'react';
import {Header, Container} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import './Home.css';

const Home: FC = () => (
  <Container>
    <Header as="h1">Hello Home</Header>
    <Link to="/articles">Articles</Link>
  </Container>
);

export default Home;
