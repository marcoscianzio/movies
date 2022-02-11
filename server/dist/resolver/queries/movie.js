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
let MovieQuery = class MovieQuery {
    async movies() {
        return await Movie_1.Movie.find({ relations: ["genres"] });
    }
    async movie(id) {
        const movie = Movie_1.Movie.findOne(id, {
            relations: [
                "genres",
                "genres.movies",
                "movieToActor",
                "movieToActor.actor",
            ],
        });
        if (!movie) {
            return undefined;
        }
        return movie;
    }
};
__decorate([
    type_graphql_1.Query(() => [Movie_1.Movie]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MovieQuery.prototype, "movies", null);
__decorate([
    type_graphql_1.Query(() => Movie_1.Movie),
    __param(0, type_graphql_1.Arg("id", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], MovieQuery.prototype, "movie", null);
MovieQuery = __decorate([
    type_graphql_1.Resolver()
], MovieQuery);
exports.MovieQuery = MovieQuery;
//# sourceMappingURL=movie.js.map