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
let GenreMovieInput = class GenreMovieInput {
};
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], GenreMovieInput.prototype, "name", void 0);
GenreMovieInput = __decorate([
    type_graphql_1.InputType()
], GenreMovieInput);
let ActorMovieInput = class ActorMovieInput {
};
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], ActorMovieInput.prototype, "actorId", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], ActorMovieInput.prototype, "role", void 0);
ActorMovieInput = __decorate([
    type_graphql_1.InputType()
], ActorMovieInput);
let CreateMovieInput = class CreateMovieInput {
};
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], CreateMovieInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], CreateMovieInput.prototype, "tagline", void 0);
__decorate([
    type_graphql_1.Field(() => String),
    __metadata("design:type", String)
], CreateMovieInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], CreateMovieInput.prototype, "rating", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], CreateMovieInput.prototype, "votes", void 0);
__decorate([
    type_graphql_1.Field(() => Date),
    __metadata("design:type", Date)
], CreateMovieInput.prototype, "realeseDate", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], CreateMovieInput.prototype, "duration", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int),
    __metadata("design:type", Number)
], CreateMovieInput.prototype, "budget", void 0);
__decorate([
    type_graphql_1.Field(() => [GenreMovieInput]),
    __metadata("design:type", Array)
], CreateMovieInput.prototype, "genres", void 0);
__decorate([
    type_graphql_1.Field(() => [ActorMovieInput]),
    __metadata("design:type", Array)
], CreateMovieInput.prototype, "actors", void 0);
CreateMovieInput = __decorate([
    type_graphql_1.InputType()
], CreateMovieInput);
exports.CreateMovieInput = CreateMovieInput;
let UpdateMovieInput = class UpdateMovieInput {
};
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateMovieInput.prototype, "title", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateMovieInput.prototype, "tagline", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateMovieInput.prototype, "description", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateMovieInput.prototype, "rating", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateMovieInput.prototype, "votes", void 0);
__decorate([
    type_graphql_1.Field(() => String, { nullable: true }),
    __metadata("design:type", String)
], UpdateMovieInput.prototype, "realeseDate", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateMovieInput.prototype, "duration", void 0);
__decorate([
    type_graphql_1.Field(() => type_graphql_1.Int, { nullable: true }),
    __metadata("design:type", Number)
], UpdateMovieInput.prototype, "budget", void 0);
UpdateMovieInput = __decorate([
    type_graphql_1.InputType()
], UpdateMovieInput);
exports.UpdateMovieInput = UpdateMovieInput;
let newActors = class newActors {
};
__decorate([
    type_graphql_1.Field(() => [ActorMovieInput], { nullable: true }),
    __metadata("design:type", Array)
], newActors.prototype, "actors", void 0);
newActors = __decorate([
    type_graphql_1.InputType()
], newActors);
exports.newActors = newActors;
//# sourceMappingURL=Movie.js.map