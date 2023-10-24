import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigInt: { input: any; output: any; }
  DateTime: { input: any; output: any; }
};

export type Account = {
  __typename?: 'Account';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  id_token?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type AccountAvgAggregate = {
  __typename?: 'AccountAvgAggregate';
  expires_at?: Maybe<Scalars['Float']['output']>;
};

export type AccountAvgOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountCountAggregate = {
  __typename?: 'AccountCountAggregate';
  _all: Scalars['Int']['output'];
  access_token: Scalars['Int']['output'];
  expires_at: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  id_token: Scalars['Int']['output'];
  provider: Scalars['Int']['output'];
  providerAccountId: Scalars['Int']['output'];
  refresh_token: Scalars['Int']['output'];
  scope: Scalars['Int']['output'];
  session_state: Scalars['Int']['output'];
  token_type: Scalars['Int']['output'];
  type: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type AccountCountOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountCreateInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  user: UserCreateNestedOneWithoutAccountsInput;
};

export type AccountCreateManyInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type AccountCreateManyUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type AccountCreateManyUserInputEnvelope = {
  data: Array<AccountCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AccountCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
};

export type AccountCreateOrConnectWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountCreateWithoutUserInput = {
  access_token?: InputMaybe<Scalars['String']['input']>;
  expires_at?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<Scalars['String']['input']>;
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
  refresh_token?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  session_state?: InputMaybe<Scalars['String']['input']>;
  token_type?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type AccountGroupBy = {
  __typename?: 'AccountGroupBy';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id: Scalars['String']['output'];
  id_token?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  providerAccountId: Scalars['String']['output'];
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type AccountListRelationFilter = {
  every?: InputMaybe<AccountWhereInput>;
  none?: InputMaybe<AccountWhereInput>;
  some?: InputMaybe<AccountWhereInput>;
};

export type AccountMaxAggregate = {
  __typename?: 'AccountMaxAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AccountMaxOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountMinAggregate = {
  __typename?: 'AccountMinAggregate';
  access_token?: Maybe<Scalars['String']['output']>;
  expires_at?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  id_token?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  providerAccountId?: Maybe<Scalars['String']['output']>;
  refresh_token?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  session_state?: Maybe<Scalars['String']['output']>;
  token_type?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type AccountMinOrderByAggregateInput = {
  access_token?: InputMaybe<SortOrder>;
  expires_at?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrder>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrder>;
  scope?: InputMaybe<SortOrder>;
  session_state?: InputMaybe<SortOrder>;
  token_type?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithAggregationInput = {
  _avg?: InputMaybe<AccountAvgOrderByAggregateInput>;
  _count?: InputMaybe<AccountCountOrderByAggregateInput>;
  _max?: InputMaybe<AccountMaxOrderByAggregateInput>;
  _min?: InputMaybe<AccountMinOrderByAggregateInput>;
  _sum?: InputMaybe<AccountSumOrderByAggregateInput>;
  access_token?: InputMaybe<SortOrderInput>;
  expires_at?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrderInput>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrderInput>;
  scope?: InputMaybe<SortOrderInput>;
  session_state?: InputMaybe<SortOrderInput>;
  token_type?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountOrderByWithRelationInput = {
  access_token?: InputMaybe<SortOrderInput>;
  expires_at?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  id_token?: InputMaybe<SortOrderInput>;
  provider?: InputMaybe<SortOrder>;
  providerAccountId?: InputMaybe<SortOrder>;
  refresh_token?: InputMaybe<SortOrderInput>;
  scope?: InputMaybe<SortOrderInput>;
  session_state?: InputMaybe<SortOrderInput>;
  token_type?: InputMaybe<SortOrderInput>;
  type?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type AccountProviderProviderAccountIdCompoundUniqueInput = {
  provider: Scalars['String']['input'];
  providerAccountId: Scalars['String']['input'];
};

export enum AccountScalarFieldEnum {
  AccessToken = 'access_token',
  ExpiresAt = 'expires_at',
  Id = 'id',
  IdToken = 'id_token',
  Provider = 'provider',
  ProviderAccountId = 'providerAccountId',
  RefreshToken = 'refresh_token',
  Scope = 'scope',
  SessionState = 'session_state',
  TokenType = 'token_type',
  Type = 'type',
  UserId = 'userId'
}

export type AccountScalarWhereInput = {
  AND?: InputMaybe<Array<AccountScalarWhereInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<AccountScalarWhereWithAggregatesInput>>;
  access_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  expires_at?: InputMaybe<IntNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  id_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  provider?: InputMaybe<StringWithAggregatesFilter>;
  providerAccountId?: InputMaybe<StringWithAggregatesFilter>;
  refresh_token?: InputMaybe<StringNullableWithAggregatesFilter>;
  scope?: InputMaybe<StringNullableWithAggregatesFilter>;
  session_state?: InputMaybe<StringNullableWithAggregatesFilter>;
  token_type?: InputMaybe<StringNullableWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type AccountSumAggregate = {
  __typename?: 'AccountSumAggregate';
  expires_at?: Maybe<Scalars['Int']['output']>;
};

export type AccountSumOrderByAggregateInput = {
  expires_at?: InputMaybe<SortOrder>;
};

export type AccountUpdateInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutAccountsNestedInput>;
};

export type AccountUpdateManyMutationInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpdateManyWithWhereWithoutUserInput = {
  data: AccountUpdateManyMutationInput;
  where: AccountScalarWhereInput;
};

export type AccountUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<AccountCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<AccountCreateWithoutUserInput>>;
  createMany?: InputMaybe<AccountCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<AccountWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<AccountScalarWhereInput>>;
  disconnect?: InputMaybe<Array<AccountWhereUniqueInput>>;
  set?: InputMaybe<Array<AccountWhereUniqueInput>>;
  update?: InputMaybe<Array<AccountUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<AccountUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<AccountUpsertWithWhereUniqueWithoutUserInput>>;
};

export type AccountUpdateWithWhereUniqueWithoutUserInput = {
  data: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountUpdateWithoutUserInput = {
  access_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  expires_at?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  id_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  provider?: InputMaybe<StringFieldUpdateOperationsInput>;
  providerAccountId?: InputMaybe<StringFieldUpdateOperationsInput>;
  refresh_token?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  scope?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  session_state?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  token_type?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  type?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type AccountUpsertWithWhereUniqueWithoutUserInput = {
  create: AccountCreateWithoutUserInput;
  update: AccountUpdateWithoutUserInput;
  where: AccountWhereUniqueInput;
};

export type AccountWhereInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<StringFilter>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AccountWhereUniqueInput = {
  AND?: InputMaybe<Array<AccountWhereInput>>;
  NOT?: InputMaybe<Array<AccountWhereInput>>;
  OR?: InputMaybe<Array<AccountWhereInput>>;
  access_token?: InputMaybe<StringNullableFilter>;
  expires_at?: InputMaybe<IntNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_token?: InputMaybe<StringNullableFilter>;
  provider?: InputMaybe<StringFilter>;
  providerAccountId?: InputMaybe<StringFilter>;
  provider_providerAccountId?: InputMaybe<AccountProviderProviderAccountIdCompoundUniqueInput>;
  refresh_token?: InputMaybe<StringNullableFilter>;
  scope?: InputMaybe<StringNullableFilter>;
  session_state?: InputMaybe<StringNullableFilter>;
  token_type?: InputMaybe<StringNullableFilter>;
  type?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ActivityLog = {
  __typename?: 'ActivityLog';
  activityType: ActivityType;
  id: Scalars['String']['output'];
  occurredAt: Scalars['DateTime']['output'];
  points: Scalars['Int']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type ActivityLogAvgAggregate = {
  __typename?: 'ActivityLogAvgAggregate';
  points?: Maybe<Scalars['Float']['output']>;
};

export type ActivityLogAvgOrderByAggregateInput = {
  points?: InputMaybe<SortOrder>;
};

export type ActivityLogCountAggregate = {
  __typename?: 'ActivityLogCountAggregate';
  _all: Scalars['Int']['output'];
  activityType: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  occurredAt: Scalars['Int']['output'];
  points: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type ActivityLogCountOrderByAggregateInput = {
  activityType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  occurredAt?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ActivityLogCreateInput = {
  activityType: ActivityType;
  id?: InputMaybe<Scalars['String']['input']>;
  occurredAt?: InputMaybe<Scalars['DateTime']['input']>;
  points: Scalars['Int']['input'];
  user: UserCreateNestedOneWithoutActivityLogsInput;
};

export type ActivityLogCreateManyInput = {
  activityType: ActivityType;
  id?: InputMaybe<Scalars['String']['input']>;
  occurredAt?: InputMaybe<Scalars['DateTime']['input']>;
  points: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
};

export type ActivityLogCreateManyUserInput = {
  activityType: ActivityType;
  id?: InputMaybe<Scalars['String']['input']>;
  occurredAt?: InputMaybe<Scalars['DateTime']['input']>;
  points: Scalars['Int']['input'];
};

export type ActivityLogCreateManyUserInputEnvelope = {
  data: Array<ActivityLogCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ActivityLogCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ActivityLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActivityLogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ActivityLogCreateWithoutUserInput>>;
  createMany?: InputMaybe<ActivityLogCreateManyUserInputEnvelope>;
};

export type ActivityLogCreateOrConnectWithoutUserInput = {
  create: ActivityLogCreateWithoutUserInput;
  where: ActivityLogWhereUniqueInput;
};

export type ActivityLogCreateWithoutUserInput = {
  activityType: ActivityType;
  id?: InputMaybe<Scalars['String']['input']>;
  occurredAt?: InputMaybe<Scalars['DateTime']['input']>;
  points: Scalars['Int']['input'];
};

export type ActivityLogGroupBy = {
  __typename?: 'ActivityLogGroupBy';
  _avg?: Maybe<ActivityLogAvgAggregate>;
  _count?: Maybe<ActivityLogCountAggregate>;
  _max?: Maybe<ActivityLogMaxAggregate>;
  _min?: Maybe<ActivityLogMinAggregate>;
  _sum?: Maybe<ActivityLogSumAggregate>;
  activityType: ActivityType;
  id: Scalars['String']['output'];
  occurredAt: Scalars['DateTime']['output'];
  points: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

export type ActivityLogListRelationFilter = {
  every?: InputMaybe<ActivityLogWhereInput>;
  none?: InputMaybe<ActivityLogWhereInput>;
  some?: InputMaybe<ActivityLogWhereInput>;
};

export type ActivityLogMaxAggregate = {
  __typename?: 'ActivityLogMaxAggregate';
  activityType?: Maybe<ActivityType>;
  id?: Maybe<Scalars['String']['output']>;
  occurredAt?: Maybe<Scalars['DateTime']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ActivityLogMaxOrderByAggregateInput = {
  activityType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  occurredAt?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ActivityLogMinAggregate = {
  __typename?: 'ActivityLogMinAggregate';
  activityType?: Maybe<ActivityType>;
  id?: Maybe<Scalars['String']['output']>;
  occurredAt?: Maybe<Scalars['DateTime']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ActivityLogMinOrderByAggregateInput = {
  activityType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  occurredAt?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ActivityLogOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ActivityLogOrderByWithAggregationInput = {
  _avg?: InputMaybe<ActivityLogAvgOrderByAggregateInput>;
  _count?: InputMaybe<ActivityLogCountOrderByAggregateInput>;
  _max?: InputMaybe<ActivityLogMaxOrderByAggregateInput>;
  _min?: InputMaybe<ActivityLogMinOrderByAggregateInput>;
  _sum?: InputMaybe<ActivityLogSumOrderByAggregateInput>;
  activityType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  occurredAt?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ActivityLogOrderByWithRelationInput = {
  activityType?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  occurredAt?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ActivityLogScalarFieldEnum {
  ActivityType = 'activityType',
  Id = 'id',
  OccurredAt = 'occurredAt',
  Points = 'points',
  UserId = 'userId'
}

export type ActivityLogScalarWhereInput = {
  AND?: InputMaybe<Array<ActivityLogScalarWhereInput>>;
  NOT?: InputMaybe<Array<ActivityLogScalarWhereInput>>;
  OR?: InputMaybe<Array<ActivityLogScalarWhereInput>>;
  activityType?: InputMaybe<EnumActivityTypeFilter>;
  id?: InputMaybe<StringFilter>;
  occurredAt?: InputMaybe<DateTimeFilter>;
  points?: InputMaybe<IntFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ActivityLogScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ActivityLogScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ActivityLogScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ActivityLogScalarWhereWithAggregatesInput>>;
  activityType?: InputMaybe<EnumActivityTypeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  occurredAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  points?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type ActivityLogSumAggregate = {
  __typename?: 'ActivityLogSumAggregate';
  points?: Maybe<Scalars['Int']['output']>;
};

export type ActivityLogSumOrderByAggregateInput = {
  points?: InputMaybe<SortOrder>;
};

export type ActivityLogUpdateInput = {
  activityType?: InputMaybe<EnumActivityTypeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  occurredAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutActivityLogsNestedInput>;
};

export type ActivityLogUpdateManyMutationInput = {
  activityType?: InputMaybe<EnumActivityTypeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  occurredAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ActivityLogUpdateManyWithWhereWithoutUserInput = {
  data: ActivityLogUpdateManyMutationInput;
  where: ActivityLogScalarWhereInput;
};

export type ActivityLogUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ActivityLogWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ActivityLogCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ActivityLogCreateWithoutUserInput>>;
  createMany?: InputMaybe<ActivityLogCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ActivityLogWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ActivityLogScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ActivityLogWhereUniqueInput>>;
  set?: InputMaybe<Array<ActivityLogWhereUniqueInput>>;
  update?: InputMaybe<Array<ActivityLogUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ActivityLogUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ActivityLogUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ActivityLogUpdateWithWhereUniqueWithoutUserInput = {
  data: ActivityLogUpdateWithoutUserInput;
  where: ActivityLogWhereUniqueInput;
};

export type ActivityLogUpdateWithoutUserInput = {
  activityType?: InputMaybe<EnumActivityTypeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  occurredAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type ActivityLogUpsertWithWhereUniqueWithoutUserInput = {
  create: ActivityLogCreateWithoutUserInput;
  update: ActivityLogUpdateWithoutUserInput;
  where: ActivityLogWhereUniqueInput;
};

export type ActivityLogWhereInput = {
  AND?: InputMaybe<Array<ActivityLogWhereInput>>;
  NOT?: InputMaybe<Array<ActivityLogWhereInput>>;
  OR?: InputMaybe<Array<ActivityLogWhereInput>>;
  activityType?: InputMaybe<EnumActivityTypeFilter>;
  id?: InputMaybe<StringFilter>;
  occurredAt?: InputMaybe<DateTimeFilter>;
  points?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ActivityLogWhereUniqueInput = {
  AND?: InputMaybe<Array<ActivityLogWhereInput>>;
  NOT?: InputMaybe<Array<ActivityLogWhereInput>>;
  OR?: InputMaybe<Array<ActivityLogWhereInput>>;
  activityType?: InputMaybe<EnumActivityTypeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  occurredAt?: InputMaybe<DateTimeFilter>;
  points?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export enum ActivityType {
  BetPlaced = 'BET_PLACED',
  RewardEarned = 'REWARD_EARNED',
  ShareBought = 'SHARE_BOUGHT'
}

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int']['output'];
};

export type AggregateAccount = {
  __typename?: 'AggregateAccount';
  _avg?: Maybe<AccountAvgAggregate>;
  _count?: Maybe<AccountCountAggregate>;
  _max?: Maybe<AccountMaxAggregate>;
  _min?: Maybe<AccountMinAggregate>;
  _sum?: Maybe<AccountSumAggregate>;
};

export type AggregateActivityLog = {
  __typename?: 'AggregateActivityLog';
  _avg?: Maybe<ActivityLogAvgAggregate>;
  _count?: Maybe<ActivityLogCountAggregate>;
  _max?: Maybe<ActivityLogMaxAggregate>;
  _min?: Maybe<ActivityLogMinAggregate>;
  _sum?: Maybe<ActivityLogSumAggregate>;
};

export type AggregateBet = {
  __typename?: 'AggregateBet';
  _avg?: Maybe<BetAvgAggregate>;
  _count?: Maybe<BetCountAggregate>;
  _max?: Maybe<BetMaxAggregate>;
  _min?: Maybe<BetMinAggregate>;
  _sum?: Maybe<BetSumAggregate>;
};

export type AggregateReferral = {
  __typename?: 'AggregateReferral';
  _count?: Maybe<ReferralCountAggregate>;
  _max?: Maybe<ReferralMaxAggregate>;
  _min?: Maybe<ReferralMinAggregate>;
};

export type AggregateReward = {
  __typename?: 'AggregateReward';
  _avg?: Maybe<RewardAvgAggregate>;
  _count?: Maybe<RewardCountAggregate>;
  _max?: Maybe<RewardMaxAggregate>;
  _min?: Maybe<RewardMinAggregate>;
  _sum?: Maybe<RewardSumAggregate>;
};

export type AggregateRound = {
  __typename?: 'AggregateRound';
  _avg?: Maybe<RoundAvgAggregate>;
  _count?: Maybe<RoundCountAggregate>;
  _max?: Maybe<RoundMaxAggregate>;
  _min?: Maybe<RoundMinAggregate>;
  _sum?: Maybe<RoundSumAggregate>;
};

export type AggregateSession = {
  __typename?: 'AggregateSession';
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
};

export type AggregateShare = {
  __typename?: 'AggregateShare';
  _avg?: Maybe<ShareAvgAggregate>;
  _count?: Maybe<ShareCountAggregate>;
  _max?: Maybe<ShareMaxAggregate>;
  _min?: Maybe<ShareMinAggregate>;
  _sum?: Maybe<ShareSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
};

export type AggregateUserStats = {
  __typename?: 'AggregateUserStats';
  _avg?: Maybe<UserStatsAvgAggregate>;
  _count?: Maybe<UserStatsCountAggregate>;
  _max?: Maybe<UserStatsMaxAggregate>;
  _min?: Maybe<UserStatsMinAggregate>;
  _sum?: Maybe<UserStatsSumAggregate>;
};

export type AggregateVerificationToken = {
  __typename?: 'AggregateVerificationToken';
  _count?: Maybe<VerificationTokenCountAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
};

export type Bet = {
  __typename?: 'Bet';
  amount: Scalars['BigInt']['output'];
  block?: Maybe<Scalars['Int']['output']>;
  claimed: Scalars['Boolean']['output'];
  claimedAt?: Maybe<Scalars['DateTime']['output']>;
  claimedBlock?: Maybe<Scalars['Int']['output']>;
  claimedHash?: Maybe<Scalars['String']['output']>;
  claimedNetSTETH?: Maybe<Scalars['BigInt']['output']>;
  claimedSTETH?: Maybe<Scalars['BigInt']['output']>;
  closedAt?: Maybe<Scalars['DateTime']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  openedAt: Scalars['DateTime']['output'];
  outcome?: Maybe<Scalars['String']['output']>;
  pnl?: Maybe<Scalars['BigInt']['output']>;
  position: BetPosition;
  round: Round;
  roundId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type BetAvgAggregate = {
  __typename?: 'BetAvgAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  block?: Maybe<Scalars['Float']['output']>;
  claimedBlock?: Maybe<Scalars['Float']['output']>;
  claimedNetSTETH?: Maybe<Scalars['Float']['output']>;
  claimedSTETH?: Maybe<Scalars['Float']['output']>;
  pnl?: Maybe<Scalars['Float']['output']>;
};

export type BetAvgOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  block?: InputMaybe<SortOrder>;
  claimedBlock?: InputMaybe<SortOrder>;
  claimedNetSTETH?: InputMaybe<SortOrder>;
  claimedSTETH?: InputMaybe<SortOrder>;
  pnl?: InputMaybe<SortOrder>;
};

export type BetCountAggregate = {
  __typename?: 'BetCountAggregate';
  _all: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  block: Scalars['Int']['output'];
  claimed: Scalars['Int']['output'];
  claimedAt: Scalars['Int']['output'];
  claimedBlock: Scalars['Int']['output'];
  claimedHash: Scalars['Int']['output'];
  claimedNetSTETH: Scalars['Int']['output'];
  claimedSTETH: Scalars['Int']['output'];
  closedAt: Scalars['Int']['output'];
  hash: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  openedAt: Scalars['Int']['output'];
  outcome: Scalars['Int']['output'];
  pnl: Scalars['Int']['output'];
  position: Scalars['Int']['output'];
  roundId: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type BetCountOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  block?: InputMaybe<SortOrder>;
  claimed?: InputMaybe<SortOrder>;
  claimedAt?: InputMaybe<SortOrder>;
  claimedBlock?: InputMaybe<SortOrder>;
  claimedHash?: InputMaybe<SortOrder>;
  claimedNetSTETH?: InputMaybe<SortOrder>;
  claimedSTETH?: InputMaybe<SortOrder>;
  closedAt?: InputMaybe<SortOrder>;
  hash?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  openedAt?: InputMaybe<SortOrder>;
  outcome?: InputMaybe<SortOrder>;
  pnl?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  roundId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BetCreateInput = {
  amount: Scalars['BigInt']['input'];
  block?: InputMaybe<Scalars['Int']['input']>;
  claimed: Scalars['Boolean']['input'];
  claimedAt?: InputMaybe<Scalars['DateTime']['input']>;
  claimedBlock?: InputMaybe<Scalars['Int']['input']>;
  claimedHash?: InputMaybe<Scalars['String']['input']>;
  claimedNetSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  claimedSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  closedAt?: InputMaybe<Scalars['DateTime']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  openedAt?: InputMaybe<Scalars['DateTime']['input']>;
  outcome?: InputMaybe<Scalars['String']['input']>;
  pnl?: InputMaybe<Scalars['BigInt']['input']>;
  position: BetPosition;
  round: RoundCreateNestedOneWithoutBetsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutBetsInput;
};

export type BetCreateManyInput = {
  amount: Scalars['BigInt']['input'];
  block?: InputMaybe<Scalars['Int']['input']>;
  claimed: Scalars['Boolean']['input'];
  claimedAt?: InputMaybe<Scalars['DateTime']['input']>;
  claimedBlock?: InputMaybe<Scalars['Int']['input']>;
  claimedHash?: InputMaybe<Scalars['String']['input']>;
  claimedNetSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  claimedSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  closedAt?: InputMaybe<Scalars['DateTime']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  openedAt?: InputMaybe<Scalars['DateTime']['input']>;
  outcome?: InputMaybe<Scalars['String']['input']>;
  pnl?: InputMaybe<Scalars['BigInt']['input']>;
  position: BetPosition;
  roundId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type BetCreateManyRoundInput = {
  amount: Scalars['BigInt']['input'];
  block?: InputMaybe<Scalars['Int']['input']>;
  claimed: Scalars['Boolean']['input'];
  claimedAt?: InputMaybe<Scalars['DateTime']['input']>;
  claimedBlock?: InputMaybe<Scalars['Int']['input']>;
  claimedHash?: InputMaybe<Scalars['String']['input']>;
  claimedNetSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  claimedSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  closedAt?: InputMaybe<Scalars['DateTime']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  openedAt?: InputMaybe<Scalars['DateTime']['input']>;
  outcome?: InputMaybe<Scalars['String']['input']>;
  pnl?: InputMaybe<Scalars['BigInt']['input']>;
  position: BetPosition;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  userId: Scalars['String']['input'];
};

export type BetCreateManyRoundInputEnvelope = {
  data: Array<BetCreateManyRoundInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BetCreateManyUserInput = {
  amount: Scalars['BigInt']['input'];
  block?: InputMaybe<Scalars['Int']['input']>;
  claimed: Scalars['Boolean']['input'];
  claimedAt?: InputMaybe<Scalars['DateTime']['input']>;
  claimedBlock?: InputMaybe<Scalars['Int']['input']>;
  claimedHash?: InputMaybe<Scalars['String']['input']>;
  claimedNetSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  claimedSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  closedAt?: InputMaybe<Scalars['DateTime']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  openedAt?: InputMaybe<Scalars['DateTime']['input']>;
  outcome?: InputMaybe<Scalars['String']['input']>;
  pnl?: InputMaybe<Scalars['BigInt']['input']>;
  position: BetPosition;
  roundId: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BetCreateManyUserInputEnvelope = {
  data: Array<BetCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BetCreateNestedManyWithoutRoundInput = {
  connect?: InputMaybe<Array<BetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BetCreateOrConnectWithoutRoundInput>>;
  create?: InputMaybe<Array<BetCreateWithoutRoundInput>>;
  createMany?: InputMaybe<BetCreateManyRoundInputEnvelope>;
};

export type BetCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<BetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BetCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BetCreateWithoutUserInput>>;
  createMany?: InputMaybe<BetCreateManyUserInputEnvelope>;
};

export type BetCreateOrConnectWithoutRoundInput = {
  create: BetCreateWithoutRoundInput;
  where: BetWhereUniqueInput;
};

export type BetCreateOrConnectWithoutUserInput = {
  create: BetCreateWithoutUserInput;
  where: BetWhereUniqueInput;
};

export type BetCreateWithoutRoundInput = {
  amount: Scalars['BigInt']['input'];
  block?: InputMaybe<Scalars['Int']['input']>;
  claimed: Scalars['Boolean']['input'];
  claimedAt?: InputMaybe<Scalars['DateTime']['input']>;
  claimedBlock?: InputMaybe<Scalars['Int']['input']>;
  claimedHash?: InputMaybe<Scalars['String']['input']>;
  claimedNetSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  claimedSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  closedAt?: InputMaybe<Scalars['DateTime']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  openedAt?: InputMaybe<Scalars['DateTime']['input']>;
  outcome?: InputMaybe<Scalars['String']['input']>;
  pnl?: InputMaybe<Scalars['BigInt']['input']>;
  position: BetPosition;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user: UserCreateNestedOneWithoutBetsInput;
};

export type BetCreateWithoutUserInput = {
  amount: Scalars['BigInt']['input'];
  block?: InputMaybe<Scalars['Int']['input']>;
  claimed: Scalars['Boolean']['input'];
  claimedAt?: InputMaybe<Scalars['DateTime']['input']>;
  claimedBlock?: InputMaybe<Scalars['Int']['input']>;
  claimedHash?: InputMaybe<Scalars['String']['input']>;
  claimedNetSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  claimedSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  closedAt?: InputMaybe<Scalars['DateTime']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  openedAt?: InputMaybe<Scalars['DateTime']['input']>;
  outcome?: InputMaybe<Scalars['String']['input']>;
  pnl?: InputMaybe<Scalars['BigInt']['input']>;
  position: BetPosition;
  round: RoundCreateNestedOneWithoutBetsInput;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type BetGroupBy = {
  __typename?: 'BetGroupBy';
  _avg?: Maybe<BetAvgAggregate>;
  _count?: Maybe<BetCountAggregate>;
  _max?: Maybe<BetMaxAggregate>;
  _min?: Maybe<BetMinAggregate>;
  _sum?: Maybe<BetSumAggregate>;
  amount: Scalars['BigInt']['output'];
  block?: Maybe<Scalars['Int']['output']>;
  claimed: Scalars['Boolean']['output'];
  claimedAt?: Maybe<Scalars['DateTime']['output']>;
  claimedBlock?: Maybe<Scalars['Int']['output']>;
  claimedHash?: Maybe<Scalars['String']['output']>;
  claimedNetSTETH?: Maybe<Scalars['BigInt']['output']>;
  claimedSTETH?: Maybe<Scalars['BigInt']['output']>;
  closedAt?: Maybe<Scalars['DateTime']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  openedAt: Scalars['DateTime']['output'];
  outcome?: Maybe<Scalars['String']['output']>;
  pnl?: Maybe<Scalars['BigInt']['output']>;
  position: BetPosition;
  roundId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
};

export type BetListRelationFilter = {
  every?: InputMaybe<BetWhereInput>;
  none?: InputMaybe<BetWhereInput>;
  some?: InputMaybe<BetWhereInput>;
};

export type BetMaxAggregate = {
  __typename?: 'BetMaxAggregate';
  amount?: Maybe<Scalars['BigInt']['output']>;
  block?: Maybe<Scalars['Int']['output']>;
  claimed?: Maybe<Scalars['Boolean']['output']>;
  claimedAt?: Maybe<Scalars['DateTime']['output']>;
  claimedBlock?: Maybe<Scalars['Int']['output']>;
  claimedHash?: Maybe<Scalars['String']['output']>;
  claimedNetSTETH?: Maybe<Scalars['BigInt']['output']>;
  claimedSTETH?: Maybe<Scalars['BigInt']['output']>;
  closedAt?: Maybe<Scalars['DateTime']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  openedAt?: Maybe<Scalars['DateTime']['output']>;
  outcome?: Maybe<Scalars['String']['output']>;
  pnl?: Maybe<Scalars['BigInt']['output']>;
  position?: Maybe<BetPosition>;
  roundId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type BetMaxOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  block?: InputMaybe<SortOrder>;
  claimed?: InputMaybe<SortOrder>;
  claimedAt?: InputMaybe<SortOrder>;
  claimedBlock?: InputMaybe<SortOrder>;
  claimedHash?: InputMaybe<SortOrder>;
  claimedNetSTETH?: InputMaybe<SortOrder>;
  claimedSTETH?: InputMaybe<SortOrder>;
  closedAt?: InputMaybe<SortOrder>;
  hash?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  openedAt?: InputMaybe<SortOrder>;
  outcome?: InputMaybe<SortOrder>;
  pnl?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  roundId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BetMinAggregate = {
  __typename?: 'BetMinAggregate';
  amount?: Maybe<Scalars['BigInt']['output']>;
  block?: Maybe<Scalars['Int']['output']>;
  claimed?: Maybe<Scalars['Boolean']['output']>;
  claimedAt?: Maybe<Scalars['DateTime']['output']>;
  claimedBlock?: Maybe<Scalars['Int']['output']>;
  claimedHash?: Maybe<Scalars['String']['output']>;
  claimedNetSTETH?: Maybe<Scalars['BigInt']['output']>;
  claimedSTETH?: Maybe<Scalars['BigInt']['output']>;
  closedAt?: Maybe<Scalars['DateTime']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  openedAt?: Maybe<Scalars['DateTime']['output']>;
  outcome?: Maybe<Scalars['String']['output']>;
  pnl?: Maybe<Scalars['BigInt']['output']>;
  position?: Maybe<BetPosition>;
  roundId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type BetMinOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  block?: InputMaybe<SortOrder>;
  claimed?: InputMaybe<SortOrder>;
  claimedAt?: InputMaybe<SortOrder>;
  claimedBlock?: InputMaybe<SortOrder>;
  claimedHash?: InputMaybe<SortOrder>;
  claimedNetSTETH?: InputMaybe<SortOrder>;
  claimedSTETH?: InputMaybe<SortOrder>;
  closedAt?: InputMaybe<SortOrder>;
  hash?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  openedAt?: InputMaybe<SortOrder>;
  outcome?: InputMaybe<SortOrder>;
  pnl?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  roundId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BetOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type BetOrderByWithAggregationInput = {
  _avg?: InputMaybe<BetAvgOrderByAggregateInput>;
  _count?: InputMaybe<BetCountOrderByAggregateInput>;
  _max?: InputMaybe<BetMaxOrderByAggregateInput>;
  _min?: InputMaybe<BetMinOrderByAggregateInput>;
  _sum?: InputMaybe<BetSumOrderByAggregateInput>;
  amount?: InputMaybe<SortOrder>;
  block?: InputMaybe<SortOrderInput>;
  claimed?: InputMaybe<SortOrder>;
  claimedAt?: InputMaybe<SortOrderInput>;
  claimedBlock?: InputMaybe<SortOrderInput>;
  claimedHash?: InputMaybe<SortOrderInput>;
  claimedNetSTETH?: InputMaybe<SortOrderInput>;
  claimedSTETH?: InputMaybe<SortOrderInput>;
  closedAt?: InputMaybe<SortOrderInput>;
  hash?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  openedAt?: InputMaybe<SortOrder>;
  outcome?: InputMaybe<SortOrderInput>;
  pnl?: InputMaybe<SortOrderInput>;
  position?: InputMaybe<SortOrder>;
  roundId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type BetOrderByWithRelationInput = {
  amount?: InputMaybe<SortOrder>;
  block?: InputMaybe<SortOrderInput>;
  claimed?: InputMaybe<SortOrder>;
  claimedAt?: InputMaybe<SortOrderInput>;
  claimedBlock?: InputMaybe<SortOrderInput>;
  claimedHash?: InputMaybe<SortOrderInput>;
  claimedNetSTETH?: InputMaybe<SortOrderInput>;
  claimedSTETH?: InputMaybe<SortOrderInput>;
  closedAt?: InputMaybe<SortOrderInput>;
  hash?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  openedAt?: InputMaybe<SortOrder>;
  outcome?: InputMaybe<SortOrderInput>;
  pnl?: InputMaybe<SortOrderInput>;
  position?: InputMaybe<SortOrder>;
  round?: InputMaybe<RoundOrderByWithRelationInput>;
  roundId?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum BetPosition {
  Bear = 'BEAR',
  Bull = 'BULL'
}

export enum BetScalarFieldEnum {
  Amount = 'amount',
  Block = 'block',
  Claimed = 'claimed',
  ClaimedAt = 'claimedAt',
  ClaimedBlock = 'claimedBlock',
  ClaimedHash = 'claimedHash',
  ClaimedNetSteth = 'claimedNetSTETH',
  ClaimedSteth = 'claimedSTETH',
  ClosedAt = 'closedAt',
  Hash = 'hash',
  Id = 'id',
  OpenedAt = 'openedAt',
  Outcome = 'outcome',
  Pnl = 'pnl',
  Position = 'position',
  RoundId = 'roundId',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type BetScalarWhereInput = {
  AND?: InputMaybe<Array<BetScalarWhereInput>>;
  NOT?: InputMaybe<Array<BetScalarWhereInput>>;
  OR?: InputMaybe<Array<BetScalarWhereInput>>;
  amount?: InputMaybe<BigIntFilter>;
  block?: InputMaybe<IntNullableFilter>;
  claimed?: InputMaybe<BoolFilter>;
  claimedAt?: InputMaybe<DateTimeNullableFilter>;
  claimedBlock?: InputMaybe<IntNullableFilter>;
  claimedHash?: InputMaybe<StringNullableFilter>;
  claimedNetSTETH?: InputMaybe<BigIntNullableFilter>;
  claimedSTETH?: InputMaybe<BigIntNullableFilter>;
  closedAt?: InputMaybe<DateTimeNullableFilter>;
  hash?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  openedAt?: InputMaybe<DateTimeFilter>;
  outcome?: InputMaybe<StringNullableFilter>;
  pnl?: InputMaybe<BigIntNullableFilter>;
  position?: InputMaybe<EnumBetPositionFilter>;
  roundId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BetScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<BetScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<BetScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<BetScalarWhereWithAggregatesInput>>;
  amount?: InputMaybe<BigIntWithAggregatesFilter>;
  block?: InputMaybe<IntNullableWithAggregatesFilter>;
  claimed?: InputMaybe<BoolWithAggregatesFilter>;
  claimedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  claimedBlock?: InputMaybe<IntNullableWithAggregatesFilter>;
  claimedHash?: InputMaybe<StringNullableWithAggregatesFilter>;
  claimedNetSTETH?: InputMaybe<BigIntNullableWithAggregatesFilter>;
  claimedSTETH?: InputMaybe<BigIntNullableWithAggregatesFilter>;
  closedAt?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  hash?: InputMaybe<StringNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  openedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  outcome?: InputMaybe<StringNullableWithAggregatesFilter>;
  pnl?: InputMaybe<BigIntNullableWithAggregatesFilter>;
  position?: InputMaybe<EnumBetPositionWithAggregatesFilter>;
  roundId?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type BetSumAggregate = {
  __typename?: 'BetSumAggregate';
  amount?: Maybe<Scalars['BigInt']['output']>;
  block?: Maybe<Scalars['Int']['output']>;
  claimedBlock?: Maybe<Scalars['Int']['output']>;
  claimedNetSTETH?: Maybe<Scalars['BigInt']['output']>;
  claimedSTETH?: Maybe<Scalars['BigInt']['output']>;
  pnl?: Maybe<Scalars['BigInt']['output']>;
};

export type BetSumOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  block?: InputMaybe<SortOrder>;
  claimedBlock?: InputMaybe<SortOrder>;
  claimedNetSTETH?: InputMaybe<SortOrder>;
  claimedSTETH?: InputMaybe<SortOrder>;
  pnl?: InputMaybe<SortOrder>;
};

export type BetUpdateInput = {
  amount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  block?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  claimed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  claimedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  claimedBlock?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  claimedHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claimedNetSTETH?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  claimedSTETH?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  closedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  hash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  openedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  outcome?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pnl?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  position?: InputMaybe<EnumBetPositionFieldUpdateOperationsInput>;
  round?: InputMaybe<RoundUpdateOneRequiredWithoutBetsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBetsNestedInput>;
};

export type BetUpdateManyMutationInput = {
  amount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  block?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  claimed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  claimedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  claimedBlock?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  claimedHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claimedNetSTETH?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  claimedSTETH?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  closedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  hash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  openedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  outcome?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pnl?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  position?: InputMaybe<EnumBetPositionFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BetUpdateManyWithWhereWithoutRoundInput = {
  data: BetUpdateManyMutationInput;
  where: BetScalarWhereInput;
};

export type BetUpdateManyWithWhereWithoutUserInput = {
  data: BetUpdateManyMutationInput;
  where: BetScalarWhereInput;
};

export type BetUpdateManyWithoutRoundNestedInput = {
  connect?: InputMaybe<Array<BetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BetCreateOrConnectWithoutRoundInput>>;
  create?: InputMaybe<Array<BetCreateWithoutRoundInput>>;
  createMany?: InputMaybe<BetCreateManyRoundInputEnvelope>;
  delete?: InputMaybe<Array<BetWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BetScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BetWhereUniqueInput>>;
  set?: InputMaybe<Array<BetWhereUniqueInput>>;
  update?: InputMaybe<Array<BetUpdateWithWhereUniqueWithoutRoundInput>>;
  updateMany?: InputMaybe<Array<BetUpdateManyWithWhereWithoutRoundInput>>;
  upsert?: InputMaybe<Array<BetUpsertWithWhereUniqueWithoutRoundInput>>;
};

export type BetUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<BetWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<BetCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<BetCreateWithoutUserInput>>;
  createMany?: InputMaybe<BetCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<BetWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<BetScalarWhereInput>>;
  disconnect?: InputMaybe<Array<BetWhereUniqueInput>>;
  set?: InputMaybe<Array<BetWhereUniqueInput>>;
  update?: InputMaybe<Array<BetUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<BetUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<BetUpsertWithWhereUniqueWithoutUserInput>>;
};

export type BetUpdateWithWhereUniqueWithoutRoundInput = {
  data: BetUpdateWithoutRoundInput;
  where: BetWhereUniqueInput;
};

export type BetUpdateWithWhereUniqueWithoutUserInput = {
  data: BetUpdateWithoutUserInput;
  where: BetWhereUniqueInput;
};

export type BetUpdateWithoutRoundInput = {
  amount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  block?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  claimed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  claimedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  claimedBlock?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  claimedHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claimedNetSTETH?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  claimedSTETH?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  closedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  hash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  openedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  outcome?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pnl?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  position?: InputMaybe<EnumBetPositionFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutBetsNestedInput>;
};

export type BetUpdateWithoutUserInput = {
  amount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  block?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  claimed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  claimedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  claimedBlock?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  claimedHash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  claimedNetSTETH?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  claimedSTETH?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  closedAt?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  hash?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  openedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  outcome?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  pnl?: InputMaybe<NullableBigIntFieldUpdateOperationsInput>;
  position?: InputMaybe<EnumBetPositionFieldUpdateOperationsInput>;
  round?: InputMaybe<RoundUpdateOneRequiredWithoutBetsNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type BetUpsertWithWhereUniqueWithoutRoundInput = {
  create: BetCreateWithoutRoundInput;
  update: BetUpdateWithoutRoundInput;
  where: BetWhereUniqueInput;
};

export type BetUpsertWithWhereUniqueWithoutUserInput = {
  create: BetCreateWithoutUserInput;
  update: BetUpdateWithoutUserInput;
  where: BetWhereUniqueInput;
};

export type BetWhereInput = {
  AND?: InputMaybe<Array<BetWhereInput>>;
  NOT?: InputMaybe<Array<BetWhereInput>>;
  OR?: InputMaybe<Array<BetWhereInput>>;
  amount?: InputMaybe<BigIntFilter>;
  block?: InputMaybe<IntNullableFilter>;
  claimed?: InputMaybe<BoolFilter>;
  claimedAt?: InputMaybe<DateTimeNullableFilter>;
  claimedBlock?: InputMaybe<IntNullableFilter>;
  claimedHash?: InputMaybe<StringNullableFilter>;
  claimedNetSTETH?: InputMaybe<BigIntNullableFilter>;
  claimedSTETH?: InputMaybe<BigIntNullableFilter>;
  closedAt?: InputMaybe<DateTimeNullableFilter>;
  hash?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  openedAt?: InputMaybe<DateTimeFilter>;
  outcome?: InputMaybe<StringNullableFilter>;
  pnl?: InputMaybe<BigIntNullableFilter>;
  position?: InputMaybe<EnumBetPositionFilter>;
  round?: InputMaybe<RoundRelationFilter>;
  roundId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BetWhereUniqueInput = {
  AND?: InputMaybe<Array<BetWhereInput>>;
  NOT?: InputMaybe<Array<BetWhereInput>>;
  OR?: InputMaybe<Array<BetWhereInput>>;
  amount?: InputMaybe<BigIntFilter>;
  block?: InputMaybe<Scalars['Int']['input']>;
  claimed?: InputMaybe<BoolFilter>;
  claimedAt?: InputMaybe<DateTimeNullableFilter>;
  claimedBlock?: InputMaybe<IntNullableFilter>;
  claimedHash?: InputMaybe<StringNullableFilter>;
  claimedNetSTETH?: InputMaybe<BigIntNullableFilter>;
  claimedSTETH?: InputMaybe<BigIntNullableFilter>;
  closedAt?: InputMaybe<DateTimeNullableFilter>;
  hash?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  openedAt?: InputMaybe<DateTimeFilter>;
  outcome?: InputMaybe<StringNullableFilter>;
  pnl?: InputMaybe<BigIntNullableFilter>;
  position?: InputMaybe<EnumBetPositionFilter>;
  round?: InputMaybe<RoundRelationFilter>;
  roundId?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type BigIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['BigInt']['input']>;
  divide?: InputMaybe<Scalars['BigInt']['input']>;
  increment?: InputMaybe<Scalars['BigInt']['input']>;
  multiply?: InputMaybe<Scalars['BigInt']['input']>;
  set?: InputMaybe<Scalars['BigInt']['input']>;
};

export type BigIntFilter = {
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type BigIntNullableFilter = {
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type BigIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBigIntNullableFilter>;
  _min?: InputMaybe<NestedBigIntNullableFilter>;
  _sum?: InputMaybe<NestedBigIntNullableFilter>;
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type BigIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBigIntFilter>;
  _min?: InputMaybe<NestedBigIntFilter>;
  _sum?: InputMaybe<NestedBigIntFilter>;
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type EnumActivityTypeFieldUpdateOperationsInput = {
  set?: InputMaybe<ActivityType>;
};

export type EnumActivityTypeFilter = {
  equals?: InputMaybe<ActivityType>;
  in?: InputMaybe<Array<ActivityType>>;
  not?: InputMaybe<NestedEnumActivityTypeFilter>;
  notIn?: InputMaybe<Array<ActivityType>>;
};

export type EnumActivityTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumActivityTypeFilter>;
  _min?: InputMaybe<NestedEnumActivityTypeFilter>;
  equals?: InputMaybe<ActivityType>;
  in?: InputMaybe<Array<ActivityType>>;
  not?: InputMaybe<NestedEnumActivityTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ActivityType>>;
};

export type EnumBetPositionFieldUpdateOperationsInput = {
  set?: InputMaybe<BetPosition>;
};

export type EnumBetPositionFilter = {
  equals?: InputMaybe<BetPosition>;
  in?: InputMaybe<Array<BetPosition>>;
  not?: InputMaybe<NestedEnumBetPositionFilter>;
  notIn?: InputMaybe<Array<BetPosition>>;
};

export type EnumBetPositionWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumBetPositionFilter>;
  _min?: InputMaybe<NestedEnumBetPositionFilter>;
  equals?: InputMaybe<BetPosition>;
  in?: InputMaybe<Array<BetPosition>>;
  not?: InputMaybe<NestedEnumBetPositionWithAggregatesFilter>;
  notIn?: InputMaybe<Array<BetPosition>>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyAccount: AffectedRowsOutput;
  createManyActivityLog: AffectedRowsOutput;
  createManyBet: AffectedRowsOutput;
  createManyReferral: AffectedRowsOutput;
  createManyReward: AffectedRowsOutput;
  createManyRound: AffectedRowsOutput;
  createManySession: AffectedRowsOutput;
  createManyShare: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createManyUserStats: AffectedRowsOutput;
  createManyVerificationToken: AffectedRowsOutput;
  createOneAccount: Account;
  createOneActivityLog: ActivityLog;
  createOneBet: Bet;
  createOneReferral: Referral;
  createOneReward: Reward;
  createOneRound: Round;
  createOneSession: Session;
  createOneShare: Share;
  createOneUser: User;
  createOneUserStats: UserStats;
  createOneVerificationToken: VerificationToken;
  deleteManyAccount: AffectedRowsOutput;
  deleteManyActivityLog: AffectedRowsOutput;
  deleteManyBet: AffectedRowsOutput;
  deleteManyReferral: AffectedRowsOutput;
  deleteManyReward: AffectedRowsOutput;
  deleteManyRound: AffectedRowsOutput;
  deleteManySession: AffectedRowsOutput;
  deleteManyShare: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteManyUserStats: AffectedRowsOutput;
  deleteManyVerificationToken: AffectedRowsOutput;
  deleteOneAccount?: Maybe<Account>;
  deleteOneActivityLog?: Maybe<ActivityLog>;
  deleteOneBet?: Maybe<Bet>;
  deleteOneReferral?: Maybe<Referral>;
  deleteOneReward?: Maybe<Reward>;
  deleteOneRound?: Maybe<Round>;
  deleteOneSession?: Maybe<Session>;
  deleteOneShare?: Maybe<Share>;
  deleteOneUser?: Maybe<User>;
  deleteOneUserStats?: Maybe<UserStats>;
  deleteOneVerificationToken?: Maybe<VerificationToken>;
  updateManyAccount: AffectedRowsOutput;
  updateManyActivityLog: AffectedRowsOutput;
  updateManyBet: AffectedRowsOutput;
  updateManyReferral: AffectedRowsOutput;
  updateManyReward: AffectedRowsOutput;
  updateManyRound: AffectedRowsOutput;
  updateManySession: AffectedRowsOutput;
  updateManyShare: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateManyUserStats: AffectedRowsOutput;
  updateManyVerificationToken: AffectedRowsOutput;
  updateOneAccount?: Maybe<Account>;
  updateOneActivityLog?: Maybe<ActivityLog>;
  updateOneBet?: Maybe<Bet>;
  updateOneReferral?: Maybe<Referral>;
  updateOneReward?: Maybe<Reward>;
  updateOneRound?: Maybe<Round>;
  updateOneSession?: Maybe<Session>;
  updateOneShare?: Maybe<Share>;
  updateOneUser?: Maybe<User>;
  updateOneUserStats?: Maybe<UserStats>;
  updateOneVerificationToken?: Maybe<VerificationToken>;
  upsertOneAccount: Account;
  upsertOneActivityLog: ActivityLog;
  upsertOneBet: Bet;
  upsertOneReferral: Referral;
  upsertOneReward: Reward;
  upsertOneRound: Round;
  upsertOneSession: Session;
  upsertOneShare: Share;
  upsertOneUser: User;
  upsertOneUserStats: UserStats;
  upsertOneVerificationToken: VerificationToken;
};


export type MutationCreateManyAccountArgs = {
  data: Array<AccountCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyActivityLogArgs = {
  data: Array<ActivityLogCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyBetArgs = {
  data: Array<BetCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyReferralArgs = {
  data: Array<ReferralCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyRewardArgs = {
  data: Array<RewardCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyRoundArgs = {
  data: Array<RoundCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManySessionArgs = {
  data: Array<SessionCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyShareArgs = {
  data: Array<ShareCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserArgs = {
  data: Array<UserCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyUserStatsArgs = {
  data: Array<UserStatsCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateManyVerificationTokenArgs = {
  data: Array<VerificationTokenCreateManyInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateOneAccountArgs = {
  data: AccountCreateInput;
};


export type MutationCreateOneActivityLogArgs = {
  data: ActivityLogCreateInput;
};


export type MutationCreateOneBetArgs = {
  data: BetCreateInput;
};


export type MutationCreateOneReferralArgs = {
  data: ReferralCreateInput;
};


export type MutationCreateOneRewardArgs = {
  data: RewardCreateInput;
};


export type MutationCreateOneRoundArgs = {
  data: RoundCreateInput;
};


export type MutationCreateOneSessionArgs = {
  data: SessionCreateInput;
};


export type MutationCreateOneShareArgs = {
  data: ShareCreateInput;
};


export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateOneUserStatsArgs = {
  data: UserStatsCreateInput;
};


export type MutationCreateOneVerificationTokenArgs = {
  data: VerificationTokenCreateInput;
};


export type MutationDeleteManyAccountArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationDeleteManyActivityLogArgs = {
  where?: InputMaybe<ActivityLogWhereInput>;
};


export type MutationDeleteManyBetArgs = {
  where?: InputMaybe<BetWhereInput>;
};


export type MutationDeleteManyReferralArgs = {
  where?: InputMaybe<ReferralWhereInput>;
};


export type MutationDeleteManyRewardArgs = {
  where?: InputMaybe<RewardWhereInput>;
};


export type MutationDeleteManyRoundArgs = {
  where?: InputMaybe<RoundWhereInput>;
};


export type MutationDeleteManySessionArgs = {
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationDeleteManyShareArgs = {
  where?: InputMaybe<ShareWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};


export type MutationDeleteManyUserStatsArgs = {
  where?: InputMaybe<UserStatsWhereInput>;
};


export type MutationDeleteManyVerificationTokenArgs = {
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationDeleteOneAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type MutationDeleteOneActivityLogArgs = {
  where: ActivityLogWhereUniqueInput;
};


export type MutationDeleteOneBetArgs = {
  where: BetWhereUniqueInput;
};


export type MutationDeleteOneReferralArgs = {
  where: ReferralWhereUniqueInput;
};


export type MutationDeleteOneRewardArgs = {
  where: RewardWhereUniqueInput;
};


export type MutationDeleteOneRoundArgs = {
  where: RoundWhereUniqueInput;
};


export type MutationDeleteOneSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type MutationDeleteOneShareArgs = {
  where: ShareWhereUniqueInput;
};


export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteOneUserStatsArgs = {
  where: UserStatsWhereUniqueInput;
};


export type MutationDeleteOneVerificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
};


export type MutationUpdateManyAccountArgs = {
  data: AccountUpdateManyMutationInput;
  where?: InputMaybe<AccountWhereInput>;
};


export type MutationUpdateManyActivityLogArgs = {
  data: ActivityLogUpdateManyMutationInput;
  where?: InputMaybe<ActivityLogWhereInput>;
};


export type MutationUpdateManyBetArgs = {
  data: BetUpdateManyMutationInput;
  where?: InputMaybe<BetWhereInput>;
};


export type MutationUpdateManyReferralArgs = {
  data: ReferralUpdateManyMutationInput;
  where?: InputMaybe<ReferralWhereInput>;
};


export type MutationUpdateManyRewardArgs = {
  data: RewardUpdateManyMutationInput;
  where?: InputMaybe<RewardWhereInput>;
};


export type MutationUpdateManyRoundArgs = {
  data: RoundUpdateManyMutationInput;
  where?: InputMaybe<RoundWhereInput>;
};


export type MutationUpdateManySessionArgs = {
  data: SessionUpdateManyMutationInput;
  where?: InputMaybe<SessionWhereInput>;
};


export type MutationUpdateManyShareArgs = {
  data: ShareUpdateManyMutationInput;
  where?: InputMaybe<ShareWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};


export type MutationUpdateManyUserStatsArgs = {
  data: UserStatsUpdateManyMutationInput;
  where?: InputMaybe<UserStatsWhereInput>;
};


export type MutationUpdateManyVerificationTokenArgs = {
  data: VerificationTokenUpdateManyMutationInput;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type MutationUpdateOneAccountArgs = {
  data: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpdateOneActivityLogArgs = {
  data: ActivityLogUpdateInput;
  where: ActivityLogWhereUniqueInput;
};


export type MutationUpdateOneBetArgs = {
  data: BetUpdateInput;
  where: BetWhereUniqueInput;
};


export type MutationUpdateOneReferralArgs = {
  data: ReferralUpdateInput;
  where: ReferralWhereUniqueInput;
};


export type MutationUpdateOneRewardArgs = {
  data: RewardUpdateInput;
  where: RewardWhereUniqueInput;
};


export type MutationUpdateOneRoundArgs = {
  data: RoundUpdateInput;
  where: RoundWhereUniqueInput;
};


export type MutationUpdateOneSessionArgs = {
  data: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpdateOneShareArgs = {
  data: ShareUpdateInput;
  where: ShareWhereUniqueInput;
};


export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateOneUserStatsArgs = {
  data: UserStatsUpdateInput;
  where: UserStatsWhereUniqueInput;
};


export type MutationUpdateOneVerificationTokenArgs = {
  data: VerificationTokenUpdateInput;
  where: VerificationTokenWhereUniqueInput;
};


export type MutationUpsertOneAccountArgs = {
  create: AccountCreateInput;
  update: AccountUpdateInput;
  where: AccountWhereUniqueInput;
};


export type MutationUpsertOneActivityLogArgs = {
  create: ActivityLogCreateInput;
  update: ActivityLogUpdateInput;
  where: ActivityLogWhereUniqueInput;
};


export type MutationUpsertOneBetArgs = {
  create: BetCreateInput;
  update: BetUpdateInput;
  where: BetWhereUniqueInput;
};


export type MutationUpsertOneReferralArgs = {
  create: ReferralCreateInput;
  update: ReferralUpdateInput;
  where: ReferralWhereUniqueInput;
};


export type MutationUpsertOneRewardArgs = {
  create: RewardCreateInput;
  update: RewardUpdateInput;
  where: RewardWhereUniqueInput;
};


export type MutationUpsertOneRoundArgs = {
  create: RoundCreateInput;
  update: RoundUpdateInput;
  where: RoundWhereUniqueInput;
};


export type MutationUpsertOneSessionArgs = {
  create: SessionCreateInput;
  update: SessionUpdateInput;
  where: SessionWhereUniqueInput;
};


export type MutationUpsertOneShareArgs = {
  create: ShareCreateInput;
  update: ShareUpdateInput;
  where: ShareWhereUniqueInput;
};


export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertOneUserStatsArgs = {
  create: UserStatsCreateInput;
  update: UserStatsUpdateInput;
  where: UserStatsWhereUniqueInput;
};


export type MutationUpsertOneVerificationTokenArgs = {
  create: VerificationTokenCreateInput;
  update: VerificationTokenUpdateInput;
  where: VerificationTokenWhereUniqueInput;
};

export type NestedBigIntFilter = {
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type NestedBigIntNullableFilter = {
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type NestedBigIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedBigIntNullableFilter>;
  _min?: InputMaybe<NestedBigIntNullableFilter>;
  _sum?: InputMaybe<NestedBigIntNullableFilter>;
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type NestedBigIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBigIntFilter>;
  _min?: InputMaybe<NestedBigIntFilter>;
  _sum?: InputMaybe<NestedBigIntFilter>;
  equals?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  not?: InputMaybe<NestedBigIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type NestedEnumActivityTypeFilter = {
  equals?: InputMaybe<ActivityType>;
  in?: InputMaybe<Array<ActivityType>>;
  not?: InputMaybe<NestedEnumActivityTypeFilter>;
  notIn?: InputMaybe<Array<ActivityType>>;
};

export type NestedEnumActivityTypeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumActivityTypeFilter>;
  _min?: InputMaybe<NestedEnumActivityTypeFilter>;
  equals?: InputMaybe<ActivityType>;
  in?: InputMaybe<Array<ActivityType>>;
  not?: InputMaybe<NestedEnumActivityTypeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<ActivityType>>;
};

export type NestedEnumBetPositionFilter = {
  equals?: InputMaybe<BetPosition>;
  in?: InputMaybe<Array<BetPosition>>;
  not?: InputMaybe<NestedEnumBetPositionFilter>;
  notIn?: InputMaybe<Array<BetPosition>>;
};

export type NestedEnumBetPositionWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumBetPositionFilter>;
  _min?: InputMaybe<NestedEnumBetPositionFilter>;
  equals?: InputMaybe<BetPosition>;
  in?: InputMaybe<Array<BetPosition>>;
  not?: InputMaybe<NestedEnumBetPositionWithAggregatesFilter>;
  notIn?: InputMaybe<Array<BetPosition>>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type NullableBigIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['BigInt']['input']>;
  divide?: InputMaybe<Scalars['BigInt']['input']>;
  increment?: InputMaybe<Scalars['BigInt']['input']>;
  multiply?: InputMaybe<Scalars['BigInt']['input']>;
  set?: InputMaybe<Scalars['BigInt']['input']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']['input']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']['input']>;
  divide?: InputMaybe<Scalars['Int']['input']>;
  increment?: InputMaybe<Scalars['Int']['input']>;
  multiply?: InputMaybe<Scalars['Int']['input']>;
  set?: InputMaybe<Scalars['Int']['input']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export enum NullsOrder {
  First = 'first',
  Last = 'last'
}

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accounts: Array<Account>;
  activityLog?: Maybe<ActivityLog>;
  activityLogs: Array<ActivityLog>;
  aggregateAccount: AggregateAccount;
  aggregateActivityLog: AggregateActivityLog;
  aggregateBet: AggregateBet;
  aggregateReferral: AggregateReferral;
  aggregateReward: AggregateReward;
  aggregateRound: AggregateRound;
  aggregateSession: AggregateSession;
  aggregateShare: AggregateShare;
  aggregateUser: AggregateUser;
  aggregateUserStats: AggregateUserStats;
  aggregateVerificationToken: AggregateVerificationToken;
  bet?: Maybe<Bet>;
  bets: Array<Bet>;
  findFirstAccount?: Maybe<Account>;
  findFirstAccountOrThrow?: Maybe<Account>;
  findFirstActivityLog?: Maybe<ActivityLog>;
  findFirstActivityLogOrThrow?: Maybe<ActivityLog>;
  findFirstBet?: Maybe<Bet>;
  findFirstBetOrThrow?: Maybe<Bet>;
  findFirstReferral?: Maybe<Referral>;
  findFirstReferralOrThrow?: Maybe<Referral>;
  findFirstReward?: Maybe<Reward>;
  findFirstRewardOrThrow?: Maybe<Reward>;
  findFirstRound?: Maybe<Round>;
  findFirstRoundOrThrow?: Maybe<Round>;
  findFirstSession?: Maybe<Session>;
  findFirstSessionOrThrow?: Maybe<Session>;
  findFirstShare?: Maybe<Share>;
  findFirstShareOrThrow?: Maybe<Share>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  findFirstUserStats?: Maybe<UserStats>;
  findFirstUserStatsOrThrow?: Maybe<UserStats>;
  findFirstVerificationToken?: Maybe<VerificationToken>;
  findFirstVerificationTokenOrThrow?: Maybe<VerificationToken>;
  findManyUserStats: Array<UserStats>;
  findUniqueUserStats?: Maybe<UserStats>;
  findUniqueUserStatsOrThrow?: Maybe<UserStats>;
  getAccount?: Maybe<Account>;
  getActivityLog?: Maybe<ActivityLog>;
  getBet?: Maybe<Bet>;
  getReferral?: Maybe<Referral>;
  getReward?: Maybe<Reward>;
  getRound?: Maybe<Round>;
  getSession?: Maybe<Session>;
  getShare?: Maybe<Share>;
  getUser?: Maybe<User>;
  getVerificationToken?: Maybe<VerificationToken>;
  groupByAccount: Array<AccountGroupBy>;
  groupByActivityLog: Array<ActivityLogGroupBy>;
  groupByBet: Array<BetGroupBy>;
  groupByReferral: Array<ReferralGroupBy>;
  groupByReward: Array<RewardGroupBy>;
  groupByRound: Array<RoundGroupBy>;
  groupBySession: Array<SessionGroupBy>;
  groupByShare: Array<ShareGroupBy>;
  groupByUser: Array<UserGroupBy>;
  groupByUserStats: Array<UserStatsGroupBy>;
  groupByVerificationToken: Array<VerificationTokenGroupBy>;
  referral?: Maybe<Referral>;
  referrals: Array<Referral>;
  reward?: Maybe<Reward>;
  rewards: Array<Reward>;
  round?: Maybe<Round>;
  rounds: Array<Round>;
  session?: Maybe<Session>;
  sessions: Array<Session>;
  share?: Maybe<Share>;
  shares: Array<Share>;
  user?: Maybe<User>;
  users: Array<User>;
  verificationToken?: Maybe<VerificationToken>;
  verificationTokens: Array<VerificationToken>;
};


export type QueryAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryActivityLogArgs = {
  where: ActivityLogWhereUniqueInput;
};


export type QueryActivityLogsArgs = {
  cursor?: InputMaybe<ActivityLogWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActivityLogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActivityLogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActivityLogWhereInput>;
};


export type QueryAggregateAccountArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryAggregateActivityLogArgs = {
  cursor?: InputMaybe<ActivityLogWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ActivityLogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActivityLogWhereInput>;
};


export type QueryAggregateBetArgs = {
  cursor?: InputMaybe<BetWhereUniqueInput>;
  orderBy?: InputMaybe<Array<BetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BetWhereInput>;
};


export type QueryAggregateReferralArgs = {
  cursor?: InputMaybe<ReferralWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ReferralOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReferralWhereInput>;
};


export type QueryAggregateRewardArgs = {
  cursor?: InputMaybe<RewardWhereUniqueInput>;
  orderBy?: InputMaybe<Array<RewardOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RewardWhereInput>;
};


export type QueryAggregateRoundArgs = {
  cursor?: InputMaybe<RoundWhereUniqueInput>;
  orderBy?: InputMaybe<Array<RoundOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoundWhereInput>;
};


export type QueryAggregateSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryAggregateShareArgs = {
  cursor?: InputMaybe<ShareWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ShareOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ShareWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryAggregateUserStatsArgs = {
  cursor?: InputMaybe<UserStatsWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserStatsWhereInput>;
};


export type QueryAggregateVerificationTokenArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryBetArgs = {
  where: BetWhereUniqueInput;
};


export type QueryBetsArgs = {
  cursor?: InputMaybe<BetWhereUniqueInput>;
  distinct?: InputMaybe<Array<BetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BetWhereInput>;
};


export type QueryFindFirstAccountArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryFindFirstAccountOrThrowArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryFindFirstActivityLogArgs = {
  cursor?: InputMaybe<ActivityLogWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActivityLogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActivityLogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActivityLogWhereInput>;
};


export type QueryFindFirstActivityLogOrThrowArgs = {
  cursor?: InputMaybe<ActivityLogWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActivityLogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActivityLogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActivityLogWhereInput>;
};


export type QueryFindFirstBetArgs = {
  cursor?: InputMaybe<BetWhereUniqueInput>;
  distinct?: InputMaybe<Array<BetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BetWhereInput>;
};


export type QueryFindFirstBetOrThrowArgs = {
  cursor?: InputMaybe<BetWhereUniqueInput>;
  distinct?: InputMaybe<Array<BetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BetWhereInput>;
};


export type QueryFindFirstReferralArgs = {
  cursor?: InputMaybe<ReferralWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReferralScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReferralOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReferralWhereInput>;
};


export type QueryFindFirstReferralOrThrowArgs = {
  cursor?: InputMaybe<ReferralWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReferralScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReferralOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReferralWhereInput>;
};


export type QueryFindFirstRewardArgs = {
  cursor?: InputMaybe<RewardWhereUniqueInput>;
  distinct?: InputMaybe<Array<RewardScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RewardOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RewardWhereInput>;
};


export type QueryFindFirstRewardOrThrowArgs = {
  cursor?: InputMaybe<RewardWhereUniqueInput>;
  distinct?: InputMaybe<Array<RewardScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RewardOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RewardWhereInput>;
};


export type QueryFindFirstRoundArgs = {
  cursor?: InputMaybe<RoundWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoundScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoundOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoundWhereInput>;
};


export type QueryFindFirstRoundOrThrowArgs = {
  cursor?: InputMaybe<RoundWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoundScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoundOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoundWhereInput>;
};


export type QueryFindFirstSessionArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryFindFirstSessionOrThrowArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryFindFirstShareArgs = {
  cursor?: InputMaybe<ShareWhereUniqueInput>;
  distinct?: InputMaybe<Array<ShareScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ShareOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ShareWhereInput>;
};


export type QueryFindFirstShareOrThrowArgs = {
  cursor?: InputMaybe<ShareWhereUniqueInput>;
  distinct?: InputMaybe<Array<ShareScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ShareOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ShareWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryFindFirstUserStatsArgs = {
  cursor?: InputMaybe<UserStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserStatsWhereInput>;
};


export type QueryFindFirstUserStatsOrThrowArgs = {
  cursor?: InputMaybe<UserStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserStatsWhereInput>;
};


export type QueryFindFirstVerificationTokenArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryFindFirstVerificationTokenOrThrowArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryFindManyUserStatsArgs = {
  cursor?: InputMaybe<UserStatsWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserStatsScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserStatsOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserStatsWhereInput>;
};


export type QueryFindUniqueUserStatsArgs = {
  where: UserStatsWhereUniqueInput;
};


export type QueryFindUniqueUserStatsOrThrowArgs = {
  where: UserStatsWhereUniqueInput;
};


export type QueryGetAccountArgs = {
  where: AccountWhereUniqueInput;
};


export type QueryGetActivityLogArgs = {
  where: ActivityLogWhereUniqueInput;
};


export type QueryGetBetArgs = {
  where: BetWhereUniqueInput;
};


export type QueryGetReferralArgs = {
  where: ReferralWhereUniqueInput;
};


export type QueryGetRewardArgs = {
  where: RewardWhereUniqueInput;
};


export type QueryGetRoundArgs = {
  where: RoundWhereUniqueInput;
};


export type QueryGetSessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QueryGetShareArgs = {
  where: ShareWhereUniqueInput;
};


export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryGetVerificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
};


export type QueryGroupByAccountArgs = {
  by: Array<AccountScalarFieldEnum>;
  having?: InputMaybe<AccountScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<AccountOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type QueryGroupByActivityLogArgs = {
  by: Array<ActivityLogScalarFieldEnum>;
  having?: InputMaybe<ActivityLogScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ActivityLogOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActivityLogWhereInput>;
};


export type QueryGroupByBetArgs = {
  by: Array<BetScalarFieldEnum>;
  having?: InputMaybe<BetScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<BetOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BetWhereInput>;
};


export type QueryGroupByReferralArgs = {
  by: Array<ReferralScalarFieldEnum>;
  having?: InputMaybe<ReferralScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ReferralOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReferralWhereInput>;
};


export type QueryGroupByRewardArgs = {
  by: Array<RewardScalarFieldEnum>;
  having?: InputMaybe<RewardScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<RewardOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RewardWhereInput>;
};


export type QueryGroupByRoundArgs = {
  by: Array<RoundScalarFieldEnum>;
  having?: InputMaybe<RoundScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<RoundOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoundWhereInput>;
};


export type QueryGroupBySessionArgs = {
  by: Array<SessionScalarFieldEnum>;
  having?: InputMaybe<SessionScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<SessionOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryGroupByShareArgs = {
  by: Array<ShareScalarFieldEnum>;
  having?: InputMaybe<ShareScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ShareOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ShareWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryGroupByUserStatsArgs = {
  by: Array<UserStatsScalarFieldEnum>;
  having?: InputMaybe<UserStatsScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserStatsOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserStatsWhereInput>;
};


export type QueryGroupByVerificationTokenArgs = {
  by: Array<VerificationTokenScalarFieldEnum>;
  having?: InputMaybe<VerificationTokenScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};


export type QueryReferralArgs = {
  where: ReferralWhereUniqueInput;
};


export type QueryReferralsArgs = {
  cursor?: InputMaybe<ReferralWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReferralScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReferralOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReferralWhereInput>;
};


export type QueryRewardArgs = {
  where: RewardWhereUniqueInput;
};


export type QueryRewardsArgs = {
  cursor?: InputMaybe<RewardWhereUniqueInput>;
  distinct?: InputMaybe<Array<RewardScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RewardOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RewardWhereInput>;
};


export type QueryRoundArgs = {
  where: RoundWhereUniqueInput;
};


export type QueryRoundsArgs = {
  cursor?: InputMaybe<RoundWhereUniqueInput>;
  distinct?: InputMaybe<Array<RoundScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RoundOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RoundWhereInput>;
};


export type QuerySessionArgs = {
  where: SessionWhereUniqueInput;
};


export type QuerySessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type QueryShareArgs = {
  where: ShareWhereUniqueInput;
};


export type QuerySharesArgs = {
  cursor?: InputMaybe<ShareWhereUniqueInput>;
  distinct?: InputMaybe<Array<ShareScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ShareOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ShareWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<UserWhereInput>;
};


export type QueryVerificationTokenArgs = {
  where: VerificationTokenWhereUniqueInput;
};


export type QueryVerificationTokensArgs = {
  cursor?: InputMaybe<VerificationTokenWhereUniqueInput>;
  distinct?: InputMaybe<Array<VerificationTokenScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<VerificationTokenOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<VerificationTokenWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Referral = {
  __typename?: 'Referral';
  id: Scalars['String']['output'];
  referralCode: Scalars['String']['output'];
  used: Scalars['Boolean']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type ReferralCountAggregate = {
  __typename?: 'ReferralCountAggregate';
  _all: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  referralCode: Scalars['Int']['output'];
  used: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type ReferralCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  referralCode?: InputMaybe<SortOrder>;
  used?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ReferralCreateInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  referralCode: Scalars['String']['input'];
  used: Scalars['Boolean']['input'];
  user: UserCreateNestedOneWithoutReferralsInput;
};

export type ReferralCreateManyInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  referralCode: Scalars['String']['input'];
  used: Scalars['Boolean']['input'];
  userId: Scalars['String']['input'];
};

export type ReferralCreateManyUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  referralCode: Scalars['String']['input'];
  used: Scalars['Boolean']['input'];
};

export type ReferralCreateManyUserInputEnvelope = {
  data: Array<ReferralCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ReferralCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ReferralWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReferralCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReferralCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReferralCreateManyUserInputEnvelope>;
};

export type ReferralCreateOrConnectWithoutUserInput = {
  create: ReferralCreateWithoutUserInput;
  where: ReferralWhereUniqueInput;
};

export type ReferralCreateWithoutUserInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  referralCode: Scalars['String']['input'];
  used: Scalars['Boolean']['input'];
};

export type ReferralGroupBy = {
  __typename?: 'ReferralGroupBy';
  _count?: Maybe<ReferralCountAggregate>;
  _max?: Maybe<ReferralMaxAggregate>;
  _min?: Maybe<ReferralMinAggregate>;
  id: Scalars['String']['output'];
  referralCode: Scalars['String']['output'];
  used: Scalars['Boolean']['output'];
  userId: Scalars['String']['output'];
};

export type ReferralListRelationFilter = {
  every?: InputMaybe<ReferralWhereInput>;
  none?: InputMaybe<ReferralWhereInput>;
  some?: InputMaybe<ReferralWhereInput>;
};

export type ReferralMaxAggregate = {
  __typename?: 'ReferralMaxAggregate';
  id?: Maybe<Scalars['String']['output']>;
  referralCode?: Maybe<Scalars['String']['output']>;
  used?: Maybe<Scalars['Boolean']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ReferralMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  referralCode?: InputMaybe<SortOrder>;
  used?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ReferralMinAggregate = {
  __typename?: 'ReferralMinAggregate';
  id?: Maybe<Scalars['String']['output']>;
  referralCode?: Maybe<Scalars['String']['output']>;
  used?: Maybe<Scalars['Boolean']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ReferralMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  referralCode?: InputMaybe<SortOrder>;
  used?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ReferralOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ReferralOrderByWithAggregationInput = {
  _count?: InputMaybe<ReferralCountOrderByAggregateInput>;
  _max?: InputMaybe<ReferralMaxOrderByAggregateInput>;
  _min?: InputMaybe<ReferralMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  referralCode?: InputMaybe<SortOrder>;
  used?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ReferralOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  referralCode?: InputMaybe<SortOrder>;
  used?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum ReferralScalarFieldEnum {
  Id = 'id',
  ReferralCode = 'referralCode',
  Used = 'used',
  UserId = 'userId'
}

export type ReferralScalarWhereInput = {
  AND?: InputMaybe<Array<ReferralScalarWhereInput>>;
  NOT?: InputMaybe<Array<ReferralScalarWhereInput>>;
  OR?: InputMaybe<Array<ReferralScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  referralCode?: InputMaybe<StringFilter>;
  used?: InputMaybe<BoolFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ReferralScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ReferralScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ReferralScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ReferralScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  referralCode?: InputMaybe<StringWithAggregatesFilter>;
  used?: InputMaybe<BoolWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type ReferralUpdateInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  referralCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  used?: InputMaybe<BoolFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutReferralsNestedInput>;
};

export type ReferralUpdateManyMutationInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  referralCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  used?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type ReferralUpdateManyWithWhereWithoutUserInput = {
  data: ReferralUpdateManyMutationInput;
  where: ReferralScalarWhereInput;
};

export type ReferralUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ReferralWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ReferralCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ReferralCreateWithoutUserInput>>;
  createMany?: InputMaybe<ReferralCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ReferralWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ReferralScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ReferralWhereUniqueInput>>;
  set?: InputMaybe<Array<ReferralWhereUniqueInput>>;
  update?: InputMaybe<Array<ReferralUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ReferralUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ReferralUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ReferralUpdateWithWhereUniqueWithoutUserInput = {
  data: ReferralUpdateWithoutUserInput;
  where: ReferralWhereUniqueInput;
};

export type ReferralUpdateWithoutUserInput = {
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  referralCode?: InputMaybe<StringFieldUpdateOperationsInput>;
  used?: InputMaybe<BoolFieldUpdateOperationsInput>;
};

export type ReferralUpsertWithWhereUniqueWithoutUserInput = {
  create: ReferralCreateWithoutUserInput;
  update: ReferralUpdateWithoutUserInput;
  where: ReferralWhereUniqueInput;
};

export type ReferralWhereInput = {
  AND?: InputMaybe<Array<ReferralWhereInput>>;
  NOT?: InputMaybe<Array<ReferralWhereInput>>;
  OR?: InputMaybe<Array<ReferralWhereInput>>;
  id?: InputMaybe<StringFilter>;
  referralCode?: InputMaybe<StringFilter>;
  used?: InputMaybe<BoolFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type ReferralWhereUniqueInput = {
  AND?: InputMaybe<Array<ReferralWhereInput>>;
  NOT?: InputMaybe<Array<ReferralWhereInput>>;
  OR?: InputMaybe<Array<ReferralWhereInput>>;
  id?: InputMaybe<Scalars['String']['input']>;
  referralCode?: InputMaybe<Scalars['String']['input']>;
  used?: InputMaybe<BoolFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Reward = {
  __typename?: 'Reward';
  amount: Scalars['BigInt']['output'];
  createdAt: Scalars['DateTime']['output'];
  epoch: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  points: Scalars['Int']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type RewardAvgAggregate = {
  __typename?: 'RewardAvgAggregate';
  amount?: Maybe<Scalars['Float']['output']>;
  epoch?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
};

export type RewardAvgOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  epoch?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
};

export type RewardCountAggregate = {
  __typename?: 'RewardCountAggregate';
  _all: Scalars['Int']['output'];
  amount: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  epoch: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  points: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type RewardCountOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  epoch?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RewardCreateInput = {
  amount: Scalars['BigInt']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  epoch: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  points: Scalars['Int']['input'];
  user: UserCreateNestedOneWithoutRewardsInput;
};

export type RewardCreateManyInput = {
  amount: Scalars['BigInt']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  epoch: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  points: Scalars['Int']['input'];
  userId: Scalars['String']['input'];
};

export type RewardCreateManyUserInput = {
  amount: Scalars['BigInt']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  epoch: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  points: Scalars['Int']['input'];
};

export type RewardCreateManyUserInputEnvelope = {
  data: Array<RewardCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RewardCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<RewardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RewardCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RewardCreateWithoutUserInput>>;
  createMany?: InputMaybe<RewardCreateManyUserInputEnvelope>;
};

export type RewardCreateOrConnectWithoutUserInput = {
  create: RewardCreateWithoutUserInput;
  where: RewardWhereUniqueInput;
};

export type RewardCreateWithoutUserInput = {
  amount: Scalars['BigInt']['input'];
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  epoch: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  points: Scalars['Int']['input'];
};

export type RewardGroupBy = {
  __typename?: 'RewardGroupBy';
  _avg?: Maybe<RewardAvgAggregate>;
  _count?: Maybe<RewardCountAggregate>;
  _max?: Maybe<RewardMaxAggregate>;
  _min?: Maybe<RewardMinAggregate>;
  _sum?: Maybe<RewardSumAggregate>;
  amount: Scalars['BigInt']['output'];
  createdAt: Scalars['DateTime']['output'];
  epoch: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  points: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
};

export type RewardListRelationFilter = {
  every?: InputMaybe<RewardWhereInput>;
  none?: InputMaybe<RewardWhereInput>;
  some?: InputMaybe<RewardWhereInput>;
};

export type RewardMaxAggregate = {
  __typename?: 'RewardMaxAggregate';
  amount?: Maybe<Scalars['BigInt']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  epoch?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type RewardMaxOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  epoch?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RewardMinAggregate = {
  __typename?: 'RewardMinAggregate';
  amount?: Maybe<Scalars['BigInt']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  epoch?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type RewardMinOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  epoch?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RewardOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type RewardOrderByWithAggregationInput = {
  _avg?: InputMaybe<RewardAvgOrderByAggregateInput>;
  _count?: InputMaybe<RewardCountOrderByAggregateInput>;
  _max?: InputMaybe<RewardMaxOrderByAggregateInput>;
  _min?: InputMaybe<RewardMinOrderByAggregateInput>;
  _sum?: InputMaybe<RewardSumOrderByAggregateInput>;
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  epoch?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type RewardOrderByWithRelationInput = {
  amount?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  epoch?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum RewardScalarFieldEnum {
  Amount = 'amount',
  CreatedAt = 'createdAt',
  Epoch = 'epoch',
  Id = 'id',
  Points = 'points',
  UserId = 'userId'
}

export type RewardScalarWhereInput = {
  AND?: InputMaybe<Array<RewardScalarWhereInput>>;
  NOT?: InputMaybe<Array<RewardScalarWhereInput>>;
  OR?: InputMaybe<Array<RewardScalarWhereInput>>;
  amount?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  epoch?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  points?: InputMaybe<IntFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RewardScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RewardScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RewardScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RewardScalarWhereWithAggregatesInput>>;
  amount?: InputMaybe<BigIntWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  epoch?: InputMaybe<IntWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  points?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type RewardSumAggregate = {
  __typename?: 'RewardSumAggregate';
  amount?: Maybe<Scalars['BigInt']['output']>;
  epoch?: Maybe<Scalars['Int']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
};

export type RewardSumOrderByAggregateInput = {
  amount?: InputMaybe<SortOrder>;
  epoch?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
};

export type RewardUpdateInput = {
  amount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  epoch?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutRewardsNestedInput>;
};

export type RewardUpdateManyMutationInput = {
  amount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  epoch?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type RewardUpdateManyWithWhereWithoutUserInput = {
  data: RewardUpdateManyMutationInput;
  where: RewardScalarWhereInput;
};

export type RewardUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<RewardWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<RewardCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<RewardCreateWithoutUserInput>>;
  createMany?: InputMaybe<RewardCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<RewardWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<RewardScalarWhereInput>>;
  disconnect?: InputMaybe<Array<RewardWhereUniqueInput>>;
  set?: InputMaybe<Array<RewardWhereUniqueInput>>;
  update?: InputMaybe<Array<RewardUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<RewardUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<RewardUpsertWithWhereUniqueWithoutUserInput>>;
};

export type RewardUpdateWithWhereUniqueWithoutUserInput = {
  data: RewardUpdateWithoutUserInput;
  where: RewardWhereUniqueInput;
};

export type RewardUpdateWithoutUserInput = {
  amount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  epoch?: InputMaybe<IntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type RewardUpsertWithWhereUniqueWithoutUserInput = {
  create: RewardCreateWithoutUserInput;
  update: RewardUpdateWithoutUserInput;
  where: RewardWhereUniqueInput;
};

export type RewardWhereInput = {
  AND?: InputMaybe<Array<RewardWhereInput>>;
  NOT?: InputMaybe<Array<RewardWhereInput>>;
  OR?: InputMaybe<Array<RewardWhereInput>>;
  amount?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  epoch?: InputMaybe<IntFilter>;
  id?: InputMaybe<StringFilter>;
  points?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type RewardWhereUniqueInput = {
  AND?: InputMaybe<Array<RewardWhereInput>>;
  NOT?: InputMaybe<Array<RewardWhereInput>>;
  OR?: InputMaybe<Array<RewardWhereInput>>;
  amount?: InputMaybe<BigIntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  epoch?: InputMaybe<IntFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  points?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Round = {
  __typename?: 'Round';
  _count?: Maybe<RoundCount>;
  bearAmount: Scalars['BigInt']['output'];
  bearBets: Scalars['Int']['output'];
  bets: Array<Bet>;
  bullAmount: Scalars['BigInt']['output'];
  bullBets: Scalars['Int']['output'];
  closeAt: Scalars['DateTime']['output'];
  closeBlock: Scalars['Int']['output'];
  closeHash: Scalars['String']['output'];
  closePrice: Scalars['BigInt']['output'];
  closeRoundId: Scalars['String']['output'];
  epoch: Scalars['Int']['output'];
  failed: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  lockAt: Scalars['DateTime']['output'];
  lockBlock: Scalars['Int']['output'];
  lockHash: Scalars['String']['output'];
  lockPrice: Scalars['BigInt']['output'];
  lockRoundId: Scalars['String']['output'];
  position: BetPosition;
  startAt: Scalars['DateTime']['output'];
  startBlock: Scalars['Int']['output'];
  startHash: Scalars['String']['output'];
  totalAmount: Scalars['BigInt']['output'];
  totalBets: Scalars['Int']['output'];
};


export type RoundBetsArgs = {
  cursor?: InputMaybe<BetWhereUniqueInput>;
  distinct?: InputMaybe<Array<BetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BetWhereInput>;
};

export type RoundAvgAggregate = {
  __typename?: 'RoundAvgAggregate';
  bearAmount?: Maybe<Scalars['Float']['output']>;
  bearBets?: Maybe<Scalars['Float']['output']>;
  bullAmount?: Maybe<Scalars['Float']['output']>;
  bullBets?: Maybe<Scalars['Float']['output']>;
  closeBlock?: Maybe<Scalars['Float']['output']>;
  closePrice?: Maybe<Scalars['Float']['output']>;
  epoch?: Maybe<Scalars['Float']['output']>;
  lockBlock?: Maybe<Scalars['Float']['output']>;
  lockPrice?: Maybe<Scalars['Float']['output']>;
  startBlock?: Maybe<Scalars['Float']['output']>;
  totalAmount?: Maybe<Scalars['Float']['output']>;
  totalBets?: Maybe<Scalars['Float']['output']>;
};

export type RoundAvgOrderByAggregateInput = {
  bearAmount?: InputMaybe<SortOrder>;
  bearBets?: InputMaybe<SortOrder>;
  bullAmount?: InputMaybe<SortOrder>;
  bullBets?: InputMaybe<SortOrder>;
  closeBlock?: InputMaybe<SortOrder>;
  closePrice?: InputMaybe<SortOrder>;
  epoch?: InputMaybe<SortOrder>;
  lockBlock?: InputMaybe<SortOrder>;
  lockPrice?: InputMaybe<SortOrder>;
  startBlock?: InputMaybe<SortOrder>;
  totalAmount?: InputMaybe<SortOrder>;
  totalBets?: InputMaybe<SortOrder>;
};

export type RoundCount = {
  __typename?: 'RoundCount';
  bets: Scalars['Int']['output'];
};


export type RoundCountBetsArgs = {
  where?: InputMaybe<BetWhereInput>;
};

export type RoundCountAggregate = {
  __typename?: 'RoundCountAggregate';
  _all: Scalars['Int']['output'];
  bearAmount: Scalars['Int']['output'];
  bearBets: Scalars['Int']['output'];
  bullAmount: Scalars['Int']['output'];
  bullBets: Scalars['Int']['output'];
  closeAt: Scalars['Int']['output'];
  closeBlock: Scalars['Int']['output'];
  closeHash: Scalars['Int']['output'];
  closePrice: Scalars['Int']['output'];
  closeRoundId: Scalars['Int']['output'];
  epoch: Scalars['Int']['output'];
  failed: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lockAt: Scalars['Int']['output'];
  lockBlock: Scalars['Int']['output'];
  lockHash: Scalars['Int']['output'];
  lockPrice: Scalars['Int']['output'];
  lockRoundId: Scalars['Int']['output'];
  position: Scalars['Int']['output'];
  startAt: Scalars['Int']['output'];
  startBlock: Scalars['Int']['output'];
  startHash: Scalars['Int']['output'];
  totalAmount: Scalars['Int']['output'];
  totalBets: Scalars['Int']['output'];
};

export type RoundCountOrderByAggregateInput = {
  bearAmount?: InputMaybe<SortOrder>;
  bearBets?: InputMaybe<SortOrder>;
  bullAmount?: InputMaybe<SortOrder>;
  bullBets?: InputMaybe<SortOrder>;
  closeAt?: InputMaybe<SortOrder>;
  closeBlock?: InputMaybe<SortOrder>;
  closeHash?: InputMaybe<SortOrder>;
  closePrice?: InputMaybe<SortOrder>;
  closeRoundId?: InputMaybe<SortOrder>;
  epoch?: InputMaybe<SortOrder>;
  failed?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lockAt?: InputMaybe<SortOrder>;
  lockBlock?: InputMaybe<SortOrder>;
  lockHash?: InputMaybe<SortOrder>;
  lockPrice?: InputMaybe<SortOrder>;
  lockRoundId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  startAt?: InputMaybe<SortOrder>;
  startBlock?: InputMaybe<SortOrder>;
  startHash?: InputMaybe<SortOrder>;
  totalAmount?: InputMaybe<SortOrder>;
  totalBets?: InputMaybe<SortOrder>;
};

export type RoundCreateInput = {
  bearAmount: Scalars['BigInt']['input'];
  bearBets: Scalars['Int']['input'];
  bets?: InputMaybe<BetCreateNestedManyWithoutRoundInput>;
  bullAmount: Scalars['BigInt']['input'];
  bullBets: Scalars['Int']['input'];
  closeAt: Scalars['DateTime']['input'];
  closeBlock: Scalars['Int']['input'];
  closeHash: Scalars['String']['input'];
  closePrice: Scalars['BigInt']['input'];
  closeRoundId: Scalars['String']['input'];
  epoch: Scalars['Int']['input'];
  failed: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lockAt: Scalars['DateTime']['input'];
  lockBlock: Scalars['Int']['input'];
  lockHash: Scalars['String']['input'];
  lockPrice: Scalars['BigInt']['input'];
  lockRoundId: Scalars['String']['input'];
  position: BetPosition;
  startAt: Scalars['DateTime']['input'];
  startBlock: Scalars['Int']['input'];
  startHash: Scalars['String']['input'];
  totalAmount: Scalars['BigInt']['input'];
  totalBets: Scalars['Int']['input'];
};

export type RoundCreateManyInput = {
  bearAmount: Scalars['BigInt']['input'];
  bearBets: Scalars['Int']['input'];
  bullAmount: Scalars['BigInt']['input'];
  bullBets: Scalars['Int']['input'];
  closeAt: Scalars['DateTime']['input'];
  closeBlock: Scalars['Int']['input'];
  closeHash: Scalars['String']['input'];
  closePrice: Scalars['BigInt']['input'];
  closeRoundId: Scalars['String']['input'];
  epoch: Scalars['Int']['input'];
  failed: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lockAt: Scalars['DateTime']['input'];
  lockBlock: Scalars['Int']['input'];
  lockHash: Scalars['String']['input'];
  lockPrice: Scalars['BigInt']['input'];
  lockRoundId: Scalars['String']['input'];
  position: BetPosition;
  startAt: Scalars['DateTime']['input'];
  startBlock: Scalars['Int']['input'];
  startHash: Scalars['String']['input'];
  totalAmount: Scalars['BigInt']['input'];
  totalBets: Scalars['Int']['input'];
};

export type RoundCreateNestedOneWithoutBetsInput = {
  connect?: InputMaybe<RoundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoundCreateOrConnectWithoutBetsInput>;
  create?: InputMaybe<RoundCreateWithoutBetsInput>;
};

export type RoundCreateOrConnectWithoutBetsInput = {
  create: RoundCreateWithoutBetsInput;
  where: RoundWhereUniqueInput;
};

export type RoundCreateWithoutBetsInput = {
  bearAmount: Scalars['BigInt']['input'];
  bearBets: Scalars['Int']['input'];
  bullAmount: Scalars['BigInt']['input'];
  bullBets: Scalars['Int']['input'];
  closeAt: Scalars['DateTime']['input'];
  closeBlock: Scalars['Int']['input'];
  closeHash: Scalars['String']['input'];
  closePrice: Scalars['BigInt']['input'];
  closeRoundId: Scalars['String']['input'];
  epoch: Scalars['Int']['input'];
  failed: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  lockAt: Scalars['DateTime']['input'];
  lockBlock: Scalars['Int']['input'];
  lockHash: Scalars['String']['input'];
  lockPrice: Scalars['BigInt']['input'];
  lockRoundId: Scalars['String']['input'];
  position: BetPosition;
  startAt: Scalars['DateTime']['input'];
  startBlock: Scalars['Int']['input'];
  startHash: Scalars['String']['input'];
  totalAmount: Scalars['BigInt']['input'];
  totalBets: Scalars['Int']['input'];
};

export type RoundGroupBy = {
  __typename?: 'RoundGroupBy';
  _avg?: Maybe<RoundAvgAggregate>;
  _count?: Maybe<RoundCountAggregate>;
  _max?: Maybe<RoundMaxAggregate>;
  _min?: Maybe<RoundMinAggregate>;
  _sum?: Maybe<RoundSumAggregate>;
  bearAmount: Scalars['BigInt']['output'];
  bearBets: Scalars['Int']['output'];
  bullAmount: Scalars['BigInt']['output'];
  bullBets: Scalars['Int']['output'];
  closeAt: Scalars['DateTime']['output'];
  closeBlock: Scalars['Int']['output'];
  closeHash: Scalars['String']['output'];
  closePrice: Scalars['BigInt']['output'];
  closeRoundId: Scalars['String']['output'];
  epoch: Scalars['Int']['output'];
  failed: Scalars['Boolean']['output'];
  id: Scalars['String']['output'];
  lockAt: Scalars['DateTime']['output'];
  lockBlock: Scalars['Int']['output'];
  lockHash: Scalars['String']['output'];
  lockPrice: Scalars['BigInt']['output'];
  lockRoundId: Scalars['String']['output'];
  position: BetPosition;
  startAt: Scalars['DateTime']['output'];
  startBlock: Scalars['Int']['output'];
  startHash: Scalars['String']['output'];
  totalAmount: Scalars['BigInt']['output'];
  totalBets: Scalars['Int']['output'];
};

export type RoundMaxAggregate = {
  __typename?: 'RoundMaxAggregate';
  bearAmount?: Maybe<Scalars['BigInt']['output']>;
  bearBets?: Maybe<Scalars['Int']['output']>;
  bullAmount?: Maybe<Scalars['BigInt']['output']>;
  bullBets?: Maybe<Scalars['Int']['output']>;
  closeAt?: Maybe<Scalars['DateTime']['output']>;
  closeBlock?: Maybe<Scalars['Int']['output']>;
  closeHash?: Maybe<Scalars['String']['output']>;
  closePrice?: Maybe<Scalars['BigInt']['output']>;
  closeRoundId?: Maybe<Scalars['String']['output']>;
  epoch?: Maybe<Scalars['Int']['output']>;
  failed?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lockAt?: Maybe<Scalars['DateTime']['output']>;
  lockBlock?: Maybe<Scalars['Int']['output']>;
  lockHash?: Maybe<Scalars['String']['output']>;
  lockPrice?: Maybe<Scalars['BigInt']['output']>;
  lockRoundId?: Maybe<Scalars['String']['output']>;
  position?: Maybe<BetPosition>;
  startAt?: Maybe<Scalars['DateTime']['output']>;
  startBlock?: Maybe<Scalars['Int']['output']>;
  startHash?: Maybe<Scalars['String']['output']>;
  totalAmount?: Maybe<Scalars['BigInt']['output']>;
  totalBets?: Maybe<Scalars['Int']['output']>;
};

export type RoundMaxOrderByAggregateInput = {
  bearAmount?: InputMaybe<SortOrder>;
  bearBets?: InputMaybe<SortOrder>;
  bullAmount?: InputMaybe<SortOrder>;
  bullBets?: InputMaybe<SortOrder>;
  closeAt?: InputMaybe<SortOrder>;
  closeBlock?: InputMaybe<SortOrder>;
  closeHash?: InputMaybe<SortOrder>;
  closePrice?: InputMaybe<SortOrder>;
  closeRoundId?: InputMaybe<SortOrder>;
  epoch?: InputMaybe<SortOrder>;
  failed?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lockAt?: InputMaybe<SortOrder>;
  lockBlock?: InputMaybe<SortOrder>;
  lockHash?: InputMaybe<SortOrder>;
  lockPrice?: InputMaybe<SortOrder>;
  lockRoundId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  startAt?: InputMaybe<SortOrder>;
  startBlock?: InputMaybe<SortOrder>;
  startHash?: InputMaybe<SortOrder>;
  totalAmount?: InputMaybe<SortOrder>;
  totalBets?: InputMaybe<SortOrder>;
};

export type RoundMinAggregate = {
  __typename?: 'RoundMinAggregate';
  bearAmount?: Maybe<Scalars['BigInt']['output']>;
  bearBets?: Maybe<Scalars['Int']['output']>;
  bullAmount?: Maybe<Scalars['BigInt']['output']>;
  bullBets?: Maybe<Scalars['Int']['output']>;
  closeAt?: Maybe<Scalars['DateTime']['output']>;
  closeBlock?: Maybe<Scalars['Int']['output']>;
  closeHash?: Maybe<Scalars['String']['output']>;
  closePrice?: Maybe<Scalars['BigInt']['output']>;
  closeRoundId?: Maybe<Scalars['String']['output']>;
  epoch?: Maybe<Scalars['Int']['output']>;
  failed?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lockAt?: Maybe<Scalars['DateTime']['output']>;
  lockBlock?: Maybe<Scalars['Int']['output']>;
  lockHash?: Maybe<Scalars['String']['output']>;
  lockPrice?: Maybe<Scalars['BigInt']['output']>;
  lockRoundId?: Maybe<Scalars['String']['output']>;
  position?: Maybe<BetPosition>;
  startAt?: Maybe<Scalars['DateTime']['output']>;
  startBlock?: Maybe<Scalars['Int']['output']>;
  startHash?: Maybe<Scalars['String']['output']>;
  totalAmount?: Maybe<Scalars['BigInt']['output']>;
  totalBets?: Maybe<Scalars['Int']['output']>;
};

export type RoundMinOrderByAggregateInput = {
  bearAmount?: InputMaybe<SortOrder>;
  bearBets?: InputMaybe<SortOrder>;
  bullAmount?: InputMaybe<SortOrder>;
  bullBets?: InputMaybe<SortOrder>;
  closeAt?: InputMaybe<SortOrder>;
  closeBlock?: InputMaybe<SortOrder>;
  closeHash?: InputMaybe<SortOrder>;
  closePrice?: InputMaybe<SortOrder>;
  closeRoundId?: InputMaybe<SortOrder>;
  epoch?: InputMaybe<SortOrder>;
  failed?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lockAt?: InputMaybe<SortOrder>;
  lockBlock?: InputMaybe<SortOrder>;
  lockHash?: InputMaybe<SortOrder>;
  lockPrice?: InputMaybe<SortOrder>;
  lockRoundId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  startAt?: InputMaybe<SortOrder>;
  startBlock?: InputMaybe<SortOrder>;
  startHash?: InputMaybe<SortOrder>;
  totalAmount?: InputMaybe<SortOrder>;
  totalBets?: InputMaybe<SortOrder>;
};

export type RoundOrderByWithAggregationInput = {
  _avg?: InputMaybe<RoundAvgOrderByAggregateInput>;
  _count?: InputMaybe<RoundCountOrderByAggregateInput>;
  _max?: InputMaybe<RoundMaxOrderByAggregateInput>;
  _min?: InputMaybe<RoundMinOrderByAggregateInput>;
  _sum?: InputMaybe<RoundSumOrderByAggregateInput>;
  bearAmount?: InputMaybe<SortOrder>;
  bearBets?: InputMaybe<SortOrder>;
  bullAmount?: InputMaybe<SortOrder>;
  bullBets?: InputMaybe<SortOrder>;
  closeAt?: InputMaybe<SortOrder>;
  closeBlock?: InputMaybe<SortOrder>;
  closeHash?: InputMaybe<SortOrder>;
  closePrice?: InputMaybe<SortOrder>;
  closeRoundId?: InputMaybe<SortOrder>;
  epoch?: InputMaybe<SortOrder>;
  failed?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lockAt?: InputMaybe<SortOrder>;
  lockBlock?: InputMaybe<SortOrder>;
  lockHash?: InputMaybe<SortOrder>;
  lockPrice?: InputMaybe<SortOrder>;
  lockRoundId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  startAt?: InputMaybe<SortOrder>;
  startBlock?: InputMaybe<SortOrder>;
  startHash?: InputMaybe<SortOrder>;
  totalAmount?: InputMaybe<SortOrder>;
  totalBets?: InputMaybe<SortOrder>;
};

export type RoundOrderByWithRelationInput = {
  bearAmount?: InputMaybe<SortOrder>;
  bearBets?: InputMaybe<SortOrder>;
  bets?: InputMaybe<BetOrderByRelationAggregateInput>;
  bullAmount?: InputMaybe<SortOrder>;
  bullBets?: InputMaybe<SortOrder>;
  closeAt?: InputMaybe<SortOrder>;
  closeBlock?: InputMaybe<SortOrder>;
  closeHash?: InputMaybe<SortOrder>;
  closePrice?: InputMaybe<SortOrder>;
  closeRoundId?: InputMaybe<SortOrder>;
  epoch?: InputMaybe<SortOrder>;
  failed?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lockAt?: InputMaybe<SortOrder>;
  lockBlock?: InputMaybe<SortOrder>;
  lockHash?: InputMaybe<SortOrder>;
  lockPrice?: InputMaybe<SortOrder>;
  lockRoundId?: InputMaybe<SortOrder>;
  position?: InputMaybe<SortOrder>;
  startAt?: InputMaybe<SortOrder>;
  startBlock?: InputMaybe<SortOrder>;
  startHash?: InputMaybe<SortOrder>;
  totalAmount?: InputMaybe<SortOrder>;
  totalBets?: InputMaybe<SortOrder>;
};

export type RoundRelationFilter = {
  is?: InputMaybe<RoundWhereInput>;
  isNot?: InputMaybe<RoundWhereInput>;
};

export enum RoundScalarFieldEnum {
  BearAmount = 'bearAmount',
  BearBets = 'bearBets',
  BullAmount = 'bullAmount',
  BullBets = 'bullBets',
  CloseAt = 'closeAt',
  CloseBlock = 'closeBlock',
  CloseHash = 'closeHash',
  ClosePrice = 'closePrice',
  CloseRoundId = 'closeRoundId',
  Epoch = 'epoch',
  Failed = 'failed',
  Id = 'id',
  LockAt = 'lockAt',
  LockBlock = 'lockBlock',
  LockHash = 'lockHash',
  LockPrice = 'lockPrice',
  LockRoundId = 'lockRoundId',
  Position = 'position',
  StartAt = 'startAt',
  StartBlock = 'startBlock',
  StartHash = 'startHash',
  TotalAmount = 'totalAmount',
  TotalBets = 'totalBets'
}

export type RoundScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<RoundScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<RoundScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<RoundScalarWhereWithAggregatesInput>>;
  bearAmount?: InputMaybe<BigIntWithAggregatesFilter>;
  bearBets?: InputMaybe<IntWithAggregatesFilter>;
  bullAmount?: InputMaybe<BigIntWithAggregatesFilter>;
  bullBets?: InputMaybe<IntWithAggregatesFilter>;
  closeAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  closeBlock?: InputMaybe<IntWithAggregatesFilter>;
  closeHash?: InputMaybe<StringWithAggregatesFilter>;
  closePrice?: InputMaybe<BigIntWithAggregatesFilter>;
  closeRoundId?: InputMaybe<StringWithAggregatesFilter>;
  epoch?: InputMaybe<IntWithAggregatesFilter>;
  failed?: InputMaybe<BoolWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lockAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  lockBlock?: InputMaybe<IntWithAggregatesFilter>;
  lockHash?: InputMaybe<StringWithAggregatesFilter>;
  lockPrice?: InputMaybe<BigIntWithAggregatesFilter>;
  lockRoundId?: InputMaybe<StringWithAggregatesFilter>;
  position?: InputMaybe<EnumBetPositionWithAggregatesFilter>;
  startAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  startBlock?: InputMaybe<IntWithAggregatesFilter>;
  startHash?: InputMaybe<StringWithAggregatesFilter>;
  totalAmount?: InputMaybe<BigIntWithAggregatesFilter>;
  totalBets?: InputMaybe<IntWithAggregatesFilter>;
};

export type RoundSumAggregate = {
  __typename?: 'RoundSumAggregate';
  bearAmount?: Maybe<Scalars['BigInt']['output']>;
  bearBets?: Maybe<Scalars['Int']['output']>;
  bullAmount?: Maybe<Scalars['BigInt']['output']>;
  bullBets?: Maybe<Scalars['Int']['output']>;
  closeBlock?: Maybe<Scalars['Int']['output']>;
  closePrice?: Maybe<Scalars['BigInt']['output']>;
  epoch?: Maybe<Scalars['Int']['output']>;
  lockBlock?: Maybe<Scalars['Int']['output']>;
  lockPrice?: Maybe<Scalars['BigInt']['output']>;
  startBlock?: Maybe<Scalars['Int']['output']>;
  totalAmount?: Maybe<Scalars['BigInt']['output']>;
  totalBets?: Maybe<Scalars['Int']['output']>;
};

export type RoundSumOrderByAggregateInput = {
  bearAmount?: InputMaybe<SortOrder>;
  bearBets?: InputMaybe<SortOrder>;
  bullAmount?: InputMaybe<SortOrder>;
  bullBets?: InputMaybe<SortOrder>;
  closeBlock?: InputMaybe<SortOrder>;
  closePrice?: InputMaybe<SortOrder>;
  epoch?: InputMaybe<SortOrder>;
  lockBlock?: InputMaybe<SortOrder>;
  lockPrice?: InputMaybe<SortOrder>;
  startBlock?: InputMaybe<SortOrder>;
  totalAmount?: InputMaybe<SortOrder>;
  totalBets?: InputMaybe<SortOrder>;
};

export type RoundUpdateInput = {
  bearAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  bearBets?: InputMaybe<IntFieldUpdateOperationsInput>;
  bets?: InputMaybe<BetUpdateManyWithoutRoundNestedInput>;
  bullAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  bullBets?: InputMaybe<IntFieldUpdateOperationsInput>;
  closeAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  closeBlock?: InputMaybe<IntFieldUpdateOperationsInput>;
  closeHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  closePrice?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  closeRoundId?: InputMaybe<StringFieldUpdateOperationsInput>;
  epoch?: InputMaybe<IntFieldUpdateOperationsInput>;
  failed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lockAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lockBlock?: InputMaybe<IntFieldUpdateOperationsInput>;
  lockHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  lockPrice?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  lockRoundId?: InputMaybe<StringFieldUpdateOperationsInput>;
  position?: InputMaybe<EnumBetPositionFieldUpdateOperationsInput>;
  startAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  startBlock?: InputMaybe<IntFieldUpdateOperationsInput>;
  startHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  totalAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  totalBets?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type RoundUpdateManyMutationInput = {
  bearAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  bearBets?: InputMaybe<IntFieldUpdateOperationsInput>;
  bullAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  bullBets?: InputMaybe<IntFieldUpdateOperationsInput>;
  closeAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  closeBlock?: InputMaybe<IntFieldUpdateOperationsInput>;
  closeHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  closePrice?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  closeRoundId?: InputMaybe<StringFieldUpdateOperationsInput>;
  epoch?: InputMaybe<IntFieldUpdateOperationsInput>;
  failed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lockAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lockBlock?: InputMaybe<IntFieldUpdateOperationsInput>;
  lockHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  lockPrice?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  lockRoundId?: InputMaybe<StringFieldUpdateOperationsInput>;
  position?: InputMaybe<EnumBetPositionFieldUpdateOperationsInput>;
  startAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  startBlock?: InputMaybe<IntFieldUpdateOperationsInput>;
  startHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  totalAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  totalBets?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type RoundUpdateOneRequiredWithoutBetsNestedInput = {
  connect?: InputMaybe<RoundWhereUniqueInput>;
  connectOrCreate?: InputMaybe<RoundCreateOrConnectWithoutBetsInput>;
  create?: InputMaybe<RoundCreateWithoutBetsInput>;
  update?: InputMaybe<RoundUpdateToOneWithWhereWithoutBetsInput>;
  upsert?: InputMaybe<RoundUpsertWithoutBetsInput>;
};

export type RoundUpdateToOneWithWhereWithoutBetsInput = {
  data: RoundUpdateWithoutBetsInput;
  where?: InputMaybe<RoundWhereInput>;
};

export type RoundUpdateWithoutBetsInput = {
  bearAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  bearBets?: InputMaybe<IntFieldUpdateOperationsInput>;
  bullAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  bullBets?: InputMaybe<IntFieldUpdateOperationsInput>;
  closeAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  closeBlock?: InputMaybe<IntFieldUpdateOperationsInput>;
  closeHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  closePrice?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  closeRoundId?: InputMaybe<StringFieldUpdateOperationsInput>;
  epoch?: InputMaybe<IntFieldUpdateOperationsInput>;
  failed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lockAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  lockBlock?: InputMaybe<IntFieldUpdateOperationsInput>;
  lockHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  lockPrice?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  lockRoundId?: InputMaybe<StringFieldUpdateOperationsInput>;
  position?: InputMaybe<EnumBetPositionFieldUpdateOperationsInput>;
  startAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  startBlock?: InputMaybe<IntFieldUpdateOperationsInput>;
  startHash?: InputMaybe<StringFieldUpdateOperationsInput>;
  totalAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  totalBets?: InputMaybe<IntFieldUpdateOperationsInput>;
};

export type RoundUpsertWithoutBetsInput = {
  create: RoundCreateWithoutBetsInput;
  update: RoundUpdateWithoutBetsInput;
  where?: InputMaybe<RoundWhereInput>;
};

export type RoundWhereInput = {
  AND?: InputMaybe<Array<RoundWhereInput>>;
  NOT?: InputMaybe<Array<RoundWhereInput>>;
  OR?: InputMaybe<Array<RoundWhereInput>>;
  bearAmount?: InputMaybe<BigIntFilter>;
  bearBets?: InputMaybe<IntFilter>;
  bets?: InputMaybe<BetListRelationFilter>;
  bullAmount?: InputMaybe<BigIntFilter>;
  bullBets?: InputMaybe<IntFilter>;
  closeAt?: InputMaybe<DateTimeFilter>;
  closeBlock?: InputMaybe<IntFilter>;
  closeHash?: InputMaybe<StringFilter>;
  closePrice?: InputMaybe<BigIntFilter>;
  closeRoundId?: InputMaybe<StringFilter>;
  epoch?: InputMaybe<IntFilter>;
  failed?: InputMaybe<BoolFilter>;
  id?: InputMaybe<StringFilter>;
  lockAt?: InputMaybe<DateTimeFilter>;
  lockBlock?: InputMaybe<IntFilter>;
  lockHash?: InputMaybe<StringFilter>;
  lockPrice?: InputMaybe<BigIntFilter>;
  lockRoundId?: InputMaybe<StringFilter>;
  position?: InputMaybe<EnumBetPositionFilter>;
  startAt?: InputMaybe<DateTimeFilter>;
  startBlock?: InputMaybe<IntFilter>;
  startHash?: InputMaybe<StringFilter>;
  totalAmount?: InputMaybe<BigIntFilter>;
  totalBets?: InputMaybe<IntFilter>;
};

export type RoundWhereUniqueInput = {
  AND?: InputMaybe<Array<RoundWhereInput>>;
  NOT?: InputMaybe<Array<RoundWhereInput>>;
  OR?: InputMaybe<Array<RoundWhereInput>>;
  bearAmount?: InputMaybe<BigIntFilter>;
  bearBets?: InputMaybe<IntFilter>;
  bets?: InputMaybe<BetListRelationFilter>;
  bullAmount?: InputMaybe<BigIntFilter>;
  bullBets?: InputMaybe<IntFilter>;
  closeAt?: InputMaybe<DateTimeFilter>;
  closeBlock?: InputMaybe<IntFilter>;
  closeHash?: InputMaybe<StringFilter>;
  closePrice?: InputMaybe<BigIntFilter>;
  closeRoundId?: InputMaybe<StringFilter>;
  epoch?: InputMaybe<IntFilter>;
  failed?: InputMaybe<BoolFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  lockAt?: InputMaybe<DateTimeFilter>;
  lockBlock?: InputMaybe<IntFilter>;
  lockHash?: InputMaybe<StringFilter>;
  lockPrice?: InputMaybe<BigIntFilter>;
  lockRoundId?: InputMaybe<StringFilter>;
  position?: InputMaybe<EnumBetPositionFilter>;
  startAt?: InputMaybe<DateTimeFilter>;
  startBlock?: InputMaybe<IntFilter>;
  startHash?: InputMaybe<StringFilter>;
  totalAmount?: InputMaybe<BigIntFilter>;
  totalBets?: InputMaybe<IntFilter>;
};

export type Session = {
  __typename?: 'Session';
  expires: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  sessionToken: Scalars['String']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type SessionCountAggregate = {
  __typename?: 'SessionCountAggregate';
  _all: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  sessionToken: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type SessionCountOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionCreateInput = {
  expires: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  user: UserCreateNestedOneWithoutSessionsInput;
};

export type SessionCreateManyInput = {
  expires: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type SessionCreateManyUserInput = {
  expires: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
};

export type SessionCreateManyUserInputEnvelope = {
  data: Array<SessionCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SessionCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
};

export type SessionCreateOrConnectWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionCreateWithoutUserInput = {
  expires: Scalars['DateTime']['input'];
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken: Scalars['String']['input'];
};

export type SessionGroupBy = {
  __typename?: 'SessionGroupBy';
  _count?: Maybe<SessionCountAggregate>;
  _max?: Maybe<SessionMaxAggregate>;
  _min?: Maybe<SessionMinAggregate>;
  expires: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  sessionToken: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type SessionListRelationFilter = {
  every?: InputMaybe<SessionWhereInput>;
  none?: InputMaybe<SessionWhereInput>;
  some?: InputMaybe<SessionWhereInput>;
};

export type SessionMaxAggregate = {
  __typename?: 'SessionMaxAggregate';
  expires?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SessionMaxOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionMinAggregate = {
  __typename?: 'SessionMinAggregate';
  expires?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  sessionToken?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type SessionMinOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithAggregationInput = {
  _count?: InputMaybe<SessionCountOrderByAggregateInput>;
  _max?: InputMaybe<SessionMaxOrderByAggregateInput>;
  _min?: InputMaybe<SessionMinOrderByAggregateInput>;
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type SessionOrderByWithRelationInput = {
  expires?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  sessionToken?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum SessionScalarFieldEnum {
  Expires = 'expires',
  Id = 'id',
  SessionToken = 'sessionToken',
  UserId = 'userId'
}

export type SessionScalarWhereInput = {
  AND?: InputMaybe<Array<SessionScalarWhereInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<SessionScalarWhereWithAggregatesInput>>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  sessionToken?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
};

export type SessionUpdateInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutSessionsNestedInput>;
};

export type SessionUpdateManyMutationInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpdateManyWithWhereWithoutUserInput = {
  data: SessionUpdateManyMutationInput;
  where: SessionScalarWhereInput;
};

export type SessionUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<SessionCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<SessionCreateWithoutUserInput>>;
  createMany?: InputMaybe<SessionCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<SessionWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<SessionScalarWhereInput>>;
  disconnect?: InputMaybe<Array<SessionWhereUniqueInput>>;
  set?: InputMaybe<Array<SessionWhereUniqueInput>>;
  update?: InputMaybe<Array<SessionUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<SessionUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<SessionUpsertWithWhereUniqueWithoutUserInput>>;
};

export type SessionUpdateWithWhereUniqueWithoutUserInput = {
  data: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionUpdateWithoutUserInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  sessionToken?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type SessionUpsertWithWhereUniqueWithoutUserInput = {
  create: SessionCreateWithoutUserInput;
  update: SessionUpdateWithoutUserInput;
  where: SessionWhereUniqueInput;
};

export type SessionWhereInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  sessionToken?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type SessionWhereUniqueInput = {
  AND?: InputMaybe<Array<SessionWhereInput>>;
  NOT?: InputMaybe<Array<SessionWhereInput>>;
  OR?: InputMaybe<Array<SessionWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  sessionToken?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Share = {
  __typename?: 'Share';
  User?: Maybe<User>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  isBuy: Scalars['Boolean']['output'];
  shareAmount: Scalars['BigInt']['output'];
  stethAmount: Scalars['BigInt']['output'];
  subject: User;
  subjectId: Scalars['String']['output'];
  trader: User;
  traderId: Scalars['String']['output'];
  userId?: Maybe<Scalars['String']['output']>;
};


export type ShareUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type ShareAvgAggregate = {
  __typename?: 'ShareAvgAggregate';
  shareAmount?: Maybe<Scalars['Float']['output']>;
  stethAmount?: Maybe<Scalars['Float']['output']>;
};

export type ShareAvgOrderByAggregateInput = {
  shareAmount?: InputMaybe<SortOrder>;
  stethAmount?: InputMaybe<SortOrder>;
};

export type ShareCountAggregate = {
  __typename?: 'ShareCountAggregate';
  _all: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  isBuy: Scalars['Int']['output'];
  shareAmount: Scalars['Int']['output'];
  stethAmount: Scalars['Int']['output'];
  subjectId: Scalars['Int']['output'];
  traderId: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
};

export type ShareCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isBuy?: InputMaybe<SortOrder>;
  shareAmount?: InputMaybe<SortOrder>;
  stethAmount?: InputMaybe<SortOrder>;
  subjectId?: InputMaybe<SortOrder>;
  traderId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShareCreateInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutAllSharesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isBuy: Scalars['Boolean']['input'];
  shareAmount: Scalars['BigInt']['input'];
  stethAmount: Scalars['BigInt']['input'];
  subject: UserCreateNestedOneWithoutSoldSharesInput;
  trader: UserCreateNestedOneWithoutBoughtSharesInput;
};

export type ShareCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isBuy: Scalars['Boolean']['input'];
  shareAmount: Scalars['BigInt']['input'];
  stethAmount: Scalars['BigInt']['input'];
  subjectId: Scalars['String']['input'];
  traderId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ShareCreateManySubjectInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isBuy: Scalars['Boolean']['input'];
  shareAmount: Scalars['BigInt']['input'];
  stethAmount: Scalars['BigInt']['input'];
  traderId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ShareCreateManySubjectInputEnvelope = {
  data: Array<ShareCreateManySubjectInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ShareCreateManyTraderInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isBuy: Scalars['Boolean']['input'];
  shareAmount: Scalars['BigInt']['input'];
  stethAmount: Scalars['BigInt']['input'];
  subjectId: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type ShareCreateManyTraderInputEnvelope = {
  data: Array<ShareCreateManyTraderInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ShareCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isBuy: Scalars['Boolean']['input'];
  shareAmount: Scalars['BigInt']['input'];
  stethAmount: Scalars['BigInt']['input'];
  subjectId: Scalars['String']['input'];
  traderId: Scalars['String']['input'];
};

export type ShareCreateManyUserInputEnvelope = {
  data: Array<ShareCreateManyUserInput>;
  skipDuplicates?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ShareCreateNestedManyWithoutSubjectInput = {
  connect?: InputMaybe<Array<ShareWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ShareCreateOrConnectWithoutSubjectInput>>;
  create?: InputMaybe<Array<ShareCreateWithoutSubjectInput>>;
  createMany?: InputMaybe<ShareCreateManySubjectInputEnvelope>;
};

export type ShareCreateNestedManyWithoutTraderInput = {
  connect?: InputMaybe<Array<ShareWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ShareCreateOrConnectWithoutTraderInput>>;
  create?: InputMaybe<Array<ShareCreateWithoutTraderInput>>;
  createMany?: InputMaybe<ShareCreateManyTraderInputEnvelope>;
};

export type ShareCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<Array<ShareWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ShareCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ShareCreateWithoutUserInput>>;
  createMany?: InputMaybe<ShareCreateManyUserInputEnvelope>;
};

export type ShareCreateOrConnectWithoutSubjectInput = {
  create: ShareCreateWithoutSubjectInput;
  where: ShareWhereUniqueInput;
};

export type ShareCreateOrConnectWithoutTraderInput = {
  create: ShareCreateWithoutTraderInput;
  where: ShareWhereUniqueInput;
};

export type ShareCreateOrConnectWithoutUserInput = {
  create: ShareCreateWithoutUserInput;
  where: ShareWhereUniqueInput;
};

export type ShareCreateWithoutSubjectInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutAllSharesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isBuy: Scalars['Boolean']['input'];
  shareAmount: Scalars['BigInt']['input'];
  stethAmount: Scalars['BigInt']['input'];
  trader: UserCreateNestedOneWithoutBoughtSharesInput;
};

export type ShareCreateWithoutTraderInput = {
  User?: InputMaybe<UserCreateNestedOneWithoutAllSharesInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isBuy: Scalars['Boolean']['input'];
  shareAmount: Scalars['BigInt']['input'];
  stethAmount: Scalars['BigInt']['input'];
  subject: UserCreateNestedOneWithoutSoldSharesInput;
};

export type ShareCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isBuy: Scalars['Boolean']['input'];
  shareAmount: Scalars['BigInt']['input'];
  stethAmount: Scalars['BigInt']['input'];
  subject: UserCreateNestedOneWithoutSoldSharesInput;
  trader: UserCreateNestedOneWithoutBoughtSharesInput;
};

export type ShareGroupBy = {
  __typename?: 'ShareGroupBy';
  _avg?: Maybe<ShareAvgAggregate>;
  _count?: Maybe<ShareCountAggregate>;
  _max?: Maybe<ShareMaxAggregate>;
  _min?: Maybe<ShareMinAggregate>;
  _sum?: Maybe<ShareSumAggregate>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['String']['output'];
  isBuy: Scalars['Boolean']['output'];
  shareAmount: Scalars['BigInt']['output'];
  stethAmount: Scalars['BigInt']['output'];
  subjectId: Scalars['String']['output'];
  traderId: Scalars['String']['output'];
  userId?: Maybe<Scalars['String']['output']>;
};

export type ShareListRelationFilter = {
  every?: InputMaybe<ShareWhereInput>;
  none?: InputMaybe<ShareWhereInput>;
  some?: InputMaybe<ShareWhereInput>;
};

export type ShareMaxAggregate = {
  __typename?: 'ShareMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isBuy?: Maybe<Scalars['Boolean']['output']>;
  shareAmount?: Maybe<Scalars['BigInt']['output']>;
  stethAmount?: Maybe<Scalars['BigInt']['output']>;
  subjectId?: Maybe<Scalars['String']['output']>;
  traderId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ShareMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isBuy?: InputMaybe<SortOrder>;
  shareAmount?: InputMaybe<SortOrder>;
  stethAmount?: InputMaybe<SortOrder>;
  subjectId?: InputMaybe<SortOrder>;
  traderId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShareMinAggregate = {
  __typename?: 'ShareMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  isBuy?: Maybe<Scalars['Boolean']['output']>;
  shareAmount?: Maybe<Scalars['BigInt']['output']>;
  stethAmount?: Maybe<Scalars['BigInt']['output']>;
  subjectId?: Maybe<Scalars['String']['output']>;
  traderId?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type ShareMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isBuy?: InputMaybe<SortOrder>;
  shareAmount?: InputMaybe<SortOrder>;
  stethAmount?: InputMaybe<SortOrder>;
  subjectId?: InputMaybe<SortOrder>;
  traderId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type ShareOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ShareOrderByWithAggregationInput = {
  _avg?: InputMaybe<ShareAvgOrderByAggregateInput>;
  _count?: InputMaybe<ShareCountOrderByAggregateInput>;
  _max?: InputMaybe<ShareMaxOrderByAggregateInput>;
  _min?: InputMaybe<ShareMinOrderByAggregateInput>;
  _sum?: InputMaybe<ShareSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isBuy?: InputMaybe<SortOrder>;
  shareAmount?: InputMaybe<SortOrder>;
  stethAmount?: InputMaybe<SortOrder>;
  subjectId?: InputMaybe<SortOrder>;
  traderId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrderInput>;
};

export type ShareOrderByWithRelationInput = {
  User?: InputMaybe<UserOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  isBuy?: InputMaybe<SortOrder>;
  shareAmount?: InputMaybe<SortOrder>;
  stethAmount?: InputMaybe<SortOrder>;
  subject?: InputMaybe<UserOrderByWithRelationInput>;
  subjectId?: InputMaybe<SortOrder>;
  trader?: InputMaybe<UserOrderByWithRelationInput>;
  traderId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrderInput>;
};

export enum ShareScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  IsBuy = 'isBuy',
  ShareAmount = 'shareAmount',
  StethAmount = 'stethAmount',
  SubjectId = 'subjectId',
  TraderId = 'traderId',
  UserId = 'userId'
}

export type ShareScalarWhereInput = {
  AND?: InputMaybe<Array<ShareScalarWhereInput>>;
  NOT?: InputMaybe<Array<ShareScalarWhereInput>>;
  OR?: InputMaybe<Array<ShareScalarWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isBuy?: InputMaybe<BoolFilter>;
  shareAmount?: InputMaybe<BigIntFilter>;
  stethAmount?: InputMaybe<BigIntFilter>;
  subjectId?: InputMaybe<StringFilter>;
  traderId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type ShareScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<ShareScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ShareScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ShareScalarWhereWithAggregatesInput>>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  isBuy?: InputMaybe<BoolWithAggregatesFilter>;
  shareAmount?: InputMaybe<BigIntWithAggregatesFilter>;
  stethAmount?: InputMaybe<BigIntWithAggregatesFilter>;
  subjectId?: InputMaybe<StringWithAggregatesFilter>;
  traderId?: InputMaybe<StringWithAggregatesFilter>;
  userId?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type ShareSumAggregate = {
  __typename?: 'ShareSumAggregate';
  shareAmount?: Maybe<Scalars['BigInt']['output']>;
  stethAmount?: Maybe<Scalars['BigInt']['output']>;
};

export type ShareSumOrderByAggregateInput = {
  shareAmount?: InputMaybe<SortOrder>;
  stethAmount?: InputMaybe<SortOrder>;
};

export type ShareUpdateInput = {
  User?: InputMaybe<UserUpdateOneWithoutAllSharesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isBuy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  shareAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  stethAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  subject?: InputMaybe<UserUpdateOneRequiredWithoutSoldSharesNestedInput>;
  trader?: InputMaybe<UserUpdateOneRequiredWithoutBoughtSharesNestedInput>;
};

export type ShareUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isBuy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  shareAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  stethAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type ShareUpdateManyWithWhereWithoutSubjectInput = {
  data: ShareUpdateManyMutationInput;
  where: ShareScalarWhereInput;
};

export type ShareUpdateManyWithWhereWithoutTraderInput = {
  data: ShareUpdateManyMutationInput;
  where: ShareScalarWhereInput;
};

export type ShareUpdateManyWithWhereWithoutUserInput = {
  data: ShareUpdateManyMutationInput;
  where: ShareScalarWhereInput;
};

export type ShareUpdateManyWithoutSubjectNestedInput = {
  connect?: InputMaybe<Array<ShareWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ShareCreateOrConnectWithoutSubjectInput>>;
  create?: InputMaybe<Array<ShareCreateWithoutSubjectInput>>;
  createMany?: InputMaybe<ShareCreateManySubjectInputEnvelope>;
  delete?: InputMaybe<Array<ShareWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ShareScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ShareWhereUniqueInput>>;
  set?: InputMaybe<Array<ShareWhereUniqueInput>>;
  update?: InputMaybe<Array<ShareUpdateWithWhereUniqueWithoutSubjectInput>>;
  updateMany?: InputMaybe<Array<ShareUpdateManyWithWhereWithoutSubjectInput>>;
  upsert?: InputMaybe<Array<ShareUpsertWithWhereUniqueWithoutSubjectInput>>;
};

export type ShareUpdateManyWithoutTraderNestedInput = {
  connect?: InputMaybe<Array<ShareWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ShareCreateOrConnectWithoutTraderInput>>;
  create?: InputMaybe<Array<ShareCreateWithoutTraderInput>>;
  createMany?: InputMaybe<ShareCreateManyTraderInputEnvelope>;
  delete?: InputMaybe<Array<ShareWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ShareScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ShareWhereUniqueInput>>;
  set?: InputMaybe<Array<ShareWhereUniqueInput>>;
  update?: InputMaybe<Array<ShareUpdateWithWhereUniqueWithoutTraderInput>>;
  updateMany?: InputMaybe<Array<ShareUpdateManyWithWhereWithoutTraderInput>>;
  upsert?: InputMaybe<Array<ShareUpsertWithWhereUniqueWithoutTraderInput>>;
};

export type ShareUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<Array<ShareWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<Array<ShareCreateOrConnectWithoutUserInput>>;
  create?: InputMaybe<Array<ShareCreateWithoutUserInput>>;
  createMany?: InputMaybe<ShareCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ShareWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ShareScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ShareWhereUniqueInput>>;
  set?: InputMaybe<Array<ShareWhereUniqueInput>>;
  update?: InputMaybe<Array<ShareUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<Array<ShareUpdateManyWithWhereWithoutUserInput>>;
  upsert?: InputMaybe<Array<ShareUpsertWithWhereUniqueWithoutUserInput>>;
};

export type ShareUpdateWithWhereUniqueWithoutSubjectInput = {
  data: ShareUpdateWithoutSubjectInput;
  where: ShareWhereUniqueInput;
};

export type ShareUpdateWithWhereUniqueWithoutTraderInput = {
  data: ShareUpdateWithoutTraderInput;
  where: ShareWhereUniqueInput;
};

export type ShareUpdateWithWhereUniqueWithoutUserInput = {
  data: ShareUpdateWithoutUserInput;
  where: ShareWhereUniqueInput;
};

export type ShareUpdateWithoutSubjectInput = {
  User?: InputMaybe<UserUpdateOneWithoutAllSharesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isBuy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  shareAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  stethAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  trader?: InputMaybe<UserUpdateOneRequiredWithoutBoughtSharesNestedInput>;
};

export type ShareUpdateWithoutTraderInput = {
  User?: InputMaybe<UserUpdateOneWithoutAllSharesNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isBuy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  shareAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  stethAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  subject?: InputMaybe<UserUpdateOneRequiredWithoutSoldSharesNestedInput>;
};

export type ShareUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  isBuy?: InputMaybe<BoolFieldUpdateOperationsInput>;
  shareAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  stethAmount?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  subject?: InputMaybe<UserUpdateOneRequiredWithoutSoldSharesNestedInput>;
  trader?: InputMaybe<UserUpdateOneRequiredWithoutBoughtSharesNestedInput>;
};

export type ShareUpsertWithWhereUniqueWithoutSubjectInput = {
  create: ShareCreateWithoutSubjectInput;
  update: ShareUpdateWithoutSubjectInput;
  where: ShareWhereUniqueInput;
};

export type ShareUpsertWithWhereUniqueWithoutTraderInput = {
  create: ShareCreateWithoutTraderInput;
  update: ShareUpdateWithoutTraderInput;
  where: ShareWhereUniqueInput;
};

export type ShareUpsertWithWhereUniqueWithoutUserInput = {
  create: ShareCreateWithoutUserInput;
  update: ShareUpdateWithoutUserInput;
  where: ShareWhereUniqueInput;
};

export type ShareWhereInput = {
  AND?: InputMaybe<Array<ShareWhereInput>>;
  NOT?: InputMaybe<Array<ShareWhereInput>>;
  OR?: InputMaybe<Array<ShareWhereInput>>;
  User?: InputMaybe<UserNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isBuy?: InputMaybe<BoolFilter>;
  shareAmount?: InputMaybe<BigIntFilter>;
  stethAmount?: InputMaybe<BigIntFilter>;
  subject?: InputMaybe<UserRelationFilter>;
  subjectId?: InputMaybe<StringFilter>;
  trader?: InputMaybe<UserRelationFilter>;
  traderId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export type ShareWhereUniqueInput = {
  AND?: InputMaybe<Array<ShareWhereInput>>;
  NOT?: InputMaybe<Array<ShareWhereInput>>;
  OR?: InputMaybe<Array<ShareWhereInput>>;
  User?: InputMaybe<UserNullableRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  isBuy?: InputMaybe<BoolFilter>;
  shareAmount?: InputMaybe<BigIntFilter>;
  stethAmount?: InputMaybe<BigIntFilter>;
  subject?: InputMaybe<UserRelationFilter>;
  subjectId?: InputMaybe<StringFilter>;
  trader?: InputMaybe<UserRelationFilter>;
  traderId?: InputMaybe<StringFilter>;
  userId?: InputMaybe<StringNullableFilter>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type SortOrderInput = {
  nulls?: InputMaybe<NullsOrder>;
  sort: SortOrder;
};

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']['input']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  accounts: Array<Account>;
  activityLogs: Array<ActivityLog>;
  address?: Maybe<Scalars['String']['output']>;
  allShares: Array<Share>;
  bets: Array<Bet>;
  boughtShares: Array<Share>;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  referrals: Array<Referral>;
  rewards: Array<Reward>;
  sessions: Array<Session>;
  soldShares: Array<Share>;
  stats?: Maybe<UserStats>;
  updatedAt: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
};


export type UserAccountsArgs = {
  cursor?: InputMaybe<AccountWhereUniqueInput>;
  distinct?: InputMaybe<Array<AccountScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<AccountOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AccountWhereInput>;
};


export type UserActivityLogsArgs = {
  cursor?: InputMaybe<ActivityLogWhereUniqueInput>;
  distinct?: InputMaybe<Array<ActivityLogScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ActivityLogOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ActivityLogWhereInput>;
};


export type UserAllSharesArgs = {
  cursor?: InputMaybe<ShareWhereUniqueInput>;
  distinct?: InputMaybe<Array<ShareScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ShareOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ShareWhereInput>;
};


export type UserBetsArgs = {
  cursor?: InputMaybe<BetWhereUniqueInput>;
  distinct?: InputMaybe<Array<BetScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<BetOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BetWhereInput>;
};


export type UserBoughtSharesArgs = {
  cursor?: InputMaybe<ShareWhereUniqueInput>;
  distinct?: InputMaybe<Array<ShareScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ShareOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ShareWhereInput>;
};


export type UserReferralsArgs = {
  cursor?: InputMaybe<ReferralWhereUniqueInput>;
  distinct?: InputMaybe<Array<ReferralScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ReferralOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ReferralWhereInput>;
};


export type UserRewardsArgs = {
  cursor?: InputMaybe<RewardWhereUniqueInput>;
  distinct?: InputMaybe<Array<RewardScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<RewardOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<RewardWhereInput>;
};


export type UserSessionsArgs = {
  cursor?: InputMaybe<SessionWhereUniqueInput>;
  distinct?: InputMaybe<Array<SessionScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<SessionOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SessionWhereInput>;
};


export type UserSoldSharesArgs = {
  cursor?: InputMaybe<ShareWhereUniqueInput>;
  distinct?: InputMaybe<Array<ShareScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ShareOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<ShareWhereInput>;
};


export type UserStatsArgs = {
  where?: InputMaybe<UserStatsWhereInput>;
};

export type UserCount = {
  __typename?: 'UserCount';
  accounts: Scalars['Int']['output'];
  activityLogs: Scalars['Int']['output'];
  allShares: Scalars['Int']['output'];
  bets: Scalars['Int']['output'];
  boughtShares: Scalars['Int']['output'];
  referrals: Scalars['Int']['output'];
  rewards: Scalars['Int']['output'];
  sessions: Scalars['Int']['output'];
  soldShares: Scalars['Int']['output'];
};


export type UserCountAccountsArgs = {
  where?: InputMaybe<AccountWhereInput>;
};


export type UserCountActivityLogsArgs = {
  where?: InputMaybe<ActivityLogWhereInput>;
};


export type UserCountAllSharesArgs = {
  where?: InputMaybe<ShareWhereInput>;
};


export type UserCountBetsArgs = {
  where?: InputMaybe<BetWhereInput>;
};


export type UserCountBoughtSharesArgs = {
  where?: InputMaybe<ShareWhereInput>;
};


export type UserCountReferralsArgs = {
  where?: InputMaybe<ReferralWhereInput>;
};


export type UserCountRewardsArgs = {
  where?: InputMaybe<RewardWhereInput>;
};


export type UserCountSessionsArgs = {
  where?: InputMaybe<SessionWhereInput>;
};


export type UserCountSoldSharesArgs = {
  where?: InputMaybe<ShareWhereInput>;
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int']['output'];
  address: Scalars['Int']['output'];
  createdAt: Scalars['Int']['output'];
  email: Scalars['Int']['output'];
  emailVerified: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  image: Scalars['Int']['output'];
  name: Scalars['Int']['output'];
  updatedAt: Scalars['Int']['output'];
  username: Scalars['Int']['output'];
};

export type UserCountOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  activityLogs?: InputMaybe<ActivityLogCreateNestedManyWithoutUserInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  allShares?: InputMaybe<ShareCreateNestedManyWithoutUserInput>;
  bets?: InputMaybe<BetCreateNestedManyWithoutUserInput>;
  boughtShares?: InputMaybe<ShareCreateNestedManyWithoutTraderInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  referrals?: InputMaybe<ReferralCreateNestedManyWithoutUserInput>;
  rewards?: InputMaybe<RewardCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  soldShares?: InputMaybe<ShareCreateNestedManyWithoutSubjectInput>;
  stats?: InputMaybe<UserStatsCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateManyInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateNestedOneWithoutAccountsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
};

export type UserCreateNestedOneWithoutActivityLogsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutActivityLogsInput>;
  create?: InputMaybe<UserCreateWithoutActivityLogsInput>;
};

export type UserCreateNestedOneWithoutAllSharesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAllSharesInput>;
  create?: InputMaybe<UserCreateWithoutAllSharesInput>;
};

export type UserCreateNestedOneWithoutBetsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBetsInput>;
  create?: InputMaybe<UserCreateWithoutBetsInput>;
};

export type UserCreateNestedOneWithoutBoughtSharesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBoughtSharesInput>;
  create?: InputMaybe<UserCreateWithoutBoughtSharesInput>;
};

export type UserCreateNestedOneWithoutReferralsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReferralsInput>;
  create?: InputMaybe<UserCreateWithoutReferralsInput>;
};

export type UserCreateNestedOneWithoutRewardsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRewardsInput>;
  create?: InputMaybe<UserCreateWithoutRewardsInput>;
};

export type UserCreateNestedOneWithoutSessionsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
};

export type UserCreateNestedOneWithoutSoldSharesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSoldSharesInput>;
  create?: InputMaybe<UserCreateWithoutSoldSharesInput>;
};

export type UserCreateNestedOneWithoutStatsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutStatsInput>;
  create?: InputMaybe<UserCreateWithoutStatsInput>;
};

export type UserCreateOrConnectWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutActivityLogsInput = {
  create: UserCreateWithoutActivityLogsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutAllSharesInput = {
  create: UserCreateWithoutAllSharesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutBetsInput = {
  create: UserCreateWithoutBetsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutBoughtSharesInput = {
  create: UserCreateWithoutBoughtSharesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutReferralsInput = {
  create: UserCreateWithoutReferralsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutRewardsInput = {
  create: UserCreateWithoutRewardsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutSoldSharesInput = {
  create: UserCreateWithoutSoldSharesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutStatsInput = {
  create: UserCreateWithoutStatsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAccountsInput = {
  activityLogs?: InputMaybe<ActivityLogCreateNestedManyWithoutUserInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  allShares?: InputMaybe<ShareCreateNestedManyWithoutUserInput>;
  bets?: InputMaybe<BetCreateNestedManyWithoutUserInput>;
  boughtShares?: InputMaybe<ShareCreateNestedManyWithoutTraderInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  referrals?: InputMaybe<ReferralCreateNestedManyWithoutUserInput>;
  rewards?: InputMaybe<RewardCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  soldShares?: InputMaybe<ShareCreateNestedManyWithoutSubjectInput>;
  stats?: InputMaybe<UserStatsCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutActivityLogsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  allShares?: InputMaybe<ShareCreateNestedManyWithoutUserInput>;
  bets?: InputMaybe<BetCreateNestedManyWithoutUserInput>;
  boughtShares?: InputMaybe<ShareCreateNestedManyWithoutTraderInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  referrals?: InputMaybe<ReferralCreateNestedManyWithoutUserInput>;
  rewards?: InputMaybe<RewardCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  soldShares?: InputMaybe<ShareCreateNestedManyWithoutSubjectInput>;
  stats?: InputMaybe<UserStatsCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutAllSharesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  activityLogs?: InputMaybe<ActivityLogCreateNestedManyWithoutUserInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  bets?: InputMaybe<BetCreateNestedManyWithoutUserInput>;
  boughtShares?: InputMaybe<ShareCreateNestedManyWithoutTraderInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  referrals?: InputMaybe<ReferralCreateNestedManyWithoutUserInput>;
  rewards?: InputMaybe<RewardCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  soldShares?: InputMaybe<ShareCreateNestedManyWithoutSubjectInput>;
  stats?: InputMaybe<UserStatsCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutBetsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  activityLogs?: InputMaybe<ActivityLogCreateNestedManyWithoutUserInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  allShares?: InputMaybe<ShareCreateNestedManyWithoutUserInput>;
  boughtShares?: InputMaybe<ShareCreateNestedManyWithoutTraderInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  referrals?: InputMaybe<ReferralCreateNestedManyWithoutUserInput>;
  rewards?: InputMaybe<RewardCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  soldShares?: InputMaybe<ShareCreateNestedManyWithoutSubjectInput>;
  stats?: InputMaybe<UserStatsCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutBoughtSharesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  activityLogs?: InputMaybe<ActivityLogCreateNestedManyWithoutUserInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  allShares?: InputMaybe<ShareCreateNestedManyWithoutUserInput>;
  bets?: InputMaybe<BetCreateNestedManyWithoutUserInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  referrals?: InputMaybe<ReferralCreateNestedManyWithoutUserInput>;
  rewards?: InputMaybe<RewardCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  soldShares?: InputMaybe<ShareCreateNestedManyWithoutSubjectInput>;
  stats?: InputMaybe<UserStatsCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutReferralsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  activityLogs?: InputMaybe<ActivityLogCreateNestedManyWithoutUserInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  allShares?: InputMaybe<ShareCreateNestedManyWithoutUserInput>;
  bets?: InputMaybe<BetCreateNestedManyWithoutUserInput>;
  boughtShares?: InputMaybe<ShareCreateNestedManyWithoutTraderInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rewards?: InputMaybe<RewardCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  soldShares?: InputMaybe<ShareCreateNestedManyWithoutSubjectInput>;
  stats?: InputMaybe<UserStatsCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutRewardsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  activityLogs?: InputMaybe<ActivityLogCreateNestedManyWithoutUserInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  allShares?: InputMaybe<ShareCreateNestedManyWithoutUserInput>;
  bets?: InputMaybe<BetCreateNestedManyWithoutUserInput>;
  boughtShares?: InputMaybe<ShareCreateNestedManyWithoutTraderInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  referrals?: InputMaybe<ReferralCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  soldShares?: InputMaybe<ShareCreateNestedManyWithoutSubjectInput>;
  stats?: InputMaybe<UserStatsCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  activityLogs?: InputMaybe<ActivityLogCreateNestedManyWithoutUserInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  allShares?: InputMaybe<ShareCreateNestedManyWithoutUserInput>;
  bets?: InputMaybe<BetCreateNestedManyWithoutUserInput>;
  boughtShares?: InputMaybe<ShareCreateNestedManyWithoutTraderInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  referrals?: InputMaybe<ReferralCreateNestedManyWithoutUserInput>;
  rewards?: InputMaybe<RewardCreateNestedManyWithoutUserInput>;
  soldShares?: InputMaybe<ShareCreateNestedManyWithoutSubjectInput>;
  stats?: InputMaybe<UserStatsCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutSoldSharesInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  activityLogs?: InputMaybe<ActivityLogCreateNestedManyWithoutUserInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  allShares?: InputMaybe<ShareCreateNestedManyWithoutUserInput>;
  bets?: InputMaybe<BetCreateNestedManyWithoutUserInput>;
  boughtShares?: InputMaybe<ShareCreateNestedManyWithoutTraderInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  referrals?: InputMaybe<ReferralCreateNestedManyWithoutUserInput>;
  rewards?: InputMaybe<RewardCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  stats?: InputMaybe<UserStatsCreateNestedOneWithoutUserInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserCreateWithoutStatsInput = {
  accounts?: InputMaybe<AccountCreateNestedManyWithoutUserInput>;
  activityLogs?: InputMaybe<ActivityLogCreateNestedManyWithoutUserInput>;
  address?: InputMaybe<Scalars['String']['input']>;
  allShares?: InputMaybe<ShareCreateNestedManyWithoutUserInput>;
  bets?: InputMaybe<BetCreateNestedManyWithoutUserInput>;
  boughtShares?: InputMaybe<ShareCreateNestedManyWithoutTraderInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['DateTime']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  referrals?: InputMaybe<ReferralCreateNestedManyWithoutUserInput>;
  rewards?: InputMaybe<RewardCreateNestedManyWithoutUserInput>;
  sessions?: InputMaybe<SessionCreateNestedManyWithoutUserInput>;
  soldShares?: InputMaybe<ShareCreateNestedManyWithoutSubjectInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  address?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  username?: Maybe<Scalars['String']['output']>;
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  address?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserMaxOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  address?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailVerified?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username?: Maybe<Scalars['String']['output']>;
};

export type UserMinOrderByAggregateInput = {
  address?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  emailVerified?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserNullableRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export type UserOrderByWithAggregationInput = {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  address?: InputMaybe<SortOrderInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrderInput>;
  emailVerified?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrderInput>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrderInput>;
};

export type UserOrderByWithRelationInput = {
  accounts?: InputMaybe<AccountOrderByRelationAggregateInput>;
  activityLogs?: InputMaybe<ActivityLogOrderByRelationAggregateInput>;
  address?: InputMaybe<SortOrderInput>;
  allShares?: InputMaybe<ShareOrderByRelationAggregateInput>;
  bets?: InputMaybe<BetOrderByRelationAggregateInput>;
  boughtShares?: InputMaybe<ShareOrderByRelationAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrderInput>;
  emailVerified?: InputMaybe<SortOrderInput>;
  id?: InputMaybe<SortOrder>;
  image?: InputMaybe<SortOrderInput>;
  name?: InputMaybe<SortOrderInput>;
  referrals?: InputMaybe<ReferralOrderByRelationAggregateInput>;
  rewards?: InputMaybe<RewardOrderByRelationAggregateInput>;
  sessions?: InputMaybe<SessionOrderByRelationAggregateInput>;
  soldShares?: InputMaybe<ShareOrderByRelationAggregateInput>;
  stats?: InputMaybe<UserStatsOrderByWithRelationInput>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrderInput>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Address = 'address',
  CreatedAt = 'createdAt',
  Email = 'email',
  EmailVerified = 'emailVerified',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<StringNullableWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringNullableWithAggregatesFilter>;
  emailVerified?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  image?: InputMaybe<StringNullableWithAggregatesFilter>;
  name?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  username?: InputMaybe<StringNullableWithAggregatesFilter>;
};

export type UserStats = {
  __typename?: 'UserStats';
  averageSTETH: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  lastTransactionBlock: Scalars['Int']['output'];
  netSTETH: Scalars['BigInt']['output'];
  points: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  shareValue: Scalars['BigInt']['output'];
  totalBets: Scalars['Int']['output'];
  totalBetsBear: Scalars['Int']['output'];
  totalBetsBull: Scalars['Int']['output'];
  totalBetsClaimed: Scalars['Int']['output'];
  totalRewards: Scalars['Int']['output'];
  totalSTETH: Scalars['BigInt']['output'];
  totalSTETHBear: Scalars['BigInt']['output'];
  totalSTETHBull: Scalars['BigInt']['output'];
  totalSTETHClaimed: Scalars['BigInt']['output'];
  totalShareHolders: Scalars['Int']['output'];
  totalSharesHeld: Scalars['Int']['output'];
  user: User;
  userId: Scalars['String']['output'];
  winRate: Scalars['BigInt']['output'];
};

export type UserStatsAvgAggregate = {
  __typename?: 'UserStatsAvgAggregate';
  averageSTETH?: Maybe<Scalars['Float']['output']>;
  lastTransactionBlock?: Maybe<Scalars['Float']['output']>;
  netSTETH?: Maybe<Scalars['Float']['output']>;
  points?: Maybe<Scalars['Float']['output']>;
  rank?: Maybe<Scalars['Float']['output']>;
  shareValue?: Maybe<Scalars['Float']['output']>;
  totalBets?: Maybe<Scalars['Float']['output']>;
  totalBetsBear?: Maybe<Scalars['Float']['output']>;
  totalBetsBull?: Maybe<Scalars['Float']['output']>;
  totalBetsClaimed?: Maybe<Scalars['Float']['output']>;
  totalRewards?: Maybe<Scalars['Float']['output']>;
  totalSTETH?: Maybe<Scalars['Float']['output']>;
  totalSTETHBear?: Maybe<Scalars['Float']['output']>;
  totalSTETHBull?: Maybe<Scalars['Float']['output']>;
  totalSTETHClaimed?: Maybe<Scalars['Float']['output']>;
  totalShareHolders?: Maybe<Scalars['Float']['output']>;
  totalSharesHeld?: Maybe<Scalars['Float']['output']>;
  winRate?: Maybe<Scalars['Float']['output']>;
};

export type UserStatsAvgOrderByAggregateInput = {
  averageSTETH?: InputMaybe<SortOrder>;
  lastTransactionBlock?: InputMaybe<SortOrder>;
  netSTETH?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  shareValue?: InputMaybe<SortOrder>;
  totalBets?: InputMaybe<SortOrder>;
  totalBetsBear?: InputMaybe<SortOrder>;
  totalBetsBull?: InputMaybe<SortOrder>;
  totalBetsClaimed?: InputMaybe<SortOrder>;
  totalRewards?: InputMaybe<SortOrder>;
  totalSTETH?: InputMaybe<SortOrder>;
  totalSTETHBear?: InputMaybe<SortOrder>;
  totalSTETHBull?: InputMaybe<SortOrder>;
  totalSTETHClaimed?: InputMaybe<SortOrder>;
  totalShareHolders?: InputMaybe<SortOrder>;
  totalSharesHeld?: InputMaybe<SortOrder>;
  winRate?: InputMaybe<SortOrder>;
};

export type UserStatsCountAggregate = {
  __typename?: 'UserStatsCountAggregate';
  _all: Scalars['Int']['output'];
  averageSTETH: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  lastTransactionBlock: Scalars['Int']['output'];
  netSTETH: Scalars['Int']['output'];
  points: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  shareValue: Scalars['Int']['output'];
  totalBets: Scalars['Int']['output'];
  totalBetsBear: Scalars['Int']['output'];
  totalBetsBull: Scalars['Int']['output'];
  totalBetsClaimed: Scalars['Int']['output'];
  totalRewards: Scalars['Int']['output'];
  totalSTETH: Scalars['Int']['output'];
  totalSTETHBear: Scalars['Int']['output'];
  totalSTETHBull: Scalars['Int']['output'];
  totalSTETHClaimed: Scalars['Int']['output'];
  totalShareHolders: Scalars['Int']['output'];
  totalSharesHeld: Scalars['Int']['output'];
  userId: Scalars['Int']['output'];
  winRate: Scalars['Int']['output'];
};

export type UserStatsCountOrderByAggregateInput = {
  averageSTETH?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastTransactionBlock?: InputMaybe<SortOrder>;
  netSTETH?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  shareValue?: InputMaybe<SortOrder>;
  totalBets?: InputMaybe<SortOrder>;
  totalBetsBear?: InputMaybe<SortOrder>;
  totalBetsBull?: InputMaybe<SortOrder>;
  totalBetsClaimed?: InputMaybe<SortOrder>;
  totalRewards?: InputMaybe<SortOrder>;
  totalSTETH?: InputMaybe<SortOrder>;
  totalSTETHBear?: InputMaybe<SortOrder>;
  totalSTETHBull?: InputMaybe<SortOrder>;
  totalSTETHClaimed?: InputMaybe<SortOrder>;
  totalShareHolders?: InputMaybe<SortOrder>;
  totalSharesHeld?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  winRate?: InputMaybe<SortOrder>;
};

export type UserStatsCreateInput = {
  averageSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastTransactionBlock?: InputMaybe<Scalars['Int']['input']>;
  netSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  shareValue?: InputMaybe<Scalars['BigInt']['input']>;
  totalBets?: InputMaybe<Scalars['Int']['input']>;
  totalBetsBear?: InputMaybe<Scalars['Int']['input']>;
  totalBetsBull?: InputMaybe<Scalars['Int']['input']>;
  totalBetsClaimed?: InputMaybe<Scalars['Int']['input']>;
  totalRewards?: InputMaybe<Scalars['Int']['input']>;
  totalSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  totalSTETHBear?: InputMaybe<Scalars['BigInt']['input']>;
  totalSTETHBull?: InputMaybe<Scalars['BigInt']['input']>;
  totalSTETHClaimed?: InputMaybe<Scalars['BigInt']['input']>;
  totalShareHolders?: InputMaybe<Scalars['Int']['input']>;
  totalSharesHeld?: InputMaybe<Scalars['Int']['input']>;
  user: UserCreateNestedOneWithoutStatsInput;
  winRate?: InputMaybe<Scalars['BigInt']['input']>;
};

export type UserStatsCreateManyInput = {
  averageSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastTransactionBlock?: InputMaybe<Scalars['Int']['input']>;
  netSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  shareValue?: InputMaybe<Scalars['BigInt']['input']>;
  totalBets?: InputMaybe<Scalars['Int']['input']>;
  totalBetsBear?: InputMaybe<Scalars['Int']['input']>;
  totalBetsBull?: InputMaybe<Scalars['Int']['input']>;
  totalBetsClaimed?: InputMaybe<Scalars['Int']['input']>;
  totalRewards?: InputMaybe<Scalars['Int']['input']>;
  totalSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  totalSTETHBear?: InputMaybe<Scalars['BigInt']['input']>;
  totalSTETHBull?: InputMaybe<Scalars['BigInt']['input']>;
  totalSTETHClaimed?: InputMaybe<Scalars['BigInt']['input']>;
  totalShareHolders?: InputMaybe<Scalars['Int']['input']>;
  totalSharesHeld?: InputMaybe<Scalars['Int']['input']>;
  userId: Scalars['String']['input'];
  winRate?: InputMaybe<Scalars['BigInt']['input']>;
};

export type UserStatsCreateNestedOneWithoutUserInput = {
  connect?: InputMaybe<UserStatsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserStatsCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserStatsCreateWithoutUserInput>;
};

export type UserStatsCreateOrConnectWithoutUserInput = {
  create: UserStatsCreateWithoutUserInput;
  where: UserStatsWhereUniqueInput;
};

export type UserStatsCreateWithoutUserInput = {
  averageSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastTransactionBlock?: InputMaybe<Scalars['Int']['input']>;
  netSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  points?: InputMaybe<Scalars['Int']['input']>;
  rank?: InputMaybe<Scalars['Int']['input']>;
  shareValue?: InputMaybe<Scalars['BigInt']['input']>;
  totalBets?: InputMaybe<Scalars['Int']['input']>;
  totalBetsBear?: InputMaybe<Scalars['Int']['input']>;
  totalBetsBull?: InputMaybe<Scalars['Int']['input']>;
  totalBetsClaimed?: InputMaybe<Scalars['Int']['input']>;
  totalRewards?: InputMaybe<Scalars['Int']['input']>;
  totalSTETH?: InputMaybe<Scalars['BigInt']['input']>;
  totalSTETHBear?: InputMaybe<Scalars['BigInt']['input']>;
  totalSTETHBull?: InputMaybe<Scalars['BigInt']['input']>;
  totalSTETHClaimed?: InputMaybe<Scalars['BigInt']['input']>;
  totalShareHolders?: InputMaybe<Scalars['Int']['input']>;
  totalSharesHeld?: InputMaybe<Scalars['Int']['input']>;
  winRate?: InputMaybe<Scalars['BigInt']['input']>;
};

export type UserStatsGroupBy = {
  __typename?: 'UserStatsGroupBy';
  _avg?: Maybe<UserStatsAvgAggregate>;
  _count?: Maybe<UserStatsCountAggregate>;
  _max?: Maybe<UserStatsMaxAggregate>;
  _min?: Maybe<UserStatsMinAggregate>;
  _sum?: Maybe<UserStatsSumAggregate>;
  averageSTETH: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  lastTransactionBlock: Scalars['Int']['output'];
  netSTETH: Scalars['BigInt']['output'];
  points: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  shareValue: Scalars['BigInt']['output'];
  totalBets: Scalars['Int']['output'];
  totalBetsBear: Scalars['Int']['output'];
  totalBetsBull: Scalars['Int']['output'];
  totalBetsClaimed: Scalars['Int']['output'];
  totalRewards: Scalars['Int']['output'];
  totalSTETH: Scalars['BigInt']['output'];
  totalSTETHBear: Scalars['BigInt']['output'];
  totalSTETHBull: Scalars['BigInt']['output'];
  totalSTETHClaimed: Scalars['BigInt']['output'];
  totalShareHolders: Scalars['Int']['output'];
  totalSharesHeld: Scalars['Int']['output'];
  userId: Scalars['String']['output'];
  winRate: Scalars['BigInt']['output'];
};

export type UserStatsMaxAggregate = {
  __typename?: 'UserStatsMaxAggregate';
  averageSTETH?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastTransactionBlock?: Maybe<Scalars['Int']['output']>;
  netSTETH?: Maybe<Scalars['BigInt']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  shareValue?: Maybe<Scalars['BigInt']['output']>;
  totalBets?: Maybe<Scalars['Int']['output']>;
  totalBetsBear?: Maybe<Scalars['Int']['output']>;
  totalBetsBull?: Maybe<Scalars['Int']['output']>;
  totalBetsClaimed?: Maybe<Scalars['Int']['output']>;
  totalRewards?: Maybe<Scalars['Int']['output']>;
  totalSTETH?: Maybe<Scalars['BigInt']['output']>;
  totalSTETHBear?: Maybe<Scalars['BigInt']['output']>;
  totalSTETHBull?: Maybe<Scalars['BigInt']['output']>;
  totalSTETHClaimed?: Maybe<Scalars['BigInt']['output']>;
  totalShareHolders?: Maybe<Scalars['Int']['output']>;
  totalSharesHeld?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  winRate?: Maybe<Scalars['BigInt']['output']>;
};

export type UserStatsMaxOrderByAggregateInput = {
  averageSTETH?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastTransactionBlock?: InputMaybe<SortOrder>;
  netSTETH?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  shareValue?: InputMaybe<SortOrder>;
  totalBets?: InputMaybe<SortOrder>;
  totalBetsBear?: InputMaybe<SortOrder>;
  totalBetsBull?: InputMaybe<SortOrder>;
  totalBetsClaimed?: InputMaybe<SortOrder>;
  totalRewards?: InputMaybe<SortOrder>;
  totalSTETH?: InputMaybe<SortOrder>;
  totalSTETHBear?: InputMaybe<SortOrder>;
  totalSTETHBull?: InputMaybe<SortOrder>;
  totalSTETHClaimed?: InputMaybe<SortOrder>;
  totalShareHolders?: InputMaybe<SortOrder>;
  totalSharesHeld?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  winRate?: InputMaybe<SortOrder>;
};

export type UserStatsMinAggregate = {
  __typename?: 'UserStatsMinAggregate';
  averageSTETH?: Maybe<Scalars['BigInt']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  lastTransactionBlock?: Maybe<Scalars['Int']['output']>;
  netSTETH?: Maybe<Scalars['BigInt']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  shareValue?: Maybe<Scalars['BigInt']['output']>;
  totalBets?: Maybe<Scalars['Int']['output']>;
  totalBetsBear?: Maybe<Scalars['Int']['output']>;
  totalBetsBull?: Maybe<Scalars['Int']['output']>;
  totalBetsClaimed?: Maybe<Scalars['Int']['output']>;
  totalRewards?: Maybe<Scalars['Int']['output']>;
  totalSTETH?: Maybe<Scalars['BigInt']['output']>;
  totalSTETHBear?: Maybe<Scalars['BigInt']['output']>;
  totalSTETHBull?: Maybe<Scalars['BigInt']['output']>;
  totalSTETHClaimed?: Maybe<Scalars['BigInt']['output']>;
  totalShareHolders?: Maybe<Scalars['Int']['output']>;
  totalSharesHeld?: Maybe<Scalars['Int']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  winRate?: Maybe<Scalars['BigInt']['output']>;
};

export type UserStatsMinOrderByAggregateInput = {
  averageSTETH?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastTransactionBlock?: InputMaybe<SortOrder>;
  netSTETH?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  shareValue?: InputMaybe<SortOrder>;
  totalBets?: InputMaybe<SortOrder>;
  totalBetsBear?: InputMaybe<SortOrder>;
  totalBetsBull?: InputMaybe<SortOrder>;
  totalBetsClaimed?: InputMaybe<SortOrder>;
  totalRewards?: InputMaybe<SortOrder>;
  totalSTETH?: InputMaybe<SortOrder>;
  totalSTETHBear?: InputMaybe<SortOrder>;
  totalSTETHBull?: InputMaybe<SortOrder>;
  totalSTETHClaimed?: InputMaybe<SortOrder>;
  totalShareHolders?: InputMaybe<SortOrder>;
  totalSharesHeld?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  winRate?: InputMaybe<SortOrder>;
};

export type UserStatsNullableRelationFilter = {
  is?: InputMaybe<UserStatsWhereInput>;
  isNot?: InputMaybe<UserStatsWhereInput>;
};

export type UserStatsOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserStatsAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserStatsCountOrderByAggregateInput>;
  _max?: InputMaybe<UserStatsMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserStatsMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserStatsSumOrderByAggregateInput>;
  averageSTETH?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastTransactionBlock?: InputMaybe<SortOrder>;
  netSTETH?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  shareValue?: InputMaybe<SortOrder>;
  totalBets?: InputMaybe<SortOrder>;
  totalBetsBear?: InputMaybe<SortOrder>;
  totalBetsBull?: InputMaybe<SortOrder>;
  totalBetsClaimed?: InputMaybe<SortOrder>;
  totalRewards?: InputMaybe<SortOrder>;
  totalSTETH?: InputMaybe<SortOrder>;
  totalSTETHBear?: InputMaybe<SortOrder>;
  totalSTETHBull?: InputMaybe<SortOrder>;
  totalSTETHClaimed?: InputMaybe<SortOrder>;
  totalShareHolders?: InputMaybe<SortOrder>;
  totalSharesHeld?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
  winRate?: InputMaybe<SortOrder>;
};

export type UserStatsOrderByWithRelationInput = {
  averageSTETH?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastTransactionBlock?: InputMaybe<SortOrder>;
  netSTETH?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  shareValue?: InputMaybe<SortOrder>;
  totalBets?: InputMaybe<SortOrder>;
  totalBetsBear?: InputMaybe<SortOrder>;
  totalBetsBull?: InputMaybe<SortOrder>;
  totalBetsClaimed?: InputMaybe<SortOrder>;
  totalRewards?: InputMaybe<SortOrder>;
  totalSTETH?: InputMaybe<SortOrder>;
  totalSTETHBear?: InputMaybe<SortOrder>;
  totalSTETHBull?: InputMaybe<SortOrder>;
  totalSTETHClaimed?: InputMaybe<SortOrder>;
  totalShareHolders?: InputMaybe<SortOrder>;
  totalSharesHeld?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
  winRate?: InputMaybe<SortOrder>;
};

export enum UserStatsScalarFieldEnum {
  AverageSteth = 'averageSTETH',
  Id = 'id',
  LastTransactionBlock = 'lastTransactionBlock',
  NetSteth = 'netSTETH',
  Points = 'points',
  Rank = 'rank',
  ShareValue = 'shareValue',
  TotalBets = 'totalBets',
  TotalBetsBear = 'totalBetsBear',
  TotalBetsBull = 'totalBetsBull',
  TotalBetsClaimed = 'totalBetsClaimed',
  TotalRewards = 'totalRewards',
  TotalSteth = 'totalSTETH',
  TotalStethBear = 'totalSTETHBear',
  TotalStethBull = 'totalSTETHBull',
  TotalStethClaimed = 'totalSTETHClaimed',
  TotalShareHolders = 'totalShareHolders',
  TotalSharesHeld = 'totalSharesHeld',
  UserId = 'userId',
  WinRate = 'winRate'
}

export type UserStatsScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<UserStatsScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserStatsScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserStatsScalarWhereWithAggregatesInput>>;
  averageSTETH?: InputMaybe<BigIntWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lastTransactionBlock?: InputMaybe<IntWithAggregatesFilter>;
  netSTETH?: InputMaybe<BigIntWithAggregatesFilter>;
  points?: InputMaybe<IntWithAggregatesFilter>;
  rank?: InputMaybe<IntWithAggregatesFilter>;
  shareValue?: InputMaybe<BigIntWithAggregatesFilter>;
  totalBets?: InputMaybe<IntWithAggregatesFilter>;
  totalBetsBear?: InputMaybe<IntWithAggregatesFilter>;
  totalBetsBull?: InputMaybe<IntWithAggregatesFilter>;
  totalBetsClaimed?: InputMaybe<IntWithAggregatesFilter>;
  totalRewards?: InputMaybe<IntWithAggregatesFilter>;
  totalSTETH?: InputMaybe<BigIntWithAggregatesFilter>;
  totalSTETHBear?: InputMaybe<BigIntWithAggregatesFilter>;
  totalSTETHBull?: InputMaybe<BigIntWithAggregatesFilter>;
  totalSTETHClaimed?: InputMaybe<BigIntWithAggregatesFilter>;
  totalShareHolders?: InputMaybe<IntWithAggregatesFilter>;
  totalSharesHeld?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
  winRate?: InputMaybe<BigIntWithAggregatesFilter>;
};

export type UserStatsSumAggregate = {
  __typename?: 'UserStatsSumAggregate';
  averageSTETH?: Maybe<Scalars['BigInt']['output']>;
  lastTransactionBlock?: Maybe<Scalars['Int']['output']>;
  netSTETH?: Maybe<Scalars['BigInt']['output']>;
  points?: Maybe<Scalars['Int']['output']>;
  rank?: Maybe<Scalars['Int']['output']>;
  shareValue?: Maybe<Scalars['BigInt']['output']>;
  totalBets?: Maybe<Scalars['Int']['output']>;
  totalBetsBear?: Maybe<Scalars['Int']['output']>;
  totalBetsBull?: Maybe<Scalars['Int']['output']>;
  totalBetsClaimed?: Maybe<Scalars['Int']['output']>;
  totalRewards?: Maybe<Scalars['Int']['output']>;
  totalSTETH?: Maybe<Scalars['BigInt']['output']>;
  totalSTETHBear?: Maybe<Scalars['BigInt']['output']>;
  totalSTETHBull?: Maybe<Scalars['BigInt']['output']>;
  totalSTETHClaimed?: Maybe<Scalars['BigInt']['output']>;
  totalShareHolders?: Maybe<Scalars['Int']['output']>;
  totalSharesHeld?: Maybe<Scalars['Int']['output']>;
  winRate?: Maybe<Scalars['BigInt']['output']>;
};

export type UserStatsSumOrderByAggregateInput = {
  averageSTETH?: InputMaybe<SortOrder>;
  lastTransactionBlock?: InputMaybe<SortOrder>;
  netSTETH?: InputMaybe<SortOrder>;
  points?: InputMaybe<SortOrder>;
  rank?: InputMaybe<SortOrder>;
  shareValue?: InputMaybe<SortOrder>;
  totalBets?: InputMaybe<SortOrder>;
  totalBetsBear?: InputMaybe<SortOrder>;
  totalBetsBull?: InputMaybe<SortOrder>;
  totalBetsClaimed?: InputMaybe<SortOrder>;
  totalRewards?: InputMaybe<SortOrder>;
  totalSTETH?: InputMaybe<SortOrder>;
  totalSTETHBear?: InputMaybe<SortOrder>;
  totalSTETHBull?: InputMaybe<SortOrder>;
  totalSTETHClaimed?: InputMaybe<SortOrder>;
  totalShareHolders?: InputMaybe<SortOrder>;
  totalSharesHeld?: InputMaybe<SortOrder>;
  winRate?: InputMaybe<SortOrder>;
};

export type UserStatsUpdateInput = {
  averageSTETH?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastTransactionBlock?: InputMaybe<IntFieldUpdateOperationsInput>;
  netSTETH?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
  rank?: InputMaybe<IntFieldUpdateOperationsInput>;
  shareValue?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  totalBets?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalBetsBear?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalBetsBull?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalBetsClaimed?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalRewards?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalSTETH?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  totalSTETHBear?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  totalSTETHBull?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  totalSTETHClaimed?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  totalShareHolders?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalSharesHeld?: InputMaybe<IntFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutStatsNestedInput>;
  winRate?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type UserStatsUpdateManyMutationInput = {
  averageSTETH?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastTransactionBlock?: InputMaybe<IntFieldUpdateOperationsInput>;
  netSTETH?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
  rank?: InputMaybe<IntFieldUpdateOperationsInput>;
  shareValue?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  totalBets?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalBetsBear?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalBetsBull?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalBetsClaimed?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalRewards?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalSTETH?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  totalSTETHBear?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  totalSTETHBull?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  totalSTETHClaimed?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  totalShareHolders?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalSharesHeld?: InputMaybe<IntFieldUpdateOperationsInput>;
  winRate?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type UserStatsUpdateOneWithoutUserNestedInput = {
  connect?: InputMaybe<UserStatsWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserStatsCreateOrConnectWithoutUserInput>;
  create?: InputMaybe<UserStatsCreateWithoutUserInput>;
  delete?: InputMaybe<UserStatsWhereInput>;
  disconnect?: InputMaybe<UserStatsWhereInput>;
  update?: InputMaybe<UserStatsUpdateToOneWithWhereWithoutUserInput>;
  upsert?: InputMaybe<UserStatsUpsertWithoutUserInput>;
};

export type UserStatsUpdateToOneWithWhereWithoutUserInput = {
  data: UserStatsUpdateWithoutUserInput;
  where?: InputMaybe<UserStatsWhereInput>;
};

export type UserStatsUpdateWithoutUserInput = {
  averageSTETH?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  lastTransactionBlock?: InputMaybe<IntFieldUpdateOperationsInput>;
  netSTETH?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  points?: InputMaybe<IntFieldUpdateOperationsInput>;
  rank?: InputMaybe<IntFieldUpdateOperationsInput>;
  shareValue?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  totalBets?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalBetsBear?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalBetsBull?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalBetsClaimed?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalRewards?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalSTETH?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  totalSTETHBear?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  totalSTETHBull?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  totalSTETHClaimed?: InputMaybe<BigIntFieldUpdateOperationsInput>;
  totalShareHolders?: InputMaybe<IntFieldUpdateOperationsInput>;
  totalSharesHeld?: InputMaybe<IntFieldUpdateOperationsInput>;
  winRate?: InputMaybe<BigIntFieldUpdateOperationsInput>;
};

export type UserStatsUpsertWithoutUserInput = {
  create: UserStatsCreateWithoutUserInput;
  update: UserStatsUpdateWithoutUserInput;
  where?: InputMaybe<UserStatsWhereInput>;
};

export type UserStatsWhereInput = {
  AND?: InputMaybe<Array<UserStatsWhereInput>>;
  NOT?: InputMaybe<Array<UserStatsWhereInput>>;
  OR?: InputMaybe<Array<UserStatsWhereInput>>;
  averageSTETH?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<StringFilter>;
  lastTransactionBlock?: InputMaybe<IntFilter>;
  netSTETH?: InputMaybe<BigIntFilter>;
  points?: InputMaybe<IntFilter>;
  rank?: InputMaybe<IntFilter>;
  shareValue?: InputMaybe<BigIntFilter>;
  totalBets?: InputMaybe<IntFilter>;
  totalBetsBear?: InputMaybe<IntFilter>;
  totalBetsBull?: InputMaybe<IntFilter>;
  totalBetsClaimed?: InputMaybe<IntFilter>;
  totalRewards?: InputMaybe<IntFilter>;
  totalSTETH?: InputMaybe<BigIntFilter>;
  totalSTETHBear?: InputMaybe<BigIntFilter>;
  totalSTETHBull?: InputMaybe<BigIntFilter>;
  totalSTETHClaimed?: InputMaybe<BigIntFilter>;
  totalShareHolders?: InputMaybe<IntFilter>;
  totalSharesHeld?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
  winRate?: InputMaybe<BigIntFilter>;
};

export type UserStatsWhereUniqueInput = {
  AND?: InputMaybe<Array<UserStatsWhereInput>>;
  NOT?: InputMaybe<Array<UserStatsWhereInput>>;
  OR?: InputMaybe<Array<UserStatsWhereInput>>;
  averageSTETH?: InputMaybe<BigIntFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  lastTransactionBlock?: InputMaybe<IntFilter>;
  netSTETH?: InputMaybe<BigIntFilter>;
  points?: InputMaybe<IntFilter>;
  rank?: InputMaybe<IntFilter>;
  shareValue?: InputMaybe<BigIntFilter>;
  totalBets?: InputMaybe<IntFilter>;
  totalBetsBear?: InputMaybe<IntFilter>;
  totalBetsBull?: InputMaybe<IntFilter>;
  totalBetsClaimed?: InputMaybe<IntFilter>;
  totalRewards?: InputMaybe<IntFilter>;
  totalSTETH?: InputMaybe<BigIntFilter>;
  totalSTETHBear?: InputMaybe<BigIntFilter>;
  totalSTETHBull?: InputMaybe<BigIntFilter>;
  totalSTETHClaimed?: InputMaybe<BigIntFilter>;
  totalShareHolders?: InputMaybe<IntFilter>;
  totalSharesHeld?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<Scalars['String']['input']>;
  winRate?: InputMaybe<BigIntFilter>;
};

export type UserUpdateInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  activityLogs?: InputMaybe<ActivityLogUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  allShares?: InputMaybe<ShareUpdateManyWithoutUserNestedInput>;
  bets?: InputMaybe<BetUpdateManyWithoutUserNestedInput>;
  boughtShares?: InputMaybe<ShareUpdateManyWithoutTraderNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referrals?: InputMaybe<ReferralUpdateManyWithoutUserNestedInput>;
  rewards?: InputMaybe<RewardUpdateManyWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  soldShares?: InputMaybe<ShareUpdateManyWithoutSubjectNestedInput>;
  stats?: InputMaybe<UserStatsUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAccountsInput>;
  create?: InputMaybe<UserCreateWithoutAccountsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAccountsInput>;
  upsert?: InputMaybe<UserUpsertWithoutAccountsInput>;
};

export type UserUpdateOneRequiredWithoutActivityLogsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutActivityLogsInput>;
  create?: InputMaybe<UserCreateWithoutActivityLogsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutActivityLogsInput>;
  upsert?: InputMaybe<UserUpsertWithoutActivityLogsInput>;
};

export type UserUpdateOneRequiredWithoutBetsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBetsInput>;
  create?: InputMaybe<UserCreateWithoutBetsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutBetsInput>;
  upsert?: InputMaybe<UserUpsertWithoutBetsInput>;
};

export type UserUpdateOneRequiredWithoutBoughtSharesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutBoughtSharesInput>;
  create?: InputMaybe<UserCreateWithoutBoughtSharesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutBoughtSharesInput>;
  upsert?: InputMaybe<UserUpsertWithoutBoughtSharesInput>;
};

export type UserUpdateOneRequiredWithoutReferralsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutReferralsInput>;
  create?: InputMaybe<UserCreateWithoutReferralsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutReferralsInput>;
  upsert?: InputMaybe<UserUpsertWithoutReferralsInput>;
};

export type UserUpdateOneRequiredWithoutRewardsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutRewardsInput>;
  create?: InputMaybe<UserCreateWithoutRewardsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutRewardsInput>;
  upsert?: InputMaybe<UserUpsertWithoutRewardsInput>;
};

export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSessionsInput>;
  create?: InputMaybe<UserCreateWithoutSessionsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSessionsInput>;
  upsert?: InputMaybe<UserUpsertWithoutSessionsInput>;
};

export type UserUpdateOneRequiredWithoutSoldSharesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutSoldSharesInput>;
  create?: InputMaybe<UserCreateWithoutSoldSharesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutSoldSharesInput>;
  upsert?: InputMaybe<UserUpsertWithoutSoldSharesInput>;
};

export type UserUpdateOneRequiredWithoutStatsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutStatsInput>;
  create?: InputMaybe<UserCreateWithoutStatsInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutStatsInput>;
  upsert?: InputMaybe<UserUpsertWithoutStatsInput>;
};

export type UserUpdateOneWithoutAllSharesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutAllSharesInput>;
  create?: InputMaybe<UserCreateWithoutAllSharesInput>;
  delete?: InputMaybe<UserWhereInput>;
  disconnect?: InputMaybe<UserWhereInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutAllSharesInput>;
  upsert?: InputMaybe<UserUpsertWithoutAllSharesInput>;
};

export type UserUpdateToOneWithWhereWithoutAccountsInput = {
  data: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutActivityLogsInput = {
  data: UserUpdateWithoutActivityLogsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutAllSharesInput = {
  data: UserUpdateWithoutAllSharesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutBetsInput = {
  data: UserUpdateWithoutBetsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutBoughtSharesInput = {
  data: UserUpdateWithoutBoughtSharesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutReferralsInput = {
  data: UserUpdateWithoutReferralsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutRewardsInput = {
  data: UserUpdateWithoutRewardsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutSessionsInput = {
  data: UserUpdateWithoutSessionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutSoldSharesInput = {
  data: UserUpdateWithoutSoldSharesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateToOneWithWhereWithoutStatsInput = {
  data: UserUpdateWithoutStatsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpdateWithoutAccountsInput = {
  activityLogs?: InputMaybe<ActivityLogUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  allShares?: InputMaybe<ShareUpdateManyWithoutUserNestedInput>;
  bets?: InputMaybe<BetUpdateManyWithoutUserNestedInput>;
  boughtShares?: InputMaybe<ShareUpdateManyWithoutTraderNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referrals?: InputMaybe<ReferralUpdateManyWithoutUserNestedInput>;
  rewards?: InputMaybe<RewardUpdateManyWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  soldShares?: InputMaybe<ShareUpdateManyWithoutSubjectNestedInput>;
  stats?: InputMaybe<UserStatsUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutActivityLogsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  allShares?: InputMaybe<ShareUpdateManyWithoutUserNestedInput>;
  bets?: InputMaybe<BetUpdateManyWithoutUserNestedInput>;
  boughtShares?: InputMaybe<ShareUpdateManyWithoutTraderNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referrals?: InputMaybe<ReferralUpdateManyWithoutUserNestedInput>;
  rewards?: InputMaybe<RewardUpdateManyWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  soldShares?: InputMaybe<ShareUpdateManyWithoutSubjectNestedInput>;
  stats?: InputMaybe<UserStatsUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutAllSharesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  activityLogs?: InputMaybe<ActivityLogUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  bets?: InputMaybe<BetUpdateManyWithoutUserNestedInput>;
  boughtShares?: InputMaybe<ShareUpdateManyWithoutTraderNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referrals?: InputMaybe<ReferralUpdateManyWithoutUserNestedInput>;
  rewards?: InputMaybe<RewardUpdateManyWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  soldShares?: InputMaybe<ShareUpdateManyWithoutSubjectNestedInput>;
  stats?: InputMaybe<UserStatsUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutBetsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  activityLogs?: InputMaybe<ActivityLogUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  allShares?: InputMaybe<ShareUpdateManyWithoutUserNestedInput>;
  boughtShares?: InputMaybe<ShareUpdateManyWithoutTraderNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referrals?: InputMaybe<ReferralUpdateManyWithoutUserNestedInput>;
  rewards?: InputMaybe<RewardUpdateManyWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  soldShares?: InputMaybe<ShareUpdateManyWithoutSubjectNestedInput>;
  stats?: InputMaybe<UserStatsUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutBoughtSharesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  activityLogs?: InputMaybe<ActivityLogUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  allShares?: InputMaybe<ShareUpdateManyWithoutUserNestedInput>;
  bets?: InputMaybe<BetUpdateManyWithoutUserNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referrals?: InputMaybe<ReferralUpdateManyWithoutUserNestedInput>;
  rewards?: InputMaybe<RewardUpdateManyWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  soldShares?: InputMaybe<ShareUpdateManyWithoutSubjectNestedInput>;
  stats?: InputMaybe<UserStatsUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutReferralsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  activityLogs?: InputMaybe<ActivityLogUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  allShares?: InputMaybe<ShareUpdateManyWithoutUserNestedInput>;
  bets?: InputMaybe<BetUpdateManyWithoutUserNestedInput>;
  boughtShares?: InputMaybe<ShareUpdateManyWithoutTraderNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  rewards?: InputMaybe<RewardUpdateManyWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  soldShares?: InputMaybe<ShareUpdateManyWithoutSubjectNestedInput>;
  stats?: InputMaybe<UserStatsUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutRewardsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  activityLogs?: InputMaybe<ActivityLogUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  allShares?: InputMaybe<ShareUpdateManyWithoutUserNestedInput>;
  bets?: InputMaybe<BetUpdateManyWithoutUserNestedInput>;
  boughtShares?: InputMaybe<ShareUpdateManyWithoutTraderNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referrals?: InputMaybe<ReferralUpdateManyWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  soldShares?: InputMaybe<ShareUpdateManyWithoutSubjectNestedInput>;
  stats?: InputMaybe<UserStatsUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSessionsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  activityLogs?: InputMaybe<ActivityLogUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  allShares?: InputMaybe<ShareUpdateManyWithoutUserNestedInput>;
  bets?: InputMaybe<BetUpdateManyWithoutUserNestedInput>;
  boughtShares?: InputMaybe<ShareUpdateManyWithoutTraderNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referrals?: InputMaybe<ReferralUpdateManyWithoutUserNestedInput>;
  rewards?: InputMaybe<RewardUpdateManyWithoutUserNestedInput>;
  soldShares?: InputMaybe<ShareUpdateManyWithoutSubjectNestedInput>;
  stats?: InputMaybe<UserStatsUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutSoldSharesInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  activityLogs?: InputMaybe<ActivityLogUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  allShares?: InputMaybe<ShareUpdateManyWithoutUserNestedInput>;
  bets?: InputMaybe<BetUpdateManyWithoutUserNestedInput>;
  boughtShares?: InputMaybe<ShareUpdateManyWithoutTraderNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referrals?: InputMaybe<ReferralUpdateManyWithoutUserNestedInput>;
  rewards?: InputMaybe<RewardUpdateManyWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  stats?: InputMaybe<UserStatsUpdateOneWithoutUserNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutStatsInput = {
  accounts?: InputMaybe<AccountUpdateManyWithoutUserNestedInput>;
  activityLogs?: InputMaybe<ActivityLogUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  allShares?: InputMaybe<ShareUpdateManyWithoutUserNestedInput>;
  bets?: InputMaybe<BetUpdateManyWithoutUserNestedInput>;
  boughtShares?: InputMaybe<ShareUpdateManyWithoutTraderNestedInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  emailVerified?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  id?: InputMaybe<StringFieldUpdateOperationsInput>;
  image?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  name?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  referrals?: InputMaybe<ReferralUpdateManyWithoutUserNestedInput>;
  rewards?: InputMaybe<RewardUpdateManyWithoutUserNestedInput>;
  sessions?: InputMaybe<SessionUpdateManyWithoutUserNestedInput>;
  soldShares?: InputMaybe<ShareUpdateManyWithoutSubjectNestedInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAccountsInput = {
  create: UserCreateWithoutAccountsInput;
  update: UserUpdateWithoutAccountsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutActivityLogsInput = {
  create: UserCreateWithoutActivityLogsInput;
  update: UserUpdateWithoutActivityLogsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutAllSharesInput = {
  create: UserCreateWithoutAllSharesInput;
  update: UserUpdateWithoutAllSharesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutBetsInput = {
  create: UserCreateWithoutBetsInput;
  update: UserUpdateWithoutBetsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutBoughtSharesInput = {
  create: UserCreateWithoutBoughtSharesInput;
  update: UserUpdateWithoutBoughtSharesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutReferralsInput = {
  create: UserCreateWithoutReferralsInput;
  update: UserUpdateWithoutReferralsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutRewardsInput = {
  create: UserCreateWithoutRewardsInput;
  update: UserUpdateWithoutRewardsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutSessionsInput = {
  create: UserCreateWithoutSessionsInput;
  update: UserUpdateWithoutSessionsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutSoldSharesInput = {
  create: UserCreateWithoutSoldSharesInput;
  update: UserUpdateWithoutSoldSharesInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserUpsertWithoutStatsInput = {
  create: UserCreateWithoutStatsInput;
  update: UserUpdateWithoutStatsInput;
  where?: InputMaybe<UserWhereInput>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  activityLogs?: InputMaybe<ActivityLogListRelationFilter>;
  address?: InputMaybe<StringNullableFilter>;
  allShares?: InputMaybe<ShareListRelationFilter>;
  bets?: InputMaybe<BetListRelationFilter>;
  boughtShares?: InputMaybe<ShareListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringNullableFilter>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<StringFilter>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  referrals?: InputMaybe<ReferralListRelationFilter>;
  rewards?: InputMaybe<RewardListRelationFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  soldShares?: InputMaybe<ShareListRelationFilter>;
  stats?: InputMaybe<UserStatsNullableRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringNullableFilter>;
};

export type UserWhereUniqueInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  accounts?: InputMaybe<AccountListRelationFilter>;
  activityLogs?: InputMaybe<ActivityLogListRelationFilter>;
  address?: InputMaybe<Scalars['String']['input']>;
  allShares?: InputMaybe<ShareListRelationFilter>;
  bets?: InputMaybe<BetListRelationFilter>;
  boughtShares?: InputMaybe<ShareListRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<Scalars['String']['input']>;
  image?: InputMaybe<StringNullableFilter>;
  name?: InputMaybe<StringNullableFilter>;
  referrals?: InputMaybe<ReferralListRelationFilter>;
  rewards?: InputMaybe<RewardListRelationFilter>;
  sessions?: InputMaybe<SessionListRelationFilter>;
  soldShares?: InputMaybe<ShareListRelationFilter>;
  stats?: InputMaybe<UserStatsNullableRelationFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type VerificationToken = {
  __typename?: 'VerificationToken';
  expires: Scalars['DateTime']['output'];
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type VerificationTokenCountAggregate = {
  __typename?: 'VerificationTokenCountAggregate';
  _all: Scalars['Int']['output'];
  expires: Scalars['Int']['output'];
  identifier: Scalars['Int']['output'];
  token: Scalars['Int']['output'];
};

export type VerificationTokenCountOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenCreateInput = {
  expires: Scalars['DateTime']['input'];
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenCreateManyInput = {
  expires: Scalars['DateTime']['input'];
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenGroupBy = {
  __typename?: 'VerificationTokenGroupBy';
  _count?: Maybe<VerificationTokenCountAggregate>;
  _max?: Maybe<VerificationTokenMaxAggregate>;
  _min?: Maybe<VerificationTokenMinAggregate>;
  expires: Scalars['DateTime']['output'];
  identifier: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
  identifier: Scalars['String']['input'];
  token: Scalars['String']['input'];
};

export type VerificationTokenMaxAggregate = {
  __typename?: 'VerificationTokenMaxAggregate';
  expires?: Maybe<Scalars['DateTime']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerificationTokenMaxOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenMinAggregate = {
  __typename?: 'VerificationTokenMinAggregate';
  expires?: Maybe<Scalars['DateTime']['output']>;
  identifier?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type VerificationTokenMinOrderByAggregateInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenOrderByWithAggregationInput = {
  _count?: InputMaybe<VerificationTokenCountOrderByAggregateInput>;
  _max?: InputMaybe<VerificationTokenMaxOrderByAggregateInput>;
  _min?: InputMaybe<VerificationTokenMinOrderByAggregateInput>;
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export type VerificationTokenOrderByWithRelationInput = {
  expires?: InputMaybe<SortOrder>;
  identifier?: InputMaybe<SortOrder>;
  token?: InputMaybe<SortOrder>;
};

export enum VerificationTokenScalarFieldEnum {
  Expires = 'expires',
  Identifier = 'identifier',
  Token = 'token'
}

export type VerificationTokenScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<VerificationTokenScalarWhereWithAggregatesInput>>;
  expires?: InputMaybe<DateTimeWithAggregatesFilter>;
  identifier?: InputMaybe<StringWithAggregatesFilter>;
  token?: InputMaybe<StringWithAggregatesFilter>;
};

export type VerificationTokenUpdateInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenUpdateManyMutationInput = {
  expires?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  identifier?: InputMaybe<StringFieldUpdateOperationsInput>;
  token?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type VerificationTokenWhereInput = {
  AND?: InputMaybe<Array<VerificationTokenWhereInput>>;
  NOT?: InputMaybe<Array<VerificationTokenWhereInput>>;
  OR?: InputMaybe<Array<VerificationTokenWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  identifier?: InputMaybe<StringFilter>;
  token?: InputMaybe<StringFilter>;
};

export type VerificationTokenWhereUniqueInput = {
  AND?: InputMaybe<Array<VerificationTokenWhereInput>>;
  NOT?: InputMaybe<Array<VerificationTokenWhereInput>>;
  OR?: InputMaybe<Array<VerificationTokenWhereInput>>;
  expires?: InputMaybe<DateTimeFilter>;
  identifier?: InputMaybe<StringFilter>;
  identifier_token?: InputMaybe<VerificationTokenIdentifierTokenCompoundUniqueInput>;
  token?: InputMaybe<Scalars['String']['input']>;
};

export type DashboardDataQueryVariables = Exact<{ [key: string]: never; }>;


export type DashboardDataQuery = { __typename?: 'Query', rounds: Array<{ __typename?: 'Round', id: string, epoch: number, closePrice: any, lockPrice: any }>, topTraders: Array<{ __typename?: 'User', id: string, image?: string | null, username?: string | null, address?: string | null, stats?: { __typename?: 'UserStats', netSTETH: any, winRate: any, totalBetsClaimed: number, totalBets: number } | null }> };

export type ShareDataQueryVariables = Exact<{ [key: string]: never; }>;


export type ShareDataQuery = { __typename?: 'Query', me: Array<{ __typename?: 'Share', id: string, isBuy: boolean, shareAmount: any, stethAmount: any, createdAt: any, subject: { __typename?: 'User', id: string, address?: string | null, image?: string | null }, trader: { __typename?: 'User', id: string, address?: string | null, image?: string | null } }>, holders: Array<{ __typename?: 'Share', id: string, isBuy: boolean, shareAmount: any, stethAmount: any, createdAt: any, subject: { __typename?: 'User', id: string, address?: string | null, image?: string | null }, trader: { __typename?: 'User', id: string, address?: string | null, image?: string | null } }>, global: Array<{ __typename?: 'Share', id: string, isBuy: boolean, shareAmount: any, stethAmount: any, createdAt: any, subject: { __typename?: 'User', id: string, address?: string | null, image?: string | null }, trader: { __typename?: 'User', id: string, address?: string | null, image?: string | null } }> };

export type PortfolioDataQueryVariables = Exact<{
  address?: InputMaybe<Scalars['String']['input']>;
}>;


export type PortfolioDataQuery = { __typename?: 'Query', portfolio?: { __typename?: 'User', id: string, username?: string | null, image?: string | null, address?: string | null, stats?: { __typename?: 'UserStats', id: string, lastTransactionBlock: number, totalBets: number, totalBetsBull: number, totalBetsBear: number, totalSTETH: any, totalSTETHBull: any, totalSTETHBear: any, totalBetsClaimed: number, totalSTETHClaimed: any, winRate: any, averageSTETH: any, netSTETH: any, totalSharesHeld: number, totalShareHolders: number, totalRewards: number, shareValue: any, rank: number, points: number } | null } | null, shares: Array<{ __typename?: 'Share', id: string, isBuy: boolean, shareAmount: any, stethAmount: any, createdAt: any, subject: { __typename?: 'User', id: string, address?: string | null, image?: string | null }, trader: { __typename?: 'User', id: string, address?: string | null, image?: string | null } }>, bets: Array<{ __typename?: 'Bet', id: string, position: BetPosition, round: { __typename?: 'Round', id: string, epoch: number }, user: { __typename?: 'User', id: string, stats?: { __typename?: 'UserStats', id: string, netSTETH: any } | null } }>, holders: Array<{ __typename?: 'Share', id: string, isBuy: boolean, shareAmount: any, stethAmount: any, createdAt: any, subject: { __typename?: 'User', id: string, address?: string | null, image?: string | null }, trader: { __typename?: 'User', id: string, address?: string | null, image?: string | null } }>, holding: Array<{ __typename?: 'Share', id: string, isBuy: boolean, shareAmount: any, stethAmount: any, createdAt: any, subject: { __typename?: 'User', id: string, address?: string | null, image?: string | null }, trader: { __typename?: 'User', id: string, address?: string | null, image?: string | null } }>, rewards: Array<{ __typename?: 'Reward', id: string, amount: any, createdAt: any, user: { __typename?: 'User', id: string, image?: string | null } }> };

export type ReferralDataQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type ReferralDataQuery = { __typename?: 'Query', referrals: Array<{ __typename?: 'Referral', id: string, used: boolean, referralCode: string }> };


export const DashboardDataDocument = gql`
    query DashboardData {
  rounds(take: 10) {
    id
    epoch
    closePrice
    lockPrice
  }
  topTraders: users(take: 12) {
    id
    image
    username
    address
    stats {
      netSTETH
      winRate
      totalBetsClaimed
      totalBets
    }
  }
}
    `;

/**
 * __useDashboardDataQuery__
 *
 * To run a query within a React component, call `useDashboardDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useDashboardDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDashboardDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useDashboardDataQuery(baseOptions?: Apollo.QueryHookOptions<DashboardDataQuery, DashboardDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DashboardDataQuery, DashboardDataQueryVariables>(DashboardDataDocument, options);
      }
export function useDashboardDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DashboardDataQuery, DashboardDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DashboardDataQuery, DashboardDataQueryVariables>(DashboardDataDocument, options);
        }
export type DashboardDataQueryHookResult = ReturnType<typeof useDashboardDataQuery>;
export type DashboardDataLazyQueryHookResult = ReturnType<typeof useDashboardDataLazyQuery>;
export type DashboardDataQueryResult = Apollo.QueryResult<DashboardDataQuery, DashboardDataQueryVariables>;
export const ShareDataDocument = gql`
    query ShareData {
  me: shares(take: 10) {
    id
    isBuy
    shareAmount
    stethAmount
    createdAt
    subject {
      id
      address
      image
    }
    trader {
      id
      address
      image
    }
  }
  holders: shares(take: 10) {
    id
    isBuy
    shareAmount
    stethAmount
    createdAt
    subject {
      id
      address
      image
    }
    trader {
      id
      address
      image
    }
  }
  global: shares(take: 10) {
    id
    isBuy
    shareAmount
    stethAmount
    createdAt
    subject {
      id
      address
      image
    }
    trader {
      id
      address
      image
    }
  }
}
    `;

/**
 * __useShareDataQuery__
 *
 * To run a query within a React component, call `useShareDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useShareDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useShareDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useShareDataQuery(baseOptions?: Apollo.QueryHookOptions<ShareDataQuery, ShareDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ShareDataQuery, ShareDataQueryVariables>(ShareDataDocument, options);
      }
export function useShareDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ShareDataQuery, ShareDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ShareDataQuery, ShareDataQueryVariables>(ShareDataDocument, options);
        }
export type ShareDataQueryHookResult = ReturnType<typeof useShareDataQuery>;
export type ShareDataLazyQueryHookResult = ReturnType<typeof useShareDataLazyQuery>;
export type ShareDataQueryResult = Apollo.QueryResult<ShareDataQuery, ShareDataQueryVariables>;
export const PortfolioDataDocument = gql`
    query PortfolioData($address: String) {
  portfolio: user(where: {address: $address}) {
    id
    username
    image
    address
    stats {
      id
      lastTransactionBlock
      totalBets
      totalBetsBull
      totalBetsBear
      totalSTETH
      totalSTETHBull
      totalSTETHBear
      totalBetsClaimed
      totalSTETHClaimed
      winRate
      averageSTETH
      netSTETH
      totalSharesHeld
      totalShareHolders
      totalRewards
      shareValue
      rank
      points
    }
  }
  shares(take: 10) {
    id
    isBuy
    shareAmount
    stethAmount
    createdAt
    subject {
      id
      address
      image
    }
    trader {
      id
      address
      image
    }
  }
  bets(take: 10) {
    id
    position
    round {
      id
      epoch
    }
    user {
      id
      stats {
        id
        netSTETH
      }
    }
  }
  holders: shares(take: 10) {
    id
    isBuy
    shareAmount
    stethAmount
    createdAt
    subject {
      id
      address
      image
    }
    trader {
      id
      address
      image
    }
  }
  holding: shares(take: 10, orderBy: {createdAt: desc}) {
    id
    isBuy
    shareAmount
    stethAmount
    createdAt
    subject {
      id
      address
      image
    }
    trader {
      id
      address
      image
    }
  }
  rewards {
    id
    amount
    createdAt
    user {
      id
      image
    }
  }
}
    `;

/**
 * __usePortfolioDataQuery__
 *
 * To run a query within a React component, call `usePortfolioDataQuery` and pass it any options that fit your needs.
 * When your component renders, `usePortfolioDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePortfolioDataQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function usePortfolioDataQuery(baseOptions?: Apollo.QueryHookOptions<PortfolioDataQuery, PortfolioDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PortfolioDataQuery, PortfolioDataQueryVariables>(PortfolioDataDocument, options);
      }
export function usePortfolioDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PortfolioDataQuery, PortfolioDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PortfolioDataQuery, PortfolioDataQueryVariables>(PortfolioDataDocument, options);
        }
export type PortfolioDataQueryHookResult = ReturnType<typeof usePortfolioDataQuery>;
export type PortfolioDataLazyQueryHookResult = ReturnType<typeof usePortfolioDataLazyQuery>;
export type PortfolioDataQueryResult = Apollo.QueryResult<PortfolioDataQuery, PortfolioDataQueryVariables>;
export const ReferralDataDocument = gql`
    query ReferralData($userId: String) {
  referrals(where: {userId: {equals: $userId}}) {
    id
    used
    referralCode
  }
}
    `;

/**
 * __useReferralDataQuery__
 *
 * To run a query within a React component, call `useReferralDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useReferralDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReferralDataQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useReferralDataQuery(baseOptions?: Apollo.QueryHookOptions<ReferralDataQuery, ReferralDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReferralDataQuery, ReferralDataQueryVariables>(ReferralDataDocument, options);
      }
export function useReferralDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReferralDataQuery, ReferralDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReferralDataQuery, ReferralDataQueryVariables>(ReferralDataDocument, options);
        }
export type ReferralDataQueryHookResult = ReturnType<typeof useReferralDataQuery>;
export type ReferralDataLazyQueryHookResult = ReturnType<typeof useReferralDataLazyQuery>;
export type ReferralDataQueryResult = Apollo.QueryResult<ReferralDataQuery, ReferralDataQueryVariables>;