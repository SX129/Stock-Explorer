require("dotenv").config();
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'node:fs'
import { Client } from "@apperate/iexjs";
import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';


const client = new Client({
    api_token: process.env.IEX_API_TOKEN, 
    version: "v1"
});

const getQuote = (symbol: string) => {
    return client.quote({ symbol });
}

const resolvers = {
    JSON: GraphQLJSON,
    Query: {
        hello: () => "world",
    },
    Mutation: {
        quote: (_: any, {symbol}: {symbol: string}) => {
            return getQuote(symbol);
        },
    },
};

const typeDefs = readFileSync('./src/graphql/schema.graphql', 'utf8')

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startServer = async () => {
    const {url} = await startStandaloneServer(server, {
        listen: { port: 4000},
    });

    console.log(`🚀 Server ready at ${url}`);
}

startServer();