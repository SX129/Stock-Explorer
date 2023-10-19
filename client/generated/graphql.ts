/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: any; output: any; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type DataPoint = {
  __typename?: 'DataPoint';
  date: Scalars['Date']['output'];
  value: Scalars['BigInt']['output'];
};

export type Lookup = {
  __typename?: 'Lookup';
  companyName: Scalars['String']['output'];
  historicalTotalReturn: TotalReturnResult;
  logoUrl?: Maybe<Scalars['String']['output']>;
  quote: QuoteResult;
  revenue: Array<DataPoint>;
  snapshot: SnapshotResult;
  stats: StatsResult;
  symbol: Scalars['String']['output'];
};


export type LookupHistoricalTotalReturnArgs = {
  timeframe: Timeframe;
};


export type LookupRevenueArgs = {
  resolution: Resolution;
};


export type LookupSnapshotArgs = {
  timeframe: Timeframe;
};

export type Query = {
  __typename?: 'Query';
  lookup: Lookup;
};


export type QueryLookupArgs = {
  symbol: Scalars['String']['input'];
};

export type QuoteResult = {
  __typename?: 'QuoteResult';
  change: Scalars['Float']['output'];
  changePercent: Scalars['Float']['output'];
  companyName: Scalars['String']['output'];
  delayedPrice?: Maybe<Scalars['Float']['output']>;
  latestPrice: Scalars['Float']['output'];
  marketCap: Scalars['BigInt']['output'];
  peRatioTTM?: Maybe<Scalars['Float']['output']>;
  previousClose: Scalars['Float']['output'];
};

export enum Resolution {
  Annual = 'annual',
  Quarterly = 'quarterly'
}

export type SnapshotResult = {
  __typename?: 'SnapshotResult';
  cagrPercent?: Maybe<Scalars['Float']['output']>;
  changePercent: Scalars['Float']['output'];
};

export type StatsResult = {
  __typename?: 'StatsResult';
  dividendYield?: Maybe<Scalars['Float']['output']>;
  freeCashFlowYield: Scalars['Float']['output'];
  marketCap: Scalars['BigInt']['output'];
  peRatioFwd: Scalars['Float']['output'];
  peRatioTtm: Scalars['Float']['output'];
  profitMarginPercent: Scalars['Float']['output'];
};

export enum Timeframe {
  Max = 'max',
  Today = 'today',
  Year1 = 'year1',
  Year5 = 'year5',
  Year10 = 'year10',
  Ytd = 'ytd'
}

export type TotalReturnResult = {
  __typename?: 'TotalReturnResult';
  changePercent: Scalars['Float']['output'];
  data: Array<DataPoint>;
};

export type HeaderLookupFragment = { __typename?: 'Lookup', symbol: string, companyName: string, logoUrl?: string | null } & { ' $fragmentName'?: 'HeaderLookupFragment' };

export type LookupQueryVariables = Exact<{ [key: string]: never; }>;


export type LookupQuery = { __typename?: 'Query', main: (
    { __typename?: 'Lookup', symbol: string, companyName: string, logoUrl?: string | null, stats: { __typename?: 'StatsResult', marketCap: any, peRatioTtm: number, peRatioFwd: number, profitMarginPercent: number, freeCashFlowYield: number, dividendYield?: number | null }, snapshotToday: { __typename?: 'SnapshotResult', changePercent: number }, snapshot1Year: { __typename?: 'SnapshotResult', changePercent: number }, snapshot5Year: { __typename?: 'SnapshotResult', changePercent: number, cagrPercent?: number | null }, snapshot10Year: { __typename?: 'SnapshotResult', changePercent: number, cagrPercent?: number | null }, historicalTotalReturn: { __typename?: 'TotalReturnResult', changePercent: number, data: Array<{ __typename?: 'DataPoint', date: any, value: any }> }, revenue: Array<{ __typename?: 'DataPoint', date: any, value: any }> }
    & { ' $fragmentRefs'?: { 'HeaderLookupFragment': HeaderLookupFragment } }
  ), comparison: { __typename?: 'Lookup', symbol: string, stats: { __typename?: 'StatsResult', peRatioFwd: number, dividendYield?: number | null }, historicalTotalReturn: { __typename?: 'TotalReturnResult', changePercent: number, data: Array<{ __typename?: 'DataPoint', date: any, value: any }> } } };

export const HeaderLookupFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeaderLookup"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Lookup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}}]}}]} as unknown as DocumentNode<HeaderLookupFragment, unknown>;
export const LookupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Lookup"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"main"},"name":{"kind":"Name","value":"lookup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"symbol"},"value":{"kind":"StringValue","value":"AAPL","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeaderLookup"}},{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"marketCap"}},{"kind":"Field","name":{"kind":"Name","value":"peRatioTtm"}},{"kind":"Field","name":{"kind":"Name","value":"peRatioFwd"}},{"kind":"Field","name":{"kind":"Name","value":"profitMarginPercent"}},{"kind":"Field","name":{"kind":"Name","value":"freeCashFlowYield"}},{"kind":"Field","name":{"kind":"Name","value":"dividendYield"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"snapshotToday"},"name":{"kind":"Name","value":"snapshot"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"timeframe"},"value":{"kind":"EnumValue","value":"today"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePercent"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"snapshot1Year"},"name":{"kind":"Name","value":"snapshot"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"timeframe"},"value":{"kind":"EnumValue","value":"year1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePercent"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"snapshot5Year"},"name":{"kind":"Name","value":"snapshot"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"timeframe"},"value":{"kind":"EnumValue","value":"year5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePercent"}},{"kind":"Field","name":{"kind":"Name","value":"cagrPercent"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"snapshot10Year"},"name":{"kind":"Name","value":"snapshot"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"timeframe"},"value":{"kind":"EnumValue","value":"year10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePercent"}},{"kind":"Field","name":{"kind":"Name","value":"cagrPercent"}}]}},{"kind":"Field","name":{"kind":"Name","value":"historicalTotalReturn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"timeframe"},"value":{"kind":"EnumValue","value":"year10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePercent"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"revenue"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"resolution"},"value":{"kind":"EnumValue","value":"quarterly"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"comparison"},"name":{"kind":"Name","value":"lookup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"symbol"},"value":{"kind":"StringValue","value":"VOO","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"stats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"peRatioFwd"}},{"kind":"Field","name":{"kind":"Name","value":"dividendYield"}}]}},{"kind":"Field","name":{"kind":"Name","value":"historicalTotalReturn"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"timeframe"},"value":{"kind":"EnumValue","value":"year10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePercent"}},{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeaderLookup"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Lookup"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"symbol"}},{"kind":"Field","name":{"kind":"Name","value":"companyName"}},{"kind":"Field","name":{"kind":"Name","value":"logoUrl"}}]}}]} as unknown as DocumentNode<LookupQuery, LookupQueryVariables>;