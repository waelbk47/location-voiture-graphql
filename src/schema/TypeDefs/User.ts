import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
} from "graphql";
import { Blogs } from "../../Entities/Blogs";
import { blogType } from "./Blog";

export const UserType = new GraphQLObjectType({
  name: "user",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
    blog: {
      type: GraphQLList(blogType),
      resolve(user) {
        return Blogs.find({
          where: {
            userId: user.id,
          },
        });
      },
    },
  }),
});
