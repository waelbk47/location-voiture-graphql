import { GraphQLList } from "graphql"
import {blogType}from "../TypeDefs/Blog"
import {Blogs}from '../../Entities/Blogs'

export const GET_ALL_BLOGS ={
    type:  new GraphQLList(blogType),
    resolve(){
        return Blogs.find();
    },
    
}