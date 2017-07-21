import Koa from 'koa'
import mount from 'koa-mount'
import graphqlHTTP from 'koa-graphql'
import { graphql } from 'graphql'
import schema from './schema'

const app = new Koa();

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})));

app.listen(4000);
