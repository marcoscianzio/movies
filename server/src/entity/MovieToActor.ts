import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Actor } from "./Actor";
import { Movie } from "./Movie";

@ObjectType()
@Entity()
export class MovieToActor extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  movieId: number;

  @Column()
  actorId: number;

  @Field(() => String)
  @Column()
  role: string;

  @Field(() => Movie)
  @ManyToOne(() => Movie, (movie) => movie.movieToActor, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  movie: Movie;

  @Field(() => Actor)
  @ManyToOne(() => Actor, (actor) => actor.movieToActor, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  actor: Actor;
}
