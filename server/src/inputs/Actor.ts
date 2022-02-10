import { Field, InputType } from "type-graphql";

@InputType()
export class UpdateActorInput {
  @Field(() => String, { nullable: true })
  firstName: string;

  @Field(() => String, { nullable: true })
  lastName: string;
}
