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

exports.graphql = functions.https.onRequest(app);

