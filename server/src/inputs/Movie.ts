import { Field, InputType, Int } from "type-graphql";

@InputType()
class GenreMovieInput {
  @Field(() => String)
  name: string;
}

@InputType()
class ActorMovieInput {
  @Field(() => Int)
  actorId: number;

  @Field(() => String)
  role: string;
}

@InputType()
export class CreateMovieInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  imageURL: string;

  @Field(() => String)
  tagline: string;

  @Field(() => String)
  description: string;

  @Field(() => Int)
  rating: number;

  @Field(() => Int)
  votes: number;

  @Field(() => String)
  realeseDate: string;

  @Field(() => Int)
  duration: number;

  @Field(() => Int)
  budget: number;

  @Field(() => [GenreMovieInput])
  genres: GenreMovieInput[];

  @Field(() => [ActorMovieInput])
  actors: ActorMovieInput[];
}

@InputType()
export class UpdateMovieInput {
  @Field(() => String, { nullable: true })
  title: string;

  @Field(() => String, { nullable: true })
  imageURL: string;

  @Field(() => String, { nullable: true })
  tagline: string;

  @Field(() => String, { nullable: true })
  description: string;

  @Field(() => Int, { nullable: true })
  rating: number;

  @Field(() => Int, { nullable: true })
  votes: number;

  @Field(() => String, { nullable: true })
  realeseDate: string;

  @Field(() => Int, { nullable: true })
  duration: number;

  @Field(() => Int, { nullable: true })
  budget: number;
}

@InputType()
export class newActors {
  @Field(() => [ActorMovieInput], { nullable: true })
  actors: ActorMovieInput[];
}
