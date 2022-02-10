import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Genre } from "./Genre";
import { MovieToActor } from "./MovieToActor";

@ObjectType()
@Entity()
export class Movie extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  title: string;

  @Field(() => String)
  @Column()
  tagline: string;

  @Field(() => String)
  @Column({ type: "text" })
  description: string;

  @Field(() => Int)
  @Column()
  rating: number;

  @Field(() => Int)
  @Column()
  votes: number;

  @Field(() => String)
  @Column({ type: "date" })
  realeseDate: string;

  @Field(() => Int)
  @Column()
  duration: number;

  @Field(() => Int)
  @Column()
  budget: number;

  @Field(() => [Genre])
  @ManyToMany(() => Genre, (genre) => genre.movies, {
    cascade: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinTable()
  genres: Genre[];

  @Field(() => [MovieToActor], { nullable: true })
  @OneToMany(() => MovieToActor, (movieToActor) => movieToActor.movie, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  movieToActor: MovieToActor[];

  @Field(() => Date)
  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Field(() => Date)
  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
