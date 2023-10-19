/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    fragment HeaderLookup on Lookup {\n        symbol\n        companyName\n        logoUrl\n    }\n    ": types.HeaderLookupFragmentDoc,
    "\n    fragment OverviewLookup on Lookup {\n        stats {\n            marketCap\n            peRatioTtm\n            peRatioFwd\n            profitMarginPercent\n            freeCashFlowYield\n            dividendYield\n            }\n    }\n    ": types.OverviewLookupFragmentDoc,
    "\n        query Lookup {\n            main: lookup(symbol: \"AAPL\") {\n                ...HeaderLookup\n                ...OverviewLookup\n\n                snapshotToday: snapshot(timeframe: today) {\n                    changePercent\n                }\n\n                snapshot1Year: snapshot(timeframe: year1) {\n                    changePercent\n                }\n\n                snapshot5Year: snapshot(timeframe: year5) {\n                    changePercent\n                    cagrPercent\n                }\n\n                snapshot10Year: snapshot(timeframe: year10) {\n                    changePercent\n                    cagrPercent\n                }\n\n                historicalTotalReturn(timeframe: year10) {\n                    changePercent\n                    data {\n                        date\n                        value\n                    }\n                }\n\n                revenue(resolution: quarterly) {\n                    date\n                    value\n                }\n            }\n\n            comparison: lookup(symbol: \"VOO\"){\n                symbol\n\n                stats {\n                    peRatioFwd\n                    dividendYield\n                }\n\n                historicalTotalReturn(timeframe: year10) {\n                    changePercent\n                    data {\n                        date\n                        value\n                    }\n                }\n            }\n        }\n        \n    ": types.LookupDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment HeaderLookup on Lookup {\n        symbol\n        companyName\n        logoUrl\n    }\n    "): (typeof documents)["\n    fragment HeaderLookup on Lookup {\n        symbol\n        companyName\n        logoUrl\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    fragment OverviewLookup on Lookup {\n        stats {\n            marketCap\n            peRatioTtm\n            peRatioFwd\n            profitMarginPercent\n            freeCashFlowYield\n            dividendYield\n            }\n    }\n    "): (typeof documents)["\n    fragment OverviewLookup on Lookup {\n        stats {\n            marketCap\n            peRatioTtm\n            peRatioFwd\n            profitMarginPercent\n            freeCashFlowYield\n            dividendYield\n            }\n    }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n        query Lookup {\n            main: lookup(symbol: \"AAPL\") {\n                ...HeaderLookup\n                ...OverviewLookup\n\n                snapshotToday: snapshot(timeframe: today) {\n                    changePercent\n                }\n\n                snapshot1Year: snapshot(timeframe: year1) {\n                    changePercent\n                }\n\n                snapshot5Year: snapshot(timeframe: year5) {\n                    changePercent\n                    cagrPercent\n                }\n\n                snapshot10Year: snapshot(timeframe: year10) {\n                    changePercent\n                    cagrPercent\n                }\n\n                historicalTotalReturn(timeframe: year10) {\n                    changePercent\n                    data {\n                        date\n                        value\n                    }\n                }\n\n                revenue(resolution: quarterly) {\n                    date\n                    value\n                }\n            }\n\n            comparison: lookup(symbol: \"VOO\"){\n                symbol\n\n                stats {\n                    peRatioFwd\n                    dividendYield\n                }\n\n                historicalTotalReturn(timeframe: year10) {\n                    changePercent\n                    data {\n                        date\n                        value\n                    }\n                }\n            }\n        }\n        \n    "): (typeof documents)["\n        query Lookup {\n            main: lookup(symbol: \"AAPL\") {\n                ...HeaderLookup\n                ...OverviewLookup\n\n                snapshotToday: snapshot(timeframe: today) {\n                    changePercent\n                }\n\n                snapshot1Year: snapshot(timeframe: year1) {\n                    changePercent\n                }\n\n                snapshot5Year: snapshot(timeframe: year5) {\n                    changePercent\n                    cagrPercent\n                }\n\n                snapshot10Year: snapshot(timeframe: year10) {\n                    changePercent\n                    cagrPercent\n                }\n\n                historicalTotalReturn(timeframe: year10) {\n                    changePercent\n                    data {\n                        date\n                        value\n                    }\n                }\n\n                revenue(resolution: quarterly) {\n                    date\n                    value\n                }\n            }\n\n            comparison: lookup(symbol: \"VOO\"){\n                symbol\n\n                stats {\n                    peRatioFwd\n                    dividendYield\n                }\n\n                historicalTotalReturn(timeframe: year10) {\n                    changePercent\n                    data {\n                        date\n                        value\n                    }\n                }\n            }\n        }\n        \n    "];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;