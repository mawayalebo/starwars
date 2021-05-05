import * as functions from "firebase-functions";
import { ApolloServer } from "apollo-server-express";
import StarwarsAPI from "./dataSources/starwarsAPI";
import resolvers from "./resolvers";
const express = require("express");
const cors = require("cors");

const app = express();

const typeDefs = require("./schema");


const dataSources = () => ({ starwarsAPI: new StarwarsAPI() })

const server = new ApolloServer({ typeDefs , resolvers, dataSources, playground:false, introspection:true});

server.applyMiddleware({ app, path:"/", cors:true });

/*app.listen({ port: 5001 }, () => {
  console.log(`apollo light folding at ${server.graphqlPath}`);
})*/

exports.graphql = functions.https.onRequest(app);
