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
const Actor_1 = require("../../entity/Actor");
const type_graphql_1 = require("type-graphql");
const Actor_2 = require("../../inputs/Actor");
let ActorMutation = class ActorMutation {
    async createActor(firstName, lastName) {
        return await Actor_1.Actor.create({ firstName, lastName }).save();
    }
    async deleteActor(id) {
        const actor = await Actor_1.Actor.findOne(id);
        if (!actor) {
            return false;
        }
        await Actor_1.Actor.delete(id);
        return true;
    }
    async updateActor(id, values) {
        const actor = Actor_1.Actor.findOne(id);
        if (!actor) {
            return undefined;
        }
        await Actor_1.Actor.update(id, values);
        return await Actor_1.Actor.findOne(id, {
            relations: ["movieToActor", "movieToActor.movie"],
        });
    }
};
__decorate([
    type_graphql_1.Mutation(() => Actor_1.Actor),
    __param(0, type_graphql_1.Arg("firstName")),
    __param(1, type_graphql_1.Arg("lastName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ActorMutation.prototype, "createActor", null);
__decorate([
    type_graphql_1.Mutation(() => Boolean),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ActorMutation.prototype, "deleteActor", null);
__decorate([
    type_graphql_1.Mutation(() => Actor_1.Actor, { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __param(1, type_graphql_1.Arg("values")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Actor_2.UpdateActorInput]),
    __metadata("design:returntype", Promise)
], ActorMutation.prototype, "updateActor", null);
ActorMutation = __decorate([
    type_graphql_1.Resolver()
], ActorMutation);
exports.ActorMutation = ActorMutation;
//# sourceMappingURL=actor.js.map