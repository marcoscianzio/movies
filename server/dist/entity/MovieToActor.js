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
const Actor_1 = require("./Actor");
const Movie_1 = require("./Movie");
let MovieToActor = class MovieToActor extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], MovieToActor.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MovieToActor.prototype, "movieId", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], MovieToActor.prototype, "actorId", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    typeorm_1.Column(),
    __metadata("design:type", String)
], MovieToActor.prototype, "role", void 0);
__decorate([
    type_graphql_1.Field(() => Movie_1.Movie),
    typeorm_1.ManyToOne(() => Movie_1.Movie, (movie) => movie.movieToActor, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Movie_1.Movie)
], MovieToActor.prototype, "movie", void 0);
__decorate([
    type_graphql_1.Field(() => Actor_1.Actor),
    typeorm_1.ManyToOne(() => Actor_1.Actor, (actor) => actor.movieToActor, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    __metadata("design:type", Actor_1.Actor)
], MovieToActor.prototype, "actor", void 0);
MovieToActor = __decorate([
    type_graphql_1.ObjectType(),
    typeorm_1.Entity()
], MovieToActor);
exports.MovieToActor = MovieToActor;
//# sourceMappingURL=MovieToActor.js.map