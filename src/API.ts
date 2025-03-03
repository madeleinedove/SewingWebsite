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

export type CreateWebPatternItemsInput = {
  id?: string | null,
  name: string,
};

export type ModelWebPatternItemsConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelWebPatternItemsConditionInput | null > | null,
  or?: Array< ModelWebPatternItemsConditionInput | null > | null,
  not?: ModelWebPatternItemsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type WebPatternItems = {
  __typename: "WebPatternItems",
  id: string,
  name: string,
  fabrics?: ModelFabricToPatternsConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelFabricToPatternsConnection = {
  __typename: "ModelFabricToPatternsConnection",
  items:  Array<FabricToPatterns | null >,
  nextToken?: string | null,
};

export type FabricToPatterns = {
  __typename: "FabricToPatterns",
  id: string,
  webPatternItemsId: string,
  webFabricItemsId: string,
  webPatternItems: WebPatternItems,
  webFabricItems: WebFabricItems,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type WebFabricItems = {
  __typename: "WebFabricItems",
  id: string,
  name: string,
  patterns?: ModelFabricToPatternsConnection | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type UpdateWebPatternItemsInput = {
  id: string,
  name?: string | null,
};

export type DeleteWebPatternItemsInput = {
  id: string,
};

export type CreateWebFabricItemsInput = {
  id?: string | null,
  name: string,
};

export type ModelWebFabricItemsConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelWebFabricItemsConditionInput | null > | null,
  or?: Array< ModelWebFabricItemsConditionInput | null > | null,
  not?: ModelWebFabricItemsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  owner?: ModelStringInput | null,
};

export type UpdateWebFabricItemsInput = {
  id: string,
  name?: string | null,
};

export type DeleteWebFabricItemsInput = {
  id: string,
};

export type CreateFabricToPatternsInput = {
  id?: string | null,
  webPatternItemsId: string,
  webFabricItemsId: string,
};

export type ModelFabricToPatternsConditionInput = {
  webPatternItemsId?: ModelIDInput | null,
  webFabricItemsId?: ModelIDInput | null,
  and?: Array< ModelFabricToPatternsConditionInput | null > | null,
  or?: Array< ModelFabricToPatternsConditionInput | null > | null,
  not?: ModelFabricToPatternsConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
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

export type UpdateFabricToPatternsInput = {
  id: string,
  webPatternItemsId?: string | null,
  webFabricItemsId?: string | null,
};

export type DeleteFabricToPatternsInput = {
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

export type ModelWebPatternItemsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelWebPatternItemsFilterInput | null > | null,
  or?: Array< ModelWebPatternItemsFilterInput | null > | null,
  not?: ModelWebPatternItemsFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelWebPatternItemsConnection = {
  __typename: "ModelWebPatternItemsConnection",
  items:  Array<WebPatternItems | null >,
  nextToken?: string | null,
};

export type ModelWebFabricItemsFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelWebFabricItemsFilterInput | null > | null,
  or?: Array< ModelWebFabricItemsFilterInput | null > | null,
  not?: ModelWebFabricItemsFilterInput | null,
  owner?: ModelStringInput | null,
};

export type ModelWebFabricItemsConnection = {
  __typename: "ModelWebFabricItemsConnection",
  items:  Array<WebFabricItems | null >,
  nextToken?: string | null,
};

export type ModelFabricToPatternsFilterInput = {
  id?: ModelIDInput | null,
  webPatternItemsId?: ModelIDInput | null,
  webFabricItemsId?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFabricToPatternsFilterInput | null > | null,
  or?: Array< ModelFabricToPatternsFilterInput | null > | null,
  not?: ModelFabricToPatternsFilterInput | null,
  owner?: ModelStringInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


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

export type ModelSubscriptionWebPatternItemsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWebPatternItemsFilterInput | null > | null,
  or?: Array< ModelSubscriptionWebPatternItemsFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionWebFabricItemsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionWebFabricItemsFilterInput | null > | null,
  or?: Array< ModelSubscriptionWebFabricItemsFilterInput | null > | null,
  owner?: ModelStringInput | null,
};

export type ModelSubscriptionFabricToPatternsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  webPatternItemsId?: ModelSubscriptionIDInput | null,
  webFabricItemsId?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFabricToPatternsFilterInput | null > | null,
  or?: Array< ModelSubscriptionFabricToPatternsFilterInput | null > | null,
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

export type CreateWebPatternItemsMutationVariables = {
  input: CreateWebPatternItemsInput,
  condition?: ModelWebPatternItemsConditionInput | null,
};

export type CreateWebPatternItemsMutation = {
  createWebPatternItems?:  {
    __typename: "WebPatternItems",
    id: string,
    name: string,
    fabrics?:  {
      __typename: "ModelFabricToPatternsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateWebPatternItemsMutationVariables = {
  input: UpdateWebPatternItemsInput,
  condition?: ModelWebPatternItemsConditionInput | null,
};

export type UpdateWebPatternItemsMutation = {
  updateWebPatternItems?:  {
    __typename: "WebPatternItems",
    id: string,
    name: string,
    fabrics?:  {
      __typename: "ModelFabricToPatternsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteWebPatternItemsMutationVariables = {
  input: DeleteWebPatternItemsInput,
  condition?: ModelWebPatternItemsConditionInput | null,
};

export type DeleteWebPatternItemsMutation = {
  deleteWebPatternItems?:  {
    __typename: "WebPatternItems",
    id: string,
    name: string,
    fabrics?:  {
      __typename: "ModelFabricToPatternsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateWebFabricItemsMutationVariables = {
  input: CreateWebFabricItemsInput,
  condition?: ModelWebFabricItemsConditionInput | null,
};

export type CreateWebFabricItemsMutation = {
  createWebFabricItems?:  {
    __typename: "WebFabricItems",
    id: string,
    name: string,
    patterns?:  {
      __typename: "ModelFabricToPatternsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateWebFabricItemsMutationVariables = {
  input: UpdateWebFabricItemsInput,
  condition?: ModelWebFabricItemsConditionInput | null,
};

export type UpdateWebFabricItemsMutation = {
  updateWebFabricItems?:  {
    __typename: "WebFabricItems",
    id: string,
    name: string,
    patterns?:  {
      __typename: "ModelFabricToPatternsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteWebFabricItemsMutationVariables = {
  input: DeleteWebFabricItemsInput,
  condition?: ModelWebFabricItemsConditionInput | null,
};

export type DeleteWebFabricItemsMutation = {
  deleteWebFabricItems?:  {
    __typename: "WebFabricItems",
    id: string,
    name: string,
    patterns?:  {
      __typename: "ModelFabricToPatternsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateFabricToPatternsMutationVariables = {
  input: CreateFabricToPatternsInput,
  condition?: ModelFabricToPatternsConditionInput | null,
};

export type CreateFabricToPatternsMutation = {
  createFabricToPatterns?:  {
    __typename: "FabricToPatterns",
    id: string,
    webPatternItemsId: string,
    webFabricItemsId: string,
    webPatternItems:  {
      __typename: "WebPatternItems",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    webFabricItems:  {
      __typename: "WebFabricItems",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateFabricToPatternsMutationVariables = {
  input: UpdateFabricToPatternsInput,
  condition?: ModelFabricToPatternsConditionInput | null,
};

export type UpdateFabricToPatternsMutation = {
  updateFabricToPatterns?:  {
    __typename: "FabricToPatterns",
    id: string,
    webPatternItemsId: string,
    webFabricItemsId: string,
    webPatternItems:  {
      __typename: "WebPatternItems",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    webFabricItems:  {
      __typename: "WebFabricItems",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteFabricToPatternsMutationVariables = {
  input: DeleteFabricToPatternsInput,
  condition?: ModelFabricToPatternsConditionInput | null,
};

export type DeleteFabricToPatternsMutation = {
  deleteFabricToPatterns?:  {
    __typename: "FabricToPatterns",
    id: string,
    webPatternItemsId: string,
    webFabricItemsId: string,
    webPatternItems:  {
      __typename: "WebPatternItems",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    webFabricItems:  {
      __typename: "WebFabricItems",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
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

export type GetWebPatternItemsQueryVariables = {
  id: string,
};

export type GetWebPatternItemsQuery = {
  getWebPatternItems?:  {
    __typename: "WebPatternItems",
    id: string,
    name: string,
    fabrics?:  {
      __typename: "ModelFabricToPatternsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListWebPatternItemsQueryVariables = {
  filter?: ModelWebPatternItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWebPatternItemsQuery = {
  listWebPatternItems?:  {
    __typename: "ModelWebPatternItemsConnection",
    items:  Array< {
      __typename: "WebPatternItems",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetWebFabricItemsQueryVariables = {
  id: string,
};

export type GetWebFabricItemsQuery = {
  getWebFabricItems?:  {
    __typename: "WebFabricItems",
    id: string,
    name: string,
    patterns?:  {
      __typename: "ModelFabricToPatternsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListWebFabricItemsQueryVariables = {
  filter?: ModelWebFabricItemsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWebFabricItemsQuery = {
  listWebFabricItems?:  {
    __typename: "ModelWebFabricItemsConnection",
    items:  Array< {
      __typename: "WebFabricItems",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFabricToPatternsQueryVariables = {
  id: string,
};

export type GetFabricToPatternsQuery = {
  getFabricToPatterns?:  {
    __typename: "FabricToPatterns",
    id: string,
    webPatternItemsId: string,
    webFabricItemsId: string,
    webPatternItems:  {
      __typename: "WebPatternItems",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    webFabricItems:  {
      __typename: "WebFabricItems",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListFabricToPatternsQueryVariables = {
  filter?: ModelFabricToPatternsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFabricToPatternsQuery = {
  listFabricToPatterns?:  {
    __typename: "ModelFabricToPatternsConnection",
    items:  Array< {
      __typename: "FabricToPatterns",
      id: string,
      webPatternItemsId: string,
      webFabricItemsId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FabricToPatternsByWebPatternItemsIdQueryVariables = {
  webPatternItemsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFabricToPatternsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FabricToPatternsByWebPatternItemsIdQuery = {
  fabricToPatternsByWebPatternItemsId?:  {
    __typename: "ModelFabricToPatternsConnection",
    items:  Array< {
      __typename: "FabricToPatterns",
      id: string,
      webPatternItemsId: string,
      webFabricItemsId: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type FabricToPatternsByWebFabricItemsIdQueryVariables = {
  webFabricItemsId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelFabricToPatternsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type FabricToPatternsByWebFabricItemsIdQuery = {
  fabricToPatternsByWebFabricItemsId?:  {
    __typename: "ModelFabricToPatternsConnection",
    items:  Array< {
      __typename: "FabricToPatterns",
      id: string,
      webPatternItemsId: string,
      webFabricItemsId: string,
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

export type OnCreateWebPatternItemsSubscriptionVariables = {
  filter?: ModelSubscriptionWebPatternItemsFilterInput | null,
  owner?: string | null,
};

export type OnCreateWebPatternItemsSubscription = {
  onCreateWebPatternItems?:  {
    __typename: "WebPatternItems",
    id: string,
    name: string,
    fabrics?:  {
      __typename: "ModelFabricToPatternsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateWebPatternItemsSubscriptionVariables = {
  filter?: ModelSubscriptionWebPatternItemsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateWebPatternItemsSubscription = {
  onUpdateWebPatternItems?:  {
    __typename: "WebPatternItems",
    id: string,
    name: string,
    fabrics?:  {
      __typename: "ModelFabricToPatternsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteWebPatternItemsSubscriptionVariables = {
  filter?: ModelSubscriptionWebPatternItemsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteWebPatternItemsSubscription = {
  onDeleteWebPatternItems?:  {
    __typename: "WebPatternItems",
    id: string,
    name: string,
    fabrics?:  {
      __typename: "ModelFabricToPatternsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateWebFabricItemsSubscriptionVariables = {
  filter?: ModelSubscriptionWebFabricItemsFilterInput | null,
  owner?: string | null,
};

export type OnCreateWebFabricItemsSubscription = {
  onCreateWebFabricItems?:  {
    __typename: "WebFabricItems",
    id: string,
    name: string,
    patterns?:  {
      __typename: "ModelFabricToPatternsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateWebFabricItemsSubscriptionVariables = {
  filter?: ModelSubscriptionWebFabricItemsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateWebFabricItemsSubscription = {
  onUpdateWebFabricItems?:  {
    __typename: "WebFabricItems",
    id: string,
    name: string,
    patterns?:  {
      __typename: "ModelFabricToPatternsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteWebFabricItemsSubscriptionVariables = {
  filter?: ModelSubscriptionWebFabricItemsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteWebFabricItemsSubscription = {
  onDeleteWebFabricItems?:  {
    __typename: "WebFabricItems",
    id: string,
    name: string,
    patterns?:  {
      __typename: "ModelFabricToPatternsConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateFabricToPatternsSubscriptionVariables = {
  filter?: ModelSubscriptionFabricToPatternsFilterInput | null,
  owner?: string | null,
};

export type OnCreateFabricToPatternsSubscription = {
  onCreateFabricToPatterns?:  {
    __typename: "FabricToPatterns",
    id: string,
    webPatternItemsId: string,
    webFabricItemsId: string,
    webPatternItems:  {
      __typename: "WebPatternItems",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    webFabricItems:  {
      __typename: "WebFabricItems",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateFabricToPatternsSubscriptionVariables = {
  filter?: ModelSubscriptionFabricToPatternsFilterInput | null,
  owner?: string | null,
};

export type OnUpdateFabricToPatternsSubscription = {
  onUpdateFabricToPatterns?:  {
    __typename: "FabricToPatterns",
    id: string,
    webPatternItemsId: string,
    webFabricItemsId: string,
    webPatternItems:  {
      __typename: "WebPatternItems",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    webFabricItems:  {
      __typename: "WebFabricItems",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteFabricToPatternsSubscriptionVariables = {
  filter?: ModelSubscriptionFabricToPatternsFilterInput | null,
  owner?: string | null,
};

export type OnDeleteFabricToPatternsSubscription = {
  onDeleteFabricToPatterns?:  {
    __typename: "FabricToPatterns",
    id: string,
    webPatternItemsId: string,
    webFabricItemsId: string,
    webPatternItems:  {
      __typename: "WebPatternItems",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    webFabricItems:  {
      __typename: "WebFabricItems",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    },
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
