import { Genre } from "../../entity/Genre";
import { Arg, Query, Resolver } from "type-graphql";

@Resolver()
export class GenreQuery {
  @Query(() => [Genre])
  async genres(): Promise<Genre[]> {
    return await Genre.find({ relations: ["movies", "movies.genres"] });
  }

  @Query(() => Genre, { nullable: true })
  async genre(@Arg("name") name: string): Promise<Genre | undefined> {
    const genre = await Genre.findOne(name, {
      relations: ["movies", "movies.genres"],
    });

    if (!genre) {
      return undefined;
    }

    return genre;
  }
}
