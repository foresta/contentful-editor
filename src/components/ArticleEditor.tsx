import React, {FC, useRef, ChangeEvent} from 'react';

import {
  Form,
  Header,
  Image,
  Segment,
  Loader,
  Dimmer,
  Input,
  Button,
} from 'semantic-ui-react';
import {Article, EmptyArticle} from '../models/Article';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import './ArticleEditor.css';

export interface ArticleEditorProps {
  article?: Article | null;
  isLoading?: boolean;
  onBodyChange: (content: string) => void;
  onTitleChange: (title: string) => void;
}

const ArticleEditor: FC<ArticleEditorProps> = ({
  article = EmptyArticle,
  isLoading = false,
  onBodyChange,
  onTitleChange,
}) => {
  const onSaveButtonClicked = () => {
  }

  if (isLoading) {
    return (
      <>
        <Dimmer active inverted>
          <Loader inverted={false}>読み込み中...</Loader>
        </Dimmer>
      </>
    );
  }

  if (article === null) {
    return <Header as="h1">Article Not found</Header>;
  }

  return (
    <>
      {isLoading ? (
        <Dimmer active inverted>
          <Loader inverted={false}>読み込み中...</Loader>
        </Dimmer>
      ) : (
        <Segment className="editor-container">
          <Form>
            <Button primary onClick={ onSaveButtonClicked }></Button>
            <Image src={article.eyecatch} className="editor-eyecatch" />
            <Input 
              placeholder="記事タイトル..." 
              value={article.title} 
              onChange={(e, data) => onTitleChange(data.value) }
              className="article-title" />
            <ReactQuill 
              theme="snow" 
              value={article.body} 
              onChange={(newValue, delta, source) => {
                if (source === 'user') {
                  onBodyChange(newValue)
                }
              }
              } />
          </Form>
        </Segment>
      )}
    </>
  );
};

export default ArticleEditor;
