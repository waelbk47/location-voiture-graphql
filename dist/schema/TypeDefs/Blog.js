"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogType = void 0;
const graphql_1 = require("graphql");
exports.blogType = new graphql_1.GraphQLObjectType({
    name: "blog",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        title: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        password: { type: graphql_1.GraphQLString },
        userId: { type: graphql_1.GraphQLID },
    })
});
