import {createClient} from 'contentful-management';

const client = createClient({
  // TODO: env file
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN!,
});

export const spaceId = process.env.REACT_APP_CONTENTFUL_SPACE_ID!;

export default client;
