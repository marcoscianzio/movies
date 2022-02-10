import { buildSchema } from "type-graphql";
import { ActorMutation } from "./mutations/actor";
import { AuthMutations } from "./mutations/auth";
import { GenreMutation } from "./mutations/genre";
import { MovieMutation } from "./mutations/movie";
import { ActorQuery } from "./queries/actor";
import { AuthQueries } from "./queries/auth";
import { GenreQuery } from "./queries/genre";
import { MovieQuery } from "./queries/movie";

const resolvers = [
  AuthQueries,
  AuthMutations,
  ActorMutation,
  ActorQuery,
  GenreMutation,
  GenreQuery,
  MovieMutation,
  MovieQuery
] as const;

export const schema = buildSchema({
  resolvers,
  validate: false,
});
