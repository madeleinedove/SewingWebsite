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
    owner
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
      owner
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
    createdAt
    updatedAt
    owner
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
      createdAt
      updatedAt
      owner
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
export const getWebPatternItems = /* GraphQL */ `query GetWebPatternItems($id: ID!) {
  getWebPatternItems(id: $id) {
    id
    name
    imageUrl
    fabrics {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWebPatternItemsQueryVariables,
  APITypes.GetWebPatternItemsQuery
>;
export const listWebPatternItems = /* GraphQL */ `query ListWebPatternItems(
  $filter: ModelWebPatternItemsFilterInput
  $limit: Int
  $nextToken: String
) {
  listWebPatternItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      imageUrl
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWebPatternItemsQueryVariables,
  APITypes.ListWebPatternItemsQuery
>;
export const getWebFabricItems = /* GraphQL */ `query GetWebFabricItems($id: ID!) {
  getWebFabricItems(id: $id) {
    id
    name
    patterns {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWebFabricItemsQueryVariables,
  APITypes.GetWebFabricItemsQuery
>;
export const listWebFabricItems = /* GraphQL */ `query ListWebFabricItems(
  $filter: ModelWebFabricItemsFilterInput
  $limit: Int
  $nextToken: String
) {
  listWebFabricItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWebFabricItemsQueryVariables,
  APITypes.ListWebFabricItemsQuery
>;
export const getFabricToPatterns = /* GraphQL */ `query GetFabricToPatterns($id: ID!) {
  getFabricToPatterns(id: $id) {
    id
    webPatternItemsId
    webFabricItemsId
    webPatternItems {
      id
      name
      imageUrl
      createdAt
      updatedAt
      owner
      __typename
    }
    webFabricItems {
      id
      name
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFabricToPatternsQueryVariables,
  APITypes.GetFabricToPatternsQuery
>;
export const listFabricToPatterns = /* GraphQL */ `query ListFabricToPatterns(
  $filter: ModelFabricToPatternsFilterInput
  $limit: Int
  $nextToken: String
) {
  listFabricToPatterns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      webPatternItemsId
      webFabricItemsId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFabricToPatternsQueryVariables,
  APITypes.ListFabricToPatternsQuery
>;
export const fabricToPatternsByWebPatternItemsId = /* GraphQL */ `query FabricToPatternsByWebPatternItemsId(
  $webPatternItemsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFabricToPatternsFilterInput
  $limit: Int
  $nextToken: String
) {
  fabricToPatternsByWebPatternItemsId(
    webPatternItemsId: $webPatternItemsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      webPatternItemsId
      webFabricItemsId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FabricToPatternsByWebPatternItemsIdQueryVariables,
  APITypes.FabricToPatternsByWebPatternItemsIdQuery
>;
export const fabricToPatternsByWebFabricItemsId = /* GraphQL */ `query FabricToPatternsByWebFabricItemsId(
  $webFabricItemsId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelFabricToPatternsFilterInput
  $limit: Int
  $nextToken: String
) {
  fabricToPatternsByWebFabricItemsId(
    webFabricItemsId: $webFabricItemsId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      webPatternItemsId
      webFabricItemsId
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.FabricToPatternsByWebFabricItemsIdQueryVariables,
  APITypes.FabricToPatternsByWebFabricItemsIdQuery
>;
