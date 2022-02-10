import { Actor } from "../../entity/Actor";
import { Arg, Mutation, Resolver } from "type-graphql";
import { UpdateActorInput } from "../../inputs/Actor";

@Resolver()
export class ActorMutation {
  @Mutation(() => Actor)
  async createActor(
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string,
    @Arg("imageURL") imageURL: string
  ): Promise<Actor> {
    return await Actor.create({ firstName, lastName, imageURL }).save();
  }

  @Mutation(() => Boolean)
  async deleteActor(@Arg("id") id: number): Promise<Boolean> {
    const actor = await Actor.findOne(id);

    if (!actor) {
      return false;
    }

    await Actor.delete(id);

    return true;
  }

  @Mutation(() => Actor, { nullable: true })
  async updateActor(
    @Arg("id") id: number,
    @Arg("values") values: UpdateActorInput
  ): Promise<Actor | undefined> {
    const actor = Actor.findOne(id);

    if (!actor) {
      return undefined;
    }

    await Actor.update(id, values);

    return await Actor.findOne(id, {
      relations: ["movieToActor", "movieToActor.movie"],
    });
  }
}
