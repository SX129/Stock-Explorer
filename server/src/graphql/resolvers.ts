import { Client } from "@apperate/iexjs";
import { GqlResolvers } from '../generated/graphql';
import { DateResolver, BigIntResolver, JSONResolver } from 'graphql-scalars';

//Initializing iex API client
const client = new Client({
    api_token: process.env.IEX_API_TOKEN, 
    version: "v1"
});

//Method to retrieve stock ticker data
const getQuote = (symbol: string) => {
    return client.quote({ symbol });
}

//Resolvers for schema entry points and Lookup type
const resolvers: GqlResolvers = {
    JSON: JSONResolver,
    Date: DateResolver,
    BigInt: BigIntResolver,

    Query: {
        lookup: (_, {symbol}) => {
            return { symbol };
        },
    },
    
    Mutation: {
        quote: (_: any, { symbol }) => {
            return getQuote(symbol);
        },
    },

    Lookup: {
        revenue: async (lookup, {resolution}) => {
            const result = await client.timeSeries({
                id: 'INCOME',
                key: lookup.symbol,
                limit: 100,
                range: '5y',
                subkey: resolution
            });

            return result.map((point: { fiscalDate: any; totalRevenue: any; }) => ({
                date: point.fiscalDate,
                value: point.totalRevenue
            }));
        },
    },
};

export default resolvers;