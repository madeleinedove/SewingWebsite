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
export const createWebPatternItems = /* GraphQL */ `mutation CreateWebPatternItems(
  $input: CreateWebPatternItemsInput!
  $condition: ModelWebPatternItemsConditionInput
) {
  createWebPatternItems(input: $input, condition: $condition) {
    id
    name
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
` as GeneratedMutation<
  APITypes.CreateWebPatternItemsMutationVariables,
  APITypes.CreateWebPatternItemsMutation
>;
export const updateWebPatternItems = /* GraphQL */ `mutation UpdateWebPatternItems(
  $input: UpdateWebPatternItemsInput!
  $condition: ModelWebPatternItemsConditionInput
) {
  updateWebPatternItems(input: $input, condition: $condition) {
    id
    name
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
` as GeneratedMutation<
  APITypes.UpdateWebPatternItemsMutationVariables,
  APITypes.UpdateWebPatternItemsMutation
>;
export const deleteWebPatternItems = /* GraphQL */ `mutation DeleteWebPatternItems(
  $input: DeleteWebPatternItemsInput!
  $condition: ModelWebPatternItemsConditionInput
) {
  deleteWebPatternItems(input: $input, condition: $condition) {
    id
    name
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
` as GeneratedMutation<
  APITypes.DeleteWebPatternItemsMutationVariables,
  APITypes.DeleteWebPatternItemsMutation
>;
export const createWebFabricItems = /* GraphQL */ `mutation CreateWebFabricItems(
  $input: CreateWebFabricItemsInput!
  $condition: ModelWebFabricItemsConditionInput
) {
  createWebFabricItems(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateWebFabricItemsMutationVariables,
  APITypes.CreateWebFabricItemsMutation
>;
export const updateWebFabricItems = /* GraphQL */ `mutation UpdateWebFabricItems(
  $input: UpdateWebFabricItemsInput!
  $condition: ModelWebFabricItemsConditionInput
) {
  updateWebFabricItems(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateWebFabricItemsMutationVariables,
  APITypes.UpdateWebFabricItemsMutation
>;
export const deleteWebFabricItems = /* GraphQL */ `mutation DeleteWebFabricItems(
  $input: DeleteWebFabricItemsInput!
  $condition: ModelWebFabricItemsConditionInput
) {
  deleteWebFabricItems(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteWebFabricItemsMutationVariables,
  APITypes.DeleteWebFabricItemsMutation
>;
export const createFabricToPatterns = /* GraphQL */ `mutation CreateFabricToPatterns(
  $input: CreateFabricToPatternsInput!
  $condition: ModelFabricToPatternsConditionInput
) {
  createFabricToPatterns(input: $input, condition: $condition) {
    id
    webPatternItemsId
    webFabricItemsId
    webPatternItems {
      id
      name
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
` as GeneratedMutation<
  APITypes.CreateFabricToPatternsMutationVariables,
  APITypes.CreateFabricToPatternsMutation
>;
export const updateFabricToPatterns = /* GraphQL */ `mutation UpdateFabricToPatterns(
  $input: UpdateFabricToPatternsInput!
  $condition: ModelFabricToPatternsConditionInput
) {
  updateFabricToPatterns(input: $input, condition: $condition) {
    id
    webPatternItemsId
    webFabricItemsId
    webPatternItems {
      id
      name
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
` as GeneratedMutation<
  APITypes.UpdateFabricToPatternsMutationVariables,
  APITypes.UpdateFabricToPatternsMutation
>;
export const deleteFabricToPatterns = /* GraphQL */ `mutation DeleteFabricToPatterns(
  $input: DeleteFabricToPatternsInput!
  $condition: ModelFabricToPatternsConditionInput
) {
  deleteFabricToPatterns(input: $input, condition: $condition) {
    id
    webPatternItemsId
    webFabricItemsId
    webPatternItems {
      id
      name
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
` as GeneratedMutation<
  APITypes.DeleteFabricToPatternsMutationVariables,
  APITypes.DeleteFabricToPatternsMutation
>;
