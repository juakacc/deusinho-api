require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./src/graphql/typedefs');
const resolvers = require('./src/graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on ${url}`);
});
