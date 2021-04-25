import express from 'express';
import {graphqlHTTP} from 'express-graphql';
import cors from 'cors';
import {schema} from './schema'
import {createConnection} from 'typeorm';

const main = async () => {
await createConnection();
const app = express()

 app.use(cors())    
 app.use(express.json())
 app.use("/graphql",graphqlHTTP({
     schema,
     graphiql:true
 })
 )

app.listen(3001,()=>{
    console.log("server is running on port 3001");
});
};

main().catch((err) => {
    console.log(err);
});
