export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AnalyticsEvent = {
  __typename?: 'AnalyticsEvent';
  data?: Maybe<Scalars['String']['output']>;
  event: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  ip: Scalars['String']['output'];
  referrer?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
  userAgent: Scalars['String']['output'];
  userId?: Maybe<Scalars['Float']['output']>;
  uuid: Scalars['String']['output'];
};

export type CreateAnalyticsInput = {
  data: Scalars['String']['input'];
  event: Scalars['String']['input'];
  ip: Scalars['String']['input'];
  path: Scalars['String']['input'];
  referrer?: InputMaybe<Scalars['String']['input']>;
  userAgent: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['Float']['input']>;
  uuid: Scalars['String']['input'];
};

export type CreateProjectInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
  userId: Scalars['Float']['input'];
};

export type CreateUserInput = {
  email: Scalars['String']['input'];
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAnalyticsEvent: AnalyticsEvent;
  createProject: Project;
  getNewTokens: NewTokensResponse;
  logout: Scalars['Boolean']['output'];
  removeProject: Project;
  signIn: SignInResponse;
  signUp: SignUpResponse;
  updateProject: Project;
};


export type MutationCreateAnalyticsEventArgs = {
  input: CreateAnalyticsInput;
};


export type MutationCreateProjectArgs = {
  createProjectInput: CreateProjectInput;
};


export type MutationLogoutArgs = {
  id: Scalars['Float']['input'];
};


export type MutationRemoveProjectArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSignInArgs = {
  input: SignInInput;
};


export type MutationSignUpArgs = {
  input: CreateUserInput;
};


export type MutationUpdateProjectArgs = {
  updateProjectInput: UpdateProjectInput;
};

export type NewTokensResponse = {
  __typename?: 'NewTokensResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
};

export type Profile = {
  __typename?: 'Profile';
  bio: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  user: User;
  userId: Scalars['Float']['output'];
};

export type Project = {
  __typename?: 'Project';
  createdAt: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Float']['output'];
  imageUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  user: User;
  userId: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  events: Array<AnalyticsEvent>;
  project: Project;
  projects: Array<Project>;
  user: User;
  users: Array<User>;
};


export type QueryProjectArgs = {
  id: Scalars['Int']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Float']['input'];
};

/** User roles */
export enum Role {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export type SignInInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignInResponse = {
  __typename?: 'SignInResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type SignUpResponse = {
  __typename?: 'SignUpResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: User;
};

export type UpdateProjectInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Int']['input'];
  title: Scalars['String']['input'];
  userId?: InputMaybe<Scalars['Float']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  hashedPassword: Scalars['String']['output'];
  hashedRefreshToken?: Maybe<Scalars['String']['output']>;
  id: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  profile?: Maybe<Profile>;
  projects?: Maybe<Array<Maybe<Project>>>;
  role: Role;
  updatedAt: Scalars['String']['output'];
};

export type GetAllEventsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEventsQuery = { __typename?: 'Query', events: Array<{ __typename?: 'AnalyticsEvent', id: number, event: string, uuid: string }> };

export type CreateAnalyticsEventMutationVariables = Exact<{
  input: CreateAnalyticsInput;
}>;


export type CreateAnalyticsEventMutation = { __typename?: 'Mutation', createAnalyticsEvent: { __typename?: 'AnalyticsEvent', id: number, event: string, uuid: string } };

export type AnalyticsEventFragment = { __typename?: 'AnalyticsEvent', id: number, event: string, uuid: string };
