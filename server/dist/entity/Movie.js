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
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Genre_1 = require("./Genre");
const MovieToActor_1 = require("./MovieToActor");
let Movie = class Movie extends typeorm_1.BaseEntity {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Movie.prototype, "id", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Movie.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Movie.prototype, "imageURL", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Movie.prototype, "tagline", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ type: "text" }),
    __metadata("design:type", String)
], Movie.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Movie.prototype, "rating", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Movie.prototype, "votes", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column({ type: "date" }),
    __metadata("design:type", String)
], Movie.prototype, "realeseDate", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Movie.prototype, "duration", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Movie.prototype, "budget", void 0);
__decorate([
    type_graphql_1.Field(() => [Genre_1.Genre]),
    typeorm_1.ManyToMany(() => Genre_1.Genre, (genre) => genre.movies, {
        cascade: true,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    typeorm_1.JoinTable(),
    __metadata("design:type", Array)
], Movie.prototype, "genres", void 0);
__decorate([
    type_graphql_1.Field(() => [MovieToActor_1.MovieToActor], { nullable: true }),
    typeorm_1.OneToMany(() => MovieToActor_1.MovieToActor, (movieToActor) => movieToActor.movie, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Array)
], Movie.prototype, "movieToActor", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    typeorm_1.Column(),
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Movie.prototype, "createdAt", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    typeorm_1.Column(),
    typeorm_1.UpdateDateColumn(),
    __metadata("design:type", Date)
], Movie.prototype, "updatedAt", void 0);
Movie = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], Movie);
exports.Movie = Movie;
//# sourceMappingURL=Movie.js.map