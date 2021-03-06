import React, {FC} from 'react';

import {Card, Loader, Dimmer} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import {Article} from '../models/Article';

export interface ArticleListProps {
  articles: Article[];
  isLoading?: boolean;
}

const ArticleList: FC<ArticleListProps> = ({
  articles = [],
  isLoading = false,
}) => (
  <div>
    {isLoading ? (
      <Dimmer active inverted>
        <Loader inverted={false}>読み込み中...</Loader>
      </Dimmer>
    ) : (
      <Card.Group>
        {articles.map(article => (
          <Card
            key={article.id}
            as={Link}
            to={'/articles/' + article.id}
            header={article.title}
            image={article.eyecatch}
            description={article.body}
          />
        ))}
      </Card.Group>
    )}
  </div>
);

export default ArticleList;
