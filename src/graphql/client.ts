import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.GRAPHCMS_ENDPOINT || '';

const client = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`,
  },
});

export default client;
