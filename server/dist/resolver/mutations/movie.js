"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const Movie_1 = require("../../entity/Movie");
const type_graphql_1 = require("type-graphql");
const Movie_2 = require("../../inputs/Movie");
const Genre_1 = require("../../entity/Genre");
const typeorm_1 = require("typeorm");
const MovieToActor_1 = require("../../entity/MovieToActor");
let MovieMutation = class MovieMutation {
    async createMovie(values) {
        const movie = new Movie_1.Movie();
        let entityArray = [];
        values.genres.forEach((element) => {
            const genre = new Genre_1.Genre();
            genre.name = element.name;
            entityArray.push(genre);
        });
        movie.genres = entityArray;
        movie.imageURL = values.imageURL;
        movie.title = values.title;
        movie.description = values.description;
        movie.duration = values.duration;
        movie.rating = values.rating;
        movie.realeseDate = movie.realeseDate;
        movie.tagline = movie.tagline;
        movie.votes = movie.votes;
        movie.budget = movie.budget;
        await typeorm_1.getConnection().manager.save(movie);
        values.actors.forEach(async (element) => {
            await MovieToActor_1.MovieToActor.create({
                actorId: element.actorId,
                movieId: movie.id,
                role: element.role,
            }).save();
        });
        return await Movie_1.Movie.findOne({ id: movie.id }, {
            relations: [
                "genres",
                "genres.movies",
                "movieToActor",
                "movieToActor.actor",
            ],
        });
    }
    async deleteMovie(id) {
        const movie = await Movie_1.Movie.findOne(id);
        if (!movie) {
            return false;
        }
        await Movie_1.Movie.delete(id);
        return true;
    }
    async updateMovie(id, values, newActors) {
        const movie = await Movie_1.Movie.findOne(id);
        if (!movie) {
            return undefined;
        }
        values && (await Movie_1.Movie.update(id, values));
        newActors &&
            newActors.actors.forEach(async (element) => {
                await MovieToActor_1.MovieToActor.create({
                    actorId: element.actorId,
                    movieId: id,
                    role: element.role,
                }).save();
            });
        return await Movie_1.Movie.findOne(id, {
            relations: [
                "genres",
                "genres.movies",
                "movieToActor",
                "movieToActor.actor",
            ],
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => Movie_1.Movie),
    __param(0, type_graphql_1.Arg("values")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Movie_2.CreateMovieInput]),
    __metadata("design:returntype", Promise)
], MovieMutation.prototype, "createMovie", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MovieMutation.prototype, "deleteMovie", null);
__decorate([
    type_graphql_1.Mutation(() => Movie_1.Movie, { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __param(1, type_graphql_1.Arg("values", () => Movie_2.UpdateMovieInput, { nullable: true })),
    __param(2, type_graphql_1.Arg("newActors", () => Movie_2.newActors, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Movie_2.UpdateMovieInput,
        Movie_2.newActors]),
    __metadata("design:returntype", Promise)
], MovieMutation.prototype, "updateMovie", null);
MovieMutation = __decorate([
    type_graphql_1.Resolver()
], MovieMutation);
exports.MovieMutation = MovieMutation;
//# sourceMappingURL=movie.js.map