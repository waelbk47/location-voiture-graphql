import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {GET_ALL_USERS} from "./Queries/user"
import {CREATE_USER, DELETE_USER, UPDATE_PASSWORD} from "./Mutations/user"
import { GET_ALL_BLOGS } from "./Queries/blog";

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
      getAllUsers: GET_ALL_USERS,
      getAllBlogs: GET_ALL_BLOGS
    },
  });

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser : CREATE_USER,
        deleteUser : DELETE_USER,
        updatePassword: UPDATE_PASSWORD
    }
});

export const schema =new GraphQLSchema({
    query: RootQuery ,
    mutation:Mutation
})