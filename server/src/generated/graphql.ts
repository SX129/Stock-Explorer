import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Lookup } from '../graphql/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type GqlDataPoint = {
  __typename?: 'DataPoint';
  date: Scalars['Date']['output'];
  value: Scalars['Int']['output'];
};

export type GqlLookup = {
  __typename?: 'Lookup';
  revenue: Array<GqlDataPoint>;
  symbol: Scalars['String']['output'];
};


export type GqlLookupRevenueArgs = {
  resolution: GqlResolution;
};

export type GqlMutation = {
  __typename?: 'Mutation';
  quote: GqlQuoteResult;
};


export type GqlMutationQuoteArgs = {
  symbol: Scalars['String']['input'];
};

export type GqlQuery = {
  __typename?: 'Query';
  lookup: GqlLookup;
};


export type GqlQueryLookupArgs = {
  symbol: Scalars['String']['input'];
};

export type GqlQuoteResult = {
  __typename?: 'QuoteResult';
  change: Scalars['Float']['output'];
  changePercent: Scalars['Float']['output'];
  companyName: Scalars['String']['output'];
  latestPrice: Scalars['Float']['output'];
  peRatio?: Maybe<Scalars['Float']['output']>;
  previousClose: Scalars['Float']['output'];
  symbol: Scalars['String']['output'];
};

export enum GqlResolution {
  Annual = 'annual',
  Quarterly = 'quarterly'
}

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type GqlResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  DataPoint: ResolverTypeWrapper<GqlDataPoint>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']['output']>;
  Lookup: ResolverTypeWrapper<Lookup>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  QuoteResult: ResolverTypeWrapper<GqlQuoteResult>;
  Resolution: GqlResolution;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type GqlResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean']['output'];
  DataPoint: GqlDataPoint;
  Date: Scalars['Date']['output'];
  Float: Scalars['Float']['output'];
  Int: Scalars['Int']['output'];
  JSON: Scalars['JSON']['output'];
  Lookup: Lookup;
  Mutation: {};
  Query: {};
  QuoteResult: GqlQuoteResult;
  String: Scalars['String']['output'];
}>;

export type GqlDataPointResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['DataPoint'] = GqlResolversParentTypes['DataPoint']> = ResolversObject<{
  date?: Resolver<GqlResolversTypes['Date'], ParentType, ContextType>;
  value?: Resolver<GqlResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface GqlDateScalarConfig extends GraphQLScalarTypeConfig<GqlResolversTypes['Date'], any> {
  name: 'Date';
}

export interface GqlJsonScalarConfig extends GraphQLScalarTypeConfig<GqlResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type GqlLookupResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Lookup'] = GqlResolversParentTypes['Lookup']> = ResolversObject<{
  revenue?: Resolver<Array<GqlResolversTypes['DataPoint']>, ParentType, ContextType, RequireFields<GqlLookupRevenueArgs, 'resolution'>>;
  symbol?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GqlMutationResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Mutation'] = GqlResolversParentTypes['Mutation']> = ResolversObject<{
  quote?: Resolver<GqlResolversTypes['QuoteResult'], ParentType, ContextType, RequireFields<GqlMutationQuoteArgs, 'symbol'>>;
}>;

export type GqlQueryResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['Query'] = GqlResolversParentTypes['Query']> = ResolversObject<{
  lookup?: Resolver<GqlResolversTypes['Lookup'], ParentType, ContextType, RequireFields<GqlQueryLookupArgs, 'symbol'>>;
}>;

export type GqlQuoteResultResolvers<ContextType = any, ParentType extends GqlResolversParentTypes['QuoteResult'] = GqlResolversParentTypes['QuoteResult']> = ResolversObject<{
  change?: Resolver<GqlResolversTypes['Float'], ParentType, ContextType>;
  changePercent?: Resolver<GqlResolversTypes['Float'], ParentType, ContextType>;
  companyName?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  latestPrice?: Resolver<GqlResolversTypes['Float'], ParentType, ContextType>;
  peRatio?: Resolver<Maybe<GqlResolversTypes['Float']>, ParentType, ContextType>;
  previousClose?: Resolver<GqlResolversTypes['Float'], ParentType, ContextType>;
  symbol?: Resolver<GqlResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GqlResolvers<ContextType = any> = ResolversObject<{
  DataPoint?: GqlDataPointResolvers<ContextType>;
  Date?: GraphQLScalarType;
  JSON?: GraphQLScalarType;
  Lookup?: GqlLookupResolvers<ContextType>;
  Mutation?: GqlMutationResolvers<ContextType>;
  Query?: GqlQueryResolvers<ContextType>;
  QuoteResult?: GqlQuoteResultResolvers<ContextType>;
}>;

