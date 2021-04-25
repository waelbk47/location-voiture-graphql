"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_BLOGS = void 0;
const graphql_1 = require("graphql");
const Blog_1 = require("../TypeDefs/Blog");
const Blogs_1 = require("../../Entities/Blogs");
exports.GET_ALL_BLOGS = {
    type: new graphql_1.GraphQLList(Blog_1.blogType),
    resolve() {
        return Blogs_1.Blogs.find();
    },
};
