/**
 * This file was automatically generated by Nexus 0.11.6
 * Do not make changes to this file directly
 */

import * as types from "../types"


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  PasswordMetaCreateInput: { // input type
    resetToken: string; // String!
  }
  PasswordMetaCreateOneInput: { // input type
    connect?: NexusGenInputs['PasswordMetaWhereUniqueInput'] | null; // PasswordMetaWhereUniqueInput
    create?: NexusGenInputs['PasswordMetaCreateInput'] | null; // PasswordMetaCreateInput
  }
  PasswordMetaUpdateDataInput: { // input type
    resetToken?: string | null; // String
  }
  PasswordMetaUpdateInput: { // input type
    resetToken?: string | null; // String
  }
  PasswordMetaUpdateManyMutationInput: { // input type
    resetToken?: string | null; // String
  }
  PasswordMetaUpdateOneInput: { // input type
    connect?: NexusGenInputs['PasswordMetaWhereUniqueInput'] | null; // PasswordMetaWhereUniqueInput
    create?: NexusGenInputs['PasswordMetaCreateInput'] | null; // PasswordMetaCreateInput
    delete?: boolean | null; // Boolean
    disconnect?: boolean | null; // Boolean
    update?: NexusGenInputs['PasswordMetaUpdateDataInput'] | null; // PasswordMetaUpdateDataInput
    upsert?: NexusGenInputs['PasswordMetaUpsertNestedInput'] | null; // PasswordMetaUpsertNestedInput
  }
  PasswordMetaUpsertNestedInput: { // input type
    create: NexusGenInputs['PasswordMetaCreateInput']; // PasswordMetaCreateInput!
    update: NexusGenInputs['PasswordMetaUpdateDataInput']; // PasswordMetaUpdateDataInput!
  }
  PasswordMetaWhereInput: { // input type
    AND?: NexusGenInputs['PasswordMetaWhereInput'][] | null; // [PasswordMetaWhereInput!]
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    NOT?: NexusGenInputs['PasswordMetaWhereInput'][] | null; // [PasswordMetaWhereInput!]
    OR?: NexusGenInputs['PasswordMetaWhereInput'][] | null; // [PasswordMetaWhereInput!]
    resetToken?: string | null; // String
    resetToken_contains?: string | null; // String
    resetToken_ends_with?: string | null; // String
    resetToken_gt?: string | null; // String
    resetToken_gte?: string | null; // String
    resetToken_in?: string[] | null; // [String!]
    resetToken_lt?: string | null; // String
    resetToken_lte?: string | null; // String
    resetToken_not?: string | null; // String
    resetToken_not_contains?: string | null; // String
    resetToken_not_ends_with?: string | null; // String
    resetToken_not_in?: string[] | null; // [String!]
    resetToken_not_starts_with?: string | null; // String
    resetToken_starts_with?: string | null; // String
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  PasswordMetaWhereUniqueInput: { // input type
    id?: string | null; // ID
  }
  UserCreateInput: { // input type
    email: string; // String!
    firstName?: string | null; // String
    lastName?: string | null; // String
    password: string; // String!
    passwordMeta?: NexusGenInputs['PasswordMetaCreateOneInput'] | null; // PasswordMetaCreateOneInput
    phone?: string | null; // String
    role?: NexusGenEnums['UserRole'] | null; // UserRole
  }
  UserUpdateInput: { // input type
    email?: string | null; // String
    firstName?: string | null; // String
    lastName?: string | null; // String
    password?: string | null; // String
    passwordMeta?: NexusGenInputs['PasswordMetaUpdateOneInput'] | null; // PasswordMetaUpdateOneInput
    phone?: string | null; // String
    role?: NexusGenEnums['UserRole'] | null; // UserRole
  }
  UserUpdateManyMutationInput: { // input type
    email?: string | null; // String
    firstName?: string | null; // String
    lastName?: string | null; // String
    password?: string | null; // String
    phone?: string | null; // String
    role?: NexusGenEnums['UserRole'] | null; // UserRole
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    createdAt?: any | null; // DateTime
    createdAt_gt?: any | null; // DateTime
    createdAt_gte?: any | null; // DateTime
    createdAt_in?: any[] | null; // [DateTime!]
    createdAt_lt?: any | null; // DateTime
    createdAt_lte?: any | null; // DateTime
    createdAt_not?: any | null; // DateTime
    createdAt_not_in?: any[] | null; // [DateTime!]
    email?: string | null; // String
    email_contains?: string | null; // String
    email_ends_with?: string | null; // String
    email_gt?: string | null; // String
    email_gte?: string | null; // String
    email_in?: string[] | null; // [String!]
    email_lt?: string | null; // String
    email_lte?: string | null; // String
    email_not?: string | null; // String
    email_not_contains?: string | null; // String
    email_not_ends_with?: string | null; // String
    email_not_in?: string[] | null; // [String!]
    email_not_starts_with?: string | null; // String
    email_starts_with?: string | null; // String
    firstName?: string | null; // String
    firstName_contains?: string | null; // String
    firstName_ends_with?: string | null; // String
    firstName_gt?: string | null; // String
    firstName_gte?: string | null; // String
    firstName_in?: string[] | null; // [String!]
    firstName_lt?: string | null; // String
    firstName_lte?: string | null; // String
    firstName_not?: string | null; // String
    firstName_not_contains?: string | null; // String
    firstName_not_ends_with?: string | null; // String
    firstName_not_in?: string[] | null; // [String!]
    firstName_not_starts_with?: string | null; // String
    firstName_starts_with?: string | null; // String
    id?: string | null; // ID
    id_contains?: string | null; // ID
    id_ends_with?: string | null; // ID
    id_gt?: string | null; // ID
    id_gte?: string | null; // ID
    id_in?: string[] | null; // [ID!]
    id_lt?: string | null; // ID
    id_lte?: string | null; // ID
    id_not?: string | null; // ID
    id_not_contains?: string | null; // ID
    id_not_ends_with?: string | null; // ID
    id_not_in?: string[] | null; // [ID!]
    id_not_starts_with?: string | null; // ID
    id_starts_with?: string | null; // ID
    lastName?: string | null; // String
    lastName_contains?: string | null; // String
    lastName_ends_with?: string | null; // String
    lastName_gt?: string | null; // String
    lastName_gte?: string | null; // String
    lastName_in?: string[] | null; // [String!]
    lastName_lt?: string | null; // String
    lastName_lte?: string | null; // String
    lastName_not?: string | null; // String
    lastName_not_contains?: string | null; // String
    lastName_not_ends_with?: string | null; // String
    lastName_not_in?: string[] | null; // [String!]
    lastName_not_starts_with?: string | null; // String
    lastName_starts_with?: string | null; // String
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    password?: string | null; // String
    password_contains?: string | null; // String
    password_ends_with?: string | null; // String
    password_gt?: string | null; // String
    password_gte?: string | null; // String
    password_in?: string[] | null; // [String!]
    password_lt?: string | null; // String
    password_lte?: string | null; // String
    password_not?: string | null; // String
    password_not_contains?: string | null; // String
    password_not_ends_with?: string | null; // String
    password_not_in?: string[] | null; // [String!]
    password_not_starts_with?: string | null; // String
    password_starts_with?: string | null; // String
    passwordMeta?: NexusGenInputs['PasswordMetaWhereInput'] | null; // PasswordMetaWhereInput
    phone?: string | null; // String
    phone_contains?: string | null; // String
    phone_ends_with?: string | null; // String
    phone_gt?: string | null; // String
    phone_gte?: string | null; // String
    phone_in?: string[] | null; // [String!]
    phone_lt?: string | null; // String
    phone_lte?: string | null; // String
    phone_not?: string | null; // String
    phone_not_contains?: string | null; // String
    phone_not_ends_with?: string | null; // String
    phone_not_in?: string[] | null; // [String!]
    phone_not_starts_with?: string | null; // String
    phone_starts_with?: string | null; // String
    role?: NexusGenEnums['UserRole'] | null; // UserRole
    role_in?: NexusGenEnums['UserRole'][] | null; // [UserRole!]
    role_not?: NexusGenEnums['UserRole'] | null; // UserRole
    role_not_in?: NexusGenEnums['UserRole'][] | null; // [UserRole!]
    updatedAt?: any | null; // DateTime
    updatedAt_gt?: any | null; // DateTime
    updatedAt_gte?: any | null; // DateTime
    updatedAt_in?: any[] | null; // [DateTime!]
    updatedAt_lt?: any | null; // DateTime
    updatedAt_lte?: any | null; // DateTime
    updatedAt_not?: any | null; // DateTime
    updatedAt_not_in?: any[] | null; // [DateTime!]
  }
  UserWhereUniqueInput: { // input type
    email?: string | null; // String
    id?: string | null; // ID
  }
}

