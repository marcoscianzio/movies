import { Actor } from "../../entity/Actor";
import { Arg, Query, Resolver } from "type-graphql";

@Resolver()
export class ActorQuery {
  @Query(() => [Actor])
  async actors(): Promise<Actor[]> {
    return await Actor.find({
      relations: ["movieToActor", "movieToActor.movie"],
    });
  }

  @Query(() => Actor, { nullable: true })
  async actor(@Arg("id") id: string): Promise<Actor | undefined> {
    const actor = await Actor.findOne(id, {
      relations: ["movieToActor", "movieToActor.movie"],
    });

    if (!actor) {
      return undefined;
    }

    return actor;
  }
}
