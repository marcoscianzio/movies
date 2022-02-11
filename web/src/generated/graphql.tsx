import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Actor = {
  __typename?: 'Actor';
  createdAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  imageURL: Scalars['String'];
  lastName: Scalars['String'];
  movieToActor?: Maybe<Array<MovieToActor>>;
  updatedAt: Scalars['DateTime'];
};

export type ActorMovieInput = {
  actorId: Scalars['Int'];
  role: Scalars['String'];
};

export type CreateMovieInput = {
  actors: Array<ActorMovieInput>;
  budget: Scalars['Int'];
  description: Scalars['String'];
  duration: Scalars['Int'];
  genres: Array<GenreMovieInput>;
  imageURL: Scalars['String'];
  rating: Scalars['Int'];
  realeseDate: Scalars['DateTime'];
  tagline: Scalars['String'];
  title: Scalars['String'];
  votes: Scalars['Int'];
};

export type Genre = {
  __typename?: 'Genre';
  movies?: Maybe<Array<Movie>>;
  name: Scalars['String'];
};

export type GenreMovieInput = {
  name: Scalars['String'];
};

export type Movie = {
  __typename?: 'Movie';
  budget: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  duration: Scalars['Int'];
  genres: Array<Genre>;
  id: Scalars['Int'];
  imageURL: Scalars['String'];
  movieToActor?: Maybe<Array<MovieToActor>>;
  rating: Scalars['Int'];
  realeseDate: Scalars['String'];
  tagline: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  votes: Scalars['Int'];
};

export type MovieToActor = {
  __typename?: 'MovieToActor';
  actor: Actor;
  movie: Movie;
  role: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  createActor: Actor;
  createGenre: Genre;
  createMovie: Movie;
  deleteActor: Scalars['Boolean'];
  deleteGenre: Scalars['Boolean'];
  deleteMovie: Scalars['Boolean'];
  forgotPassword: Scalars['Boolean'];
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
  updateActor?: Maybe<Actor>;
  updateGenre?: Maybe<Genre>;
  updateMovie?: Maybe<Movie>;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreateActorArgs = {
  firstName: Scalars['String'];
  imageURL: Scalars['String'];
  lastName: Scalars['String'];
};


export type MutationCreateGenreArgs = {
  name: Scalars['String'];
};


export type MutationCreateMovieArgs = {
  values: CreateMovieInput;
};


export type MutationDeleteActorArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteGenreArgs = {
  name: Scalars['String'];
};


export type MutationDeleteMovieArgs = {
  id: Scalars['Float'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UsernamePassword;
};


export type MutationUpdateActorArgs = {
  id: Scalars['Float'];
  values: UpdateActorInput;
};


export type MutationUpdateGenreArgs = {
  name: Scalars['String'];
  newName: Scalars['String'];
};


export type MutationUpdateMovieArgs = {
  id: Scalars['Float'];
  newActors?: InputMaybe<NewActors>;
  values?: InputMaybe<UpdateMovieInput>;
};

export type PathError = {
  __typename?: 'PathError';
  message: Scalars['String'];
  path: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  Me?: Maybe<User>;
  actor?: Maybe<Actor>;
  actors: Array<Actor>;
  genre?: Maybe<Genre>;
  genres: Array<Genre>;
  movie: Movie;
  movies: Array<Movie>;
};


export type QueryActorArgs = {
  id: Scalars['Int'];
};


export type QueryGenreArgs = {
  name: Scalars['String'];
};


export type QueryMovieArgs = {
  id: Scalars['Int'];
};

export type UpdateActorInput = {
  firstName?: InputMaybe<Scalars['String']>;
  imageURL?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
};

export type UpdateMovieInput = {
  budget?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  duration?: InputMaybe<Scalars['Int']>;
  imageURL?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['Int']>;
  realeseDate?: InputMaybe<Scalars['String']>;
  tagline?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  votes?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Int'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<PathError>>;
  user?: Maybe<User>;
};

export type UsernamePassword = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type NewActors = {
  actors?: InputMaybe<Array<ActorMovieInput>>;
};

export type MovieQueryVariables = Exact<{
  movieId: Scalars['Int'];
}>;


export type MovieQuery = { __typename?: 'Query', movie: { __typename?: 'Movie', id: number, title: string, tagline: string, description: string, rating: number, votes: number, realeseDate: string, duration: number, budget: number, createdAt: any, updatedAt: any, imageURL: string, genres: Array<{ __typename?: 'Genre', name: string }>, movieToActor?: Array<{ __typename?: 'MovieToActor', role: string, actor: { __typename?: 'Actor', id: number, firstName: string, lastName: string } }> | null } };

export type MoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type MoviesQuery = { __typename?: 'Query', movies: Array<{ __typename?: 'Movie', id: number, title: string, imageURL: string, rating: number }> };


export const MovieDocument = gql`
    query Movie($movieId: Int!) {
  movie(id: $movieId) {
    id
    title
    tagline
    description
    rating
    votes
    realeseDate
    duration
    budget
    genres {
      name
    }
    createdAt
    updatedAt
    movieToActor {
      role
      actor {
        id
        firstName
        lastName
      }
    }
    imageURL
  }
}
    `;

/**
 * __useMovieQuery__
 *
 * To run a query within a React component, call `useMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useMovieQuery(baseOptions: Apollo.QueryHookOptions<MovieQuery, MovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MovieQuery, MovieQueryVariables>(MovieDocument, options);
      }
export function useMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovieQuery, MovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MovieQuery, MovieQueryVariables>(MovieDocument, options);
        }
export type MovieQueryHookResult = ReturnType<typeof useMovieQuery>;
export type MovieLazyQueryHookResult = ReturnType<typeof useMovieLazyQuery>;
export type MovieQueryResult = Apollo.QueryResult<MovieQuery, MovieQueryVariables>;
export const MoviesDocument = gql`
    query Movies {
  movies {
    id
    title
    imageURL
    rating
  }
}
    `;

/**
 * __useMoviesQuery__
 *
 * To run a query within a React component, call `useMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useMoviesQuery(baseOptions?: Apollo.QueryHookOptions<MoviesQuery, MoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MoviesQuery, MoviesQueryVariables>(MoviesDocument, options);
      }
export function useMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoviesQuery, MoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MoviesQuery, MoviesQueryVariables>(MoviesDocument, options);
        }
export type MoviesQueryHookResult = ReturnType<typeof useMoviesQuery>;
export type MoviesLazyQueryHookResult = ReturnType<typeof useMoviesLazyQuery>;
export type MoviesQueryResult = Apollo.QueryResult<MoviesQuery, MoviesQueryVariables>;