export interface NexusGenEnums {
  PasswordMetaOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "id_ASC" | "id_DESC" | "resetToken_ASC" | "resetToken_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  UserOrderByInput: "createdAt_ASC" | "createdAt_DESC" | "email_ASC" | "email_DESC" | "firstName_ASC" | "firstName_DESC" | "id_ASC" | "id_DESC" | "lastName_ASC" | "lastName_DESC" | "password_ASC" | "password_DESC" | "phone_ASC" | "phone_DESC" | "role_ASC" | "role_DESC" | "updatedAt_ASC" | "updatedAt_DESC"
  UserRole: "ADMIN" | "USER"
}

export interface NexusGenRootTypes {
  AggregatePasswordMeta: { // root type
    count: number; // Int!
  }
  AggregateUser: { // root type
    count: number; // Int!
  }
  AuthPayload: types.AuthPayload;
  BatchPayload: { // root type
    count: any; // Long!
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  PasswordMeta: { // root type
    createdAt: any; // DateTime!
    id: string; // ID!
    resetToken: string; // String!
    updatedAt: any; // DateTime!
  }
  PasswordMetaConnection: { // root type
    edges: NexusGenRootTypes['PasswordMetaEdge'][]; // [PasswordMetaEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  PasswordMetaEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['PasswordMeta']; // PasswordMeta!
  }
  Query: {};
  TriggerPasswordResetPayload: types.TriggerPasswordResetPayload;
  User: { // root type
    email: string; // String!
    firstName?: string | null; // String
    id: string; // ID!
    lastName?: string | null; // String
    phone?: string | null; // String
  }
  UserConnection: { // root type
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // root type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  DateTime: any;
  Long: any;
}

export interface NexusGenAllTypes extends NexusGenRootTypes {
  PasswordMetaCreateInput: NexusGenInputs['PasswordMetaCreateInput'];
  PasswordMetaCreateOneInput: NexusGenInputs['PasswordMetaCreateOneInput'];
  PasswordMetaUpdateDataInput: NexusGenInputs['PasswordMetaUpdateDataInput'];
  PasswordMetaUpdateInput: NexusGenInputs['PasswordMetaUpdateInput'];
  PasswordMetaUpdateManyMutationInput: NexusGenInputs['PasswordMetaUpdateManyMutationInput'];
  PasswordMetaUpdateOneInput: NexusGenInputs['PasswordMetaUpdateOneInput'];
  PasswordMetaUpsertNestedInput: NexusGenInputs['PasswordMetaUpsertNestedInput'];
  PasswordMetaWhereInput: NexusGenInputs['PasswordMetaWhereInput'];
  PasswordMetaWhereUniqueInput: NexusGenInputs['PasswordMetaWhereUniqueInput'];
  UserCreateInput: NexusGenInputs['UserCreateInput'];
  UserUpdateInput: NexusGenInputs['UserUpdateInput'];
  UserUpdateManyMutationInput: NexusGenInputs['UserUpdateManyMutationInput'];
  UserWhereInput: NexusGenInputs['UserWhereInput'];
  UserWhereUniqueInput: NexusGenInputs['UserWhereUniqueInput'];
  PasswordMetaOrderByInput: NexusGenEnums['PasswordMetaOrderByInput'];
  UserOrderByInput: NexusGenEnums['UserOrderByInput'];
  UserRole: NexusGenEnums['UserRole'];
}

export interface NexusGenFieldTypes {
  AggregatePasswordMeta: { // field return type
    count: number; // Int!
  }
  AggregateUser: { // field return type
    count: number; // Int!
  }
  AuthPayload: { // field return type
    token: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
  }
  BatchPayload: { // field return type
    count: any; // Long!
  }
  Mutation: { // field return type
    createPasswordMeta: NexusGenRootTypes['PasswordMeta']; // PasswordMeta!
    createUser: NexusGenRootTypes['User']; // User!
    deleteManyPasswordMetas: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deleteManyUsers: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    deletePasswordMeta: NexusGenRootTypes['PasswordMeta'] | null; // PasswordMeta
    deleteUser: NexusGenRootTypes['User'] | null; // User
    login: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    signup: NexusGenRootTypes['AuthPayload'] | null; // AuthPayload
    updateManyPasswordMetas: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updateManyUsers: NexusGenRootTypes['BatchPayload']; // BatchPayload!
    updatePasswordMeta: NexusGenRootTypes['PasswordMeta'] | null; // PasswordMeta
    updateUser: NexusGenRootTypes['User'] | null; // User
    upsertPasswordMeta: NexusGenRootTypes['PasswordMeta']; // PasswordMeta!
    upsertUser: NexusGenRootTypes['User']; // User!
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  PasswordMeta: { // field return type
    createdAt: any; // DateTime!
    id: string; // ID!
    resetToken: string; // String!
    updatedAt: any; // DateTime!
  }
  PasswordMetaConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregatePasswordMeta']; // AggregatePasswordMeta!
    edges: NexusGenRootTypes['PasswordMetaEdge'][]; // [PasswordMetaEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  PasswordMetaEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['PasswordMeta']; // PasswordMeta!
  }
  Query: { // field return type
    passwordMeta: NexusGenRootTypes['PasswordMeta'] | null; // PasswordMeta
    passwordMetas: NexusGenRootTypes['PasswordMeta'][]; // [PasswordMeta!]!
    passwordMetasConnection: NexusGenRootTypes['PasswordMetaConnection']; // PasswordMetaConnection!
    profile: NexusGenRootTypes['User'] | null; // User
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
    usersConnection: NexusGenRootTypes['UserConnection']; // UserConnection!
  }
  TriggerPasswordResetPayload: { // field return type
    ok: boolean | null; // Boolean
  }
  User: { // field return type
    email: string; // String!
    firstName: string | null; // String
    id: string; // ID!
    lastName: string | null; // String
    phone: string | null; // String
  }
  UserConnection: { // field return type
    aggregate: NexusGenRootTypes['AggregateUser']; // AggregateUser!
    edges: NexusGenRootTypes['UserEdge'][]; // [UserEdge!]!
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['User']; // User!
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createPasswordMeta: { // args
      data: NexusGenInputs['PasswordMetaCreateInput']; // PasswordMetaCreateInput!
    }
    createUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
    deleteManyPasswordMetas: { // args
      where?: NexusGenInputs['PasswordMetaWhereInput'] | null; // PasswordMetaWhereInput
    }
    deleteManyUsers: { // args
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    deletePasswordMeta: { // args
      where: NexusGenInputs['PasswordMetaWhereUniqueInput']; // PasswordMetaWhereUniqueInput!
    }
    deleteUser: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    login: { // args
      email?: string | null; // String
      password?: string | null; // String
    }
    signup: { // args
      email?: string | null; // String
      firstName?: string | null; // String
      lastName?: string | null; // String
      password?: string | null; // String
      phone?: string | null; // String
    }
    updateManyPasswordMetas: { // args
      data: NexusGenInputs['PasswordMetaUpdateManyMutationInput']; // PasswordMetaUpdateManyMutationInput!
      where?: NexusGenInputs['PasswordMetaWhereInput'] | null; // PasswordMetaWhereInput
    }
    updateManyUsers: { // args
      data: NexusGenInputs['UserUpdateManyMutationInput']; // UserUpdateManyMutationInput!
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    updatePasswordMeta: { // args
      data: NexusGenInputs['PasswordMetaUpdateInput']; // PasswordMetaUpdateInput!
      where: NexusGenInputs['PasswordMetaWhereUniqueInput']; // PasswordMetaWhereUniqueInput!
    }
    updateUser: { // args
      data: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    upsertPasswordMeta: { // args
      create: NexusGenInputs['PasswordMetaCreateInput']; // PasswordMetaCreateInput!
      update: NexusGenInputs['PasswordMetaUpdateInput']; // PasswordMetaUpdateInput!
      where: NexusGenInputs['PasswordMetaWhereUniqueInput']; // PasswordMetaWhereUniqueInput!
    }
    upsertUser: { // args
      create: NexusGenInputs['UserCreateInput']; // UserCreateInput!
      update: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
  }
  Query: {
    passwordMeta: { // args
      where: NexusGenInputs['PasswordMetaWhereUniqueInput']; // PasswordMetaWhereUniqueInput!
    }
    passwordMetas: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['PasswordMetaOrderByInput'] | null; // PasswordMetaOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['PasswordMetaWhereInput'] | null; // PasswordMetaWhereInput
    }
    passwordMetasConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['PasswordMetaOrderByInput'] | null; // PasswordMetaOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['PasswordMetaWhereInput'] | null; // PasswordMetaWhereInput
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
    usersConnection: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenEnums['UserOrderByInput'] | null; // UserOrderByInput
      skip?: number | null; // Int
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
}

export interface NexusGenAbstractResolveReturnTypes {
}

export interface NexusGenInheritedFields {}

export type NexusGenObjectNames = "AggregatePasswordMeta" | "AggregateUser" | "AuthPayload" | "BatchPayload" | "Mutation" | "PageInfo" | "PasswordMeta" | "PasswordMetaConnection" | "PasswordMetaEdge" | "Query" | "TriggerPasswordResetPayload" | "User" | "UserConnection" | "UserEdge";

export type NexusGenInputNames = "PasswordMetaCreateInput" | "PasswordMetaCreateOneInput" | "PasswordMetaUpdateDataInput" | "PasswordMetaUpdateInput" | "PasswordMetaUpdateManyMutationInput" | "PasswordMetaUpdateOneInput" | "PasswordMetaUpsertNestedInput" | "PasswordMetaWhereInput" | "PasswordMetaWhereUniqueInput" | "UserCreateInput" | "UserUpdateInput" | "UserUpdateManyMutationInput" | "UserWhereInput" | "UserWhereUniqueInput";

export type NexusGenEnumNames = "PasswordMetaOrderByInput" | "UserOrderByInput" | "UserRole";

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = "Boolean" | "DateTime" | "Float" | "ID" | "Int" | "Long" | "String";

export type NexusGenUnionNames = never;

export interface NexusGenTypes {
  context: types.Ctx;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  allTypes: NexusGenAllTypes;
  inheritedFields: NexusGenInheritedFields;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractResolveReturn: NexusGenAbstractResolveReturnTypes;
}