import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Entity,
  ManyToMany,
  PrimaryColumn,
  RelationCount,
} from "typeorm";
import { Movie } from "./Movie";

@ObjectType()
@Entity()
export class Genre extends BaseEntity {
  @Field(() => String)
  @PrimaryColumn()
  name: string;

  @Field(() => [Movie], { nullable: true })
  @ManyToMany(() => Movie, (movie) => movie.genres, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  movies: Movie[];
}
