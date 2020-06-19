const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require("./resolvers");

const options = {
  port: 8000,
  endpoint: '/graphql',
  playground: '/playground',
}

const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, 'schema.graphql'),
  resolvers
});

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port}.`,
  ),
);
