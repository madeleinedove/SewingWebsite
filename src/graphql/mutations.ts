/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createFabric = /* GraphQL */ `mutation CreateFabric(
  $input: CreateFabricInput!
  $condition: ModelFabricConditionInput
) {
  createFabric(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFabricMutationVariables,
  APITypes.CreateFabricMutation
>;
export const updateFabric = /* GraphQL */ `mutation UpdateFabric(
  $input: UpdateFabricInput!
  $condition: ModelFabricConditionInput
) {
  updateFabric(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFabricMutationVariables,
  APITypes.UpdateFabricMutation
>;
export const deleteFabric = /* GraphQL */ `mutation DeleteFabric(
  $input: DeleteFabricInput!
  $condition: ModelFabricConditionInput
) {
  deleteFabric(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFabricMutationVariables,
  APITypes.DeleteFabricMutation
>;
export const createPattern = /* GraphQL */ `mutation CreatePattern(
  $input: CreatePatternInput!
  $condition: ModelPatternConditionInput
) {
  createPattern(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePatternMutationVariables,
  APITypes.CreatePatternMutation
>;
export const updatePattern = /* GraphQL */ `mutation UpdatePattern(
  $input: UpdatePatternInput!
  $condition: ModelPatternConditionInput
) {
  updatePattern(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePatternMutationVariables,
  APITypes.UpdatePatternMutation
>;
export const deletePattern = /* GraphQL */ `mutation DeletePattern(
  $input: DeletePatternInput!
  $condition: ModelPatternConditionInput
) {
  deletePattern(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePatternMutationVariables,
  APITypes.DeletePatternMutation
>;
