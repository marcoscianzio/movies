import { Genre } from "../../entity/Genre";
import { Arg, Mutation, Resolver } from "type-graphql";

@Resolver()
export class GenreMutation {
  @Mutation(() => Genre)
  async createGenre(@Arg("name") name: string): Promise<Genre> {
    return await Genre.create({ name }).save();
  }

  @Mutation(() => Boolean)
  async deleteGenre(@Arg("name") name: string): Promise<Boolean> {
    const genre = Genre.findOne(name);

    if (!genre) {
      return false;
    }

    await Genre.delete(name);

    return true;
  }

  @Mutation(() => Genre, { nullable: true })
  async updateGenre(
    @Arg("name") name: string,
    @Arg("newName") newName: string
  ): Promise<Genre | undefined> {
    const genre = Genre.findOne(name);

    if (!genre) {
      return undefined;
    }

    await Genre.update(name, { name: newName });

    return await Genre.findOne(newName, {
      relations: ["movies", "movies.genres"],
    });
  }
}
