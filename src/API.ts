/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFabricInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  tags?: string | null,
  imageKey?: string | null,
};

export type ModelFabricConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  imageKey?: ModelStringInput | null,
  and?: Array< ModelFabricConditionInput | null > | null,
  or?: Array< ModelFabricConditionInput | null > | null,
  not?: ModelFabricConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Fabric = {
  __typename: "Fabric",
  id: string,
  name: string,
  description?: string | null,
  tags?: string | null,
  imageKey?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateFabricInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  tags?: string | null,
  imageKey?: string | null,
};

export type DeleteFabricInput = {
  id: string,
};

export type CreatePatternInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  tags?: string | null,
  manufactor?: string | null,
};

export type ModelPatternConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  manufactor?: ModelStringInput | null,
  and?: Array< ModelPatternConditionInput | null > | null,
  or?: Array< ModelPatternConditionInput | null > | null,
  not?: ModelPatternConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type Pattern = {
  __typename: "Pattern",
  id: string,
  name: string,
  description?: string | null,
  tags?: string | null,
  manufactor?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdatePatternInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  tags?: string | null,
  manufactor?: string | null,
};

export type DeletePatternInput = {
  id: string,
};

export type ModelFabricFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  imageKey?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFabricFilterInput | null > | null,
  or?: Array< ModelFabricFilterInput | null > | null,
  not?: ModelFabricFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFabricConnection = {
  __typename: "ModelFabricConnection",
  items:  Array<Fabric | null >,
  nextToken?: string | null,
};

export type ModelPatternFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  tags?: ModelStringInput | null,
  manufactor?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelPatternFilterInput | null > | null,
  or?: Array< ModelPatternFilterInput | null > | null,
  not?: ModelPatternFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelPatternConnection = {
  __typename: "ModelPatternConnection",
  items:  Array<Pattern | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionFabricFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  imageKey?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFabricFilterInput | null > | null,
  or?: Array< ModelSubscriptionFabricFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionPatternFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  tags?: ModelSubscriptionStringInput | null,
  manufactor?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionPatternFilterInput | null > | null,
  or?: Array< ModelSubscriptionPatternFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type CreateFabricMutationVariables = {
  input: CreateFabricInput,
  condition?: ModelFabricConditionInput | null,
};

export type CreateFabricMutation = {
  createFabric?:  {
    __typename: "Fabric",
    id: string,
    name: string,
    description?: string | null,
    tags?: string | null,
    imageKey?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateFabricMutationVariables = {
  input: UpdateFabricInput,
  condition?: ModelFabricConditionInput | null,
};

export type UpdateFabricMutation = {
  updateFabric?:  {
    __typename: "Fabric",
    id: string,
    name: string,
    description?: string | null,
    tags?: string | null,
    imageKey?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteFabricMutationVariables = {
  input: DeleteFabricInput,
  condition?: ModelFabricConditionInput | null,
};

export type DeleteFabricMutation = {
  deleteFabric?:  {
    __typename: "Fabric",
    id: string,
    name: string,
    description?: string | null,
    tags?: string | null,
    imageKey?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreatePatternMutationVariables = {
  input: CreatePatternInput,
  condition?: ModelPatternConditionInput | null,
};

export type CreatePatternMutation = {
  createPattern?:  {
    __typename: "Pattern",
    id: string,
    name: string,
    description?: string | null,
    tags?: string | null,
    manufactor?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdatePatternMutationVariables = {
  input: UpdatePatternInput,
  condition?: ModelPatternConditionInput | null,
};

export type UpdatePatternMutation = {
  updatePattern?:  {
    __typename: "Pattern",
    id: string,
    name: string,
    description?: string | null,
    tags?: string | null,
    manufactor?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeletePatternMutationVariables = {
  input: DeletePatternInput,
  condition?: ModelPatternConditionInput | null,
};

export type DeletePatternMutation = {
  deletePattern?:  {
    __typename: "Pattern",
    id: string,
    name: string,
    description?: string | null,
    tags?: string | null,
    manufactor?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetFabricQueryVariables = {
  id: string,
};

export type GetFabricQuery = {
  getFabric?:  {
    __typename: "Fabric",
    id: string,
    name: string,
    description?: string | null,
    tags?: string | null,
    imageKey?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListFabricsQueryVariables = {
  filter?: ModelFabricFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFabricsQuery = {
  listFabrics?:  {
    __typename: "ModelFabricConnection",
    items:  Array< {
      __typename: "Fabric",
      id: string,
      name: string,
      description?: string | null,
      tags?: string | null,
      imageKey?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPatternQueryVariables = {
  id: string,
};

export type GetPatternQuery = {
  getPattern?:  {
    __typename: "Pattern",
    id: string,
    name: string,
    description?: string | null,
    tags?: string | null,
    manufactor?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListPatternsQueryVariables = {
  filter?: ModelPatternFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPatternsQuery = {
  listPatterns?:  {
    __typename: "ModelPatternConnection",
    items:  Array< {
      __typename: "Pattern",
      id: string,
      name: string,
      description?: string | null,
      tags?: string | null,
      manufactor?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFabricSubscriptionVariables = {
  filter?: ModelSubscriptionFabricFilterInput | null,
  owner?: string | null,
};

export type OnCreateFabricSubscription = {
  onCreateFabric?:  {
    __typename: "Fabric",
    id: string,
    name: string,
    description?: string | null,
    tags?: string | null,
    imageKey?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFabricSubscriptionVariables = {
  filter?: ModelSubscriptionFabricFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFabricSubscription = {
  onUpdateFabric?:  {
    __typename: "Fabric",
    id: string,
    name: string,
    description?: string | null,
    tags?: string | null,
    imageKey?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFabricSubscriptionVariables = {
  filter?: ModelSubscriptionFabricFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFabricSubscription = {
  onDeleteFabric?:  {
    __typename: "Fabric",
    id: string,
    name: string,
    description?: string | null,
    tags?: string | null,
    imageKey?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreatePatternSubscriptionVariables = {
  filter?: ModelSubscriptionPatternFilterInput | null,
  owner?: string | null,
};

export type OnCreatePatternSubscription = {
  onCreatePattern?:  {
    __typename: "Pattern",
    id: string,
    name: string,
    description?: string | null,
    tags?: string | null,
    manufactor?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdatePatternSubscriptionVariables = {
  filter?: ModelSubscriptionPatternFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePatternSubscription = {
  onUpdatePattern?:  {
    __typename: "Pattern",
    id: string,
    name: string,
    description?: string | null,
    tags?: string | null,
    manufactor?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeletePatternSubscriptionVariables = {
  filter?: ModelSubscriptionPatternFilterInput | null,
  owner?: string | null,
};

export type OnDeletePatternSubscription = {
  onDeletePattern?:  {
    __typename: "Pattern",
    id: string,
    name: string,
    description?: string | null,
    tags?: string | null,
    manufactor?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
