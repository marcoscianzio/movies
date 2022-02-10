"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const actor_1 = require("./mutations/actor");
const auth_1 = require("./mutations/auth");
const genre_1 = require("./mutations/genre");
const movie_1 = require("./mutations/movie");
const actor_2 = require("./queries/actor");
const auth_2 = require("./queries/auth");
const genre_2 = require("./queries/genre");
const movie_2 = require("./queries/movie");
const resolvers = [
    auth_2.AuthQueries,
    auth_1.AuthMutations,
    actor_1.ActorMutation,
    actor_2.ActorQuery,
    genre_1.GenreMutation,
    genre_2.GenreQuery,
    movie_1.MovieMutation,
    movie_2.MovieQuery
];
exports.schema = type_graphql_1.buildSchema({
    resolvers,
    validate: false,
});
//# sourceMappingURL=index.js.map