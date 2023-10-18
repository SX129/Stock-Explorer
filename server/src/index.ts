require("dotenv").config();
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'node:fs';
import resolvers from './graphql/resolvers';

//Reading in type defintions from schema
const typeDefs = readFileSync('./src/graphql/schema.graphql', 'utf8')

//Initializing Apollo server
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

//Async method to start apollo server
const startServer = async () => {
    const {url} = await startStandaloneServer(server, {
        listen: { port: 4000},
    });

    console.log(`🚀 Server ready at ${url}`);
}

startServer();