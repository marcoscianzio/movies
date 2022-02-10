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
const Genre_1 = require("../../entity/Genre");
const type_graphql_1 = require("type-graphql");
let GenreQuery = class GenreQuery {
    async genres() {
        return await Genre_1.Genre.find({ relations: ["movies", "movies.genres"] });
    }
    async genre(name) {
        const genre = await Genre_1.Genre.findOne(name);
        if (!genre) {
            return undefined;
        }
        return genre;
    }
};
__decorate([
    type_graphql_1.Query(() => [Genre_1.Genre]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GenreQuery.prototype, "genres", null);
__decorate([
    type_graphql_1.Query(() => Genre_1.Genre, { nullable: true }),
    __param(0, type_graphql_1.Arg("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenreQuery.prototype, "genre", null);
GenreQuery = __decorate([
    type_graphql_1.Resolver()
], GenreQuery);
exports.GenreQuery = GenreQuery;
//# sourceMappingURL=genre.js.map