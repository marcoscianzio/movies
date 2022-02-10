import { Field, Int, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { MovieToActor } from "./MovieToActor";

@ObjectType()
@Entity()
export class Actor extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field(() => String)
  @Column()
  imageURL: string;

  @Field(() => [MovieToActor], { nullable: true })
  @OneToMany(() => MovieToActor, (movieToActor) => movieToActor.actor, {
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
