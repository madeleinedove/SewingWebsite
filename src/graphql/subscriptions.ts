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
export const onCreateWebPatternItems = /* GraphQL */ `subscription OnCreateWebPatternItems(
  $filter: ModelSubscriptionWebPatternItemsFilterInput
  $owner: String
) {
  onCreateWebPatternItems(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateWebPatternItemsSubscriptionVariables,
  APITypes.OnCreateWebPatternItemsSubscription
>;
export const onUpdateWebPatternItems = /* GraphQL */ `subscription OnUpdateWebPatternItems(
  $filter: ModelSubscriptionWebPatternItemsFilterInput
  $owner: String
) {
  onUpdateWebPatternItems(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateWebPatternItemsSubscriptionVariables,
  APITypes.OnUpdateWebPatternItemsSubscription
>;
export const onDeleteWebPatternItems = /* GraphQL */ `subscription OnDeleteWebPatternItems(
  $filter: ModelSubscriptionWebPatternItemsFilterInput
  $owner: String
) {
  onDeleteWebPatternItems(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteWebPatternItemsSubscriptionVariables,
  APITypes.OnDeleteWebPatternItemsSubscription
>;
export const onCreateWebFabricItems = /* GraphQL */ `subscription OnCreateWebFabricItems(
  $filter: ModelSubscriptionWebFabricItemsFilterInput
  $owner: String
) {
  onCreateWebFabricItems(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateWebFabricItemsSubscriptionVariables,
  APITypes.OnCreateWebFabricItemsSubscription
>;
export const onUpdateWebFabricItems = /* GraphQL */ `subscription OnUpdateWebFabricItems(
  $filter: ModelSubscriptionWebFabricItemsFilterInput
  $owner: String
) {
  onUpdateWebFabricItems(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateWebFabricItemsSubscriptionVariables,
  APITypes.OnUpdateWebFabricItemsSubscription
>;
export const onDeleteWebFabricItems = /* GraphQL */ `subscription OnDeleteWebFabricItems(
  $filter: ModelSubscriptionWebFabricItemsFilterInput
  $owner: String
) {
  onDeleteWebFabricItems(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteWebFabricItemsSubscriptionVariables,
  APITypes.OnDeleteWebFabricItemsSubscription
>;
export const onCreateFabricToPatterns = /* GraphQL */ `subscription OnCreateFabricToPatterns(
  $filter: ModelSubscriptionFabricToPatternsFilterInput
  $owner: String
) {
  onCreateFabricToPatterns(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateFabricToPatternsSubscriptionVariables,
  APITypes.OnCreateFabricToPatternsSubscription
>;
export const onUpdateFabricToPatterns = /* GraphQL */ `subscription OnUpdateFabricToPatterns(
  $filter: ModelSubscriptionFabricToPatternsFilterInput
  $owner: String
) {
  onUpdateFabricToPatterns(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateFabricToPatternsSubscriptionVariables,
  APITypes.OnUpdateFabricToPatternsSubscription
>;
export const onDeleteFabricToPatterns = /* GraphQL */ `subscription OnDeleteFabricToPatterns(
  $filter: ModelSubscriptionFabricToPatternsFilterInput
  $owner: String
) {
  onDeleteFabricToPatterns(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteFabricToPatternsSubscriptionVariables,
  APITypes.OnDeleteFabricToPatternsSubscription
>;
