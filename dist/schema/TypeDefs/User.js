"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserType = void 0;
const graphql_1 = require("graphql");
const Blogs_1 = require("../../Entities/Blogs");
const Blog_1 = require("./Blog");
exports.UserType = new graphql_1.GraphQLObjectType({
    name: "user",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        username: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
        blog: {
            type: graphql_1.GraphQLList(Blog_1.blogType),
            resolve(user) {
                return Blogs_1.Blogs.find({
                    where: {
                        userId: user.id
                    }
                });
            }
        }
    })
});
