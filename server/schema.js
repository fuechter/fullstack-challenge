import { Twitter } from 'graphqlhub-schemas'
import { GraphQLSchema } from 'graphql'

export default new GraphQLSchema({
  query: Twitter.QueryObjectType
});
