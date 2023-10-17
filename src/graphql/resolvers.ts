import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import { Client } from "@apperate/iexjs";

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

export default resolvers;