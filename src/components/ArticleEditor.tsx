import React, {FC} from 'react';

import {
  Form,
  Header,
  TextArea,
  Image,
  Segment,
  Loader,
  Dimmer,
} from 'semantic-ui-react';
import {Article, EmptyArticle} from '../models/Article';
import './ArticleEditor.css';

export interface ArticleEditorProps {
  article: Article;
  isLoading?: boolean;
}

const ArticleEditor: FC<ArticleEditorProps> = ({
  article = EmptyArticle,
  isLoading = false,
}) => {
  const eyecatchStyle = {
    backgroundImage: 'url(' + article.eyecatch + ')',
  };

  return (
    <>
      {isLoading ? (
        <Dimmer active inverted>
          <Loader inverted={false}>読み込み中...</Loader>
        </Dimmer>
      ) : (
        <Segment className="editor-container">
          <Form>
            <Image src={article.eyecatch} className="editor-eyecatch" />
            <Header as="h1">{article.title}</Header>
            <TextArea>{article.body}</TextArea>
          </Form>
        </Segment>
      )}
    </>
  );
};

export default ArticleEditor;