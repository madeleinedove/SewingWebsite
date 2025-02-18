/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getFabric = /* GraphQL */ `query GetFabric($id: ID!) {
  getFabric(id: $id) {
    id
    name
    description
    tags
    imageKey
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetFabricQueryVariables, APITypes.GetFabricQuery>;
export const listFabrics = /* GraphQL */ `query ListFabrics(
  $filter: ModelFabricFilterInput
  $limit: Int
  $nextToken: String
) {
  listFabrics(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      tags
      imageKey
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFabricsQueryVariables,
  APITypes.ListFabricsQuery
>;
export const getPattern = /* GraphQL */ `query GetPattern($id: ID!) {
  getPattern(id: $id) {
    id
    name
    description
    tags
    manufactor
    type
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPatternQueryVariables,
  APITypes.GetPatternQuery
>;
export const listPatterns = /* GraphQL */ `query ListPatterns(
  $filter: ModelPatternFilterInput
  $limit: Int
  $nextToken: String
) {
  listPatterns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      tags
      manufactor
      type
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPatternsQueryVariables,
  APITypes.ListPatternsQuery
>;
