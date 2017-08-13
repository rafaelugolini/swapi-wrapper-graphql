import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';

import schema from './data/schema';

const app = express();

app.get('/', (req, res) => res.status(200).send('GraphQL REST API Wrapper using Apollo Server.'));
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
// add graphiql in dev mode
if (process.env.NODE_ENV !== 'production') {
  app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));
}

app.listen(3030);
