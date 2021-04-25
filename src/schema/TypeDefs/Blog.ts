import {GraphQLObjectType, GraphQLID,GraphQLString} from 'graphql'

export const blogType = new GraphQLObjectType({
    name:"blog",
    fields:()=>({
        id:{type: GraphQLID},
        title:{type:GraphQLString},
        description:{type:GraphQLString},
        password:{type:GraphQLString},
        userId:{type: GraphQLID},

    })
})
