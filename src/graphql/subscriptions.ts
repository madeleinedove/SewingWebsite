/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateFabric = /* GraphQL */ `subscription OnCreateFabric(
  $filter: ModelSubscriptionFabricFilterInput
  $owner: String
) {
  onCreateFabric(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFabricSubscriptionVariables,
  APITypes.OnCreateFabricSubscription
>;
export const onUpdateFabric = /* GraphQL */ `subscription OnUpdateFabric(
  $filter: ModelSubscriptionFabricFilterInput
  $owner: String
) {
  onUpdateFabric(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFabricSubscriptionVariables,
  APITypes.OnUpdateFabricSubscription
>;
export const onDeleteFabric = /* GraphQL */ `subscription OnDeleteFabric(
  $filter: ModelSubscriptionFabricFilterInput
  $owner: String
) {
  onDeleteFabric(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFabricSubscriptionVariables,
  APITypes.OnDeleteFabricSubscription
>;
export const onCreatePattern = /* GraphQL */ `subscription OnCreatePattern(
  $filter: ModelSubscriptionPatternFilterInput
  $owner: String
) {
  onCreatePattern(filter: $filter, owner: $owner) {
    id
    name
    description
    tags
    manufactor
    type
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePatternSubscriptionVariables,
  APITypes.OnCreatePatternSubscription
>;
export const onUpdatePattern = /* GraphQL */ `subscription OnUpdatePattern(
  $filter: ModelSubscriptionPatternFilterInput
  $owner: String
) {
  onUpdatePattern(filter: $filter, owner: $owner) {
    id
    name
    description
    tags
    manufactor
    type
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePatternSubscriptionVariables,
  APITypes.OnUpdatePatternSubscription
>;
export const onDeletePattern = /* GraphQL */ `subscription OnDeletePattern(
  $filter: ModelSubscriptionPatternFilterInput
  $owner: String
) {
  onDeletePattern(filter: $filter, owner: $owner) {
    id
    name
    description
    tags
    manufactor
    type
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePatternSubscriptionVariables,
  APITypes.OnDeletePatternSubscription
>;
