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
let GenreMutation = class GenreMutation {
    async createGenre(name) {
        return await Genre_1.Genre.create({ name }).save();
    }
    async deleteGenre(name) {
        const genre = Genre_1.Genre.findOne(name);
        if (!genre) {
            return false;
        }
        await Genre_1.Genre.delete(name);
        return true;
    }
    async updateGenre(name, newName) {
        const genre = Genre_1.Genre.findOne(name);
        if (!genre) {
            return undefined;
        }
        await Genre_1.Genre.update(name, { name: newName });
        return await Genre_1.Genre.findOne(newName, {
            relations: ["movies", "movies.genres"],
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => Genre_1.Genre),
    __param(0, type_graphql_1.Arg("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenreMutation.prototype, "createGenre", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GenreMutation.prototype, "deleteGenre", null);
__decorate([
    type_graphql_1.Mutation(() => Genre_1.Genre, { nullable: true }),
    __param(0, type_graphql_1.Arg("name")),
    __param(1, type_graphql_1.Arg("newName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], GenreMutation.prototype, "updateGenre", null);
GenreMutation = __decorate([
    type_graphql_1.Resolver()
], GenreMutation);
exports.GenreMutation = GenreMutation;
//# sourceMappingURL=genre.js.map