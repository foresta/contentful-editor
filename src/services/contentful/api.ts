import {Article} from '../../models/Article';
import client, {spaceId} from './client';
import {Collection} from 'contentful-management/typings/collection';
import {Entry} from 'contentful-management/typings/entry';
import {Asset} from 'contentful-management/typings/asset';

const convertArticles = (
  entities: Collection<Entry>,
  eyecatches: Asset[],
): Article[] => {
  return entities.items.map(e => convertArticle(e, eyecatches));
};

const convertArticle = (entry: Entry, eyecatches: Asset[]): Article => {
  const eyecatchId = entry.fields.eyecatch['ja-JP'].sys.id;
  const eyecatchAsset = eyecatches.find(e => e.sys.id === eyecatchId);
  return {
    id: entry.sys.id,
    title: entry.fields.title['ja-JP'],
    eyecatch: eyecatchAsset?.fields.file['ja-JP'].url ?? '',
    body: entry.fields.textBody['ja-JP'],
  };
};

export const getArticlesFactory = () => {
  const getArticles = async (): Promise<Article[]> => {
    const space = await client.getSpace(spaceId);
    const environment = await space.getEnvironment('master');
    const entries = await environment.getEntries({content_type: 'article'});

    const eyecatches = await Promise.all(
      entries.items.map(
        async entry =>
          await environment.getAsset(entry.fields.eyecatch['ja-JP'].sys.id),
      ),
    );

    return convertArticles(entries, eyecatches);
  };

  return getArticles;
};
