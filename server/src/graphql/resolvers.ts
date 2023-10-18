import { Client } from "@apperate/iexjs";
import { GqlResolvers, GqlTimeframe } from '../generated/graphql';
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
        lookup: async (_, {symbol}) => {
            const quote = await getQuote(symbol);


            return { 
                symbol,
                companyName: quote.companyName,
                logoUrl: 'some-logo.png'
            };
        },
    },

    Lookup: {
        quote: async ({ symbol }) => {
            const quote = await getQuote(symbol);
            return {
                ...quote,
                peRatioTTM: quote.peRatio,
            };
        },

        revenue: async (lookup, { resolution }) => {
            const result = await client.timeSeries({
                id: "INCOME",
                key: lookup.symbol,
                limit: 100,
                range: "5y",
                subkey: resolution,
            });
            return result.map((point: { fiscalDate: any; totalRevenue: any; }) => ({
                date: point.fiscalDate,
                value: point.totalRevenue,
            }));
        },

        historicalTotalReturn: async (_, { timeframe }) => {
            return {
                changePercent: 997,
                data: [
                    {
                        date: new Date("2020-01-01"),
                        value: 100,
                    },
                    {
                        date: new Date("2020-01-02"),
                        value: 200,
                    },
                ],
            }
        },

        snapshot: async (_, { timeframe }) => {
            switch(timeframe) {
                case GqlTimeframe.Today:
                case GqlTimeframe.Year1:
                case GqlTimeframe.Ytd:
                    return {
                        changePercent: 0.25,
                    };


                case GqlTimeframe.Year5:
                case GqlTimeframe.Year10:
                case GqlTimeframe.Max:
                    return {
                        changePercent: 250,
                        cagrPercent: 30,
                    };
            };
        },

        stats: async ({ symbol }) => {
            // const stats = await client.stats({ symbol });
            // return {
            //     ...stats,
            //     peRatioFWD: stats.forwardPERatio,
            // };

            return {
                marketCap: 2_390_000_000_000,
                peRatioTtm: 25.6,
                peRatioFwd: 23.1,
                profitMarginPercent: 25,
                freeCashFlowYield: 4.06,
                dividendYield: 0.60,
            };
        },
    },
};

export default resolvers;