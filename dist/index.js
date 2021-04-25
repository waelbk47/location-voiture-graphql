"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const cors_1 = __importDefault(require("cors"));
const schema_1 = require("./schema");
const typeorm_1 = require("typeorm");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield typeorm_1.createConnection({
        type: "mysql",
        database: "graphqlcrud",
        username: "root",
        password: "",
        logging: true,
        synchronize: true,
        entities: ["src/Entities/**/*.ts"],
    });
    const app = express_1.default();
    app.use(cors_1.default());
    app.use(express_1.default.json());
    app.use("/graphql", express_graphql_1.graphqlHTTP({
        schema: schema_1.schema,
        graphiql: true
    }));
    app.listen(3001, () => {
        console.log("server is running on port 3001");
    });
});
main().catch((err) => {
    console.log(err);
});
