"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const user_1 = require("./Queries/user");
const user_2 = require("./Mutations/user");
const blog_1 = require("./Queries/blog");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers: user_1.GET_ALL_USERS,
        getAllBlogs: blog_1.GET_ALL_BLOGS
    },
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser: user_2.CREATE_USER,
        deleteUser: user_2.DELETE_USER,
        updatePassword: user_2.UPDATE_PASSWORD
    }
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
