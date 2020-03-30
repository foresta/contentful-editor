export interface Article {
  id: string;
  title: string;
  eyecatch: string;
  body: string;
}

export const EmptyArticle: Article = {
  id: '',
  title: '',
  eyecatch: '',
  body: '',
};
