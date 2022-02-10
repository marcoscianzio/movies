import { Movie } from "../../entity/Movie";
import { Arg, Mutation, Resolver } from "type-graphql";
import {
  CreateMovieInput,
  newActors,
  UpdateMovieInput,
} from "../../inputs/Movie";
import { Genre } from "../../entity/Genre";
import { getConnection } from "typeorm";
import { MovieToActor } from "../../entity/MovieToActor";

@Resolver()
export class MovieMutation {
  @Mutation(() => Movie)
  async createMovie(
    @Arg("values") values: CreateMovieInput
  ): Promise<Movie | undefined> {
    const movie = new Movie();

    let entityArray = [] as any;

    values.genres.forEach((element) => {
      const genre = new Genre();

      genre.name = element.name;

      entityArray.push(genre);
    });

    movie.genres = entityArray;
    movie.imageURL = values.imageURL;
    movie.title = values.title;
    movie.description = values.description;
    movie.duration = values.duration;
    movie.rating = values.rating;
    movie.realeseDate = movie.realeseDate;
    movie.tagline = movie.tagline;
    movie.votes = movie.votes;
    movie.budget = movie.budget;

    await getConnection().manager.save(movie);

    values.actors.forEach(async (element: any) => {
      await MovieToActor.create({
        actorId: element.actorId,
        movieId: movie.id,
        role: element.role,
      }).save();
    });

    return await Movie.findOne(
      { id: movie.id },
      {
        relations: [
          "genres",
          "genres.movies",
          "movieToActor",
          "movieToActor.actor",
        ],
      }
    );
  }

  @Mutation(() => Boolean)
  async deleteMovie(@Arg("id") id: number): Promise<Boolean> {
    const movie = await Movie.findOne(id);

    if (!movie) {
      return false;
    }

    await Movie.delete(id);

    return true;
  }

  @Mutation(() => Movie, { nullable: true })
  async updateMovie(
    @Arg("id") id: number,
    @Arg("values", () => UpdateMovieInput, { nullable: true })
    values: UpdateMovieInput,
    @Arg("newActors", () => newActors, { nullable: true })
    newActors: newActors
  ): Promise<Movie | undefined> {
    const movie = await Movie.findOne(id);

    if (!movie) {
      return undefined;
    }

    values && (await Movie.update(id, values));

    newActors &&
      newActors.actors.forEach(async (element: any) => {
        await MovieToActor.create({
          actorId: element.actorId,
          movieId: id,
          role: element.role,
        }).save();
      });

    return await Movie.findOne(id, {
      relations: [
        "genres",
        "genres.movies",
        "movieToActor",
        "movieToActor.actor",
      ],
    });
  }
}
