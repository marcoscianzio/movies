import { Movie } from "../../entity/Movie";
import { Arg, Query, Resolver } from "type-graphql";

@Resolver()
export class MovieQuery {
  @Query(() => [Movie])
  async movies(): Promise<Movie[]> {
    return await Movie.find({ relations: ["genres"] });
  }

  @Query(() => Movie)
  async movie(@Arg("id") id: number): Promise<Movie | undefined> {
    const movie = Movie.findOne(id, {
      relations: ["genres", "genres.movies", "movieToActor", "movieToActor.actor"],
    });

    if (!movie) {
      return undefined;
    }

    return movie;
  }
}
