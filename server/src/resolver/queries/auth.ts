import { User } from "../../entity/user";
import { MyContext } from "../../types";
import { Ctx, Query, Resolver, Root } from "type-graphql";

@Resolver()
export class AuthQueries {
  email(@Root() user: User, @Ctx() { req }: MyContext) {
    if (req.session.userId === user.id) {
      return user.email;
    }

    return "";
  }

  @Query(() => User, { nullable: true })
  async Me(@Ctx() { req }: MyContext): Promise<User | undefined> {
    if (!req.session.userId) {
      return undefined;
    } else {
      const user = await User.findOne(req.session.userId);

      return user;
    }
  }
}
